# React Tailwind Vite App

This is a simple frontend boilerplate built with **Vite**, **React**, **TypeScript** and **Tailwind CSS v4**. The project is configured so it can be deployed to static hosting services such as GitHub Pages or Heroku.

## Development

```bash
npm install   # install dependencies
npm run dev   # start development server
```

## Build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deploy on Heroku

Heroku runs `npm start` by default which will execute `vite preview`.

```bash
npm start
```

## Project Structure

- `index.html` – main HTML entry
- `src/` – application source code
- `tailwind.config.js` – Tailwind CSS configuration
- `postcss.config.js` – PostCSS (Tailwind v4 + autoprefixer)
- `vite.config.ts` – Vite configuration with relative base path
