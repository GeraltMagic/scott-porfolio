export const personalInfo = {
  name: "James Scott Herford",
  title: "Senior Product Manager, AI/ML",
  email: "scottherford22@icloud.com",
  phone: "(479) 453-9820",
  location: "Bentonville, AR",
  bio: "Product manager with 7+ years of progressive experience shipping ML-powered products at Fortune 1 scale. Led development and deployment of production recommendation engines achieving 95% user acceptance and $5.4M incremental sales across international markets. Combines an M.S. in Data Science with hands-on AI building skills (agentic AI frameworks, LLM-powered tools, Python, SQL) and deep cross-functional leadership experience translating complex ML capabilities into products real users trust and adopt.",
  social: {
    linkedin: "https://www.linkedin.com/in/james-herford-62110391/",
    github: "https://github.com/GeraltMagic",
    substack: "https://substack.com/@aldarametricsong",
  },
};

export const skills = [
  {
    category: "AI/ML Product",
    items: [
      "AI/ML Product Strategy",
      "Production ML Systems",
      "Recommendation Engines",
      "Agentic AI",
      "LLM Applications",
      "Prompt Engineering",
      "MLOps / Model Monitoring",
      "NLP / NLU",
      "Responsible AI",
    ],
  },
  {
    category: "Data & Technical",
    items: [
      "Data Science",
      "Python",
      "R",
      "SQL",
      "Tableau",
      "Jupyter",
      "Experimentation & A/B Testing",
      "Data Visualization (Power BI)",
      "ETL / Data Pipelines",
      "APIs / REST / MCP",
      "Git / CI/CD",
      "Docker",
      "Google Cloud Platform",
      "Microsoft Azure",
    ],
  },
  {
    category: "Leadership & Delivery",
    items: [
      "Cross-Functional Leadership",
      "Stakeholder Management",
      "Roadmap Prioritization",
      "OKRs & KPIs",
      "Executive Communication",
      "Go-to-Market Strategy",
      "Vendor Management",
      "Agile / SAFe",
      "International Markets",
    ],
  },
  {
    category: "Domain Expertise",
    items: [
      "Retail / CPG",
      "Merchandising & Assortment",
      "Supply Chain",
      "Ecommerce",
    ],
  },
];

export const selectedAchievements = [
  "Shipped an ML-backed recommendation engine with a 95% merchant acceptance rate that generated $5.4M incremental sales across Central American markets",
  "Designed and validated ML-informed modular assortments driving 2–3% sales lift across four international markets (Mexico Retail, Sam's Mexico, Canada, Central America)",
  "Reduced assortment decision cycle time by 50% through automation of data pipelines and standardized decision templates",
  "Optimized production analytics infrastructure, cutting on-demand job runtime from 12 hours to 1.5 hours, accelerating model validation and merchant feedback loops",
];

export const experience = [
  {
    role: "Product Manager III — ML Recommendations & Assortment Intelligence",
    company: "Walmart International",
    location: "Bentonville, AR",
    startDate: "Apr 2022",
    endDate: "Present",
    bullets: [
      "Lead end-to-end product lifecycle for ML-driven assortment recommendation systems integrating sales signals, customer data, and inventory constraints to generate optimized modular assortments and layouts at scale",
      "Own product strategy and roadmap for recommendation engine serving multiple international markets; achieved 95% merchant acceptance rate and $5.4M incremental revenue through iterative model-product improvements",
      "Partner with data science, engineering, and merchant teams to define ML model requirements, validate outputs, and translate algorithmic recommendations into actionable assortment decisions",
      "Design and deliver data-driven business narratives using Power BI and Scintilla dashboards to secure stakeholder alignment and prioritize product investments",
      "Implemented automated data pipelines and standardized decision frameworks, reducing assortment cycle times by 50% and improving operational scalability",
    ],
  },
  {
    role: "Product Specialist II — Assortment Analytics & ML Integration",
    company: "Walmart International",
    location: "Bentonville, AR",
    startDate: "Apr 2021",
    endDate: "Apr 2022",
    bullets: [
      "Led assortment optimization initiatives integrating ML model outputs and customer insights into merchant workflows to improve assortment relevance across international markets",
      "Partnered with buyers to test modular layout hypotheses using ML-generated recommendations; created Power BI reports surfacing trade-offs between assortment breadth and space constraints",
      "Coordinated cross-functional pilots and translated analytical outcomes into scalable operational rollouts",
    ],
  },
  {
    role: "Technical Project Manager 2 — Merchandising Technology & Data Products",
    company: "Walmart Global Tech",
    location: "Bentonville, AR",
    startDate: "Aug 2019",
    endDate: "Mar 2021",
    bullets: [
      "Managed cross-functional delivery of merchandising technology and ML data products improving assortment recommendation quality and operational execution",
      "Championed Agile and DevOps practices to accelerate delivery cycles and improve production reliability for ML analytics pipelines",
      "Coordinated with Data Science & Engineering to deploy monitoring and production infrastructure for assortment models",
    ],
  },
  {
    role: "Associate Technical Project Manager — Data Science & Engineering",
    company: "Walmart Global Tech",
    location: "Bentonville, AR",
    startDate: "Jun 2018",
    endDate: "Jul 2019",
    bullets: [
      "Partnered with International Data Science & Engineering to optimize production ML analytics jobs, cutting runtime from 12 hours to 1.5 hours and enabling faster model iteration",
      "Served as liaison between engineering, data science, and merchant teams to ensure ML solutions addressed real merchant needs and supported modular execution",
    ],
  },
  {
    role: "Agile Consultant / Scrum Master",
    company: "UST Global (supporting Walmart Technology)",
    location: "Bentonville, AR",
    startDate: "Mar 2016",
    endDate: "Aug 2017",
    bullets: [
      "Supported Walmart Global Data & Analytics transformation as SAFe Scrum Master; facilitated cross-team collaboration and process improvements across analytics engineering teams",
    ],
  },
];

