export type TeaserColor = {
  name: string;
  hex: string;
};

export type Teaser = {
  title: string;
  href: string;
  image: string;
  colors: TeaserColor[];
};