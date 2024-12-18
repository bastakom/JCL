import { BokningIframe } from "@/components/Bokning/bokning-iframe";
import { storyblokEditable } from "@storyblok/react";
import { FaArrowRight } from "react-icons/fa";
import { render } from "storyblok-rich-text-react-renderer";
export const TextArea = ({ blok }: any) => {
  return (
    <div
      {...storyblokEditable}
      className={`my-10 lg:my-0 ${blok.bg && "p-10 mb-0"} ${
        blok.centered && "lg:pl-60"
      } lg:p-14`}
      style={{ background: blok.bg ? blok.bg : "none" }}
    >
      <div className="container">
        <span
          className={`render-content flex-col ${
            blok.center && "text-center flex flex-col gap-5"
          }`}
        >
          {blok.arrow ? (
            <span className="flex flex-col gap-2 items-center">
              <h3 className="text-[22px] font-bold">{blok.title}</h3>
              <span className="flex items-center lg:gap-2">
                {render(blok.content)}
                <FaArrowRight color="#d4384e" className=" mt-6 lg:mt-1" />
              </span>
            </span>
          ) : (
            render(blok.content)
          )}
        </span>
      </div>
    </div>
  );
};
