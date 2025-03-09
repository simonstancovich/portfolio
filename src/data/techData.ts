import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaAppStoreIos,
  FaGooglePlay,
  FaIdCard,
  FaGoogleDrive,
  FaMapSigns,
  FaThemeisle,
  FaMailchimp,
  FaMailBulk,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiVite,
  SiJest,
  SiVuedotjs,
  SiStyledcomponents,
  SiTypescript,
  SiVuetify,
  SiSanity,
  SiNestjs,
  SiStrapi,
  SiGooglecloud,
  SiFirebase,
  SiJavascript,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiNginx,
  SiDocker,
  SiStripe,
  SiApplepay,
  SiWireshark,
  SiRedux,
  SiReduxsaga,
  SiFormspree,
  SiI18Next,
  SiZod,
  SiTypeorm,
} from "react-icons/si";
import { GiArchiveRegister } from "react-icons/gi";
import { BiSolidNavigation } from "react-icons/bi";
import { MdAddAPhoto } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";
import { VscAzure } from "react-icons/vsc";

const frontendSkills = [
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: FaReact, label: "React.js" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiVuedotjs, label: "Vue.js" },
  { icon: SiVite, label: "Vite" },
  { icon: FaFigma, label: "Figma" },
  { icon: SiJest, label: "Jest" },
  { icon: SiStyledcomponents, label: "Styled Components" },
  { icon: SiVuetify, label: "Vuetify" },
  { icon: SiSanity, label: "Sanity" },
];
const backendSkills = [
  { icon: FaNodeJs, label: "Node.js" },
  { icon: SiNestjs, label: "Nest.js" },
  { icon: SiStrapi, label: "Strapi" },
  { icon: SiGooglecloud, label: "GCP" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: SiPrisma, label: "Prisma" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiZod, label: "Zod" },
  { icon: SiTypeorm, label: "TypeORM" },
];
const devopsSkills = [
  { icon: SiNginx, label: "Nginx" },
  { icon: SiDocker, label: "Docker" },
  { icon: VscAzure, label: "Azure" },
];
const publicationsSkills = [
  { icon: FaAppStoreIos, label: "App Store" },
  { icon: FaGooglePlay, label: "Google Play" },
];
const integrationsSkills = [
  { icon: SiStripe, label: "Stripe" },
  { icon: SiApplepay, label: "Apple Pay" },
  { icon: SiWireshark, label: "Wire Shark" },
  { icon: FaIdCard, label: "BankId" },
  { icon: SiGooglecloud, label: "Cloud functions" },
  { icon: FaGoogleDrive, label: "Google Drive" },
  { icon: FaMapSigns, label: "Google Maps" },
  { icon: GiArchiveRegister, label: "SPAR" },
];
const librariesSkills = [
  { icon: BiSolidNavigation, label: "React Navigation" },
  { icon: SiRedux, label: "Redux" },
  { icon: SiReduxsaga, label: "Redux Toolkit" },
  { icon: FaThemeisle, label: "React Query" },
  { icon: SiFormspree, label: "React-hook-forms" },
  { icon: FaMailchimp, label: "Mailchimp" },
  { icon: FaMailBulk, label: "Nodemailer" },
  { icon: MdAddAPhoto, label: "React-image-picker" },
  { icon: SiI18Next, label: "i18n" },
  { icon: AiFillSound, label: "RNSP" },
];

export const techData = {
  frontendSkills,
  backendSkills,
  devopsSkills,
  publicationsSkills,
  integrationsSkills,
  librariesSkills,
};
