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

// export async function GetSettings(lang: string) {
//   let sbParams = {
//     version: "draft" as const,
//     starts_with: "settings/",
//     locales: lang,
//   };

//   const client = getStoryblokApi();
//   try {
//     const data = await client.get(`cdn/stories/`, sbParams);

//     if (!data) {
//       throw new Error("Not Found");
//     }

//     return { data };
//   } catch (error: any) {
//     if (error.response && error.response.status === 500) {
//       redirect("/500");
//     } else {
//       throw error;
//     }
//   }
// }
