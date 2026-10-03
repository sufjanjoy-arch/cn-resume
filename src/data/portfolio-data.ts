/**
 * Portfolio Data — single source of truth for Chaitra Nair
 */

import type {
  PersonalInfo, Experience, Writing, Speaking, Project, Education, SocialLink,
} from "@/types/portfolio";

import headshot from "@/assets/headshot.png";

export const personalInfo: PersonalInfo = {
  name: "Chaitra Nair",
  title: "HR Business Partner · People Strategy & Performance",
  location: { city: "Bangalore", country: "India" },
  website: "",
  email: "chaitranair96@gmail.com",
  avatar: headshot,
  bio: "HR Business Partner with 8+ years of experience building and scaling people systems across high-growth startups. Currently at Finbox, a high-growth digital lending fintech, driving performance management, OKR governance, talent management, and employee listening for a 140+ employee span in a 410-member organization.\n\nExperienced in designing and operationalizing KPI-driven PMS, implementing HRMS platforms, and supporting organization-wide change management initiatives including ESOP communication and rollout support. Proven ability to partner with leadership on org design, performance architecture, and workforce effectiveness while translating people data into actionable organizational interventions.\n\nFluent in English, Hindi, and Malayalam; conversational in Gujarati.",
  skills:
    "HR Strategy, Performance Management (OKRs and KPIs), HRIS (Keka, Zoho, PeopleCues), Employee Lifecycle Management, Policy Design and Compliance, Talent Acquisition, Compensation and Benefits Structuring, Employee Engagement and Experience, Change Management, Data-Driven HR (eNPS, People Analytics), HR Project Management, Remote Onboarding Optimization, ESOP Design and Rollout, Senior Leadership Partnership, Cross-Functional Collaboration, Stakeholder Communication, Conflict Resolution",
};

export const shortIntro =
  "I build the people systems that let fast-moving companies scale without losing the plot — performance frameworks, HR tech, and the everyday craft of helping teams work better together.";

export interface SkillCategory {
  category: string;
  items: string[];
}

export const categorizedSkills: SkillCategory[] = [
  {
    category: "Performance & Strategy",
    items: ["OKR Governance", "KPI-Driven PMS", "Competency Frameworks", "Org Design", "Career Architecture"],
  },
  {
    category: "HR Systems & Tech",
    items: ["Keka HRMS", "Zoho People", "PeopleCues", "Cursor AI / LLM Tools", "Workflow Automation"],
  },
  {
    category: "People Analytics & Ops",
    items: ["eNPS & Pulse Surveys", "People Intelligence Dashboards", "Attrition Early-Warning", "Probation Reviews"],
  },
  {
    category: "Change & Total Rewards",
    items: ["ESOP Communication Scaffolding", "Compensation Restructuring", "Group Insurance Compliance", "Manager Coaching"],
  },
];

export interface KeyInitiative {
  id: string;
  title: string;
  organization: string;
  tagline: string;
  description: string;
  impact: string[];
  toolsUsed: string[];
  badge: string;
}

export const keyInitiatives: KeyInitiative[] = [
  {
    id: "finbox-people-app",
    title: "Employee Listening & Connect Analytics App",
    organization: "Finbox (2026)",
    tagline: "Bridging 1:1 Connect Data with Real-Time Leadership Dashboards",
    description:
      "Conceptualized and built an employee-connect analytics application on my own using Google Antigravity, converting raw employee-connect data into actionable leadership insights on sentiment, organizational hotspots, and attrition risk indicators across a 140+ employee span in a 410-member organization.",
    impact: [
      "Enabled early identification of cross-team operational blockers and team hotspots before review cycles",
      "Gave executive leadership bird’s-eye visibility into team morale, sentiment trends, and manager coaching effectiveness",
      "Replaced fragmented manual notes with a unified, searchable feedback & pulse architecture",
    ],
    toolsUsed: ["Google Antigravity", "Claude", "GitHub", "Keka"],
    badge: "AI & People Analytics",
  },
  {
    id: "attri-inhouse-pms",
    title: "KPI Architecture & In-House PMS Co-Development",
    organization: "Attri (2025)",
    tagline: "Merging HR Governance with AI-Assisted Engineering",
    description:
      "Redesigned the organization's performance framework from the ground up with quantifiable KPIs, then co-developed an in-house performance tracking prototype using Cursor AI to solve immediate workflow bottlenecks while simultaneously rolling out Zoho People.",
    impact: [
      "100% policy consistency achieved across offer, appraisal, confirmation, and exit documentation",
      "Fully digitized leave, attendance, reimbursement, and asset tracking workflows",
      "100% employee coverage compliance on group health insurance rollout",
    ],
    toolsUsed: ["Cursor AI", "Zoho People", "Workflow Automation"],
    badge: "HR Tech & Product",
  },
];

