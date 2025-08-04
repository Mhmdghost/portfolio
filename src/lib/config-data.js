export const defaultConfig = {
  site: {
    title: "Mohammed Waled",
    tagline: "Network Engineer | CyberOps Associate",
    description: "Portfolio of Mohammed Waled, specialized in network security, SOC operations, and practical defensive security projects.",
    domain: "your-domain.com",
    language: "en",
    copyright_year: 2025
  },
  owner: {
    name: "Mohammed Waled",
    full_name: "Mohammed Waled",
    profession: "Network Engineer | CyberOps Associate",
    bio: "I'm Mohammed Waled, a computer engineering graduate and cybersecurity instructor with a passion for SOC operations and network defense. I specialize in tools like pfSense, Wireshark, and IDS/IPS systems, and actively work on building my portfolio with hands-on projects in network monitoring and threat detection.",
    location: "Iraq",
    email: "3kr2001@gmail.com"
  },
  social: {
    github: "https://github.com/Mhmdghost",
    linkedin: "https://www.linkedin.com/in/mohammed-waled-burhan-61b88a30a/",
    youtube: "https://www.youtube.com/@3KRSECURITY",
    website: "",
    blog: ""
  },
  skills: {
    networking: [
      { name: "CCNA (Cisco Certified Network Associate)", icon: "🌐" },
      { name: "CyberOps (Cisco CyberOps Associate)", icon: "🛡️" },
      { name: "SOC Operations", level: "Intermediate", icon: "👨‍💻" },
      { name: "Network Monitoring", level: "Intermediate", icon: "📊" },
      { name: "Firewall Configuration ", level: "Advanced", icon: "🔥" },
      { name: "Incident Response", level: "Intermediate", icon: "🚨" }
    ],
    technical: [
      { name: "pfSense", level: "Advanced", icon: "🧱" },
      { name: "GNS3 (Network Emulation)", level: "Intermediate", icon: "🦪" },
      { name: "SIEM (Security Info & Event Mgmt)", level: "Intermediate", icon: "🔐" },
      { name: "Cisco IOS & Configuration", level: "Intermediate", icon: "⚙️" },
      { name: "Wireshark", level: "Intermediate", icon: "🦈" },
      { name: "Linux & CLI", level: "Advanced", icon: "🐧" },
      { name: "Burp Suite", level: "Intermediate", icon: "🔧" },
      { name: "IDS/IPS Systems", level: "Intermediate", icon: "🛡️" }
    ],
    certifications: [
      { name: "CCNA", description: "Cisco Certified Network Associate", icon: "🏆" },
      { name: "CyberOps Associate", description: "Cisco CyberOps Associate", icon: "🥇" }
    ]
  },
  theme: {
    primary_color: "#3b82f6",
    secondary_color: "#1d4ed8",
    dark_background: "#0f172a",
    card_background: "linear-gradient(145deg, #1e293b 0%, #334155 100%)",
    border_color: "#475569"
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
    keywords: "network security, cybersecurity, CCNA, CyberOps, pfSense, SOC, network monitoring",
    author: "Mohammed Waled",
    robots: "index, follow"
  },
  contact: {
    show_contact_form: false,
    email: "3kr2001@gmail.com",
    phone: "07724227780",
    address: ""
  },
  projects: [
    {
      name: "VLAN + STP Lab",
      description: "A comprehensive Cisco Packet Tracer lab demonstrating VLAN segmentation, trunking, and Spanning Tree Protocol (STP) configuration for building secure, loop-free networks.",
      category: "Networking",
      icon: "🌐",
      highlights: [
        "3x Layer 2 Switches with VLAN segmentation",
        "2x Layer 3 Multilayer Switches for inter-VLAN routing",
        "6 PCs distributed across 3 VLANs",
        "Manual STP configuration with root and designated ports",
        "Complete trunking and inter-VLAN routing setup"
      ],
      technologies: ["Cisco Packet Tracer", "VLAN", "STP", "Trunking", "Inter-VLAN Routing"],
      link: "/projects/vlan-stp"
    }
  ]
};
