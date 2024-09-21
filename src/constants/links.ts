import * as URL from "./urls";
import * as Icon from "./icons";
import * as Label from "./labels";
import * as Name from "./name";

interface Link {
  LABEL: string;
  URL: string;
  ICON: string;
}

export const GitHub: Link = {
  LABEL: Label.GIT_HUB,
  URL: URL.GIT_HUB,
  ICON: Icon.GIT_HUB,
};

export const LinkedInLink: Link = {
  LABEL: Label.LINKED_IN,
  URL: URL.LINKED_IN,
  ICON: Icon.LINKED_IN,
};

export const CodePenLink: Link = {
  LABEL: Label.CODE_PEN,
  URL: URL.CODE_PEN,
  ICON: Icon.CODE_PEN,
};

export const Contact: Link = {
  LABEL: Label.CONTACT,
  URL: URL.MAIL_TO,
  ICON: Icon.CONTACT,
};

export const Home: Link = {
  LABEL: Name.FULL,
  URL: URL.HOME,
  ICON: "",
};

export const InfoList: Link[] = [GitHub, LinkedInLink, CodePenLink];

export const NavList: Link[] = [Home, Contact];

export const Info: Link[] = [GitHub, LinkedInLink, CodePenLink];

export const Nav: Link[] = [Home, Contact];
