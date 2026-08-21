export type ProjectType = "independent" | "professional";

export interface Project {
  slug: string;
  type: ProjectType;
  tag: string; // category label, e.g. "Business Landing Page"
  title: string;
  image: string; // path under /public
  summary: string; // one-liner for cards
  overview: string;
  problem: string;
  solution: string;
  role: string;
  keyFeatures: string[];
  technicalImplementation: string;
  challenges: string;
  results: string; // only real/useful metrics, never invented
  technology: string[];
}

export const projects: Project[] = [
  {
    slug: "kopi-ranting",
    image: "/images/kopi-ranting.svg",
    type: "independent",
    tag: "Business Landing Page",
    title: "Kopi Ranting — Coffee Shop Landing Page",
    summary:
      "Hero, menu, gallery, location & contact — built to turn visits into walk-ins.",
    overview:
      "A concept landing page for a neighborhood coffee shop, designed to give a small food & beverage business a fast, credible web presence without needing a full custom build.",
    problem:
      "Small coffee shops often rely on Instagram alone. That works for existing followers, but a first-time visitor searching \"coffee shop near me\" has nowhere to land — no menu, no hours, no map.",
    solution:
      "A single, fast-loading page structured around what a first-time visitor actually needs: what the place looks like, what's on the menu, where it is, and how to get there — in that order.",
    role:
      "Designed and built the full page solo: layout, responsive behavior, and content structure.",
    keyFeatures: [
      "Hero section with clear positioning",
      "Menu section with categories",
      "Photo gallery of the space",
      "Embedded map & directions",
      "Contact / hours section",
    ],
    technicalImplementation:
      "Built with Next.js and Tailwind CSS, image-optimized via next/image, fully responsive from mobile up.",
    challenges:
      "Keeping the design warm and inviting without relying on heavy imagery that would slow the page down on mobile networks.",
    results:
      "Concept project — metrics below are targets used to guide the build, not measured production data.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "tani-makmur",
    image: "/images/tani-makmur.svg",
    type: "independent",
    tag: "Company Profile",
    title: "Tani Makmur — Agriculture Business Profile",
    summary:
      "Company introduction, services, business advantages, and contact.",
    overview:
      "A company profile site for a fictional agriculture business, focused on establishing credibility with B2B buyers and partners rather than direct-to-consumer sales.",
    problem:
      "Agriculture and farm businesses often look informal online even when the operation itself is established — which makes larger partners hesitant to engage.",
    solution:
      "A structured, professional company profile that leads with credibility signals: what the company does, its advantages, and clear proof points, before asking for contact.",
    role: "Designed and built the full site solo.",
    keyFeatures: [
      "Company introduction section",
      "Services / products overview",
      "Business advantages section",
      "About / company story",
      "Contact section",
    ],
    technicalImplementation:
      "Built with Next.js and Tailwind CSS, static content structure optimized for fast load and clean SEO.",
    challenges:
      "Communicating scale and reliability for a traditionally low-tech industry without resorting to generic stock-photo corporate design.",
    results:
      "Concept project — no live production metrics yet.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "studio-rasa",
    image: "/images/studio-rasa.svg",
    type: "independent",
    tag: "Personal Brand",
    title: "Studio Rasa — Freelance Consultant Site",
    summary:
      "Personal branding, service breakdown, and a portfolio-style project grid.",
    overview:
      "A personal brand site for a fictional freelance consultant, built to demonstrate how the same design system flexes for an individual rather than a business.",
    problem:
      "Independent consultants and creators often default to a generic template that undersells their actual expertise and doesn't clearly explain how to work with them.",
    solution:
      "A page that leads with the person, clearly lists services in plain language, and makes the path to working together obvious.",
    role: "Designed and built the full site solo.",
    keyFeatures: [
      "Personal introduction / branding section",
      "Services breakdown",
      "Portfolio-style project grid",
      "Contact section",
    ],
    technicalImplementation:
      "Built with Next.js and Tailwind CSS, component-driven layout reused from the shared design system.",
    challenges:
      "Making a single-person brand feel established and trustworthy without exaggerating credentials.",
    results: "Concept project — no live production metrics yet.",
    technology: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "loperin",
    image: "/images/loperin.svg",
    type: "professional",
    tag: "Task Management System",
    title: "Loperin",
    summary:
      "Complex data tables, task/status workflows, and location tracking for field workers.",
    overview:
      "Loperin is a task management system used to assign, track, and verify field work — including worker locations, task status, and proof of completion.",
    problem:
      "The team needed a reliable way to assign tasks to field workers, track status changes in real time, and verify completion with photo/location proof — at a scale that made spreadsheets unworkable.",
    solution:
      "A React/TypeScript frontend built around a complex, filterable task table, real-time status updates, and a location-aware task assignment flow.",
    role:
      "Owned frontend implementation: component architecture, state management, API integration, and performance for high-volume task tables.",
    keyFeatures: [
      "Complex, filterable/sortable task tables",
      "Task status workflow (assigned → in progress → completed → verified)",
      "Worker location tracking",
      "Proof-of-completion review (photo evidence)",
      "Reusable component library used across the app",
    ],
    technicalImplementation:
      "React + TypeScript, REST API integration, componentized table system built for reuse across multiple views, attention to render performance on large data sets.",
    challenges:
      "Keeping large, frequently-updating tables performant without over-fetching, and designing reusable components flexible enough for several different task views.",
    results:
      "Contribution focused on frontend architecture and the reusable component system underlying the task management flows.",
    technology: ["React", "TypeScript", "REST API"],
  },
  {
    slug: "treasury-management-system",
    image: "/images/treasury-management-system.svg",
    type: "professional",
    tag: "Enterprise Treasury Platform",
    title: "Treasury Management System",
    summary:
      "Frontend architecture: auth, complex forms, reporting, and performance work.",
    overview:
      "An enterprise Treasury Management System used for financial operations, reporting, and secure internal workflows.",
    problem:
      "The organization needed a secure, reliable internal platform for treasury operations — with strict authentication requirements, complex multi-step forms, and reporting that had to stay accurate and performant at scale.",
    solution:
      "A React/TypeScript frontend integrating Keycloak and Firebase for authentication, Redux Toolkit for state management, and a component architecture optimized for large forms and reporting views.",
    role:
      "Owned frontend architecture: authentication integration, complex form systems, reporting views, and performance optimization.",
    keyFeatures: [
      "Keycloak & Firebase authentication integration",
      "Complex, multi-step forms with validation",
      "Reporting views built for accuracy and performance",
      "Reusable component system",
      "Automated testing coverage",
    ],
    technicalImplementation:
      "React + TypeScript + Redux Toolkit + REST API, with lazy loading, code splitting, and React.memo / useMemo / useCallback applied to reduce unnecessary re-renders on data-heavy views. Ongoing dependency and security maintenance.",
    challenges:
      "Balancing strict security requirements (auth, session handling) with a form-heavy UX that still felt fast, and keeping report rendering performant as data volume grew.",
    results:
      "Contribution focused on frontend performance work (lazy loading, code splitting, memoization) and the authentication integration layer.",
    technology: ["React", "TypeScript", "Redux Toolkit", "Keycloak", "Firebase"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
