export type ProjectAction = {
  label: string;
  href: string | null;
};

export type Project = {
  name: string;
  slug: string;
  featured?: boolean;
  label?: string;
  status?: string;
  description: string;
  summary?: string;
  highlights: string[];
  stack: string[];
  screenshot: string;
  screenshotAlt: string;
  video?: {
    src: string;
    poster: string;
  };
  actions: ProjectAction[];
};

export type BuildStep = {
  number: string;
  title: string;
  description: string;
};

// All editable portfolio copy and links live in this file.
// TODO: Replace the site URL if Hamdi's final production domain is different.
export const siteConfig = {
  url: "https://hamdihassan.com",
  name: "Hamdi Hassan",
  title: "AI Product Builder",
};

export const portfolio = {
  name: { first: "Hamdi", last: "Hassan" },
  title: "AI Product Builder",
  availability: "Available for remote opportunities",
  location: "Based in Minnesota · Working remotely",
  // TODO: Add the final PDF at public/resume/hamdi-hassan-resume.pdf, then set this to "/resume/hamdi-hassan-resume.pdf".
  resumeUrl: null as string | null,
  resumePath: "/resume/hamdi-hassan-resume.pdf",
};

export const socialLinks = {
  github: { label: "GitHub", display: "github.com/hamdi2008", href: "https://github.com/hamdi2008" },
  twitter: { label: "Twitter/X", display: "@hamdimahmuud", href: "https://x.com/hamdimahmuud" },
  email: { label: "Email", display: "hamdi2008@gmail.com", href: "mailto:hamdi2008@gmail.com" },
  // TODO: Add LinkedIn only after a valid public URL is confirmed.
  linkedin: null,
};

export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const pageContent = {
  hero: {
    headline: "I design, build, and ship useful web products with AI.",
    supporting: "I use Claude, Claude Code, ChatGPT, OpenAI Codex, Next.js, TypeScript, Supabase, and Vercel to turn ideas into working products and improve them through real-world use.",
    primaryAction: "View My Work",
    processLabel: "How I build",
    processFooter: "Product thinking · AI development · Iteration",
  },
  projects: {
    eyebrow: "Selected work",
    title: "Products built to be used.",
    description: "From personal software to community platforms, I design, build, launch, maintain, and improve products through real-world use.",
  },
  about: {
    eyebrow: "About",
    title: "A product builder from idea to launch.",
    paragraphs: [
      "I am an AI-native product builder based in Minnesota. I use AI tools alongside modern web technologies to turn ideas into working products. I focus on solving useful problems, shipping quickly, and improving products through real-world use.",
      "My work includes productivity software, community directories, and digital platforms that I continue to operate and improve after launch.",
    ],
  },
  howIbuild: {
    eyebrow: "Process",
    title: "How I build.",
    description: "I combine product thinking, AI-assisted development, and continuous iteration to move from an idea to a working product.",
  },
  skills: {
    eyebrow: "Toolkit",
    title: "The tools I use to ship.",
    description: "A practical stack for moving quickly while maintaining a solid product foundation.",
  },
  contact: {
    eyebrow: "Have a product in mind?",
    title: "Let’s build something useful.",
    description: "I’m open to remote opportunities with founders and teams building useful AI-powered products.",
  },
};

export const buildSteps: BuildStep[] = [
  { number: "01", title: "Understand the problem", description: "Clarify the user, the pain point, the essential outcome, and what the first useful version must accomplish." },
  { number: "02", title: "Design the experience", description: "Define the product structure, user flow, information hierarchy, and simplest clear interface." },
  { number: "03", title: "Build and ship", description: "Use AI coding tools and modern web technologies to rapidly create, test, refine, and deploy the product." },
  { number: "04", title: "Learn and improve", description: "Use real-world usage and user feedback to identify what should be simplified, fixed, or expanded next." },
];