export const projects = [
  {
    title: "AssortIQ",
    subtitle: "AI-Powered Assortment Optimization",
    description:
      "MCP server with 6 AI tools — Chronos-Bolt demand forecasting, embedding-based SKU similarity, store clustering, and recommendation engine. Built for mid-market retailers who lack enterprise-grade assortment intelligence.",
    impact: "Designed for review-cycle reduction from weeks to days with human-in-the-loop approval on every recommendation.",
    stack: ["Python", "FastMCP", "Chronos", "Sentence-Transformers", "Anthropic SDK"],
    role: "Solo PM + Engineer",
    year: "2025",
    caseStudy: "/projects/assortiq.html",
  },
  {
    title: "Attribute Enrichment",
    subtitle: "Ecommerce Discovery Pipeline",
    description:
      "Confidence-aware attribute enrichment system for ecommerce catalogs. Surfaces medium-confidence predictions for human review while behavioral signals (searches, clicks, conversions) update confidence scores in real time.",
    impact: "Addresses zero-result rates and poor filter coverage caused by incomplete product attribute data across long-tail SKUs.",
    stack: ["React", "Hooks", "Zero Dependencies"],
    role: "Solo PM + Engineer",
    year: "2025",
    caseStudy: "/projects/attribute-enrichment.html",
  },
  {
    title: "WeatherWear",
    subtitle: "Personalized Clothing Recommendation Engine",
    description:
      "Scoring engine that combines 6 environmental signals with user profile dimensions (thermal tendency, age, activity level) to produce personalized clothing recommendations. Every suggestion includes an explainability breakdown.",
    impact: "67-item scoring model with dynamic weight capping, full feedback loop, and exportable training data for model iteration.",
    stack: ["React", "JSX", "Lucide"],
    role: "Solo PM + Engineer",
    year: "2025",
    caseStudy: "/projects/weatherwear.html",
  },
  {
    title: "Royals Player Insights",
    subtitle: "MLB Analytics & Causal Inference Dashboard",
    description:
      "Python analytics engine combining SARIMAX forecasting, feature importance, partial dependence plots, causal inference (DoWhy/EconML), and anomaly detection — going past correlation to answer what caused performance changes.",
    impact: "CLI-first design with synthetic data fallback, soft dependency stack, and full test suite for offline/CI use.",
    stack: ["Python", "pandas", "statsmodels", "DoWhy", "EconML", "pybaseball"],
    role: "Solo PM + Analyst",
    year: "2025",
    caseStudy: "/projects/royals.html",
  },
];

export const aiProjects = [
  {
    title: "Agentic AI Technical Curriculum",
    description:
      "Completed structured 20-hour learning plan covering agent loops, ReAct patterns, LangGraph, multi-agent system design, evaluation frameworks, and production safety.",
  },
  {
    title: "AI-Powered PRD Generator",
    description:
      "Built a custom AI tool that produces both a formal Product Requirements Document and a companion PM Learning Guide, using LLM APIs and structured prompting.",
  },
  {
    title: 'PM Mentor Skill ("Marty")',
    description:
      "Designed and deployed a custom Claude skill covering six PM domains (strategy, AI/ML product development, user research, metrics/OKRs, stakeholder management, agile) with integrated Substack research support.",
  },
  {
    title: "Full-Stack AI Applications",
    description:
      "Built React applications with real-time features, integrating Claude Code, GitHub CI/CD, and modern LLM APIs. Hands-on experience with prompt engineering, tool use, and agentic patterns.",
  },
  {
    title: "PM Content Creator",
    description:
      "Publish product management thinking on Substack, covering AI product strategy, frameworks, and applied PM leadership.",
  },
];

export const education = [
  {
    degree: "M.S., Data Science",
    school: "Southern Methodist University",
    dates: "2019",
  },
  {
    degree: "Graduate Certificate, Enterprise Information Systems / Business Analytics",
    school: "University of Arkansas",
    dates: "2016",
  },
  {
    degree: "M.A., Sociology",
    school: "University of Arkansas",
    dates: "2013",
  },
  {
    degree: "B.A., Sociology",
    school: "Arkansas Tech University",
    dates: "2011",
  },
];

export const certifications = [
  "Certified Scrum Product Owner (CSPO)",
  "Professional Scrum Product Owner (PSPO)",
  "SAFe 4.5 Advanced Scrum Master",
  "SAFe Agilist",
  "Digital Product Management — University of Virginia",
  "ISC2 CC",
  "CompTIA Security+",
];
