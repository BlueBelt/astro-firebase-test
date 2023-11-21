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
});
```

Added basic Registration page in place of index code and a script to display the form post data.

### At this point the form data is transmitted and displayed by the script

