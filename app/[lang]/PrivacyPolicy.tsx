"use client";
import { render } from "storyblok-rich-text-react-renderer";

const PrivacyPolicy = ({ content }: { content: any }) => {
  return (
    <div className="render_content pt-44 pb-20 px-20 flex flex-col gap-5">
      <h2>{content.policy_title}</h2>
      {render(content.policy_content)}
    </div>
  );
};

export default PrivacyPolicy;
