import Link from "next/link";
import Form from "../Form/Form";
import { LiaPhoneSolid } from "react-icons/lia";
import { GoMail } from "react-icons/go";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { render } from "storyblok-rich-text-react-renderer";

interface FooterSectionProps {
  props: {
    FB: any;
    IG: any;
    twitter: any;
    Linkedin: any;
    mail: string;
    phone: string;
    form_title: string;
    form_content: string;
    footer_logo: any;
    site_title: string;
    footer_menu: any;
  };
  lang: any;
}
const FooterSection = ({ props, lang }: FooterSectionProps) => {
  return (
    <>
      <div className="bg-[#9B6D6F] py-10 lg:py-20 lg:p-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 container text-white text-[18px]">
          <div className="flex flex-col gap-10">
            <div>
              <h4 className="mb-5 underline-offset-2 underline text-[18px]">
                {props.form_title}
              </h4>
              <span className="w-full lg:max-w-[60%] flex flex-col gap-5">
                {render(props.form_content)}
              </span>
            </div>
            <div className="flex flex-col gap-10">
              <h4 className="text-[18px]">{props.site_title}</h4>
              <div className="flex flex-col gap-2">
                <Link
                  href={`tel:${props.phone}`}
                  className="flex gap-2 items-center"
                >
                  <span className="-rotate-90">
                    <LiaPhoneSolid color="white" fontSize={25} />
                  </span>
                  {props.phone}
                </Link>
                <Link
                  href={`mailto:${props.mail}`}
                  className="flex gap-2 items-center"
                >
                  <span>
                    <GoMail color="white" fontSize={25} />
                  </span>
                  {props.mail}
                </Link>
              </div>
            </div>
            <Link
              href="https://apps.apple.com/se/app/puzzling-my-life/id6739561807"
              className="underline underline-offset-2 mb-10 lg:mb-0"
            >
              {lang.lang == "en"
                ? "DOWNLOAD JCL-COACHING APP"
                : lang.lang == "fr"
                ? "TÉLÉCHARGER JCL-COACHING APP"
                : "LADDA NER JCL-COACHING APP"}
            </Link>
          </div>
          <div>
            <Form lang={lang} />
          </div>
        </div>
      </div>
      <div className="bg-[#4A2222] flex justify-center py-10 lg:py-20 flex-col items-center gap-10 relative">
        <div className="flex justify-center flex-col gap-10">
          <Image
            src={`https://a.storyblok.com/f/314984/802x176/c8f488493d/jcl_logo.png`}
            width={311}
            height={220}
            className="w-auto lg:w-[311px] mx-auto"
            alt={props.site_title}
          />
          <Image
            src={props.footer_logo.filename}
            width={481}
            height={220}
            className="w-auto lg:w-[481px]"
            alt={props.site_title}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-14 lg:mt-10 justify-center text-center text-[20px] text-white">
          {props.footer_menu.map((el: any, index: number) => (
            <Link
              key={index}
              href={`/${lang.lang}/${el.link.cached_url.replace(
                /^\/(fr|en)\//,
                ""
              )}`}
            >
              {el.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-10 items-center justify-center">
          <Link href={`${props.FB.url}`}>
            <FaFacebookF color="white" fontSize={25} />
          </Link>
          <Link href={`${props.IG.url}`}>
            <FaInstagram color="white" fontSize={30} />
          </Link>
          <Link href={`${props.twitter.url}`}>
            <RiTwitterXLine color="white" fontSize={30} />
          </Link>
          <Link href={`${props.Linkedin.url}`}>
            <FaLinkedinIn color="white" fontSize={30} />
          </Link>
        </div>
        <div className="flex gap-2 flex-col justify-center items-center text-[20px]">
          <Link href={`mailto:${props.mail}`} className="text-white ">
            {props.mail}
          </Link>
          <Link href={`tel:${props.phone}`} className="text-white ">
            {props.phone}
          </Link>
        </div>
        <div
          className="flex flex-col lg:flex-row gap-5 lg:gap-10 text-white relative w-full text-center 
        justify-center lg:absolute right-0 lg:justify-end lg:right-10 bottom-5"
        >
          <Link href={`/${lang.lang}/policy`} className="">
            Privacy Policy
          </Link>

          <Link href={`/${lang.lang}/cookies`} className="">
            Cookies
          </Link>
        </div>
        <span className="text-white px-5 lg:px-0 text-center lg:text-left">
          © 2025 JCL Humanistic Consulting AB. All rights reserved.
        </span>
      </div>
    </>
  );
};

export default FooterSection;
