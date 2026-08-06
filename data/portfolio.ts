export type Project = {
  name: string;
  slug: string;
  status?: string;
  description: string;
  highlights: string[];
  stack: string[];
  screenshot: string;
  actions: { label: string; href: string }[];
};

// Edit portfolio links, contact details, projects, and skills in this file.
// Replace the placeholder URLs and resume file before publishing.
export const portfolio = {
  resumeUrl: "/hamdi-hassan-resume.pdf",
};

export const socialLinks = {
  github: { label: "github.com/hamdi2008", href: "https://github.com/hamdi2008" },
  twitter: { label: "@hamdimahmuud", href: "https://x.com/hamdimahmuud" },
  email: { label: "hamdi2008@gmail.com", href: "mailto:hamdi2008@gmail.com" },
};

export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    name: "Hamdi OS",
    slug: "hamdi-os",
    status: "Private Beta",
    description: "A personal operating system for planning, tracking, and reviewing every area of life across daily, weekly, monthly, yearly, and long-term timeframes.",
    highlights: [
      "Designed and built the product from idea to private beta",
      "Built authentication and database architecture",
      "Created customizable life dashboards",
      "Implemented measurements, reviews, history, recurring planning, and progress tracking",
      "Iterating through personal use and beta tester feedback",
    ],
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Supabase", "PostgreSQL", "Vercel", "Claude", "ChatGPT"],
    screenshot: "/projects/placeholder.svg",
    actions: [{ label: "View Case Study", href: "#" }, { label: "Watch Demo", href: "#" }],
  },
  {
    name: "MNMuslim",
    slug: "mnmuslim",
    description: "A community platform helping Minnesota Muslims discover trusted local services and events.",
    highlights: ["Built searchable service and event directories", "Designed listing and admin workflows", "Maintain and expand the platform with verified community information"],
    stack: ["Next.js", "JavaScript", "Supabase", "Tailwind CSS", "Vercel"],
    screenshot: "/projects/placeholder.svg",
    actions: [{ label: "Visit Website", href: "#" }, { label: "View GitHub", href: "#" }],
  },
  {
    name: "MNHalal",
    slug: "mnhalal",
    description: "A directory helping people discover halal restaurants across Minnesota.",
    highlights: ["Built a searchable restaurant directory", "Created filtering and category browsing", "Maintain and grow the platform with verified restaurant listings"],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    screenshot: "/projects/placeholder.svg",
    actions: [{ label: "Visit Website", href: "#" }, { label: "View GitHub", href: "#" }],
  },
  {
    name: "By Hamdi",
    slug: "by-hamdi",
    description: "A personal studio website showcasing products and AI strategy services.",
    highlights: ["Built a responsive marketing website", "Designed reusable UI components", "Added polished animations and interactions"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    screenshot: "/projects/placeholder.svg",
    actions: [{ label: "Visit Website", href: "#" }, { label: "View GitHub", href: "#" }],
  },
];

export const skillGroups = [
  { name: "AI", skills: ["Claude", "Claude Code", "ChatGPT", "AI-assisted product development", "Prompt engineering"] },
  { name: "Frontend", skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  { name: "Backend", skills: ["Supabase", "PostgreSQL", "Authentication", "REST APIs"] },
  { name: "Tools", skills: ["Git", "GitHub", "Vercel", "Figma"] },
];
