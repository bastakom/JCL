import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
export const TextArea = ({ blok }: any) => {
  return (
    <div {...storyblokEditable} className="my-10 lg:my-0 lg:p-20">
      <div className="container">
        <span className={`render-content ${blok.center && "lg:text-center flex flex-col gap-5"}`}>{render(blok.content)}</span>
      </div>
    </div>
  );
};
