export const profile = {
  name: "Jay Santosh Jathar",
  short: "Jay Jathar",
  initials: "jj",
  email: "jayjatharjj@gmail.com",
  location: "Pune, India",
  github: "https://github.com/jayjatharjj",
  linkedin: "https://www.linkedin.com/in/jayjathar1409",
  // Drop a PDF into /public and set e.g. "resume.pdf" to show the download button.
  resume: "",
  headline: { lead: "I build cloud-native systems &", accent: "agentic AI workflows." },
  intro:
    "Full Stack Java engineer with 3+ years of experience shipping microservices, secure multi-tenant platforms and LLM-powered tools, most recently for insurance claims at Bajaj General Insurance.",
};

export type FlowNode = { icon: string; color: string; title: string; sub: string };
export const flow: FlowNode[] = [
  { icon: "▶", color: "#ff6d5a", title: "Claim received", sub: "trigger" },
  { icon: "SQS", color: "#f59e0b", title: "FIFO queue", sub: "1 message / claim" },
  { icon: "DMS", color: "#3b82f6", title: "Download docs", sub: "60–100 per claim" },
  { icon: "S3", color: "#22c55e", title: "Upload to bucket", sub: "storage" },
  { icon: "AI", color: "#8b7bff", title: "Claim summary", sub: "agent · n8n" },
  { icon: "⚠", color: "#ec4899", title: "Contradiction & fraud", sub: "agent · n8n" },
  { icon: "DOC", color: "#14b8a6", title: "Draft creation", sub: "legal rules" },
  { icon: "VLO", color: "#64748b", title: "Legal review UI", sub: "React.js" },
];

export type Stat = { label: string; n?: number; suffix?: string; text?: string };
export const stats: Stat[] = [
  { n: 3, suffix: "+", label: "years building production systems" },
  { n: 57, suffix: "%", label: "faster CI/CD (23 → 10 min)" },
  { text: "60s → 2s", label: "data retrieval after tuning" },
  { n: 5, suffix: "+", label: "AI models behind one proxy" },
];

export type Project = { name: string; sub: string; bullets: string[] };
export type Job = {
  company: string;
  role: string;
  when: string;
  where: string;
  current?: boolean;
  bullets?: string[];
  chips?: string[];
  projects?: Project[];
};

export const jobs: Job[] = [
  {
    company: "Bajaj General Insurance",
    role: "Full Stack Java Developer · Payroll: Pinnacle Technology",
    when: "Jul 2026 — Present",
    where: "Pune, India",
    current: true,
    bullets: [
      "Designed an AWS SQS FIFO flow (one message per claim) moving 60–100 documents per claim from DMS to S3; handles hundreds of claims daily.",
      "Configured FIFO SQS queues (DLQ, content-based deduplication, message group ID, retention) and integrated them with the app on EC2.",
      "Built agentic AI workflows in n8n Cloud, using task-specific models, that generate claim summaries and flag contradictions and potential fraud across claim data and documents.",
      "Developed claim draft generation based on business logic defined by the legal team.",
      "Proactively redesigned the VLO React.js UI into a modern, clean interface, earning stakeholder approval and appreciation.",
    ],
    chips: ["Java", "Spring Boot", "React.js", "AWS SQS · EC2 · S3", "n8n Cloud", "LLM agents"],
  },
  {
    company: "TwoDots Software Services",
    role: "Java Full Stack Developer · Cloud & Microservices",
    when: "Oct 2023 — Jul 2026",
    where: "Pune, India",
    projects: [
      {
        name: "Smart360",
        sub: "enterprise data collaboration platform",
        bullets: [
          "Built 5 Spring Boot microservices (API Gateway, Authorization, Data, Visualization, Error Logs) and 60+ Vue.js components; added Auth0 one-click sign-in (60% faster than username/password registration) and custom role-based access (read/update/delete).",
          "Developed interactive D3.js visualizations and dynamic data tables supporting 10+ data types, bulk operations and advanced filtering.",
          "Cut data retrieval from 60s to 2–3s (indexing, pagination, caching, query tuning) and file retrieval by 80% via S3; shipped 30+ CI/CD releases.",
        ],
      },
      {
        name: "Deep Fathom / Benthic",
        sub: "compliance & risk management platform",
        bullets: [
          "Provisioned and managed 30+ Azure resources across staging (Commercial) and production (FedRAMP GovCloud) using modular Bicep IaC, with a secure VNet (6 subnets, 21 NSG rules), private endpoints and NAT Gateway.",
          "Configured PostgreSQL 17 with least-privilege roles and Row-Level Security on 50+ tables for multi-tenant isolation; ran 60+ migrations.",
          "Cut CI/CD pipeline time by 57% (23→10 min) via parallel Docker builds, Turbo and BuildKit caching, and zero-downtime migrations.",
        ],
      },
      {
        name: "WebX & ImageX",
        sub: "AI web & image generators",
        bullets: [
          "Integrated 5+ AI models (GPT-5, Claude Sonnet 4, DeepSeek, Ideogram 3) through a unified proxy with intelligent routing and async processing for long-running (2–20 min) operations.",
          "Built an end-to-end AI website generator (keywords → layout → HTML/CSS → images → GitLab), cutting build time to minutes.",
          "Developed a multi-provider image platform (Freepik API, AI text-to-image, background removal) with S3 version-tracked storage; built both apps on Spring Boot 3 and React 19/TypeScript with OAuth2/JWT and 20+ API endpoints.",
        ],
      },
    ],
  },
];

