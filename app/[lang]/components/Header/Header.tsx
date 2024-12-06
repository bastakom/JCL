import { GetSettings } from "app/lib/apireq";
import Navigation from "./Navigation/Navigation";

const Header = async (locale: any) => {
  const res = await GetSettings(locale);

  return <Navigation props={res.story.content} locale={locale} />;
};

export default Header;
