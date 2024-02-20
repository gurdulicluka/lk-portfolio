import {StoryblokStory} from 'storyblok-generate-ts'

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface CardStoryblok {
  title?: string;
  description?: string;
  image: AssetStoryblok;
  _uid: string;
  component: "card";
  [k: string]: any;
}

export interface CarouselStoryblok {
  items?: (CardStoryblok | CarouselStoryblok | PageStoryblok)[];
  _uid: string;
  component: "carousel";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (CardStoryblok | CarouselStoryblok | PageStoryblok)[];
  title: string;
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}
