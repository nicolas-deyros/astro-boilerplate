import { db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.collection("posts").insertMany([
    {
      title: "Hello, Astro!",
      content: "This is a blog post.",
    },
    {
      title: "Hello, Astro!",
      content: "This is another blog post.",
    },
  ]);
}
