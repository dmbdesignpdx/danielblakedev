import { Meta, Name, URL } from "./constants";

export const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: Name.FULL,
  description: Meta.DESCRIPTION,
  pronouns: "He/Him",
  image: `${URL.SITE}/img/me-cropped.jpeg`,
  email: URL.MAIL_TO,
  jobTitle: Name.CAREER,
  sameAs: [URL.LINKED_IN, URL.GIT_HUB, URL.CODEPEN],
  skills:
    "Web Development, React, Next.js, Astro.js, Vue.js, TypeScript, HTML, CSS, JavaScript, Tailwind, Node.js, GraphQL, Postgres",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Portland",
    addressRegion: "Oregon",
    addressCountry: "United States",
  },
};
