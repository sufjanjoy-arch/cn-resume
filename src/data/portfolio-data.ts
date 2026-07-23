/**
 * Portfolio Data — single source of truth
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
  bio: "HR Business Partner with 7.5+ years of experience building and scaling people systems across high-growth startups. Currently at Finbox, a high-growth digital lending fintech, driving performance management, OKR governance, competency frameworks, and employee relations for a 230+ employee span.\n\nExperienced in designing and operationalizing KPI-driven PMS, implementing HRMS platforms, and supporting organization-wide change management initiatives including ESOP communication and rollout support. Proven ability to partner with leadership on org design, performance architecture, and workforce effectiveness while translating people data into actionable organizational interventions.\n\nFluent in English, Hindi, and Malayalam; conversational in Gujarati.",
  skills:
    "HR Strategy, Performance Management (OKRs and KPIs), HRIS (Keka, Zoho, PeopleCues), Employee Lifecycle Management, Policy Design and Compliance, Talent Acquisition, Compensation and Benefits Structuring, Employee Engagement and Experience, Change Management, Data-Driven HR (eNPS, People Analytics), HR Project Management, Remote Onboarding Optimization, ESOP Design and Rollout, Senior Leadership Partnership, Cross-Functional Collaboration, Stakeholder Communication, Conflict Resolution",
};

export const shortIntro =
  "I build the people systems that let fast-moving companies scale without losing the plot — performance frameworks, HR tech, and the everyday craft of helping teams work better together.";

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
      "Consulted leading Investment Banks (Morgan Stanley, Goldman Sachs, JP Morgan Chase, Wells Fargo), E-commerce giants, Gaming ventures, Product Firms, and Start-ups to find the right candidates.\n\nServed as the single point of contact for two of the Big Four consultancies to understand staffing requirements, manage resources, and strategize to ensure successful delivery.",
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
      "Headed the HR department, collaborating closely with senior leadership to design and implement comprehensive HR policies and practices for diverse global teams (APAC, Africa, LATAM).\n\nOwned end-to-end development and execution of HR programs covering recruitment, onboarding, retention, performance management, compensation, benefits, rewards, recognition, and employee engagement.\n\nRevamped and streamlined the remote onboarding process, significantly enhancing new hire experience and reducing time to full productivity.\n\nImplemented OKR tool (PeopleCues) to help track visibility and drive performance across the organization. Led the design, rollout, and communication of an OKR-based Performance Management System to improve goal alignment and performance clarity across teams.\n\nCrafted band-wise Competency matrix to facilitate Succession Planning and drive organization-wide learning.\n\nManaged major change initiatives including compensation restructuring and ESOP rollout to align incentives with business objectives and improve employee satisfaction.\n\nDeveloped and executed employee recognition initiatives aligned with company values, fostering a culture of appreciation and engagement.\n\nAnalyzed eNPS survey data and formulated actionable strategies that addressed key employee concerns, leading to measurable improvements in employee satisfaction.",
    tools: [
      { name: "PeopleCues", logo: "https://logo.clearbit.com/peoplecues.com", color: "#6366F1" },
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
      "Managed end-to-end project of implementing KPI-based PMS on Zoho People for a 130+ member IT team.",
    tools: [
      { name: "Zoho People", logo: "https://logo.clearbit.com/zoho.com", color: "#E42527" },
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
      "Performance Management, HR Systems, and Automation: Redesigned PMS framework with measurable KPIs, co-developed an in-house performance management system using CursorAI, and automated key HR workflows including communications, reimbursements, asset tracking, and leave notifications to improve efficiency and tracking accuracy.\n\nHR Governance and Policy Architecture: Overhauled end-to-end HR documentation including offer and appointment letters, onboarding kits, appraisal and confirmation templates, exit and handover processes, and Employee Handbook, ensuring policy consistency and reduced operational risk.\n\nHR Tech Implementation and Process Digitization: Led deployment of Zoho People, automating leave, attendance, and core HR workflows, driving adoption and streamlining HR operations across the organization.\n\nEmployee Lifecycle Management and Relations: Designed structured probation review process improving clarity and time-to-productivity for new hires, mediated employee conflicts, and led group insurance rollout ensuring 100% coverage compliance and issue resolution.\n\nCompensation, Payroll, and Employee Experience: Managed payroll coordination and bonus cycles ensuring accuracy and timeliness, while conducting regular employee connect 1:1s and organizing engagement initiatives to strengthen morale and workplace culture.",
    tools: [
      { name: "Zoho People", logo: "https://logo.clearbit.com/zoho.com", color: "#E42527" },
      { name: "Cursor AI", logo: "https://logo.clearbit.com/cursor.com", color: "#000000" },
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
  "Finbox is a high-growth digital lending fintech, and I partner with leadership across a 230+ employee span inside a 370-person organization. My focus is the connective tissue of performance: end-to-end PMS cycles on Keka, quarterly OKR governance, a competency matrix that makes career paths legible, and manager playbooks that raise the coaching floor. I also redesigned the eNPS and onboarding feedback loops so we hear what’s actually going on—and can act on it before it becomes attrition.\n\nIn parallel, I designed and built the Finbox People app—a structured people-intelligence layer that captures structured connect and feedback data and translates it into dashboards and actionable insights, intended to give leadership organization-wide visibility into engagement trends, manager effectiveness, recurring pain points, and emerging attrition risks.",    
    description:
      "Performance Management and OKR Governance: Led end-to-end PMS cycles on Keka and institutionalized quarterly OKR frameworks across teams, driving goal alignment, structured reviews, and improved performance accountability.\n\nHR Business Partnering and Span Leadership: Acted as HRBP for 230+ employees in a 370-member organization, partnering with leadership to drive people strategy, resolve organizational challenges, and enable data-backed decision-making.\n\nCompetency Framework and Career Architecture: Designed and implemented a comprehensive skill and competency matrix across functions, enabling structured career pathing, clearer role expectations, and targeted development planning.\n\nEmployee Engagement and Experience Optimization: Led employee connect initiatives and redesigned eNPS and onboarding feedback mechanisms, generating actionable insights to enhance engagement and improve onboarding effectiveness.\n\nManagerial Effectiveness and Coaching Enablement: Developed and deployed manager best-practice playbooks, strengthening coaching capabilities and improving the effectiveness of the managerial layer.",
    tools: [
      { name: "Keka", logo: "https://logo.clearbit.com/keka.com", color: "#2A9D8F" },
      { name: "Claude", logo: "https://logo.clearbit.com/anthropic.com", color: "#D97757" },
      { name: "Google Antigravity", logo: "https://logo.clearbit.com/google.com", color: "#4285F4" },
      { name: "GitHub", logo: "https://logo.clearbit.com/github.com", color: "#181717" },
    ],
  },
];

export const writing: Writing[] = [];
export const speaking: Speaking[] = [];
export const projects: Project[] = [];

export const education: Education[] = [
  {
    id: "edu-1", institution: "Gujarat University",
    degree: "Master of Science (MSc)", field: "Human Resources / Organizational Development",
    startYear: "2016", endYear: "2018", location: "Gujarat, India", details: "",
  },
  {
    id: "edu-2", institution: "Udemy", degree: "Certification", field: "People Analytics",
    startYear: "", endYear: "", location: "Online",
    details: "PEOPLE ANALYTICS 101: HR Analytics Fundamentals",
  },
  {
    id: "edu-3", institution: "LinkedIn Learning", degree: "Certification", field: "Business Intelligence",
    startYear: "", endYear: "", location: "Online", details: "Power BI Essential Training",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn", username: "chaitranair",
    url: "https://www.linkedin.com/in/chaitranair/",
  },
];
