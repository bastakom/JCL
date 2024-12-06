import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";

export const ImageContent = ({ blok }: any) => {
  console.log(blok);
  return (
    <div
      {...storyblokEditable}
      className={`p-20`}
      style={{ background: blok.bg }}
    >
      <div className="grid grid-cols-2 -order-1 gap-24 items-center max-w-[80%] mx-auto">
        {blok.image_left && (
          <div className="relative w-full h-[500px]">
            <Image
              src={blok.image.filename}
              alt={blok.image.alt}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex flex-col gap-5">
          <h4 className="uppcase underline underline-offset-2">
            {blok.subtitle}
          </h4>
          <h3>{blok.title}</h3>
          <div className="flex flex-col gap-5 render-content text-[18px]">
            {render(blok.content)}
          </div>
          <div className="mt-10">
            {blok.buttons.map((href: any, index: number) => {
              return (
                <Link href={href.link.url} className="button">
                  {href.title}
                </Link>
              );
            })}
          </div>
        </div>
        {!blok.image_left && (
          <div className="relative w-full h-[500px]">
            <Image
              src={blok.image.filename}
              alt={blok.image.alt}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};
