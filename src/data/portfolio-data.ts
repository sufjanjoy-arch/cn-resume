/**
 * Portfolio Data
 * Single source of truth for all portfolio content
 */

import type {
  PersonalInfo,
  Experience,
  Writing,
  Speaking,
  Project,
  Education,
  SocialLink,
} from "@/types/portfolio";

import headshot from "@/assets/headshot.png";

// ===== Portfolio Data =====

export const personalInfo: PersonalInfo = {
  name: "Elena Rossi",
  title: "Creative Director & Brand Strategist",
  location: { city: "Brooklyn, NY", country: "USA" },
  website: "elenarossi.design",
  email: "hello@elenarossi.design",
  avatar: headshot,
  bio: "I'm a creative director who believes great brands tell stories that move people. With 12 years of experience leading creative teams at agencies and startups alike, I specialize in building brand identities that feel authentic, memorable, and distinctly human.\n\nMy approach blends strategic thinking with artistic intuition—I believe the best creative work happens when data and imagination dance together. I've had the privilege of shaping brand narratives for companies ranging from scrappy startups to Fortune 500 giants.\n\nWhen I'm not obsessing over typography or color palettes, you'll find me hosting creative workshops, mentoring emerging designers, or exploring vintage markets for inspiration. I'm passionate about making design accessible and believe everyone deserves to feel represented by the brands they love.",
  skills: "Brand Strategy, Visual Identity, Creative Direction, Typography, Art Direction, Team Leadership, Design Systems, Storytelling, Campaign Development, Client Presentations, Adobe Creative Suite, Figma, Motion Design, Print Design",
};

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Studio Lumière",
    role: "Founder & Creative Director",
    location: "Brooklyn, NY",
    startDate: "2020-01",
    endDate: null,
    description: "Founded a boutique creative studio specializing in brand identity and campaign work for purpose-driven brands. Led a team of 8 designers and strategists, growing revenue by 200% in three years. Notable clients include Patagonia, Warby Parker, and Glossier. Developed signature 'Story-First' branding methodology now taught in workshops worldwide.",
    current: true,
  },
  {
    id: "exp-2",
    company: "Mother New York",
    role: "Associate Creative Director",
    location: "New York, NY",
    startDate: "2016-03",
    endDate: "2019-12",
    description: "Led creative direction for major brand campaigns including Target's holiday campaign and Stella Artois rebrand. Managed cross-functional teams of 15+ across design, copy, and production. Won 3 Cannes Lions and 2 D&AD Pencils. Mentored junior creatives and established internal design critique program.",
    current: false,
  },
  {
    id: "exp-3",
    company: "Pentagram",
    role: "Senior Designer",
    location: "New York, NY",
    startDate: "2013-06",
    endDate: "2016-02",
    description: "Collaborated with partners on brand identity projects for cultural institutions and tech companies. Key projects included identity systems for the Whitney Museum pop-up exhibition and Mastercard's sonic branding visual companion. Developed expertise in large-scale identity systems and brand guidelines.",
    current: false,
  },
  {
    id: "exp-4",
    company: "Sagmeister & Walsh",
    role: "Junior Designer",
    location: "New York, NY",
    startDate: "2011-09",
    endDate: "2013-05",
    description: "Cut my teeth in one of the world's most innovative design studios. Contributed to campaigns for Adobe, Levi's, and The New York Times. Learned the art of conceptual thinking and experimental typography. This experience shaped my belief that design should provoke emotion.",
    current: false,
  },
];

export const writing: Writing[] = [
  {
    id: "write-1",
    title: "The Death of the Logo (And What Comes Next)",
    publication: "It's Nice That",
    date: "2024-02",
    url: "https://example.com/article-1",
    featured: true,
  },
  {
    id: "write-2",
    title: "Why Your Brand Voice Sounds Like Everyone Else's",
    publication: "Eye Magazine",
    date: "2023-09",
    url: "https://example.com/article-2",
    featured: false,
  },
  {
    id: "write-3",
    title: "Building Creative Teams That Actually Create",
    publication: "Creative Review",
    date: "2023-05",
    url: "https://example.com/article-3",
    featured: false,
  },
  {
    id: "write-4",
    title: "The Case for Imperfection in Brand Design",
    publication: "AIGA Eye on Design",
    date: "2023-01",
    url: "https://example.com/article-4",
    featured: false,
  },
  {
    id: "write-5",
    title: "How to Present Creative Work Without Losing Your Soul",
    publication: "Communication Arts",
    date: "2022-10",
    url: "https://example.com/article-5",
    featured: false,
  },
];

