/**
 * Cloudflare Worker: Decap GitHub OAuth + static blog assets.
 * Callback URL: https://blog.thinknote.pro/api/auth
 * Env: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET
 */

function renderBody(status, content) {
	return `<!doctype html>
<html lang="en">
  <head><meta charset="utf-8" /><title>Authorizing...</title></head>
  <body>
    <script>
      const receiveMessage = (message) => {
        window.opener.postMessage(
          'authorization:github:${status}:${JSON.stringify(content)}',
          message.origin
        );
        window.removeEventListener('message', receiveMessage, false);
      };
      window.addEventListener('message', receiveMessage, false);
      window.opener.postMessage('authorizing:github', '*');
    </script>
  </body>
</html>`;
}

async function handleAuth(request, env) {
	const client_id = env.GITHUB_CLIENT_ID;
	const client_secret = env.GITHUB_CLIENT_SECRET;

	if (!client_id || !client_secret) {
		return new Response('Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET', { status: 500 });
	}

	const url = new URL(request.url);
	const code = url.searchParams.get('code');

	if (code) {
		const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
				'user-agent': 'thinknote-blog-decap-oauth',
			},
			body: JSON.stringify({ client_id, client_secret, code }),
		});
		const result = await tokenRes.json();

		if (result.error) {
			return new Response(renderBody('error', result), {
				headers: { 'content-type': 'text/html;charset=UTF-8' },
				status: 401,
			});
		}

		return new Response(
			renderBody('success', {
				token: result.access_token,
				provider: 'github',
			}),
			{
				headers: { 'content-type': 'text/html;charset=UTF-8' },
				status: 200,
			},
		);
	}

	const redirectUrl = new URL('https://github.com/login/oauth/authorize');
	redirectUrl.searchParams.set('client_id', client_id);
	redirectUrl.searchParams.set('redirect_uri', `${url.origin}/api/auth`);
	redirectUrl.searchParams.set('scope', 'repo,user');
	redirectUrl.searchParams.set(
		'state',
		[...crypto.getRandomValues(new Uint8Array(12))].join(''),
	);
	return Response.redirect(redirectUrl.href, 302);
}

/** Prefer zh when Accept-Language lists a Chinese tag; otherwise English. */
function homeLocale(acceptLanguage) {
	const header = (acceptLanguage || '').toLowerCase();
	const tags = header.split(',').map((part) => part.trim().split(';')[0].trim());
	if (tags.some((tag) => tag === 'zh' || tag.startsWith('zh-'))) {
		return 'zh';
	}
	return 'en';
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.pathname === '/' || url.pathname === '') {
			const locale = homeLocale(request.headers.get('Accept-Language'));
			const dest = new URL(`/${locale}/`, url.origin);
			dest.search = url.search;
			return Response.redirect(dest, 302);
		}

		if (url.pathname === '/api/auth' || url.pathname === '/api/auth/') {
			try {
				return await handleAuth(request, env);
			} catch (error) {
				console.error(error);
				return new Response(error instanceof Error ? error.message : 'OAuth error', {
					status: 500,
				});
			}
		}

		return env.ASSETS.fetch(request);
	},
};
