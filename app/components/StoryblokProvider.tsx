"use client";
import type { PropsWithChildren } from "react";
import { storyblokInit } from "@storyblok/react/rsc";
import Page from "./Page";
import { Teaser } from "./Teaser";
import { Hero } from "./Hero";
import { Link } from "./Link";
import { TextArea } from "./TextArea";
import { ImageContent } from "./ImageContent";
import { TilesBlock } from "./Tilesblock";

storyblokInit({
  components: {
    page: Page,
    teaser: Teaser,
    Hero: Hero,
    Link: Link,
    text_area: TextArea,
    image_content: ImageContent,
    tilesblock: TilesBlock,
  },
  enableFallbackComponent: true,
});

export const StoryblokProvider = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};
