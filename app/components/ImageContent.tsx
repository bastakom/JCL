import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { render } from "storyblok-rich-text-react-renderer";

export const ImageContent = ({ blok }: any) => {
  return (
    <div
      {...storyblokEditable}
      className={`pt-10 mb-10 lg:mb-0 lg:p-20`}
      style={{ background: blok.bg }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 -order-1 gap-0 lg:gap-24 items-center container">
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
          <div className={`${!blok.custom_btn && "mb-10 lg:mb-0"}`}>
            {blok.buttons.map((href: any, index: number) => {
              return (
                <Link
                  href={href.link.url}
                  className={`${
                    blok.custom_btn
                      ? "text-[#D4384E] flex gap-2 items-center text-[18px]"
                      : "button"
                  }`}
                  key={index}
                >
                  {href.title}
                  {blok.custom_btn && (
                    <LuArrowRight color="#D4384E" fontSize={20} />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        {!blok.image_left && (
          <div className="relative w-full flex flex-col h-[300px] lg:h-[500px] lg:mt-0 mb-10 lg:mb-0">
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
