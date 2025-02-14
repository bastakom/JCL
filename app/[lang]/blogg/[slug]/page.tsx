import { getStoryblokApi } from "@storyblok/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { render } from "storyblok-rich-text-react-renderer";

async function fetchBlogg(slug: string) {
  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/blogg/${slug}`, sbParams);

  return { data };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const res = await fetchBlogg(params.slug);
  const { name, content } = res.data.data.story;
  const hasImage = content?.img?.filename?.trim();
  const hasContent = content?.content?.content?.length > 0;
  return (
    <div className="pt-28 pb-10 lg:py-44">
      <div className="container">
        {hasImage ? (
          <div className="relative h-[300px] lg:h-[500px]">
            <Image
              src={content.img.filename}
              fill
              className="object-cover"
              alt={content.img.alt || "Bild saknas"}
            />
          </div>
        ) : (
          <div className="relative h-[300px] lg:h-[500px] flex items-center justify-center bg-gray-300">
            <span>Ingen bild tillgänglig</span>
          </div>
        )}

        <div className="lg:pr-20 flex flex-col mt-10 gap-5">
          <h1 className="my-5 lg:my-0">{name}</h1>
          {hasContent ? (
            <span>{render(content.content)}</span>
          ) : (
            <span>Innehåll saknas</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default page;
