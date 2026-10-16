import type { Dictionary } from "./es";

/**
 * English copy. Must follow exactly the same structure as es.ts
 * (TypeScript flags any missing or extra key).
 */
const en: Dictionary = {
  meta: {
    title: "Latina 768 Services | Marketing consulting, AI and automation",
    description:
      "Marketing consulting, artificial intelligence, sales automation and web development for small businesses that want to grow.",
  },

  nav: {
    label: "Main",
    solutions: "Solutions",
    services: "Services",
    process: "How we work",
    projects: "Projects",
    about: "About us",
    contact: "Contact",
    cta: "Request a consultation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    home: "Latina 768 Services, home",
    skip: "Skip to content",
  },

  hero: {
    badge: "Marketing consulting powered by AI",
    titleLead: "We help your business grow with",
    titleAccent: "strategy, technology and innovation.",
    subtitle:
      "Marketing consulting, artificial intelligence, sales automation and web development for small businesses that want to grow.",
    primaryCta: "Request a consultation",
    secondaryCta: "Explore our services",
    highlights: ["Service in English and Spanish", "No tech team needed", "Texas-based company"],
    flow: {
      title: "A complete system for growth",
      tag: "4 areas",
      caption: "How our services connect",
      steps: [
        {
          title: "Digital strategy",
          text: "We define what to say, to whom and on which channels.",
        },
        {
          title: "Web presence",
          text: "A clear website that explains your offer and receives inquiries.",
        },
        {
          title: "Automated follow-up",
          text: "Every lead is recorded and followed up.",
        },
        {
          title: "AI-assisted service",
          text: "Fast answers to common questions, even after hours.",
        },
      ],
    },
  },

  solutions: {
    eyebrow: "Solutions",
    title: "Everyday problems we help you solve",
    intro: "If any of these sound familiar, there's a simpler way to do it.",
    items: [
      {
        title: "Unanswered inquiries",
        problem: "Messages that arrive after hours or get lost between channels.",
        answer: "Automatic answers to common questions, at any hour.",
      },
      {
        title: "Disorganized sales follow-up",
        problem: "Leads scattered across chats, notebooks and loose spreadsheets.",
        answer: "Your contacts in one place, with reminders.",
      },
      {
        title: "Repetitive manual work",
        problem: "Copying data, confirming appointments and sending the same emails by hand.",
        answer: "We automate what repeats.",
      },
      {
        title: "Disconnected tools",
        problem: "Forms, email and calendar that don't talk to each other.",
        answer: "We connect them so information flows on its own.",
      },
      {
        title: "Weak online presence",
        problem: "A website that doesn't explain what you do or bring in inquiries.",
        answer: "Pages and forms designed to win clients.",
      },
    ],
  },

  services: {
    eyebrow: "Services",
    title: "Four areas that work together",
    intro:
      "Strategy sets the direction; technology helps carry it out. We combine both based on what your business needs.",
    cta: "Let's talk about this service",
    items: [
      {
        id: "estrategia",
        title: "Digital strategy",
        text: "Marketing consulting and planning to strengthen your online presence, improve your business communication and identify growth opportunities.",
        benefits: [
          "A clear plan for what to say and where",
          "More consistent sales messaging",
          "Growth opportunities identified",
        ],
      },
      {
        id: "automatizacion",
        title: "Sales automation",
        text: "Solutions that streamline how you attract, serve and follow up with clients, with fewer repetitive tasks and better organization.",
        benefits: [
          "Leads and clients kept organized",
          "Follow-up that doesn't rely on memory",
          "Less time on repetitive tasks",
        ],
      },
      {
        id: "ia",
        title: "AI tools integration",
        text: "We bring artificial intelligence tools into your business to support customer service, streamline processes and boost productivity.",
        benefits: [
          "Faster service, even after hours",
          "Tools chosen for your case",
          "Your team focuses on what needs human judgment",
        ],
      },
      {
        id: "web",
        title: "Web development",
        text: "Design and development of business websites, landing pages and digital solutions tailored to your company's commercial needs.",
        benefits: [
          "A website that explains what you do",
          "Pages built to receive inquiries",
          "Mobile-friendly design",
        ],
      },
    ],
  },

  process: {
    eyebrow: "How we work",
    title: "A clear process, from the first conversation on",
    steps: [
      { title: "We analyze", text: "We analyze your business needs and goals." },
      { title: "We design the strategy", text: "We design a digital strategy tailored to your needs." },
      { title: "We implement", text: "We implement the agreed tools and solutions." },
      { title: "We evaluate and improve", text: "We evaluate results and identify opportunities for improvement." },
    ],
  },

  audience: {
    eyebrow: "Who it's for",
    title: "Built for small businesses and entrepreneurs",
    text: "Businesses that want to communicate better, attract more clients and organize their operations without an in-house marketing or tech department.",
    sectors: ["Cleaning", "Maintenance", "Beauty and aesthetics", "Academies", "Professional services"],
    other: "And other industries",
  },

  projects: {
    eyebrow: "Projects",
    title: "Real projects you can visit",
    intro: "Some of the systems we have built for clients and for our own brand.",
    kinds: { client: "Client", own: "Own project", lab: "Lab" },
    challengeLabel: "The challenge",
    workLabel: "What we did",
    visit: "Visit site",
    categories: {
      web: "Web development",
      apps: "Apps",
      automation: "Automation",
      ai: "Artificial intelligence",
    },
  },

  about: {
    eyebrow: "About us",
    title: "Strategy and technology working for your business.",
    text: "At Latina 768 Services we believe small businesses deserve access to innovative digital tools too. We combine marketing consulting, automation and artificial intelligence to help businesses strengthen their online presence, simplify processes and seize new opportunities.",
    missionTitle: "Mission",
    mission:
      "To help small businesses and entrepreneurs grow by combining marketing consulting with digital tools, automation and artificial intelligence.",
    visionTitle: "Vision",
    vision:
      "To be the trusted strategy and technology partner for small businesses that want to grow without an in-house marketing or tech department.",
    valuesTitle: "Values",
    values: ["Clarity", "Integrity", "Approachability", "Practical innovation", "Commitment"],
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's talk about what your business needs.",
    text: "Tell us how you work today and we'll show you what can be simplified.",
    phoneLabel: "Call",
    emailLabel: "Send an email",
    location: "Texas, United States",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      company: "Company",
      companyPlaceholder: "Your business name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      phone: "Phone",
      optional: "(optional)",
      phonePlaceholder: "(000) 000-0000",
      service: "Service of interest",
      servicePlaceholder: "Select an option",
      serviceOptions: {
        estrategia: "Digital strategy",
        automatizacion: "Sales automation",
        ia: "AI tools integration",
        web: "Web development",
        otro: "Not sure yet",
      },
      message: "Message",
      messagePlaceholder: "Briefly tell us what you'd like to improve",
      consentPrefix: "By submitting, you agree to our",
      consentLink: "Privacy Policy",
      submit: "Send request",
      sending: "Sending…",
      honeypot: "Leave this field empty",
    },
    errors: {
      nameRequired: "Please enter your name.",
      emailRequired: "Please enter your email.",
      emailInvalid: "Please check the email format.",
      phoneInvalid: "Please check the phone number.",
      serviceRequired: "Please select a service.",
      messageRequired: "Briefly tell us what you need.",
      messageTooLong: "The message is too long (2,000 characters max).",
      tooLong: "This field is too long.",
    },
    status: {
      success: "We received your request. We'll reply to the email you provided.",
      fixErrors: "Please review the highlighted fields.",
      unavailable:
        "The form is not available right now. Email us at {email} or call {phone}.",
      failed: "We couldn't send your request. Please try again or email us at {email}.",
      tooFast: "Please wait a few seconds and try again.",
    },
  },

  footer: {
    legal:
      "Latina 768 Services is a trade name (DBA) of Latina Realty Investment LLC · Texas, United States.",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    rights: "Latina 768 Services",
  },

  legal: {
    back: "Back to home",
    updated: "Last updated",
    draftNotice: "Draft pending review.",
  },
};

export default en;
