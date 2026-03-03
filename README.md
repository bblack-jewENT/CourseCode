# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## AI Chat (Course Assistant)

A simple client-side AI chat UI has been added to help users ask questions about courses and code. Files added:

- `src/components/AIChat.jsx` — floating chat button + modal UI and conversation persistence.
- `src/services/ai.js` — small client stub that POSTs to `/api/ai-chat` and returns the `reply` field.

Setup notes:

- Implement a server endpoint at `/api/ai-chat` that accepts `{ message: string }` and returns `{ reply: string }` after forwarding to your LLM (OpenAI, etc.).
- Keep your API key server-side; do not commit it to the repo. Use environment variables on your host.

Example minimal Express handler (server-side):

```js
// POST /api/ai-chat
app.post("/api/ai-chat", async (req, res) => {
  const { message } = req.body;
  // call your LLM here and respond with { reply }
  res.json({ reply: "This is a placeholder response from the server." });
});
```

After you have a working server endpoint the UI will call it automatically. If the endpoint is unavailable, the UI shows a friendly fallback message.
