import LinkBtn from "@/components/Link/Link";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export const Hero = ({ blok }: any) => {
  const { title, bg, subtitle, content, buttons, small_hero, text_white } =
    blok;

  return (
    <div
      {...storyblokEditable}
      className={`${
        small_hero ? "" : "lg:py-20  mx-auto"
      } relative flex items-center`}
    >
      <div />
      {bg.filename && (
        <Image
          src={bg.filename}
          alt={title}
          fill
          className="z-0 object-cover"
        />
      )}
      {bg.filename && (
        <div
          className={`z-10 ${
            text_white ? "bg-black" : "bg-white"
          } opacity-30 absolute w-full h-full`}
        />
      )}
      <div
        className={`z-10 ${
          !small_hero && "bg-black"
        } opacity-20 absolute w-full h-full`}
      />
      <div
        className={`flex flex-col z-10 ${
          small_hero
            ? `${
                bg.filename
                  ? "px-5 lg:px-0 lg:ml-20 justify-center lg:max-w-[600px] mt-20 pt-24 pb-20"
                  : "ml-0 lg:max-w-[55%] pt-44 lg:py-44 px-10 pl-[8rem]"
              }`
            : "justify-center items-center m-auto text-center lg:max-w-[50%] py-44"
        }   
      gap-10 ${
        text_white && bg.filename ? "text-white" : "text-black"
      } max-w-full `}
      >
        <span className="underline underline-offset-4">{subtitle}</span>
        <h1 className={`${small_hero ? "" : "text-center"}`}>{title}</h1>
        <p
          className={`${
            bg.filename
              ? "text-[18px] lg:text-[20px] lg:px-20 px-5"
              : "text-[20px] px-0"
          }`}
        >
          {content}
        </p>
        <div className="flex flex-col lg:flex-row gap-5 mt-10">
          {buttons.map((el: any, index: number) => (
            <LinkBtn
              key={index}
              title={el.title}
              link={el.link.cached_url}
              className={`${index <= 0 ? "button" : "button-secondary"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
