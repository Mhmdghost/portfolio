export const defaultConfig = {
  site: {
    title: "Portfolio Website",
    tagline: "Professional Portfolio",
    description: "A professional portfolio website",
    domain: "localhost",
    language: "en",
    copyright_year: new Date().getFullYear()
  },
  owner: {
    name: "Your Name",
    full_name: "Your Full Name",
    profession: "Professional",
    bio: "Professional bio goes here.",
    location: "Location",
    email: "contact@example.com"
  },
  social: {
    github: "",
    linkedin: "",
    twitter: "",
    website: "",
    blog: ""
  },
  skills: {
    networking: [],
    technical: [],
    certifications: []
  },
  theme: {
    primary_color: "#13B9FD",
    secondary_color: "#0175C2",
    dark_background: "#0D1117",
    card_background: "linear-gradient(145deg, #1C2128 0%, #22272E 100%)",
    border_color: "#30363D"
  },
  navigation: {
    show_home: true,
    show_projects: true,
    show_blog: true,
    show_contact: false
  },
  features: {
    show_skills: true,
    show_certifications: true,
    show_projects: true,
    show_blog: true,
    show_social_links: true,
    enable_dark_mode: true,
    enable_animations: true
  },
  seo: {
    keywords: "portfolio, professional",
    author: "Your Name",
    robots: "index, follow"
  },
  contact: {
    show_contact_form: false,
    email: "contact@example.com",
    phone: "",
    address: ""
  },
  projects: []
};
