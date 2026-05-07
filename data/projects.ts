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
      "Comprehensive workout tracking app with AI-generated plans, real-time workout monitoring, HealthKit sync, and detailed analytics built for serious training workflows.",
    description:
      "Production iOS fitness platform for workout tracking, AI-powered plan generation, streak intelligence, HealthKit sync, and rich progress analytics with exportable reports.",
    features: [
      "Track sets, reps, weight, and rest timers with a fast in-workout flow",
      "Generate personalized workout and nutrition plans with AI",
      "Use advanced progress analytics, streak tracking, and performance insights",
      "Sync workouts with Apple Health and iCloud across Apple devices",
      "Support widgets, Live Activities, and deep links for quick actions",
      "Export workout history and analytics in shareable report formats",
    ],
    tech: ["SwiftUI", "HealthKit", "CloudKit", "WidgetKit", "Live Activities", "CoreData"],
    extra:
      "RepTrack Pro focuses on real production fitness use-cases: tracking fidelity, recovery-aware streak logic, and polished day-to-day UX from onboarding to post-workout reporting.",
    metrics: [
      { value: "10", label: "App Store Screens" },
      { value: "AI", label: "Plan Generation" },
      { value: "HealthKit", label: "Native Sync" },
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/reptrack-pro/id6751082017?uo=4" },
      { label: "Support Center", url: "https://manikantasirumalla.github.io/reptrackpro-legal/support.html" },
    ],
    screenshotHeading: "RepTrack Pro Screenshots",
    screenshots: [
      "/project-media/reptrack/01.png",
      "/project-media/reptrack/02.png",
      "/project-media/reptrack/03.png",
      "/project-media/reptrack/04.png",
      "/project-media/reptrack/05.png",
      "/project-media/reptrack/06.png",
      "/project-media/reptrack/07.png",
      "/project-media/reptrack/08.png",
      "/project-media/reptrack/09.png",
      "/project-media/reptrack/10.png",
    ],
    domain: "ios",
    appLogo: "/project-media/reptrack/icon.png",
  },
  {
    slug: "tech-signal",
    title: "Tech Signal",
    tag: "SwiftUI • Developer Feed • Privacy-first",
    overview:
      "Native SwiftUI iOS app that unifies tech news, developer discussions, trending repos, AI/ML reads, and tech events from 30+ sources in one place—built with no subscriptions, no ads, no tracking, and zero third-party dependencies.",
    description:
      "A unified feed for developers aggregating Hacker News, Reddit, GitHub, RSS (including supply-chain and Salesforce/CRM verticals), and more. Cache-first loading powers full-bleed feed cards, while a smart layer adds dwell-time ranking, trending signals, mute/boost, inline discussions, related reading, and changelog diffs — all without third-party SDKs.",
    features: [
      "Core feed from Hacker News, Reddit, GitHub, and RSS with cache-first, full-bleed card layout",
      "Smart ranking with dwell-time signals, trending detection, mute/boost, threads, related reading, and changelog diffs",
      "On-device article summaries using Apple NaturalLanguage (extractive TF-IDF) — tap to summarize, fully local",
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
    appLogo: "/project-media/tech-signal/icon.png",
  },
  {
    slug: "dermafusion",
    title: "DermaFusion",
    tag: "iOS + On-Device AI",
    overview:
      "On-device multi-modal skin lesion classification app designed for fast scan-to-assessment workflows with interpretable model output.",
    description:
      "On-device multi-modal skin lesion classification app with camera/library scan, 3D body-location mapping, Grad-CAM interpretability, confidence gauges, and lesion learning workflows.",
    features: [
      "Start a new scan from camera or import from photo library",
      "Select exact body location with interactive 3D body model tapping",
      "Toggle Grad-CAM overlays for interpretable diagnosis support",
      "View class list with confidence gauge and probability breakdowns",
      "Review assessment, metadata, and history in a single results workflow",
      "Learn mode with ABCDE rule and seven lesion classes with risk context",
    ],
    tech: ["SwiftUI", "Core ML", "Vision", "3D Body Mapping", "Grad-CAM", "PyTorch"],
    extra:
      "DermaFusion emphasizes explainability and clinical-style flow design, keeping prediction confidence and lesion education visible at each decision step.",
    metrics: [
      { value: "7", label: "Lesion Classes" },
      { value: "On-device", label: "Inference" },
      { value: "Grad-CAM", label: "Explainability" },
    ],
    links: [{ label: "Project Repo", url: "https://github.com/ManikantaSirumalla/DermaFusion" }],
    screenshotHeading: "DermaFusion Screenshots",
    screenshots: [
      "/project-media/dermafusion/01.png",
      "/project-media/dermafusion/02.png",
      "/project-media/dermafusion/03.png",
      "/project-media/dermafusion/04.png",
      "/project-media/dermafusion/05.png",
      "/project-media/dermafusion/06.png",
      "/project-media/dermafusion/07.png",
      "/project-media/dermafusion/08.png",
    ],
    domain: "ios",
    appLogo: "/project-media/dermafusion/logo.png",
  },
  {
    slug: "newswave",
    title: "NewsWave — News Aggregation",
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
    slug: "phototales",
    title: "PhotoTales",
    tag: "Swift",
    overview: "Photography and storytelling app designed for rich visual narratives and intuitive browsing.",
    description:
      "Photography and storytelling app with beautiful image presentation and narrative features.",
    features: ["High-quality image presentation", "Narrative-focused content layout", "Responsive media interactions"],
    tech: ["Swift", "AVFoundation", "UIKit"],
    extra: "Great representation of visual craftsmanship and media handling in native iOS.",
    metrics: [
      { value: "Visual", label: "First" },
      { value: "Media", label: "Rich" },
      { value: "Smooth", label: "Flow" },
    ],
    domain: "ios",
  },
  {
    slug: "calculator",
    title: "Calculator",
    tag: "Swift • Utility",
    overview: "Clean and dependable utility app for everyday arithmetic with polished UX.",
    description: "Clean, functional calculator app with elegant UI design and smooth interactions built in pure Swift.",
    features: ["Accurate arithmetic operations", "Minimal, distraction-free interface", "Fast interactions with native performance"],
    tech: ["Swift", "UIKit", "AutoLayout"],
    extra: "Shows attention to detail even in simple products — clarity, correctness, and speed.",
    metrics: [
      { value: "Fast", label: "Input" },
      { value: "Simple", label: "UX" },
      { value: "Reliable", label: "Logic" },
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
    screenshots: ["/project-media/job-market/01.png", "/project-media/job-market/02.png", "/project-media/job-market/03.png"],
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
      "/project-media/expense-fraud/01.png",
      "/project-media/expense-fraud/02.png",
      "/project-media/expense-fraud/03.png",
      "/project-media/expense-fraud/04.png",
      "/project-media/expense-fraud/05.png",
      "/project-media/expense-fraud/06.png",
      "/project-media/expense-fraud/07.png",
    ],
    domain: "ml",
  },
  {
    slug: "customer-churn-prediction-system",
    title: "Customer Churn Prediction System",
    tag: "Classification • DATA 602 — Advanced ML",
    overview: "Multi-model churn prediction framework with feature engineering and explainability.",
    description:
      "Comprehensive churn solution with 40+ engineered features and 7+ algorithms benchmarked using GridSearchCV, plus SHAP-based model explainability for business actions.",
    features: [
      "7+ model benchmarking and tuning strategy",
      "40+ engineered features",
      "SHAP-based explainability for business interpretation",
      "Repeatable evaluation and model selection pipeline",
    ],
    tech: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "SHAP", "Matplotlib", "Seaborn"],
    extra: "Strong demonstration of end-to-end ML workflow with practical explainability.",
    metrics: [
      { value: "7+", label: "Models" },
      { value: "40+", label: "Features" },
      { value: "SHAP", label: "XAI" },
    ],
    links: [{ label: "GitHub", url: "https://github.com/ManikantaSirumalla/Telecom-Customer-Churn-Prediction-using-Machine-Learning" }],
    about:
      "Telecom churn prediction with segment-aware retention strategy. Best model: Elastic Net Logistic Regression with strong recall and explainability for business use.",
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
