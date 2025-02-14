import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";
import { render } from "storyblok-rich-text-react-renderer";

export const TilesBlock = ({ blok }: any) => {
  return (
    <div style={{ background: blok.bg }}>
      <div
        className={`container py-0 lg:py-24 flex flex-col gap-5 lg:px-20 ${
          blok.center_content && "items-center"
        }`}
      >
        <span className="underline underline-offset-2">{blok.title}</span>

        <div
          className={`${
            blok.columns === "1"
              ? "mb-10 lg:mb-0"
              : "grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-20 lg:mt-10"
          }`}
        >
          {blok.tiles.map((tile: any) => (
            <div
              key={tile._uid}
              className={`flex flex-col gap-5 ${
                blok.center_content && "lg:max-w-[55%] mx-auto"
              }`}
            >
              <h3
                className={`font-bold text-[20px] ${
                  blok.center_content && "text-center"
                }`}
              >
                {tile.title}
              </h3>
              {!blok.center_content && (
                <div className={`h-[3px] w-[50px] bg-[#E9A06D] `} />
              )}
              <span
                className={`render-content ${
                  blok.center_content ? "mx-auto flex flex-col gap-10" : ""
                }`}
              >
                {blok.arrow ? (
                  <span className="flex flex-row gap-2 items-center">
                    {render(tile.content)}
                    {blok.arrow && (
                      <FaArrowRight color="#d4384e" className="mt-1" />
                    )}
                  </span>
                ) : (
                  render(tile.content)
                )}
              </span>
              {blok.center_content && tile.button ? (
                <div className="mt-10 text-center mb-10 lg:mb-0">
                  <Link
                    href={`${tile.link.cached_url} `}
                    className={`justify-center gap-5 flex-col button mb-10 lg:mb-0`}
                  >
                    <span>{tile.button || "Läs mer"}</span>
                  </Link>
                </div>
              ) : (
                <Link
                  href={`${tile.link.cached_url.replace(/^\/(da|en)\//, "")}`}
                  className={`text-[#D4384E] flex gap-2 items-center ${
                    blok.center_content && "justify-center"
                  }`}
                >
                  {tile.button && <span>{tile.button}</span>}
                  {tile.button && (
                    <LuArrowRight color="#D4384E" fontSize={20} />
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
