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
  featured?: boolean;
};

export const projects: ProjectRecord[] = [
  {
    slug: "zealo",
    title: "ZEALO",
    tag: "Adaptive AI Fitness Intelligence · iPhone + Apple Watch",
    overview:
      "Privacy-first fitness intelligence platform spanning iPhone, Apple Watch, widgets, Live Activities, and Dynamic Island, with 1,300+ organic downloads and 1st Place at CBIC 2026.",
    description:
      "ZEALO (formerly RepTrack Pro) pairs a hybrid deterministic + LLM coaching system with HealthKit-based recovery and readiness models. Structured outputs, validation gates, on-device intent routing, and offline fallbacks keep the AI coach private and reliable.",
    features: [
      "Hybrid deterministic + LLM system with structured outputs, validation gates, evidence-backed constraints, on-device intent routing, and offline fallbacks, cutting AI-coach execution from up to 9 model calls to a 4-call budget per question",
      "4- to 12-week adaptive training-plan engine with automated progression, constraint validation, retry-on-violation, and deterministic fallback",
      "Plan generation validated through an 82/82 live-AI run, a ~3,945-case test matrix, adversarial testing, and 6 XCUITest flows",
      "HealthKit-based Recovery, Training Readiness, Strain, and Stress systems on personalized baselines, plus adaptive nutrition, menstrual-cycle-aware guidance, and Weekly Intelligence",
      "Calorie model rebuilt on 2024 Compendium MET values, correcting a 6-hour idle-workout estimate from 1,260 kcal to 53 kcal",
      "Apple Watch companion with live workout execution, heart-rate zones, motion-based rep detection, and effort scoring",
      "WHOOP, Oura, Fitbit, and Garmin signals normalized into one intelligence layer for readiness, training, recovery, and recommendations",
      "StoreKit 2, iCloud sync, Firebase Analytics, Realtime Database, Crashlytics, and App Check for subscriptions, sync, telemetry, diagnostics, and integrity",
    ],
    tech: ["SwiftUI", "WatchKit", "HealthKit", "WidgetKit", "Live Activities", "StoreKit 2", "LLM integration", "Firebase"],
    extra:
      "First-author manuscript in preparation: “ZEALO: A Hybrid AI-Deterministic Architecture for Personalized Fitness and Nutrition Plan Generation on iOS.”",
    metrics: [
      { value: "1,300+", label: "Organic downloads" },
      { value: "1st", label: "CBIC 2026" },
      { value: "82/82", label: "Live-AI run" },
      { value: "9 → 4", label: "Model calls" },
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/id6751082017" },
      { label: "zealofitness.com", url: "https://zealofitness.com" },
    ],
    screenshotHeading: "ZEALO screens",
    screenshots: [
      "/assets/projects/zealo/01-signals.png",
      "/assets/projects/zealo/02-readiness.png",
      "/assets/projects/zealo/03-stress.png",
      "/assets/projects/zealo/04-plans.png",
      "/assets/projects/zealo/05-session.png",
      "/assets/projects/zealo/06-sets.png",
      "/assets/projects/zealo/07-macros.png",
      "/assets/projects/zealo/08-strain.png",
      "/assets/projects/zealo/09-zones.png",
      "/assets/projects/zealo/10-history.png",
      "/assets/projects/zealo/11-records.png",
      "/assets/projects/zealo/12-cycle.png",
      "/assets/projects/zealo/13-scan.png",
      "/assets/projects/zealo/14-coach.png",
      "/assets/projects/zealo/15-workouts.png",
      "/assets/projects/zealo/16-recovery.png",
      "/assets/projects/zealo/17-health.png",
    ],
    domain: "ios",
    appLogo: "/assets/projects/zealo/zealo-logo.png",
    featured: true,
  },
  {
    slug: "tech-signal",
    title: "Tech Signal",
    tag: "Developer intelligence feed · SwiftUI",
    overview:
      "Aggregates 30+ developer sources with cache-first loading, personalized ranking, trend detection, and on-device summarization, with zero third-party runtime dependencies.",
    description:
      "A unified feed for developers built on first-party networking only. Apple’s Natural Language framework summarizes articles on device, and native Apple integrations handle discovery and tips without ad networks or analytics SDKs.",
    features: [
      "30+ sources including Hacker News, Reddit, GitHub, and RSS with cache-first loading",
      "Personalized ranking with dwell-time signals, trend detection, and mute and boost controls",
      "On-device article summaries with Apple’s Natural Language framework",
      "GitHub release tracking with SwiftData persistence and an on-device weekly digest",
      "Morning briefing widget, Spotlight and Siri support, deep links, and a StoreKit 2 tip jar",
    ],
    tech: ["SwiftUI", "SwiftData", "NaturalLanguage", "WidgetKit", "App Intents", "StoreKit 2"],
    extra: "Zero third-party runtime dependencies: networking, intelligence, and monetization are all first-party.",
    metrics: [
      { value: "30+", label: "Sources" },
      { value: "On-device", label: "Summaries" },
      { value: "0", label: "Third-party deps" },
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/tech-signal/id6759932010" },
      { label: "Privacy Policy", url: "https://manikantasirumalla.github.io/Tech-signal-legal/privacy.html" },
    ],
    domain: "ios",
    appLogo: "/assets/projects/tech-signal/icon.png",
    featured: true,
  },
  {
    slug: "dermafusion",
    title: "DermaFusion",
    tag: "On-device skin-lesion classification · Research prototype",
    overview:
      "Native SwiftUI app that runs a two-model EfficientNet-B4 ensemble as FP16 Core ML packages, so photos are analyzed entirely on iPhone with no cloud, sign-in, or analytics.",
    description:
      "Camera capture and photo import, non-skin image rejection, Grad-CAM heatmap overlays, a malignant-risk gauge, and PDF report export through the share sheet. Designed for educational research, not as a medical device.",
    features: [
      "Two-model EfficientNet-B4 ensemble deployed as FP16 Core ML packages (34 MB each), fully on device",
      "Camera capture, photo import, non-skin image rejection, Grad-CAM overlays, a malignant-risk gauge, and PDF report export",
      "Trained on 61,694 dermoscopic and smartphone images unified from ISIC 2018/2019/2020 and PAD-UFES-20",
      "Patient-grouped splits with zero patient or lesion overlap, Shades-of-Gray color constancy, and DullRazor hair removal",
      "Class-balanced focal loss, MixUp, EMA, Dirichlet-tuned ensemble weights, and per-class thresholds",
      "0.830 malignant-vs-benign AUROC and 95.4% top-3 accuracy on a 5,279-image held-out test set, verified through automated clinical-readiness gates",
    ],
    tech: ["SwiftUI", "Core ML", "Vision", "PDFKit", "PyTorch", "EfficientNet-B4", "Grad-CAM"],
    extra: "Designed for educational research, not as a medical device.",
    metrics: [
      { value: "0.830", label: "AUROC" },
      { value: "95.4%", label: "Top-3 accuracy" },
      { value: "61,694", label: "Training images" },
    ],
    links: [{ label: "GitHub", url: "https://github.com/ManikantaSirumalla/DermaFusion" }],
    screenshotHeading: "DermaFusion screens",
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
    featured: true,
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

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);

export function appStoreUrlForProject(project: ProjectRecord): string | undefined {
  return project.links?.find((link) => link.label === "App Store")?.url;
}

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<
  string,
  ProjectRecord
>;
