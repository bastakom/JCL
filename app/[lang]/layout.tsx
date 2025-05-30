import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { StoryblokProvider } from "app/components/StoryblokProvider";
import "./globals.scss";
import Script from "next/script";

export const metadata: Metadata = {
  title: "JCL Coaching",
  description: "",
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <StoryblokProvider>
      <html lang={lang}>
        <body>
          <Header locale={lang} />
          {children}
          <Footer lang={lang} />
          <Script src="https://consent.cookiebot.com/uc.js" />
          <script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="fa0b30c6-f698-4b5e-8d8f-dee49a26a001"
            data-blockingmode="manual"
            type="text/javascript"
            async
          ></script>
        </body>
      </html>
    </StoryblokProvider>
  );
}