export const experience: Experience[] = [
  {
    id: "exp-5",
    slug: "skillventory",
    company: "Skillventory",
    role: "Senior Consultant",
    location: "Ahmedabad (Onsite)",
    startDate: "2018-08",
    endDate: "2020-03",
    employmentType: "full-time",
    current: false,
    accentColor: "#7d9b76",
    story:
      "This is where I learned to listen for what companies actually need — often quite different from what their job descriptions say. Working with investment banks like Morgan Stanley, Goldman Sachs, and JP Morgan Chase, along with e-commerce, gaming, and Big Four clients, I became the single point of contact for two of the Big Four consultancies. Every mandate was a small case study in organizational design: who succeeds here, who won't, and why. It's the foundation everything after this was built on.",
    description:
      "Executive Search and Strategic Staffing: Consulted leading Investment Banks (Morgan Stanley, Goldman Sachs, JP Morgan Chase, Wells Fargo), E-commerce giants, Gaming ventures, Product Firms, and Start-ups to find the right leadership talent.\n\nAccount Leadership: Served as the single point of contact for two Big Four consultancies to understand staffing requirements, manage resources, and strategize delivery pipelines.",
    tools: [
      { name: "LinkedIn", logo: "", color: "#0077B5" },
    ],
  },
  {
    id: "exp-4",
    slug: "eclat",
    company: "Eclat Engineering",
    role: "HR Business Partner",
    location: "Ahmedabad (Remote)",
    startDate: "2020-04",
    endDate: "2024-08",
    employmentType: "full-time",
    current: false,
    accentColor: "#5c8a7a",
    story:
      "A remote-first engineering company with teams spread across APAC, Africa, and LATAM — and no unified people function to hold it together. Over four years I built one. I designed policies that worked across time zones and jurisdictions, rolled out an OKR-based performance system on PeopleCues, crafted a band-wise competency matrix to make career paths visible, and led the communication scaffolding around a company-wide ESOP rollout. By the time I left, HR wasn't a support function at Eclat — it was part of how the business made decisions.",
    description:
      "Global People Strategy and Function Setup: Headed the HR department, collaborating with senior leadership to design and implement comprehensive HR policies for global teams across APAC, Africa, and LATAM.\n\nOKR Governance and Performance Management: Implemented PeopleCues to track visibility and drive performance across the organization. Led design, rollout, and communication of an OKR-based PMS.\n\nCareer Architecture and Succession: Crafted band-wise Competency matrix to facilitate succession planning and drive organization-wide learning pathways.\n\nChange Leadership and ESOP Rollout: Managed major change initiatives including compensation restructuring and ESOP rollout to align long-term incentives with business goals.\n\nRemote Experience and Retention: Revamped remote onboarding to reduce ramp-up time to full productivity; analyzed eNPS data to execute targeted culture interventions.",
    tools: [
      { name: "PeopleCues", logo: "", color: "#6366F1" },
    ],
  },
  {
    id: "exp-3",
    slug: "skillsbucket",
    company: "Skillsbucket",
    role: "OD Consultant",
    location: "Ahmedabad (Onsite)",
    startDate: "2024-10",
    endDate: "2024-12",
    employmentType: "part-time",
    current: false,
    accentColor: "#a8896b",
    story:
      "A short, focused engagement — the kind that reminds you how much structure a KPI-based PMS can bring to a team that's been running on instinct. I owned the end-to-end rollout of a KPI-driven performance system on Zoho People for a 130+ member IT team, from framework design to configuration to adoption. Three months, one clean handover, a team that finally knew what 'good' looked like on paper.",
    description:
      "PMS Transformation: Managed end-to-end implementation of KPI-based PMS on Zoho People for a 130+ member IT engineering team.\n\nFramework and Adoption: Defined objective performance metrics, trained managers on appraisal scoring, and configured system workflows for seamless appraisal cycles.",
    tools: [
      { name: "Zoho People", logo: "", color: "#E42527" },
    ],
  },
  {
    id: "exp-2",
    slug: "attri",
    company: "Attri",
    role: "HR Manager",
    location: "Ahmedabad (Onsite)",
    startDate: "2025-01",
    endDate: "2025-11",
    employmentType: "full-time",
    current: false,
    accentColor: "#c47b5a",
    story:
      "Attri was where HR and engineering thinking met in the middle. I redesigned the PMS with measurable KPIs, then co-built an in-house performance management tool using CursorAI — because sometimes the fastest way to fix a broken workflow is to build the tool yourself. Alongside that: a full policy overhaul, Zoho People deployment, automated reimbursement and asset workflows, structured probation reviews, and a group insurance rollout with 100% coverage compliance. Ten months of turning HR from a paper trail into a product.",
    description:
      "Performance Systems and AI Automation: Redesigned PMS framework with measurable KPIs and co-developed an in-house performance management tool using CursorAI; automated reimbursement, asset tracking, and leave notification workflows.\n\nHR Governance Architecture: Overhauled end-to-end documentation including offer letters, onboarding kits, appraisal and confirmation templates, and Employee Handbook to ensure policy consistency.\n\nHR Tech Implementation: Led deployment of Zoho People, digitizing core operations and driving organizational adoption.\n\nEmployee Relations and Lifecycle: Designed structured probation reviews improving clarity for new hires; mediated conflicts; achieved 100% coverage compliance on group health insurance rollout.\n\nCompensation and Employee Connect: Managed payroll coordination, bonus cycles, and 1:1 connect programs to maintain strong morale.",
    tools: [
      { name: "Zoho People", logo: "", color: "#E42527" },
      { name: "Cursor AI", logo: "", color: "#18181B" },
    ],
  },
  {
    id: "exp-1",
    slug: "finbox",
    company: "Finbox",
    role: "HR Business Partner",
    location: "Bangalore (Onsite)",
    startDate: "2026-01",
    endDate: null,
    employmentType: "full-time",
    current: true,
    accentColor: "#2a9d8f",
    story:
      "Finbox is a high-growth digital lending fintech, where I partner with leadership across a 140+ employee span inside a 410-person organization, leading initiatives across HR business partnering, performance management, OKR governance, talent management, and employee listening.\n\nI also conceptualized and built an employee-connect analytics application on my own using Google Antigravity, converting employee-connect data into actionable insights on sentiment, people pulse, recurring themes, and organizational hotspots to support data-driven leadership decisions.",
    description:
      "HR Business Partnering and Span Leadership: Acted as HRBP for 140+ employees in a 410-member organization, partnering with leadership to drive people strategy, resolve organizational challenges, and enable data-backed decision-making.\n\nPeople Analytics and Employee Listening: Conceptualized and built an employee-connect analytics application on my own using Google Antigravity, converting employee-connect data into actionable insights on sentiment, people pulse, recurring themes, and organizational hotspots to support data-driven leadership decisions.\n\nPerformance Management and OKR Governance: Led end-to-end PMS cycles on Keka and institutionalized quarterly OKR frameworks across teams, driving goal alignment, structured reviews, and improved performance accountability.\n\nTalent Management: Partnered with leadership to identify high-potential talent, critical roles, and development priorities, supporting promotion, succession, and retention decisions.\n\nManagerial Effectiveness and Coaching Enablement: Developed and deployed manager best-practice playbooks, strengthening coaching capabilities and improving the effectiveness of the managerial layer.",
    tools: [
      { name: "Google Antigravity", logo: "", color: "#4285F4" },
      { name: "Keka", logo: "", color: "#2A9D8F" },
      { name: "Claude", logo: "", color: "#D97757" },
      { name: "GitHub", logo: "", color: "#181717" },
    ],
  },
];

