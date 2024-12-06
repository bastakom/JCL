import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
export const TextArea = ({ blok }: any) => {
  return (
    <div {...storyblokEditable} className="p-20">
      <div className="max-w-[80%] mx-auto">
        <span className="render-content">{render(blok.content)}</span>
      </div>
    </div>
  );
};