export const projects: Project[] = [
  {
    name: "Hamdi OS",
    slug: "hamdi-os",
    featured: true,
    label: "Featured Project",
    status: "Private Beta",
    description: "A personal operating system for planning, tracking, and reviewing every area of life across daily, weekly, monthly, yearly, and long-term timeframes.",
    summary: "I designed and built Hamdi OS from an idea into a working private beta. It brings goals, priorities, measurements, reviews, and history into one system so users can record actions once and see progress over time.",
    highlights: [
      "Designed the product structure and user experience from scratch",
      "Built authentication and database architecture",
      "Created customizable life-area dashboards",
      "Implemented daily, weekly, monthly, yearly, and long-term planning",
      "Built measurements, reviews, history, progress tracking, and recurring priorities",
      "Continue improving the product through daily personal use and beta tester feedback",
    ],
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Supabase", "PostgreSQL", "Vercel", "Claude", "Claude Code", "ChatGPT", "OpenAI Codex"],
    // TODO: Replace with the real dashboard screenshot at public/projects/hamdi-os-dashboard.png.
    screenshot: "/projects/hamdi-os-dashboard.png",
    screenshotAlt: "Hamdi OS life-area dashboard showing planning, measurements, and progress tracking",
    actions: [
      { label: "View Case Study", href: "/projects/hamdi-os" },
      // TODO: Add the Hamdi OS Loom demo URL.
      { label: "Watch Demo", href: null },
    ],
  },
  {
    name: "MNMuslim",
    slug: "mnmuslim",
    description: "A community platform helping Minnesota Muslims discover trusted local services and events.",
    highlights: ["Built searchable service and event directories", "Designed listing and admin workflows", "Continue maintaining and expanding the platform with verified community information"],
    stack: ["Next.js", "JavaScript", "Supabase", "Tailwind CSS", "Vercel"],
    screenshot: "/projects/mnmuslim-poster.png",
    screenshotAlt: "MNMuslim local services and events directory interface",
    video: {
      src: "/projects/mnmuslim-preview.mp4",
      poster: "/projects/mnmuslim-poster.png",
    },
    actions: [
      { label: "Visit MNMuslim", href: "https://www.mnmuslim.com/" },
    ],
  },
  {
    name: "MNHalal",
    slug: "mnhalal",
    description: "A directory helping people discover halal restaurants across Minnesota.",
    highlights: ["Built a searchable restaurant directory", "Created filtering and category browsing", "Continue growing the platform with verified restaurant listings"],
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    screenshot: "/projects/mnhalal-poster.png",
    screenshotAlt: "MNHalal searchable Minnesota restaurant directory interface",
    video: {
      src: "/projects/mnhalal-preview.mp4",
      poster: "/projects/mnhalal-poster.png",
    },
    actions: [
      { label: "Visit MNHalal", href: "https://www.mnhalal.com/" },
    ],
  },
  {
    name: "By Hamdi",
    slug: "by-hamdi",
    description: "A studio website showcasing products and AI strategy services.",
    highlights: ["Built a responsive marketing website", "Designed reusable interface components", "Added polished motion and interaction details"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    screenshot: "/projects/by-hamdi-poster.png",
    screenshotAlt: "By Hamdi studio website showcasing products and AI strategy services",
    video: {
      src: "/projects/by-hamdi-preview.mp4",
      poster: "/projects/by-hamdi-poster.png",
    },
    actions: [
      { label: "Visit Website", href: "https://www.byhamdi.co/" },
    ],
  },
];

export const skillGroups = [
  { name: "AI", skills: ["Claude", "Claude Code", "ChatGPT", "OpenAI Codex", "AI-assisted product development", "Prompt engineering"] },
  { name: "Frontend", skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  { name: "Backend", skills: ["Supabase", "PostgreSQL", "Authentication", "REST APIs"] },
  { name: "Tools", skills: ["Git", "GitHub", "Vercel", "Figma"] },
];
