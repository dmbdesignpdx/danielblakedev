import * as URL from "./urls";
import * as Icon from "./icons";
import * as Label from "./labels";


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

export const Contact: Link = {
  LABEL: Label.CONTACT,
  URL: URL.MAIL_TO,
  ICON: Icon.CONTACT,
};

export const MetaCert: Link = {
  LABEL: Label.META_CERT,
  URL: URL.META,
  ICON: Icon.META_CERT,
};

export const AstroCert: Link = {
  LABEL: Label.ASTRO_CERT,
  URL: URL.ASTRO,
  ICON: Icon.ASTRO_CERT,
};

export const CertDict: Link = {
  LABEL: Label.ALL_CERT,
  URL: URL.ALL,
  ICON: Icon.ALL_CERT,
};

export const IBMCert: Link = {
  LABEL: Label.IBM_CERT,
  URL: URL.IBM,
  ICON: Icon.IBM_CERT,
};

export const Gists: Link = {
  LABEL: Label.GISTS,
  URL: URL.GISTS,
  ICON: Icon.GISTS,
};

export const CodePen: Link = {
  LABEL: Label.CODEPEN,
  URL: URL.CODEPEN,
  ICON: Icon.CODEPEN,
};

export const Certs: Link[] = [
    IBMCert,
    MetaCert,
    AstroCert,
    CertDict,
];

export const Info: Link[] = [
    GitHub,
    LinkedInLink,
    CodePen,
    // Gists,
];
