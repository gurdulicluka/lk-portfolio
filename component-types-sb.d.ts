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
  items?: (CardStoryblok | CarouselStoryblok | FooterStoryblok | HeaderStoryblok | PageStoryblok)[];
  _uid: string;
  component: "carousel";
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface FooterStoryblok {
  linkedin?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  instagram?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  dribbble?: Exclude<MultilinkStoryblok, {linktype?: "email"} | {linktype?: "asset"}>;
  _uid: string;
  component: "footer";
  [k: string]: any;
}

export interface HeaderStoryblok {
  title?: string;
  _uid: string;
  component: "header";
  [k: string]: any;
}

export interface PageStoryblok {
  title: string;
  main?: (CardStoryblok | CarouselStoryblok | FooterStoryblok | HeaderStoryblok | PageStoryblok)[];
  footer?: (CardStoryblok | CarouselStoryblok | FooterStoryblok | HeaderStoryblok | PageStoryblok)[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}