export const speaking: Speaking[] = [
  {
    id: "speak-1",
    event: "AIGA Design Conference 2024",
    date: "2024-10-18",
    location: "Seattle, WA",
    talk: "Story-First: A New Framework for Brand Building",
    description: "A deep dive into developing brand narratives that resonate on an emotional level and stand the test of time.",
    url: "https://example.com/talk-1",
    slidesUrl: "https://example.com/slides-1",
    upcoming: true,
  },
  {
    id: "speak-2",
    event: "Brand New Conference",
    date: "2023-09-22",
    location: "Austin, TX",
    talk: "The Human Element: Why Authenticity Can't Be Designed",
    description: "Exploring how brands can feel genuine in an age of AI-generated everything.",
    url: "https://example.com/talk-2",
    recordingUrl: "https://example.com/recording-2",
    upcoming: false,
  },
  {
    id: "speak-3",
    event: "Creative Mornings NYC",
    date: "2023-04-14",
    location: "New York, NY",
    talk: "Finding Your Creative Confidence",
    description: "An intimate talk about overcoming imposter syndrome and trusting your creative instincts.",
    url: "https://example.com/talk-3",
    recordingUrl: "https://example.com/recording-3",
    upcoming: false,
  },
  {
    id: "speak-4",
    event: "99U Conference",
    date: "2022-06-08",
    location: "New York, NY",
    talk: "Leading Creative Teams Through Uncertainty",
    description: "Practical strategies for maintaining creative excellence during challenging times.",
    recordingUrl: "https://example.com/recording-4",
    slidesUrl: "https://example.com/slides-4",
    upcoming: false,
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "Evergreen Collective",
    description:
      "Complete brand identity for a sustainable fashion marketplace. Created a living brand system that evolves seasonally while maintaining core identity principles.",
    techStack: ["Brand Identity", "Art Direction", "Motion Design", "Guidelines"],
    liveUrl: "https://evergreen.example.com",
    status: "active",
  },
  {
    id: "proj-2",
    name: "Sonora Coffee Roasters",
    description:
      "Craft coffee brand identity inspired by desert landscapes. Developed packaging, retail experience, and digital presence for a chain of 12 locations.",
    techStack: ["Visual Identity", "Packaging", "Environmental", "Digital"],
    liveUrl: "https://sonora.example.com",
    status: "active",
  },
  {
    id: "proj-3",
    name: "The Narrative Project",
    description:
      "A pro-bono initiative creating brand identities for nonprofit storytelling organizations. Helped 15+ orgs amplify their missions through better visual communication.",
    techStack: ["Brand Strategy", "Identity Design", "Mentorship"],
    liveUrl: "https://narrative.example.com",
    githubUrl: "https://github.com/example/narrative",
    status: "active",
  },
  {
    id: "proj-4",
    name: "Type Workshop Series",
    description:
      "Monthly typography workshops teaching designers to develop their own display typefaces. Over 500 designers have participated since 2021.",
    techStack: ["Typography", "Education", "Community"],
    liveUrl: "https://typeworkshop.example.com",
    status: "active",
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Rhode Island School of Design",
    degree: "Master of Fine Arts",
    field: "Graphic Design",
    startYear: "2009",
    endYear: "2011",
    location: "Providence, RI",
    details: "Thesis: 'Visual Language as Cultural Memory'",
  },
  {
    id: "edu-2",
    institution: "Parsons School of Design",
    degree: "Bachelor of Fine Arts",
    field: "Communication Design",
    startYear: "2005",
    endYear: "2009",
    location: "New York, NY",
    details: "Graduated with Honors, Typography Award recipient",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    username: "elenarossi",
    url: "https://linkedin.com/in/elenarossi",
  },
  {
    platform: "Instagram",
    username: "@elenarossi.design",
    url: "https://instagram.com/elenarossi.design",
  },
  {
    platform: "Dribbble",
    username: "elenarossi",
    url: "https://dribbble.com/elenarossi",
  },
  {
    platform: "Twitter",
    username: "@elenarossi",
    url: "https://twitter.com/elenarossi",
  },
];