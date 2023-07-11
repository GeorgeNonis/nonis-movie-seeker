import { Movies } from "@/interfaces";
import CSS from "/public/technologies/css.png";
import GIT from "/public/technologies/git.png";
import HTML from "/public/technologies/html.png";
import JS from "/public/technologies/javascript.png";
import NEXT from "/public/technologies/next.png";
import REDUX from "/public/technologies/redux.png";
import SASS from "/public/technologies/sass.png";
import TS from "/public/technologies/typescript.png";
import GITHUB from "/public/social/github.png";
import LINKEDIN from "/public/social/linkedin.png";

interface MOVIES_DB_PROPS {
  theme: boolean;
  watched: Movies[];
  queued: Movies[];
}

export const MOVIES_DB: MOVIES_DB_PROPS = {
  // "white"
  theme: false,
  watched: [],
  queued: [],
};

export const DB = "MOVIES_STORAGE";
export const APP_TITLE = `Unraveling Noni's World`;

export const LINKS = [
  { link: "Home", value: "/" },
  { link: "My Library", value: "/library" },
];

export const TECH_STACK = [NEXT, TS, JS, REDUX, GIT, SASS, CSS, HTML];

export const CONTACT_INFORMATION = [
  { name: "Email:", value: "Georgenonis@gmail.com" },
  { name: "Phone:", value: "+45 71 41 77 42" },
];

export const EXTERNAL_LINKS = [
  { link: "https://github.com/GeorgeNonis/", value: GITHUB },
  {
    link: "https://www.linkedin.com/in/george-nonis-697430234/",
    value: LINKEDIN,
  },
];

export const PROJECT_DESCRIPTION = [
  `This project was undertaken with the goal of enhancing my frontend
development skills using Next.js, a popular React framework. By
working on this project, I aimed to gain hands-on experience with
Next.js and explore its features and capabilities.`,
  `Throughout the development process, I focused on implementing best
practices in front-end development, including efficient component
architecture, responsive design, and optimized performance. I also
incorporated modern tools and libraries such as TypeScript, Redux,
and React-Stitches to ensure a robust and scalable codebase.`,
  `The project showcases my ability to build interactive and
user-friendly web applications, leveraging the power of Next.js
and the selected tech stack. I have utilized industry-standard
patterns and followed established coding conventions to ensure
maintainability and readability of the code.`,
];
