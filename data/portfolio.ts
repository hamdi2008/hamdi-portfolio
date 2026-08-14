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
  longDescription?: string;
  highlights: string[];
  supportingHighlights?: string[];
  stack: string[];
  screenshot: string;
  screenshotAlt: string;
  video?: {
    src: string;
    poster: string;
  };
  caseStudyUrl?: string;
  mediaNote?: string;
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
  resumeUrl: "/resume/hamdi-hassan-resume.pdf" as string | null,
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

export const projectLinks = {
  hamdiOSCaseStudy: "/projects/hamdi-os",
  mnMuslim: "https://www.mnmuslim.com/",
  mnHalal: "https://www.mnhalal.com/",
  byHamdi: "https://www.byhamdi.co/",
};

export const hamdiOSCaseStudy = {
  headline: "A personal operating system for connecting daily actions to the bigger picture.",
  introduction: "Hamdi OS started as a system I built for myself after getting tired of managing different parts of my life across Notes, Google Docs, and separate planning tools. As I used it every day, it evolved into a customizable personal operating system organized around life areas, time, measurements, and recaps.",
  problem: {
    title: "The problem",
    description: "Most productivity tools focus on one layer of life: tasks, habits, goals, notes, or tracking. I wanted one simple system where those layers could work together without creating more planning work.",
  },
  productModel: {
    title: "How the system works",
    concepts: [
      { number: "01", title: "Life Areas", description: "Users organize the system around areas that matter to them, such as Health, Finance, Family, Career, or Faith." },
      { number: "02", title: "Time as a lens", description: "Users move between Today, Week, Month, Year, and Long-Term without rebuilding their plans in separate systems." },
      { number: "03", title: "Record once", description: "Users complete or update something once. The system uses that information across relevant progress views." },
      { number: "04", title: "Measurements", description: "Measurements live inside the life areas they belong to instead of functioning as an unrelated tracker." },
      { number: "05", title: "Recaps", description: "Recaps help users look back at progress without maintaining a separate manual history system." },
    ],
  },
  currentProduct: {
    title: "Current product",
    description: "The current dashboard combines Current Season, time-based planning, life areas, priorities, measurements, and progress into one desktop-first workspace.",
  },
  iteration: {
    title: "How I build and iterate",
    steps: ["Identify a problem from real usage", "Simplify the product model", "Design the workflow", "Build rapidly with AI development tools", "Use the product daily", "Gather beta feedback", "Remove unnecessary complexity", "Repeat"],
  },
  status: {
    title: "Current status",
    description: "Hamdi OS is currently in private beta. I am onboarding a small group of testers and using their feedback alongside my own daily use to simplify the product before a broader release.",
  },
  demo: {
    title: "Hamdi OS Product Walkthrough",
    emptyMessage: "Product walkthrough coming soon.",
  },
};

export const projects: Project[] = [
  {
    name: "Hamdi OS",
    slug: "hamdi-os",
    featured: true,
    label: "Featured Project",
    status: "Private Beta",
    description: "A desktop-first personal operating system that helps people organize every area of life through customizable life areas, time-based planning, integrated measurements, recaps, and progress tracking.",
    longDescription: "Instead of separating goals, priorities, measurements, and reviews across different apps, Hamdi OS brings them into one system. Users organize life by area, record actions once, and use Today, Week, Month, Year, and Long-Term views to understand what matters now and how it connects to the bigger picture.",
    highlights: [
      "Designed a customizable life-area architecture that can adapt to different users and priorities",
      "Created one dashboard organized around Today, Week, Month, Year, and Long-Term views",
      "Designed the Current Season concept to give users context for what they are focusing on during a particular stage of life",
      "Integrated measurements directly into relevant life areas instead of treating tracking as a separate system",
      "Reworked traditional history and review workflows into simpler Recaps that surface progress over time",
      "Built progress tracking so daily actions can connect to larger weekly, monthly, yearly, and long-term goals",
    ],
    supportingHighlights: [
      "Built authentication and Supabase-backed user data architecture",
      "Continue simplifying and improving the product through daily personal use and beta tester feedback",
    ],
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Supabase", "PostgreSQL", "Vercel", "Claude", "Claude Code", "ChatGPT", "OpenAI Codex"],
    screenshot: "/projects/hamdi-os-dashboard.png",
    screenshotAlt: "Hamdi OS dashboard showing Current Season, time-based planning, and customizable life areas.",
    video: {
      src: "/projects/hamdi-os-demo.mp4",
      poster: "/projects/hamdi-os-dashboard.png",
    },
    caseStudyUrl: projectLinks.hamdiOSCaseStudy,
    mediaNote: "Dashboard · Measurements · Recaps · Settings · Current Season",
    actions: [
      { label: "View Case Study", href: projectLinks.hamdiOSCaseStudy },
      { label: "Watch Demo", href: `${projectLinks.hamdiOSCaseStudy}#demo` },
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
      { label: "Visit MNMuslim", href: projectLinks.mnMuslim },
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
      { label: "Visit MNHalal", href: projectLinks.mnHalal },
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
      { label: "Visit Website", href: projectLinks.byHamdi },
    ],
  },
];

export const skillGroups = [
  { name: "AI", skills: ["Claude", "Claude Code", "ChatGPT", "OpenAI Codex", "AI-assisted product development", "Prompt engineering"] },
  { name: "Frontend", skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  { name: "Backend", skills: ["Supabase", "PostgreSQL", "Authentication", "REST APIs"] },
  { name: "Tools", skills: ["Git", "GitHub", "Vercel", "Figma"] },
];
