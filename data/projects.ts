export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectRecord = {
  slug: string;
  title: string;
  tag: string;
  overview: string;
  description: string;
  features: string[];
  tech: string[];
  extra: string;
  metrics: ProjectMetric[];
  links?: { label: string; url: string }[];
  screenshotHeading?: string;
  screenshots?: string[];
  about?: string;
  domain: "ios" | "ml";
  appLogo?: string;
};

export const projects: ProjectRecord[] = [
  {
    slug: "reptrack-pro",
    title: "RepTrack Pro",
    tag: "iOS Health & Fitness • Featured",
    overview:
      "AI-powered fitness and nutrition platform with a hybrid AI-deterministic architecture, HealthKit sync, Apple Watch support, Live Activities, and validated plan generation.",
    description:
      "Production iOS fitness platform built as sole developer, combining deterministic training logic with constrained LLM generation, structured validation, Vision OCR imports, HealthKit sync, Apple Watch companion features, widgets, Live Activities, and StoreKit 2 subscriptions.",
    features: [
      "Hybrid AI-deterministic architecture with deterministic training splits, progression, and metabolic math",
      "4-stage AI generation pipeline with Groq Llama 3.3 70B, OpenAI failover, provider routing, and plan validation",
      "Structured 1,651-exercise database across 8 categories, 15 muscle groups, 21 equipment types, and 4 difficulty tiers",
      "Literature-gated PlanValidator enforcing MEV/MAV/MRV, RIR caps, recovery limits, and energy-availability floors",
      "Vision OCR and parsers for PDF, DOCX, CSV, XLSX, and image-based trainer program imports",
      "Apple Watch companion, Live Activities, widgets, iCloud sync, PDF export, and StoreKit 2 subscriptions",
    ],
    tech: ["SwiftUI", "SwiftData", "HealthKit", "CoreML", "Vision", "WatchKit", "StoreKit 2", "Groq", "OpenAI"],
    extra:
      "RepTrack Pro focuses on real production fitness use-cases: tracking fidelity, recovery-aware streak logic, and polished day-to-day UX from onboarding to post-workout reporting.",
    metrics: [
      { value: "1st", label: "CBIC 2026" },
      { value: "1,651", label: "Exercises" },
      { value: "139", label: "Tests" },
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/reptrack-pro/id6751082017?uo=4" },
      { label: "Support Center", url: "https://manikantasirumalla.github.io/reptrackpro-legal/support.html" },
    ],
    screenshotHeading: "RepTrack Pro Screenshots",
    screenshots: [
      "/assets/projects/reptrack/01.png",
      "/assets/projects/reptrack/02.png",
      "/assets/projects/reptrack/03.png",
      "/assets/projects/reptrack/04.png",
      "/assets/projects/reptrack/05.png",
      "/assets/projects/reptrack/06.png",
      "/assets/projects/reptrack/07.png",
      "/assets/projects/reptrack/08.png",
      "/assets/projects/reptrack/09.png",
      "/assets/projects/reptrack/10.png",
    ],
    domain: "ios",
    appLogo: "/assets/projects/reptrack/icon.png",
  },
  {
    slug: "tech-signal",
    title: "Tech Signal",
    tag: "SwiftUI • Developer Feed • Privacy-first",
    overview:
      "Native SwiftUI iOS app that brings tech news, developer discussions, trending repos, AI/ML reads, and tech events from 30+ sources into one clean place, with no subscriptions, no ads, no tracking, and zero third-party dependencies.",
    description:
      "A unified feed for developers that brings together Hacker News, Reddit, GitHub, RSS, supply-chain updates, Salesforce/CRM verticals, and more. Cache-first loading keeps the feed fast, while a smart layer adds dwell-time ranking, trending signals, mute and boost controls, inline discussions, related reading, and changelog diffs without third-party SDKs.",
    features: [
      "Core feed from Hacker News, Reddit, GitHub, and RSS with cache-first, full-bleed card layout",
      "Smart ranking with dwell-time signals, trending detection, mute/boost, threads, related reading, and changelog diffs",
      "On-device article summaries using Apple NaturalLanguage, so users can tap to summarize while everything stays fully local",
      "Tech Events tab combining Confs.tech, developers.events, and Eventbrite with filter chips and CFP banners",
      "GitHub release tracker for watched repositories with SwiftData persistence",
      "Developer tool status dashboard monitoring 13 services via Atlassian Statuspage",
      "Weekly digest compiled on-device from bookmarks, releases, events, and cached feed items",
      "Morning briefing widget, Spotlight/Siri support, deep links, custom URL scheme, and a StoreKit 2 tip jar with three consumable tiers",
      "Explore tab with five discovery sections and a segmented source picker",
    ],
    tech: [
      "SwiftUI",
      "SwiftData",
      "NaturalLanguage",
      "StoreKit 2",
      "WidgetKit",
      "App Intents",
      "URL Schemes",
      "RSS & REST",
    ],
    extra:
      "Tech Signal is structured around a privacy-first architecture: first-party networking only, on-device intelligence for summaries and digests, and native Apple integrations for discovery and monetization without ad networks or analytics SDKs.",
    metrics: [
      { value: "30+", label: "Sources" },
      { value: "Local", label: "Summaries" },
      { value: "0", label: "Third-party SDKs" },
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/tech-signal/id6759932010?uo=4" },
      { label: "Privacy Policy", url: "https://manikantasirumalla.github.io/Tech-signal-legal/privacy.html" },
    ],
    domain: "ios",
    appLogo: "/assets/projects/tech-signal/icon.png",
  },
  {
    slug: "dermafusion",
    title: "DermaFusion",
    tag: "iOS + On-Device AI",
    overview:
      "On-device 8-class skin lesion classification app built around an EfficientNet-B4 model, CoreML deployment, and interpretable scan-to-assessment workflows.",
    description:
      "M.S. capstone project that trained an EfficientNet-B4 skin-lesion classifier across 61,694 dermoscopy images, used leakage-safe patient-grouped splits, and exported the model to CoreML for on-device iOS inference with Grad-CAM-style interpretability.",
    features: [
      "Trained EfficientNet-B4 with PyTorch, timm, AMP mixed precision, AdamW, and cosine annealing",
      "Unified ISIC 2018, 2019, 2020, and PAD-UFES-20 data with leakage-safe patient-grouped evaluation",
      "Handled severe class imbalance with weighted sampling and class-balanced focal loss",
      "Exported a deployment-ready CoreML package through TorchScript tracing and coremltools",
      "Select exact body location with interactive 3D body model tapping",
      "Toggle Grad-CAM overlays for interpretable diagnosis support",
      "Review confidence, class probabilities, metadata, and lesion education in one workflow",
    ],
    tech: ["SwiftUI", "CoreML", "PyTorch", "timm", "TorchScript", "coremltools", "Grad-CAM"],
    extra:
      "DermaFusion emphasizes explainability and clinical-style flow design, keeping prediction confidence and lesion education visible at each decision step.",
    metrics: [
      { value: "8", label: "Classes" },
      { value: "61,694", label: "Images" },
      { value: "0.806", label: "Balanced Acc." },
    ],
    links: [{ label: "Project Repo", url: "https://github.com/ManikantaSirumalla/DermaFusion" }],
    screenshotHeading: "DermaFusion Screenshots",
    screenshots: [
      "/assets/projects/dermafusion/01.png",
      "/assets/projects/dermafusion/02.png",
      "/assets/projects/dermafusion/03.png",
      "/assets/projects/dermafusion/04.png",
      "/assets/projects/dermafusion/05.png",
      "/assets/projects/dermafusion/06.png",
      "/assets/projects/dermafusion/07.png",
      "/assets/projects/dermafusion/08.png",
    ],
    domain: "ios",
    appLogo: "/assets/projects/dermafusion/logo.png",
  },
  {
    slug: "newswave",
    title: "NewsWave: News Aggregation",
    tag: "SwiftUI • Featured",
    overview: "Multi-category news experience with trending, search, bookmarks, and social sharing.",
    description:
      "Multi-category news app with trending and keyword search, bookmarks, sharing, and custom animated tab bar. Integrated Firebase for auth and Firestore for real-time data.",
    features: [
      "Category-wise feed system with clean navigation",
      "Trending and keyword-driven search flows",
      "Bookmarking and sharing for user retention",
      "Custom animated tab bar interactions",
    ],
    tech: ["SwiftUI", "Combine", "Codable", "Kingfisher", "Firebase", "Firestore"],
    extra: "Strong consumer app fundamentals: content discovery + speed + retention mechanics.",
    metrics: [
      { value: "6", label: "Categories" },
      { value: "Realtime", label: "Updates" },
      { value: "Smooth", label: "Navigation" },
    ],
    domain: "ios",
  },
  {
    slug: "whimai",
    title: "WhimAI",
    tag: "Swift",
    overview: "AI-powered conversational iOS app focused on expressive interactions and polished native UX.",
    description:
      "AI-powered iOS app exploring creative possibilities with intelligent features and polished native UI.",
    features: ["Voice-enabled conversational interface", "Intelligent multimodal interactions", "Native iOS design language and fluid transitions"],
    tech: ["Swift", "UIKit", "CoreML"],
    extra: "Highlights your strength in turning AI capability into user-friendly mobile experiences.",
    metrics: [
      { value: "AI", label: "Powered" },
      { value: "Native", label: "UX" },
      { value: "iOS", label: "Focused" },
    ],
    domain: "ios",
  },
  {
    slug: "job-market-analysis-platform",
    title: "Job Market Analysis Platform",
    tag: "Big Data Analytics • End-to-End Platform",
    overview: "End-to-end analytics platform for tech job trends, salary prediction, and skill demand intelligence.",
    description:
      "Enterprise-grade Big Data analytics platform analyzing tech job market trends, salary predictions, and skill demand forecasting. Processed 129.68 GB across 4 data sources with a 3-layer data lake and 2.7M+ records.",
    features: [
      "3-layer data lake architecture (Raw/Bronze/Silver/Gold)",
      "Distributed batch + streaming processing pipelines",
      "Model tracking and experiment reproducibility",
      "Interactive analytics delivery with low-latency APIs",
    ],
    tech: ["Apache Spark", "Delta Lake", "Airflow", "Kafka", "MLflow", "XGBoost", "FastAPI", "Docker"],
    extra: "A complete data product story from ingestion to model serving to business-facing dashboards.",
    metrics: [
      { value: "129 GB", label: "Processed" },
      { value: "2.7M+", label: "Records" },
      { value: "<100ms", label: "API" },
    ],
    links: [{ label: "GitHub", url: "https://github.com/ManikantaSirumalla/Job-Market-Analysis---The-Big-Data-Approach" }],
    screenshotHeading: "Job Market Analysis Platform Screenshots",
    screenshots: ["/assets/projects/job-market/01.png", "/assets/projects/job-market/02.png", "/assets/projects/job-market/03.png"],
    about:
      "Solo-built big data starter for tech job market analytics. Data lake (Raw/Bronze/Silver/Gold) with 129+ GB from GitHub Archive, Kaggle, StackOverflow, and BLS. Apache Spark for distributed processing, Delta Lake for versioned storage, Airflow for orchestration, Kafka for streaming, MLflow for experiment tracking. FastAPI service with health check and salary endpoint; XGBoost salary prediction and skill forecasting.",
    domain: "ml",
  },
  {
    slug: "expense-fraud-detection-system",
    title: "Expense Fraud Detection System",
    tag: "Anomaly Detection • ML Pipeline",
    overview: "Enterprise fraud detection pipeline with engineered features and actionable review workflows.",
    description:
      "End-to-end enterprise fraud detection system with ETL-to-dashboard pipeline, 7-table normalized schema, 35 engineered features, and Isolation Forest scoring 1,597 claims across 467 employees.",
    features: [
      "Normalized data model for expense intelligence",
      "Isolation Forest model for outlier detection",
      "Feature engineering across spending behavior dimensions",
      "Interactive review dashboard for investigation",
    ],
    tech: ["Python", "SQL Server", "Scikit-Learn", "SQLAlchemy", "Streamlit", "Plotly", "Docker"],
    extra: "Combines ML rigor with operations readiness, making model output useful for real teams.",
    metrics: [
      { value: "159", label: "Anomalies" },
      { value: "37", label: "High Risk" },
      { value: "227%", label: "Lift" },
    ],
    links: [{ label: "GitHub", url: "https://github.com/ManikantaSirumalla/Enterprise-fraud-detection-system" }],
    screenshotHeading: "Expense Fraud Detection System Screenshots",
    screenshots: [
      "/assets/projects/expense-fraud/01.png",
      "/assets/projects/expense-fraud/02.png",
      "/assets/projects/expense-fraud/03.png",
      "/assets/projects/expense-fraud/04.png",
      "/assets/projects/expense-fraud/05.png",
      "/assets/projects/expense-fraud/06.png",
      "/assets/projects/expense-fraud/07.png",
    ],
    domain: "ml",
  },
  {
    slug: "customer-churn-prediction-system",
    title: "Customer Churn Prediction System",
    tag: "Classification • DATA 602 • Advanced ML",
    overview: "Recall-focused telecommunications churn model with feature engineering, threshold optimization, and business-oriented retention recommendations.",
    description:
      "Customer churn prediction project comparing 10+ classical ML algorithms, selecting L2-regularized Logistic Regression through GridSearchCV, optimizing the decision threshold with ROC/PR analysis, and translating churn drivers into retention strategy.",
    features: [
      "Benchmarked Logistic Regression, Random Forest, Gradient Boosting, XGBoost, SVM, KNN, Decision Tree, Naive Bayes, AdaBoost, and Neural Networks",
      "Optimized the decision threshold to 0.200 for a recall-sensitive business objective",
      "Engineered tenure, charge-ratio, and charge-category features on the IBM Telco dataset",
      "Applied stratified splitting, StandardScaler, GridSearchCV, VIF analysis, and ROC/PR evaluation",
      "Surfaced top churn drivers including month-to-month contracts, short tenure, electronic-check payment, and high charges",
    ],
    tech: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "NumPy", "statsmodels", "Matplotlib", "Seaborn"],
    extra: "Strong demonstration of metric-driven ML, model selection, threshold tuning, and business-facing interpretation.",
    metrics: [
      { value: "10+", label: "Models" },
      { value: "85.3%", label: "Recall" },
      { value: "264.5%", label: "ROI" },
    ],
    links: [{ label: "GitHub", url: "https://github.com/ManikantaSirumalla/Telecom-Customer-Churn-Prediction-using-Machine-Learning" }],
    about:
      "Telecom churn prediction with segment-aware retention strategy. Best model: L2-regularized Logistic Regression with threshold tuning for strong recall and practical business use.",
    domain: "ml",
  },
  {
    slug: "graduate-admissions-predictor",
    title: "Graduate Admissions Predictor",
    tag: "Machine Learning • Academic",
    overview: "Predictive model estimating admission probability using academic and profile signals.",
    description:
      "Predictive ML model analyzing academic profiles, research experience, and test scores to forecast graduate admissions probability with high accuracy.",
    features: [
      "Feature pipeline for applicant profile signals",
      "Comparative baseline and tuned model evaluation",
      "Interpretability for decision rationale",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib"],
    extra: "Solid academic-to-practical ML problem framing and execution.",
    metrics: [
      { value: "Academic", label: "Project" },
      { value: "Predictive", label: "Model" },
      { value: "Explainable", label: "Output" },
    ],
    domain: "ml",
  },
  {
    slug: "trading-on-trends",
    title: "Trading on Trends",
    tag: "Data Science • Financial Analytics",
    overview: "Sentiment-driven market analysis system linking social signals with stock movement insights.",
    description:
      "Quantitative trading signal analysis using statistical modeling and ML pattern recognition to identify profitable market trends from historical data.",
    features: [
      "Reddit sentiment ingestion and scoring",
      "Financial timeseries feature engineering",
      "Model-based movement prediction workflows",
      "Visualization of sentiment-to-price relationships",
    ],
    tech: ["Python", "Reddit API", "Yahoo Finance API", "Scikit-Learn", "Flask", "Plotly"],
    extra: "Distinctive cross-domain project that combines NLP, finance, and model delivery.",
    metrics: [
      { value: "NLP", label: "Signals" },
      { value: "Market", label: "Data" },
      { value: "API", label: "Ready" },
    ],
    domain: "ml",
  },
];

export const iosProjects = projects.filter((project) => project.domain === "ios");
export const mlProjects = projects.filter((project) => project.domain === "ml");

export function appStoreUrlForProject(project: ProjectRecord): string | undefined {
  return project.links?.find((link) => link.label === "App Store")?.url;
}

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<
  string,
  ProjectRecord
>;
