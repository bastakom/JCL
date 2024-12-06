import LinkBtn from "@/app/[lang]/components/Link/Link";
import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

export const Hero = ({ blok }: any) => {
  const { title, bg, subtitle, content, buttons, small_hero } = blok;

  return (
    <div
      {...storyblokEditable}
      className={`${small_hero ? "" : "py-20 mx-auto"} relative flex items-center`}
    >
      <Image src={bg.filename} alt={title} fill className="z-0 object-cover" />
      <div className="z-10 bg-black opacity-30 absolute w-full h-full" />
      <div
        className={`flex flex-col z-10 ${
          small_hero
            ? "ml-20 justify-center max-w-[30%] mt-20 pt-24 pb-20"
            : "justify-center items-center m-auto text-center lg:max-w-[50%] py-44"
        }   
      gap-5 text-white max-w-full `}
      >
        <span className="underline underline-offset-4">{subtitle}</span>
        <h1 className={`${small_hero ? "" : "text-center"}`}>{title}</h1>
        <p className="text-[20px] px-20">{content}</p>
        <div className="flex gap-5 mt-10">
          {buttons.map((el: any, index: number) => (
            <LinkBtn
              key={index}
              title={el.title}
              link={el.link.url}
              className={`${index <= 0 ? "button" : "button-secondary"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
