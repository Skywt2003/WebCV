import { z, defineCollection } from "astro:content";
const cvCollection = defineCollection({
  type: "data",
  schema: z.any(),
});
export const collections = {
  cv: cvCollection,
};
