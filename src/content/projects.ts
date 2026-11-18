import cayla from "../assets/caylapanitzlpc.png";
import myrights from "../assets/myrights.png";
import noise from "../assets/noiseagainsthate.png";
import olympic from "../assets/olympic-lift.png";
import service from "../assets/service-pacesetter.png";
import theprogram from "../assets/theprogram.png";

export const projects = [
  {
    heading: "Cayla Panitz, LPC",
    image: cayla,
    tags: ["Astro.js", "PandaCSS", "Hygraph", "GraphQL"],
    copy: "Established a website for Cayla to allow clients, current and future, easy access to information about her practice.",
    repo: "https://github.com/dmbdesignpdx/cayla-panitz-lpc",
    site: "https://caylapanitzlpc.com",
  },
  {
    heading: "Noise Against Hate",
    image: noise,
    tags: ["Next.js", "React", "Tailwind", "Supabase", "Postgres"],
    copy: "Provides a search tool to find bands that are actively against hate and promote inclusivity in the music scene.",
    repo: "https://github.com/dmbdesignpdx/noise-against-hate",
    site: "https://noiseagainsthate.com",
  },
  {
    heading: "My Rights",
    image: myrights,
    tags: ["Astro.js", "React", "Tailwind", "Supabase", "Postgres", "i18n"],
    copy: "Provides accessible information and community resources for your legal and civil rights in the United States.",
    repo: "https://github.com/dmbdesignpdx/my-rights",
    site: "https://myrights.help",
  },
  {
    heading: "Olympic Lift",
    image: olympic,
    tags: ["React", "Next.js", "Tailwind", "Shadcn"],
    copy: "An application that calculates the percentage of exertion for building up to a new personal record in weightlifting.",
    repo: "https://github.com/dmbdesignpdx/lifting-app",
    site: "https://olympic-lift.netlify.app",
  },
  {
    heading: "Service Pacesetter",
    image: service,
    tags: ["React", "Next.js", "Tailwind", "Shadcn"],
    copy: "An application that generates the necessary hourly pace for completing a set number of services in a day.",
    repo: "https://github.com/dmbdesignpdx/service-tracker",
    site: "https://service-pacesetter.netlify.app/",
  },
  {
    heading: "The Program",
    image: theprogram,
    tags: ["React", "Next.js", "TypeScript", "Contentful", "GraphQL"],
    copy: "The main website for The Program to guide potential new clients to better understand the services provided.",
    site: "https://the-program.com",
  },
];
