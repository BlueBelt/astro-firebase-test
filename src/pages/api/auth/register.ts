import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
  console.log("TEXT");
  console.log("========");
  const result = await request.formData();
  console.log(result);
  console.log("========");

  return redirect("/success");
};
