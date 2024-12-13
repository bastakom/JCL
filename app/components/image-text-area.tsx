import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";

export const ImageTextArea = ({ blok }: any) => {
  return (
    <div className="px-5 lg:px-0 mx-auto w-full flex justify-center items-center py-20 bg-[#EFF0EB]">
      {/* <pre>{JSON.stringify(blok, null, 2)}</pre>; */}

      <div className="lg:w-[40%] text-center flex flex-col gap-14 justify-center items-center">
        <span className="textarea font-bold flex flex-col gap-2">
          {render(blok.content)}
        </span>
        <Image
          src={blok.img.filename}
          width={500}
          height={500}
          alt={blok?.img.alt}
        />
      </div>
    </div>
  );
};
