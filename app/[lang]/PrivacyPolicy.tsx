"use client";

import Link from "next/link";

const PrivacyPolicy = ({ content }: { content: any }) => {
  console.log("content", content);

  const { policy_title, policy_content } = content;
  const renderContent = (element: any, parentKey?: string) => {
    const { type, text, marks, content } = element;

    const elementKey = parentKey ? `${parentKey}-${type}` : type;

    switch (type) {
      case "text":
        if (marks) {
          if (marks.some((mark: any) => mark.type === "bold")) {
            return <strong key={elementKey}>{text}</strong>;
          }
          if (marks.some((mark: any) => mark.type === "link")) {
            const linkAttrs = marks.find(
              (mark: any) => mark.type === "link"
            ).attrs;
            return (
              <Link
                key={elementKey}
                href={`mailto:${text}`}
                target={linkAttrs.target || "_self"}
              >
                {text}
              </Link>
            );
          }
        }
        return text;

      case "hard_break":
        return <br key={elementKey} />;

      case "paragraph":
        return content?.map((innerElement: any, index: number) =>
          renderContent(innerElement, `${elementKey}-${index}`)
        );

      case "list_item":
        return (
          <li key={elementKey}>
            {content?.map((innerElement: any, index: number) =>
              renderContent(innerElement, `${elementKey}-${index}`)
            )}
          </li>
        );

      case "bullet_list":
        return (
          <ul key={elementKey} className="list-inside">
            {content?.map((listItem: any, index: number) =>
              renderContent(listItem, `${elementKey}-${index}`)
            )}
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <h1 className="text-3xl font-bold mb-6">{policy_title}</h1>

      {policy_content.content.map((el: any, index: number) =>
        el.type === "bullet_list" ? (
          <ul key={index} className="list-disc ml-4">
            {el.content.map((element: any, idx: number) =>
              renderContent(element, `${index}-${idx}`)
            )}
          </ul>
        ) : (
          el.content.map((element: any, idx: number) =>
            renderContent(element, `${index}-${idx}`)
          )
        )
      )}
    </div>
  );
};

export default PrivacyPolicy;
