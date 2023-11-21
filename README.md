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

Add "/api/auth/register.ts":
```sh
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
  // const auth = getAuth(app);

  /* Get form data */

  console.log("FORMDATA");
  console.log("========");
  const formData = await request.formData();
  console.log(formData);
  console.log("========");
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();

  console.log(`FORMDATA NAME: >>${name}<<`);
  console.log(`FORMDATA EMAIL: >>${email}<<`);
  console.log(`FORMDATA PASSWORD: >>${password}<<`);

  if (!email || !password || !name) {
    return new Response("Missing form data", { status: 400 });
  }

  /* Create user */
  try {
    console.log('Creating User here');
  } catch (error: any) {
    return new Response("Something went wrong", { status: 400 });
  }
  return redirect("/success");
};
```

Add "/pages/success.astro":
```sh
---
import Layout from "../layouts/Layout.astro";
---

<Layout title="Test Registration.">
  <main>
    <h1>SUCCESS</h1>
  </main>
</Layout>
```

At the same time, move some styling into "Layout.astro" to save on repeating it:
```sh
...
  main {
    margin: auto;
    padding: 1rem;
    width: 800px;
    max-width: calc(100% - 2rem);
    color: white;
    font-size: 20px;
    line-height: 1.6;
  }
  h1 {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    margin-bottom: 1em;
  }
...
```

Add an "action" to the " form post" and tidy up some parameter names:
```sh
    <h1>Register</h1>
    <form method="post" action="/api/auth/register">
      <label>
        Username:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required minlength="6" />
      </label>
      <button>Submit</button>
    </form>
```

### At this point the /api/auth/register endpoint will give us the form data in the console
### Next we add in Firebase
