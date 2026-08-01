import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiFramer,
  SiBootstrap,
  SiMui,
  SiTailwindcss,
  SiAxios,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGithubactions,
  SiLinux,
  SiGit,
} from "react-icons/si";

export interface SkillGroup {
  title: string;
  description: string;
  items: SkillItem[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  icon?: IconType;
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Core stack — where most of the last five years live.",
    featured: true,
    items: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "SCSS", icon: SiSass },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux / Redux Toolkit", icon: SiRedux },
      { name: "Zustand" },
      { name: "React Query" },
      { name: "Framer Motion", icon: SiFramer },
      { name: "PWA" },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "MUI", icon: SiMui },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Forms & Validation",
    description: "Reliable input handling, end to end.",
    items: [
      { name: "React Hook Form" },
      { name: "Yup" },
      { name: "Axios", icon: SiAxios },
    ],
  },
  {
    title: "Backend (Basic)",
    description: "Full-stack capable when the project calls for it.",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Prisma", icon: SiPrisma },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Shipping and maintaining what gets built.",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Docker Compose", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "CI/CD" },
      { name: "Linux", icon: SiLinux },
      { name: "SSH" },
      { name: "VPS" },
      { name: "Git", icon: SiGit },
    ],
  },
];
