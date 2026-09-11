# how-ai-chat-paste-works-in-word

中英成稿：`src/content/blog/{zh,en}/how-ai-chat-paste-works-in-word.md`

## 文内已用图

| 路径 | 说明 |
| --- | --- |
| `/images/uploads/chatgpt2word-formulas-intact.png` | hero + 插入结果 |
| `/images/uploads/placeholder-wps-taskpane.png` | 待补 |

## 待补截图

1. **WPS 任务窗格：先 Ctrl+V 再插入**  
   Windows 桌面 WPS 文字，ThinkNote 窗格可见「请先粘贴到任务窗格」一类提示，或用户正在窗格内粘贴。  
   替换：`public/images/uploads/placeholder-wps-taskpane.png`

依据：`src/utils/thinkNoteClipboard.ts` 标记 `<!--ThinkNote SmartCopy-->`；`thinknote-ms-word-plugin/web-addin/src/office/oneClickPaste.ts`（WPS 走 NEED_USER_PASTE）。
