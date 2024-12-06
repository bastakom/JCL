import { GetSettings } from "@/app/lib/apireq";
import FooterSection from "./FooterSection";

const Footer = async (lang: any) => {
  const res = await GetSettings(lang);
console.log(lang.lang)

  return <FooterSection props={res.story.content} />;
};

export default Footer;
