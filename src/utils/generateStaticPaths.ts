import { useStoryblokApi } from "@storyblok/astro";
import isPreview from "./isPreview";

export default async function generateStaticPaths() {
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get("cdn/links", {
    version: isPreview() ? "draft" : "published",
  });
  let links = data.links;
  let paths : Array<{props:any,params:any}> = [];
  links = Object.values(links);

  links.forEach((link: any) => {
    let slug = link.slug === "home" ? undefined : link.slug;
    paths.push({
      props: { slug },
      params: { slug },
    });
  });

  return paths
}
