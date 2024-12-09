import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { render } from "storyblok-rich-text-react-renderer";

export const TilesBlock = ({ blok }: any) => {
  return (
    <div style={{ background: blok.bg }}>
      <div
        className={`container lg:py-20 flex flex-col gap-5 lg:px-20 ${
          blok.center_content && "items-center"
        }`}
      >
        <span className="underline underline-offset-2">{blok.title}</span>

        <div
          className={`${
            blok.columns === "1" ? "mb-10 lg:mb-0" : "grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-20 lg:mt-10"
          }`}
        >
          {blok.tiles.map((tile: any) => (
            <div
              key={tile._uid}
              className={`flex flex-col gap-5 ${
                blok.center_content && "lg:max-w-[55%] mx-auto"
              }`}
            >
              <span
                className={`font-bold text-[20px] ${
                  blok.center_content && "text-center"
                }`}
              >
                {tile.title}
              </span>
              {!blok.center_content && (
                <div className={`h-[3px] w-[50px] bg-[#E9A06D] `} />
              )}
              <span
                className={`render-content ${
                  blok.center_content ? "mx-auto flex flex-col gap-10" : ""
                }`}
              >
                {render(tile.content)}
              </span>
              {blok.center_content ? (
                <div className="mt-10 text-center mb-10 lg:mb-0">
                  <Link
                    href=""
                    className={`justify-center gap-5 flex-col button mb-10 lg:mb-0`}
                  >
                    <span>{tile.button || "Läs mer"}</span>
                  </Link>
                </div>
              ) : (
                <Link
                  href=""
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
