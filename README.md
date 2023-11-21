# Astro-Firebase Test

Simple demo to highlight Firebase SSR problem

```sh
npm install
npm run dev
```

## Build Sequence

Created project:
```sh
npm create astro@latest
```
Added node.js:
```sh
npx astro add node
```

Changed reference in "astro.config.mjs" to "Server" and "Middleware" as per recommendations:
```sh
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "middleware"
  })
});```
