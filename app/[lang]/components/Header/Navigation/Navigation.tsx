"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";
import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

interface Props {
  props: any;
  locale: any;
}

const Navigation = ({ props, locale }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const usePath = usePathname();
  const router = useRouter();

  const changeLanguage = (newLang: string) => {
    const currentPath = usePath;
    const newPath = currentPath.replace(/^(\/[^/]+)(.*)$/, `/${newLang}$2`);
    router.push(newPath);
    setIsOpen(!isOpen);
  };

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`absolute top-0 z-50 w-full flex justify-between p-10`}>
      <Link href={`/${locale.locale}`} className="z-10">
        <Image
          src="https://a.storyblok.com/f/314984/446x94/4d237d7792/jcl_coaching_orginal_simple-2x.png"
          alt="Logo"
          width={253}
          height={50}
          className="max-h-[50px]"
        />
      </Link>
      <button
        onClick={handleOpenMenu}
        className="bg-[#4A2222] p-2 lg:p-4 rounded-full z-50 fixed right-4 lg:right-10 top-4 lg:top-5"
      >
        {!isOpen ? (
          <TbMenu fontSize={40} color="white" />
        ) : (
          <IoCloseOutline fontSize={40} color="white" />
        )}
      </button>
      {isOpen && (
        <nav className="fixed top-0 left-0 h-full w-full z-30 bg-[#EFF0EB] flex items-center justify-center text-center flex-col gap-14">
          <Link
            href={`/${locale.locale}`}
            className="z-10 absolute left-10 top-10"
          >
            <Image
              src="https://a.storyblok.com/f/314984/446x94/4d237d7792/jcl_coaching_orginal_simple-2x.png"
              alt="Logo"
              width={253}
              height={50}
              className="max-h-[50px]"
            />
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/sv" className="flex text-[#9B6D6F] medium text-[20px]">
              SV
            </Link>
            <span className="text-[#9B6D6F]">|</span>
            <Link href="/en" className="flex text-[#9B6D6F] medium text-[20px]">
              EN
            </Link>
            <span className="text-[#9B6D6F]">|</span>
            <button
              onClick={() => changeLanguage("fr")}
              className="flex text-[#9B6D6F] medium text-[20px]"
            >
              FR
            </button>
          </div>

          <div className="flex flex-col gap-5">
            {props.menu.map((el: any, index: number) => {
              return (
                <Link
                  onClick={handleOpenMenu}
                  key={index}
                  href={`/${locale.locale}/${el.link.cached_url}`}
                  className="text-[26px] xl:text-[37px flex flex-col text-[#9B6D6F] hover:text-[#E9A06D] medium"
                >
                  <span>{el.title}</span>
                  <div className="h-[0.5px] mt-2 w-[500px] bg-[#707070]" />
                </Link>
              );
            })}
          </div>
          <Link href="" className="button">
            Boka en session
          </Link>
          <div className="flex gap-10 items-center justify-center">
            <Link href={`${props.FB.url}`}>
              <FaFacebookF color="#9B6D6F" fontSize={25} />
            </Link>
            <Link href={`${props.IG.url}`}>
              <FaInstagram color="#9B6D6F" fontSize={30} />
            </Link>
            <Link href={`${props.twitter.url}`}>
              <RiTwitterXLine color="#9B6D6F" fontSize={30} />
            </Link>
            <Link href={`${props.Linkedin.url}`}>
              <FaLinkedinIn color="#9B6D6F" fontSize={30} />
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
