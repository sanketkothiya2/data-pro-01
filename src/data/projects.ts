export type Project = {
  slug: string;
  title: string;
  blurb: string;
  domain: string;
  year: string;
  featured?: boolean;
  metrics: { value: string; label: string }[];
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "jlr-ai-benchmark",
    title: "AI Benchmarking & GPU Performance Prediction",
    domain: "Machine Learning · Jaguar Land Rover",
    year: "2025",
    featured: true,
    blurb:
      "Predictive analytics platform that evaluates AI hardware performance, correcting manufacturer bias and forecasting GPU efficiency with research-grade accuracy.",
    metrics: [
      { value: "94%", label: "Prediction accuracy" },
      { value: "2,100+", label: "GPU records" },
      { value: "53", label: "Engineered features" },
    ],
    highlights: [
      "Built Random Forest & XGBoost models reaching 94% accuracy on GPU performance prediction.",
      "Designed a normalized PostgreSQL schema with 8 interconnected tables.",
      "Implemented bias-correction algorithms to neutralize manufacturer reporting skew.",
      "Shipped an end-to-end ETL pipeline feeding a real-time Streamlit dashboard.",
    ],
    stack: ["Python", "XGBoost", "PostgreSQL", "Streamlit", "Power BI"],
    liveUrl: "https://jlr-ai-benchmark-prediction-dashboard.onrender.com/",
  },
  {
    slug: "marketing-ab-testing",
    title: "Marketing Campaign A/B Testing & Regression",
    domain: "Statistical Analysis",
    year: "2024",
    featured: true,
    blurb:
      "Compared Facebook Ads vs AdWords for a marketing agency — using hypothesis testing and regression to recommend where every ad dollar should go.",
    metrics: [
      { value: "2 platforms", label: "Head-to-head" },
      { value: "t-test", label: "Significance" },
      { value: "R²", label: "Conversion model" },
    ],
    highlights: [
      "Ran an independent t-test to prove one platform converts significantly better.",
      "Trained a linear regression model predicting conversions from clicks.",
      "Added cointegration testing to find long-term spend–conversion relationships.",
      "Translated stats into a budget recommendation for non-technical stakeholders.",
    ],
    stack: ["Python", "Pandas", "Statsmodels", "Scikit-learn", "Seaborn"],
  },
  {
    slug: "nyc-taxi-revenue",
    title: "Maximizing Driver Revenue — NYC Taxi",
    domain: "Hypothesis Testing",
    year: "2024",
    blurb:
      "Tested whether payment method drives fare size across NYC yellow-cab trips, then quantified the revenue upside of nudging riders toward card payments.",
    metrics: [
      { value: "p < 0.001", label: "Significant" },
      { value: "Card > Cash", label: "Avg fare" },
      { value: "1M+", label: "Trips analyzed" },
    ],
    highlights: [
      "Cleaned and prepared a month of NYC yellow-taxi trip data.",
      "Validated assumptions with QQ plots before testing.",
      "Ran a two-sample t-test confirming card trips carry higher fares.",
      "Framed a practical, low-friction recommendation to lift driver revenue.",
    ],
    stack: ["Python", "Pandas", "SciPy", "Matplotlib"],
  },
  {
    slug: "airlines-occupancy",
    title: "Aviation Performance & Occupancy",
    domain: "SQL · Revenue Analytics",
    year: "2024",
    blurb:
      "Explored an airline's booking and fare data in SQLite to find where empty seats bleed revenue — and modeled the upside of a 10% occupancy lift.",
    metrics: [
      { value: "+10%", label: "Occupancy scenario" },
      { value: "8 tables", label: "SQLite schema" },
      { value: "Fleet", label: "Level analysis" },
    ],
    highlights: [
      "Computed per-aircraft occupancy rates to expose empty-seat losses.",
      "Analyzed revenue trends and fare-condition pricing (Business vs Economy).",
      "Estimated annual turnover impact of a 10% occupancy improvement.",
      "Packaged findings into a stakeholder-ready written report.",
    ],
    stack: ["SQL", "SQLite", "Python", "Pandas"],
  },
  {
    slug: "capm-app",
    title: "CAPM Financial Analysis Web App",
    domain: "FinTech · Streamlit",
    year: "2024",
    featured: true,
    blurb:
      "An interactive Streamlit app that benchmarks stocks against the S&P 500 — calculating beta, expected return and normalized price movement on the fly.",
    metrics: [
      { value: "Beta", label: "Risk estimate" },
      { value: "S&P 500", label: "Benchmark" },
      { value: "Live", label: "Market data" },
    ],
    highlights: [
      "Built reusable functions for normalization, daily returns and beta.",
      "Pulled live market data via yfinance and merged on trade date.",
      "Rendered interactive Plotly charts for price comparison.",
      "Computed CAPM expected return against the S&P 500 benchmark.",
    ],
    stack: ["Python", "Streamlit", "Plotly", "yfinance", "Pandas"],
  },
  {
    slug: "yelp-engagement",
    title: "Yelp User Engagement Analysis",
    domain: "SQL + Python",
    year: "2024",
    blurb:
      "End-to-end study of whether user engagement predicts restaurant success — from loading raw Yelp JSON into SQLite to a custom success score and sentiment cuts.",
    metrics: [
      { value: "5 datasets", label: "Yelp JSON" },
      { value: "IQR", label: "Outlier control" },
      { value: "Geo + time", label: "Dimensions" },
    ],
    highlights: [
      "Loaded raw Yelp JSON (business, review, user, tip, check-in) into SQLite.",
      "Engineered a custom success score from ratings and review volume.",
      "Correlated reviews, tips and check-ins with performance indicators.",
      "Layered in geographic, time-series and elite-user behavior analysis.",
    ],
    stack: ["SQL", "SQLite", "Python", "Folium", "Seaborn"],
  },
  {
    slug: "hotel-cancellations",
    title: "Hotel Booking Cancellation Analysis",
    domain: "Exploratory Analysis",
    year: "2024",
    blurb:
      "Dug into why hotel bookings get cancelled — separating City vs Resort behavior and linking price, season and channel mix to cancellation pressure.",
    metrics: [
      { value: "City vs Resort", label: "Segmented" },
      { value: "ADR", label: "Price driver" },
      { value: "Seasonal", label: "Patterns" },
    ],
    highlights: [
      "Cleaned the dataset, dropping sparse fields and filtering ADR outliers.",
      "Compared cancellation behavior across City and Resort hotels separately.",
      "Linked higher room rates to higher cancellation pressure.",
      "Flagged country and OTA channel concentration in cancelled bookings.",
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    slug: "vendor-performance",
    title: "Vendor Performance Analysis",
    domain: "Business Intelligence · Power BI",
    year: "2024",
    blurb:
      "Company-style vendor analytics combining a SQLite ingestion pipeline, statistical testing and a Power BI dashboard to guide pricing, purchasing and inventory.",
    metrics: [
      { value: "Pipeline", label: "CSV → SQLite" },
      { value: "KPIs", label: "Margin & turnover" },
      { value: "Power BI", label: "Dashboard" },
    ],
    highlights: [
      "Built an ingestion pipeline loading raw CSVs into a SQLite database.",
      "Joined purchases, sales, prices and invoices into a vendor summary table.",
      "Engineered KPIs: gross profit, margin, stock turnover, sales-to-purchase ratio.",
      "Validated findings with confidence intervals and hypothesis tests, then shipped a Power BI dashboard.",
    ],
    stack: ["Python", "SQL", "SQLAlchemy", "Power BI", "Pandas"],
  },
];
