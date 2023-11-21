import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
  // const auth = getAuth(app);

  /* Get form data */

  console.log("TEXT");
  console.log("========");
  const text = await request.text();
  console.log(text);
  console.log("========");
  // console.log("FORMDATA");
  // console.log("========");
  // const formData = await request.formData();
  // console.log(formData);
  // console.log("========");
  // const email = formData.get("email")?.toString();
  // const password = formData.get("password")?.toString();
  // const name = formData.get("name")?.toString();

  // console.log(`FORMDATA NAME: >>${name}<<`);
  // console.log(`FORMDATA EMAIL: >>${email}<<`);
  // console.log(`FORMDATA PASSWORD: >>${password}<<`);

  // if (!email || !password || !name) {
  //   return new Response("Missing form data", { status: 400 });
  // }

  /* Create user */
  try {
    // await auth.createUser({
    //   email,
    //   password,
    //   displayName: name,
    // });
  } catch (error: any) {
    return new Response("Something went wrong", { status: 400 });
  }
  return redirect("/success");
};
