---
status: pending
title: Hello World App
---

1. Create the project configuration files at the repository root: `package.json` (npm, ESM, React + Vite + TypeScript dependencies plus `@tailwindcss/vite` and `@tanstack/react-router` with `@tanstack/router-plugin`), `tsconfig.json` and `tsconfig.node.json` (strict TypeScript, `@/*` path alias mapped to `src/*`), and `vite.config.ts` (React plugin, Tailwind Vite plugin, TanStack Router plugin, and the `@/` alias). Expected outcome: the project installs and builds with a single dev command.

2. Create `index.html` at the repository root with a root mount element, the page title "Hello World", and a module script entry pointing at `src/main.tsx`. Expected outcome: the browser has a page shell to load the app into.

3. Create `src/styles/global.css` containing exactly the single Tailwind import line as its first statement. Expected outcome: all Tailwind utility classes become available app-wide.

4. Create `src/main.tsx` to import the global stylesheet once, create the TanStack Router instance from the generated route tree, and render the router into the root element inside React's strict mode. Expected outcome: the app boots and routing is active.

5. Create `src/routes/__root.tsx` as the app shell: a full-height page wrapper with a centered layout, a soft gradient background, and an outlet where page content renders. Expected outcome: every page inherits a consistent, centered, visually pleasant frame.

6. Create `src/routes/index.tsx` as the home page at `/`: a centered card containing a large "Hello, World!" heading, a short friendly subtitle line, and a small decorative accent (for example a waving-hand emoji or colored dot), all styled with Tailwind utilities and readable at mobile and desktop widths. Expected outcome: visiting the app shows a clean, centered "Hello, World!" screen.

7. Add `src/types/` placeholder usage only if needed later; otherwise leave the folder out. Confirm `src/routeTree.gen.ts` is produced automatically by the router plugin on first run and is never hand-edited. Expected outcome: no generated files are committed by hand and the route graph stays in sync.

8. Create a `.gitignore` covering `node_modules`, `dist`, and local environment files, and update `README.md` with a one-line description and the install/dev/build commands. Expected outcome: the repository is clean and anyone can start the app from the README.

9. Verification pass: start the dev server, confirm the home page renders the greeting centered with no console errors, confirm hot reload works when the greeting text is edited, and confirm a production build completes successfully. Expected outcome: a working, deployable Hello World app.
