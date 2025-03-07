import { getStoryblokApi } from "@storyblok/react";



export async function GetSettings(locale: string) {
  let sbParams = {
    version: "draft" as const,
    language: locale,
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/settings`, sbParams, {
    cache: "no-store",
  });

  return data.data;
}