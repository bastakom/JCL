import { getStoryblokApi } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { render } from "storyblok-rich-text-react-renderer";

async function fetchBlogg(locale: string) {
  let sbParams = {
    version: "draft" as const,
    starts_with: "blogg/",
    language: locale,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/`, sbParams);

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

const fetchSettings = async (lang: string) => {
  let sbParams = {
    version: "draft" as const,
    language: lang,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/settings`, sbParams);

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
};

const page = async ({ params }: { params: { lang: string } }) => {
  const res = await fetchBlogg(params.lang);
  const settings = await fetchSettings(params.lang);
  const config = settings.data.data.story.content;
  return (
    <div className="pt-44 pb-24">
      <div className="container">
        <span className="subtitle underline underline-offset-2">
          {config.blogg_subtitle}
        </span>
        <h1>{config.blogg_title}</h1>
        <p className="mb-10 lg:mb-0">{config.blogg_content}</p>
      </div>
      <div className="mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 container gap-10 lg:gap-20">
        {res.data.data.stories.map((story: any) => {
          return (
            <div key={story.id}>
              <Link href={`/blogg/${story.slug}`}>
                <Image
                  src={story.content.img.filename}
                  alt="Logo"
                  width={450}
                  height={400}
                  className="max-h-[400px] rounded-[7px]"
                />
                <h2 className="text-[22px] my-5">{story.name}</h2>
                <div className="line-clamp-3 mb-5">
                  {render(story.content.content)}
                </div>
              </Link>
              <Link
                href={`/blogg/${story.slug}`}
                className="text-[#D4384E] flex gap-2 items-center"
              >
                Läs mer
                <FaArrowRight />
              </Link>
            </div>
          );
        })}
        {/* <pre>{JSON.stringify(res.data.data.stories, null, 2)}</pre> */}
      </div>
    </div>
  );
};
export default page;