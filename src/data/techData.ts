import {
	FaReact,
	FaNodeJs,
	FaFigma,
	FaAppStoreIos,
	FaGooglePlay,
	FaIdCard,
	FaGoogleDrive,
	FaMapSigns,
	FaHandPointDown,
} from 'react-icons/fa';
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
} from 'react-icons/si';

const frontendSkills = [
	{ icon: SiJavascript, label: 'JavaScript' },
	{ icon: SiTypescript, label: 'TypeScript' },
	{ icon: FaReact, label: 'React.js' },
	{ icon: SiNextdotjs, label: 'Next.js' },
	{ icon: SiVuedotjs, label: 'Vue.js' },
	{ icon: SiVite, label: 'Vite' },
	{ icon: FaFigma, label: 'Figma' },
	{ icon: SiJest, label: 'Jest' },
	{ icon: SiStyledcomponents, label: 'Styled Components' },
	{ icon: SiVuetify, label: 'Vuetify' },
	{ icon: SiSanity, label: 'Sanity' },
];
const backendSkills = [
	{ icon: FaNodeJs, label: 'Node.js' },
	{ icon: SiNestjs, label: 'Nest.js' },
	{ icon: SiStrapi, label: 'Strapi' },
	{ icon: SiGooglecloud, label: 'GCP' },
	{ icon: SiFirebase, label: 'Firebase' },
	{ icon: SiPrisma, label: 'Prisma' },
	{ icon: SiPostgresql, label: 'PostgreSQL' },
	{ icon: SiMongodb, label: 'MongoDB' },
];
const devopsSkills = [
	{ icon: SiNginx, label: 'Nginx' },
	{ icon: SiDocker, label: 'Docker' },
];
const publicationsSkills = [
	{ icon: FaAppStoreIos, label: 'App Store' },
	{ icon: FaGooglePlay, label: 'Google Play' },
];
const integrationsSkills = [
	{ icon: SiStripe, label: 'Stripe' },
	{ icon: SiApplepay, label: 'Apple Pay' },
	{ icon: SiWireshark, label: 'Wire Shark' },
	{ icon: FaIdCard, label: 'BankId' },
	{ icon: SiGooglecloud, label: 'Cloud functions' },
	{ icon: FaGoogleDrive, label: 'Google Drive' },
	{ icon: FaMapSigns, label: 'Google Maps' },
];
const librariesSkills = [
	{ icon: FaHandPointDown, label: 'App Store' },
	{ icon: FaGooglePlay, label: 'Google Play' },
];

export const techData = {
	frontendSkills,
	backendSkills,
	devopsSkills,
	publicationsSkills,
	integrationsSkills,
	librariesSkills,
};
