# DND Manager (frontend starter)

Local dev:

```bash
npm install
npm run dev
```

This scaffolds a small React + Vite app using Material UI. The header is in `src/components/Header.jsx` and shows a placeholder site icon on the left and a user icon on the right with a "Sign in" menu when not authenticated.

Deployment to Render.com (Static Site)

 - Render will build the site and publish the `dist` folder produced by `vite build`.
 - This repo includes a `render.yaml` so you can connect the repository to Render and let it deploy automatically.

Steps:

```bash
# push your code to a Git provider (GitHub/GitLab)
# on Render: New -> Static Site -> Connect your repo
# Render will read `render.yaml` or use the following build settings:
# Build Command: npm install && npm run build
# Publish Directory: dist
```

Local test build:

```bash
npm install
npm run build
npm run preview
```

