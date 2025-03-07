"use client";

import { storyblokEditable } from "@storyblok/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { render } from "storyblok-rich-text-react-renderer";

export const Faq = ({ blok }: any) => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleOpen = (faqId: string) => {
    setOpenFaq(openFaq === faqId ? null : faqId);
  };
  const router = useRouter();

  return (
    <div
      {...storyblokEditable(blok)}
      className="flex justify-center px-5 lg:px-0 lg:py-20 flex-col gap-10"
    >
      <div className="flex flex-col gap-5">
        <span className="subtilte underline underline-offset-4 lg:text-center text-[18px]">
          {blok.title}
        </span>
        {blok.arrow ? (
          <span className="flex items-center gap-2 justify-center render-content">
            {render(blok.sub_title)}
            <FaArrowRight color="#d4384e" className="mt-1" />
          </span>
        ) : (
          <span className="lg:text-center">{render(blok.sub_title)}</span>
        )}{" "}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-10 lg:gap-20 xl:max-w-[80%]">
        {blok.fields.map((faq: any) => (
          <div key={faq._uid} className="flex flex-col gap-5 lg:min-w-[600px]">
            <div className="font-bold text-[20px] lg:text-[22px] flex gap justify-between items-center">
              {faq.title}
              <button
                onClick={() => handleOpen(faq._uid)}
                className={`transition-transform duration-300 ease-in-out  ${
                  openFaq === faq._uid && "rotate-180"
                }`}
              >
                <SlArrowDown color="#E9A06D" />
              </button>
            </div>
            <span className="lg:max-w-[70%] text-[18px]">
              {render(faq.sub_title)}
            </span>
            {openFaq === faq._uid && <span>{render(faq.content)}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};
