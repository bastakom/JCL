import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { render } from "storyblok-rich-text-react-renderer";

export const TilesBlock = ({ blok }: any) => {
  return (
    <div className="max-w-[80%] mx-auto py-20 flex flex-col gap-5 px-20">
      <span className="underline underline-offset-2">{blok.title}</span>

      <div
        className={`${
          blok.columns === "1" ? "" : "grid grid-cols-3 gap-20 mt-10"
        }`}
      >
        {blok.tiles.map((tile: any) => (
          <div key={tile._uid} className="flex flex-col gap-5">
            <span className="font-bold text-[20px]">{tile.title}</span>
            <div className="h-[3px] w-[50px] bg-[#E9A06D]" />
            <span>{render(tile.content)}</span>
            <Link href="" className="text-[#D4384E] flex gap-2 items-center">
              <span>{tile.button || "Läs mer"}</span>
              <LuArrowRight color="#D4384E" fontSize={20} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
