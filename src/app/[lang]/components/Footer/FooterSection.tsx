import Link from "next/link";
import Form from "../Form/Form";
import { LiaPhoneSolid } from "react-icons/lia";
import { GoMail } from "react-icons/go";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

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
}
const FooterSection = ({ props }: FooterSectionProps) => {
  return (
    <>
      <div className="bg-[#9B6D6F] p-20 relative">
        <div className="grid grid-cols-2 container text-white text-[18px]">
          <div className="flex flex-col gap-10">
            <div>
              <h4 className="mb-5 underline-offset-2 underline">
                {props.form_title}
              </h4>
              <p className="max-w-[60%]">{props.form_content}</p>
            </div>
            <div className="flex flex-col gap-10">
              <h4>{props.site_title}</h4>
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
            <Link href="" className="underline underline-offset-2">
              LADDA NER JCL-COACHING APP
            </Link>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
      <div className="bg-[#4A2222] flex justify-center py-20 flex-col items-center gap-10">
        <Image
          src={props.footer_logo.filename}
          width={481}
          height={220}
          alt={props.site_title}
        />
        <div className="flex gap-14 mt-10 justify-center text-center text-[20px] text-white">
          {props.footer_menu.map((el: any) => (
            <Link href={`${el.link.cached_url}`}>{el.title}</Link>
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
        <div className="flex gap-2 text-white">
          <Link href="" className="">
            Privacy Policy
          </Link>
          |
          <Link href="" className="">
            Cookies
          </Link>
        </div>
        <span className="text-white">
          © 2025 JCL Humanistic Consulting. All rights reserved.
        </span>
      </div>
    </>
  );
};

export default FooterSection;
