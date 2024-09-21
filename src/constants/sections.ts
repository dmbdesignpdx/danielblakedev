export const HERO = "Here's Danny!";
export const ABOUT = "About";
export const MAIN = "Main content";
export const INFO = "Some links";
export const FOOTER = "Footer";
export const NAV = "Page Navigation";

interface Section {
  ID: string;
  HEADING: string;
}

export const Hero: Section = {
  ID: "hero",
  HEADING: "Here's Danny",
};

export const About: Section = {
  ID: "about",
  HEADING: "About",
};

export const Main: Section = {
  ID: "main",
  HEADING: "Main content",
};

export const Info: Section = {
  ID: "info",
  HEADING: "Some links",
};

export const Footer: Section = {
  ID: "footer",
  HEADING: "Footer",
};

export const Nav: Section = {
  ID: "nav",
  HEADING: "Site navigation",
};
