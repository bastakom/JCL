import dynamic from "next/dynamic";
import { GetSettings } from "app/lib/apireq";

const PrivacyPolicy = dynamic(() => import("../PrivacyPolicy"), {
  ssr: false,
});

const Privacy = async ({ params }: { params: { lang: string } }) => {
  const res = await GetSettings(params.lang);

  return (
    <div>
      <PrivacyPolicy content={res.story.content} />
    </div>
  );
};

export default Privacy;