export type Work = { num: string; tag: string; title: string; text: string; metrics: [string, string][] };
export const work: Work[] = [
  {
    num: "01",
    tag: "Insurance · AI",
    title: "Virtual Legal Officer",
    text: "A claims analysis platform for the legal team: queued document ingestion, agentic summaries, contradiction and fraud flags, and automated drafts behind a clean React UI.",
    metrics: [["60–100", "docs per claim"], ["100s", "claims per day"]],
  },
  {
    num: "02",
    tag: "Cloud · Security",
    title: "Benthic on FedRAMP GovCloud",
    text: "Modular Bicep infrastructure across Commercial and GovCloud with isolated networking and Postgres Row-Level Security for true multi-tenancy.",
    metrics: [["30+", "Azure resources"], ["57%", "faster pipeline"]],
  },
  {
    num: "03",
    tag: "Data platform",
    title: "Smart360",
    text: "Enterprise data collaboration platform on Spring Boot microservices and Vue 3, with D3.js visualizations and fine-grained role-based access.",
    metrics: [["5", "microservices"], ["60+", "Vue components"], ["30+", "releases"]],
  },
  {
    num: "04",
    tag: "Generative AI",
    title: "WebX & ImageX",
    text: "Multi-model AI platforms that go from a keyword to a deployed website and generate, edit and store images across providers.",
    metrics: [["5+", "AI models"], ["20+", "API endpoints"]],
  },
];

export const stack: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript"] },
  { title: "Backend", items: ["Spring Boot", "Spring Cloud", "Spring Data JPA", "Hibernate", "REST", "OAuth2 · JWT"] },
  { title: "Frontend", items: ["React", "Vue.js", "D3.js"] },
  { title: "Data", items: ["PostgreSQL", "MySQL", "Redis"] },
  { title: "Cloud & DevOps", items: ["AWS EC2 · S3 · SQS", "Azure", "Docker", "GitLab CI/CD", "Jenkins", "Bicep", "Linux"] },
  { title: "AI & Automation", items: ["Agentic workflows", "n8n", "LLM APIs"] },
];

export const certifications = [
  { name: "Microsoft Certified: Azure Developer Associate", date: "Jan 2026" },
  { name: "Oracle Cloud Infrastructure 2025 Certified: Generative AI Professional", date: "Dec 2025" },
];
export const achievements = [
  { name: "Appreciation Award — Exceptional Work Delivery, TwoDots", date: "Feb 2026" },
  { name: "Spotlight Award — Quick Learner, TwoDots", date: "Feb 2024" },
];
export const education = {
  name: "B.E. Information Technology · Smt. Kashibai Navale College of Engineering, Savitribai Phule Pune University",
  note: "CGPA 8.32 / 10",
  date: "Jun 2023",
};
