export const defaultConfig = {
  site: {
    title: "Mohammed Waled's Portfolio",
    tagline: "Network & CyberOps Engineer",
    description: "Professional portfolio showcasing my work in networking, SOC, and cybersecurity.",
    domain: "portfolio-rsy6.vercel.app",
    language: "en",
    copyright_year: new Date().getFullYear()
  },
  owner: {
    name: "Mohammed",
    full_name: "Mohammed Waled",
    profession: "Network & CyberOps Engineer",
    bio: "I'm a network security specialist and CyberOps enthusiast. I share knowledge, defend infrastructures, and teach students about cybersecurity fundamentals.",
    location: "Iraq",
    email: "3kr2001@gmail.com"
  },
  social: {
    github: "https://github.com/Mhmdghost",
    linkedin: "",
    twitter: "",
    website: "https://portfolio-rsy6.vercel.app",
    blog: "https://youtube.com/@3KRSECURITY"
  },
  skills: {
    networking: ["pfSense", "Wireshark", "IDS/IPS", "GNS3", "CCNA", "CyberOps"],
    technical: ["Linux", "VirtualBox", "Kali Linux", "VLAN", "Firewall", "Routing", "Packet Tracer"],
    certifications: ["CCNA (in progress)", "CyberOps Associate"]
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
    keywords: "portfolio, network engineer, CyberOps, pfSense, CCNA, SOC",
    author: "Mohammed Waled",
    robots: "index, follow"
  },
  contact: {
    show_contact_form: false,
    email: "3kr2001@gmail.com",
    phone: "",
    address: ""
  },
  projects: []
};
