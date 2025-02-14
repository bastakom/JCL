import { getStoryblokApi } from "@storyblok/react";
import { redirect } from "next/navigation";

export const GetSettings = async (lang: string) => {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/settings?version=draft&token=${process.env.STORYBLOK_TOKEN}&language=${lang}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch settings");
  }
  return res.json();
};
