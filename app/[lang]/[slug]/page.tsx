import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

async function fetchData(slug: string, locale: string) {
  let sbParams = {
    version: "draft" as const,
    language: locale,
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/${slug}`, sbParams);

  return { data };
}

const Page = async ({ params }: { params: { slug: string; lang: string } }) => {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await fetchData(slugName, params.lang);

  return (
    <main>
      <StoryblokStory story={story.data.data.story} locale={params.lang} />
    </main>
  );
};

export default Page;
