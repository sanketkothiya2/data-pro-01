export const site = {
  name: "Sanket Kothiya",
  role: "Data Analyst",
  tagline: "Turning messy data into decisions that move the needle.",
  location: "Windsor, Ontario, Canada",
  // ⚠️ Update these with your real links before deploying.
  email: "sanketkothiya50@gmail.com",
  phone: "+1 226-975-7452",
  showPhone: true,
  github: "https://github.com/sanketkothiya",
  linkedin: "https://www.linkedin.com/in/sanket-kothiya",
  resumePath: "/Sanket_Kothiya_Resume.pdf",
  photo: "/sanket.png",
  summary:
    "Data Analyst with 2 years of experience turning complex datasets into business insight. I work across SQL, Python and BI tooling (Power BI, Streamlit, Excel) to clean, model and visualize data — building dashboards and pipelines that make reporting faster and decisions sharper.",
};

export const stats = [
  { value: 2, suffix: "+", label: "Years analyzing data" },
  { value: 9, suffix: "", label: "End-to-end projects" },
  { value: 94, suffix: "%", label: "Best model accuracy" },
  { value: 28, suffix: "%", label: "Peak conversion lift" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "R", "JavaScript", "TypeScript"],
  },
  {
    title: "Analytics & BI",
    items: ["Power BI", "DAX", "Excel (VBA)", "Google Analytics", "Matplotlib", "Seaborn"],
  },
  {
    title: "Python Stack",
    items: ["Pandas", "NumPy", "Streamlit", "Scikit-learn"],
  },
  {
    title: "Data & Cloud",
    items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "ETL Pipelines", "AWS", "Azure", "GCP", "Microsoft Fabric"],
  },
];

export const experience = [
  {
    role: "Data Analyst — Industry Collaboration",
    company: "Jaguar Land Rover",
    location: "Windsor, ON · via University of Windsor",
    period: "May 2025 — Aug 2025",
    current: false,
    points: [
      "Partnered with JLR's Semiconductor Modeling & Performance Evaluation team to build an end-to-end AI benchmarking platform that accelerated GPU performance evaluation for stakeholders.",
      "Designed a normalized PostgreSQL schema of 8 interconnected tables storing 2,100+ GPU records and 53 engineered features, improving query performance for downstream analytics.",
      "Built a Streamlit dashboard delivering real-time GPU benchmarks, cost-optimization insights, and cross-vendor comparison so stakeholders could spot savings within hours.",
      "Engineered an end-to-end ETL pipeline unifying heterogeneous data sources into a single benchmarking schema, cutting manual prep work.",
    ],
  },
  {
    role: "Data Analyst",
    company: "LiveField",
    location: "Surat, India",
    period: "Sep 2022 — Mar 2024",
    current: false,
    points: [
      "Analyzed structured and unstructured data with SQL and Python (pandas, NumPy) to streamline workflows and surface the drivers behind faster operational decisions.",
      "Built interactive Power BI dashboards and reports that lifted visibility into key business metrics and sharpened stakeholder reporting.",
      "Implemented data validation and quality checks, reducing errors and protecting data integrity across multiple systems.",
      "Built reusable data models and reporting templates to cut redundancy and scale recurring analysis tasks.",
    ],
  },
];

export const education = [
  {
    school: "University of Windsor",
    degree: "Master of Applied Computing",
    period: "May 2024 — Aug 2025",
    location: "Windsor, Canada",
  },
  {
    school: "A.D. Patel Institute of Technology",
    degree: "B.Tech, Computer Engineering",
    period: "May 2018 — May 2022",
    location: "Anand, India",
  },
];
