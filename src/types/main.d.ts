declare type Maybe<T> = T | null;


export interface Res {
  data: Data;
}

export interface Data {
  page: Page;
}

export interface Page {
  meta: Meta;
  header: Header;
  navigation: Navigation;
  content: Content[];
  footer: Footer;
}

export interface Content {
  heading: string;
  figure: Maybe<Figure>;
  copy: Maybe<string>;
  links: Link[];
}

export interface Figure {
  text: string;
  caption: string;
}

export interface Link {
  id: string;
  url: string;
  text: string;
  icon: Maybe<string>;
  target: Maybe<'blank' | 'self'>;
}

export interface Footer {
  heading: string;
  copy: string;
  secondaryCopy: string;
}

export interface Header {
  heading: string;
  subheading: string;
}

export interface Meta {
  title: string;
  description: string;
  url: string;
  image: string;
  theme: Theme;
  author: string;
}

export interface Theme {
  hex: string;
}

export interface Navigation {
  heading: string;
  links: Link[];
}
