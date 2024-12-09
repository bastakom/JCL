import { getStoryblokApi } from "@storyblok/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { render } from "storyblok-rich-text-react-renderer";

async function fetchBlogg(slug: string) {
  let sbParams = {
    version: "draft" as const,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/blogg/${slug}`, sbParams);

    if (!data) {
      throw new Error("Not Found");
    }

    return { data };
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
}

const page = async ({ params }: { params: { slug: string } }) => {
  const res = await fetchBlogg(params.slug);
  const { name, content } = res.data.data.story;
  return (
    <div className="pt-28 pb-10 lg:py-44">
      <div className="container">
        <div className="relative h-[300px] lg:h-[500px]">
          <Image
            src={content.img.filename}
            fill
            className="object-cover"
            alt={content.img.alt}
          />
        </div>
        <div className="lg:pr-20">
          <h1 className="my-5 lg:my-0">{name}</h1>
          <span>{render(content.content)}</span>
        </div>
      </div>
    </div>
  );
};
export default page;