export const writing: Writing[] = [];
export const speaking: Speaking[] = [];
export const projects: Project[] = [];

export const education: Education[] = [
  {
    id: "edu-1", institution: "Gujarat University",
    degree: "Master of Science (MSc)", field: "Cancer Biology",
    startYear: "2016", endYear: "2018", location: "Gujarat, India", details: "",
  },
  {
    id: "edu-2", institution: "Udemy", degree: "Certification", field: "People Analytics",
    startYear: "", endYear: "2023", location: "Online",
    details: "PEOPLE ANALYTICS 101: HR Analytics Fundamentals & Metrics",
  },
  {
    id: "edu-3", institution: "LinkedIn Learning", degree: "Certification", field: "Business Intelligence",
    startYear: "", endYear: "2024", location: "Online", details: "Power BI Essential Training",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn", username: "chaitranair",
    url: "https://www.linkedin.com/in/chaitranair/",
  },
];

export interface HobbiesAndInterests {
  movies: {
    title: string;
    description: string;
    imdbUrl?: string;
    genres: string[];
  };
  travel: {
    title: string;
    description: string;
    countriesVisited: string[];
  };
  reading: {
    title: string;
    description: string;
    favoriteGenres: string[];
  };
  music: {
    title: string;
    description: string;
    genres: string[];
  };
}

export const hobbiesData: HobbiesAndInterests = {
  movies: {
    title: "Cinema & Filmography",
    description: "Avid film enthusiast with a keen eye for storytelling, cinematography, direction, and character dynamics across world cinema.",
    imdbUrl: "https://www.imdb.com",
    genres: ["World Cinema", "Psychological Thrillers", "Sci-Fi & Speculative", "Character Dramas", "Docuseries"],
  },
  travel: {
    title: "Travel & Wandering",
    description: "Curious explorer fascinated by diverse cultures, architectural history, coastal landscapes, and global cuisines.",
    countriesVisited: [
      "India", "United Arab Emirates", "Singapore", "Thailand", "Malaysia", "Indonesia"
    ],
  },
  reading: {
    title: "Books & Literature",
    description: "Deep-diving into behavioral psychology, human decision-making, organizational sociology, and contemporary fiction.",
    favoriteGenres: ["Behavioral Economics", "Org Sociology", "Biographies & Memoirs", "Literary Fiction", "Systems Thinking"],
  },
  music: {
    title: "Music & Soundscapes",
    description: "Eclectic listener curating focus playlists for deep flow, acoustic evenings, and ambient discovery.",
    genres: ["Indie Acoustic", "Ambient & Lo-Fi", "Neo-Classical", "Indian Fusion", "Classic Soul"],
  },
};
