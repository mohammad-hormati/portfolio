export interface Project {
  year: string;
  title: string;
  description: string;
  tags: string[];
  icon:
    | "Car"
    | "Landmark"
    | "LineChart"
    | "Radar"
    | "Bot"
    | "BarChart3"
    | "CalendarClock"
    | "Calculator";
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    year: "2020",
    title: "Caracaltech",
    description:
      "A dynamic car remapping showcase site with a modern, responsive design built to present technical tuning services clearly to a non-technical audience.",
    tags: ["React", "TypeScript"],
    icon: "Car",
  },
  {
    year: "2020",
    title: "Maskan Bank Member Dashboard",
    description:
      "A member management panel with role-based access control, member profiles, and payment tracking for a national banking cooperative.",
    tags: ["React", "Bootstrap", "RBAC"],
    icon: "Landmark",
  },
  {
    year: "2022",
    title: "Crypto Analytics Platform",
    description:
      "A fully responsive analytics platform covering technical analysis, on-chain data, and social news for cryptocurrency markets, built around a reusable component architecture.",
    tags: ["React", "TypeScript", "MUI"],
    icon: "LineChart",
  },
  {
    year: "2022",
    title: "Swarm",
    description:
      "A national event prediction and analysis dashboard letting users dynamically create, track, and manage live events across the country.",
    tags: ["React", "Tailwind", "D3.js", "Redux"],
    icon: "Radar",
  },
  {
    year: "2023",
    title: "Zirobot",
    description:
      "A Twitter bot-detection tool that visualizes account behavior and bot-probability scores through dynamic, data-driven SVG animation.",
    tags: ["React", "SVG Animation"],
    icon: "Bot",
  },
  {
    year: "2024",
    title: "Social Media Monitoring Dashboard",
    description:
      "A business-intelligence platform for social media analysis, competitor tracking, and campaign management — with i18n, dark/light mode, and dynamic network graphs.",
    tags: ["React", "Redux Toolkit", "MUI", "ApexCharts", "Sigma.js"],
    icon: "BarChart3",
  },
  {
    year: "2025",
    title: "Beauty Salon Booking System",
    description:
      "A full-stack appointment platform for a beauty salon: a Telegram bot backend for booking and consultations, plus an admin panel for schedules and services — containerized with an automated deploy pipeline.",
    tags: ["Next.js", "TypeScript", "Prisma", "MySQL", "Docker"],
    icon: "CalendarClock",
    githubUrl:
      "https://github.com/mohammad-hormati/beauty-salon-telegramBot-backend",
  },
  {
    year: "2025",
    title: "Forex Calculator",
    description:
      "A focused calculation tool for forex traders to work out position sizing and risk exposure quickly, built as a clean, typed utility app.",
    tags: ["TypeScript", "React"],
    icon: "Calculator",
    githubUrl: "https://github.com/mohammad-hormati/forex-calculator",
  },
];
