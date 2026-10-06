export const profile = {
  name: "Manikanta Sirumalla",
  title: "iOS Engineer",
  focus: "Swift, SwiftUI & Apple Watch · HealthKit · Applied AI",
  tagline:
    "I build native iPhone and Apple Watch products with privacy-first, on-device intelligence, and I take them from architecture to the App Store.",
  location: "Baltimore, MD",
  email: "connect@sirumallamanikanta.com",
  phone: "+1 (410) 900-4265",
  phoneHref: "tel:+14109004265",
  website: "https://sirumallamanikanta.com",
  linkedin: "https://www.linkedin.com/in/manikantasirumalla/",
  github: "https://github.com/ManikantaSirumalla",
  medium: "https://medium.com/@manikantasirumalla5",
  resume: "/resumes/Manikanta_Sirumalla_Resume.pdf",
  resumeFileName: "Manikanta_Sirumalla_Resume.pdf",
  workAuthorization:
    "F-1 CPT eligible · STEM OPT eligible after Dec 2026 (36 months) · Open to U.S. relocation",
};

export const summary =
  "iOS Engineer with 5+ years of experience shipping native consumer apps in Swift, SwiftUI, and UIKit. Built and launched ZEALO, an Adaptive AI Fitness Intelligence platform across iPhone and Apple Watch with 1,300+ organic downloads and 1st Place at CBIC 2026. Experienced in HealthKit, Swift Concurrency, local-first architecture, AI/LLM integration, testing, performance, and App Store delivery.";

export const stats = [
  { value: "5+", label: "Years shipping iOS" },
  { value: "1,300+", label: "Organic ZEALO downloads" },
  { value: "1st", label: "Place, CBIC 2026" },
  { value: "3.97", label: "GPA, M.S. Data Science" },
];

export type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  links?: { label: string; href: string }[];
  highlights: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    title: "iOS Engineer & Founder",
    company: "AutoClosure LLC",
    location: "Baltimore, MD",
    period: "Feb 2025 – Present",
    links: [
      { label: "ZEALO on the App Store", href: "https://apps.apple.com/us/app/id6751082017" },
      { label: "zealofitness.com", href: "https://zealofitness.com" },
      { label: "Tech Signal on the App Store", href: "https://apps.apple.com/us/app/tech-signal/id6759932010" },
    ],
    highlights: [
      "Founded AutoClosure LLC and own end-to-end architecture, development, testing, App Store delivery, and production operations for two native iOS products, ZEALO and Tech Signal.",
      "Designed and launched ZEALO (Adaptive AI Fitness Intelligence), a privacy-first platform spanning iPhone, Apple Watch, widgets, Live Activities, and Dynamic Island, reaching 1,300+ organic downloads and winning 1st Place at CBIC 2026.",
      "Architected a hybrid deterministic + LLM system with structured outputs, validation gates, evidence-backed constraints, on-device intent routing, and offline fallbacks, reducing AI-coach execution from up to 9 model calls to a 4-call budget per question while improving privacy and failure handling.",
      "Built a 4- to 12-week adaptive training-plan engine with automated progression, constraint validation, retry-on-violation, and deterministic fallback, and validated generation through an 82/82 live-AI run, ~3,945-case test matrix, adversarial testing, and 6 XCUITest flows.",
      "Engineered HealthKit-based Recovery, Training Readiness, Strain, and Stress systems using personalized baselines, plus adaptive nutrition, menstrual-cycle-aware guidance, and Weekly Intelligence. Replaced an unsourced calorie model with 2024 Compendium MET values, correcting a 6-hour idle-workout estimate from 1,260 kcal to 53 kcal.",
      "Built the Apple Watch companion with live workout execution, heart-rate zones, motion-based rep detection, and effort scoring, and integrated StoreKit 2, iCloud sync, Firebase Analytics, Realtime Database, Crashlytics, and App Check for subscriptions, synchronization, telemetry, crash diagnostics, and app integrity.",
      "Expanded ZEALO beyond Apple Watch by integrating WHOOP, Oura, Fitbit, and Garmin, normalizing cross-device health, activity, sleep, heart-rate, and recovery signals into a unified intelligence layer for readiness, training, recovery, and personalized recommendations.",
      "Built and launched Tech Signal, aggregating 30+ developer sources with cache-first loading, personalized ranking, trend detection, and on-device summarization using Apple’s Natural Language framework, with zero third-party runtime dependencies.",
    ],
    stack: ["SwiftUI", "WatchKit", "HealthKit", "Swift Concurrency", "StoreKit 2", "LLM integration", "XCUITest", "Firebase"],
  },
  {
    title: "iOS Developer",
    company: "ZetoStudio",
    location: "Hyderabad, India",
    period: "Aug 2022 – Dec 2024",
    highlights: [
      "Built and shipped 10+ production iOS features in Swift and SwiftUI, owning work from product requirements through QA, App Store release, and post-release support.",
      "Designed 20+ modular feature components that separated networking, persistence, and view-model layers, improving testability, maintainability, and reuse across the codebase.",
      "Integrated REST APIs using URLSession, Codable, async/await, and Combine, and added offline-first caching to reduce unnecessary network requests and improve first-load reliability.",
      "Profiled complex screens with Instruments, memory analysis, image-pipeline optimization, and list virtualization, maintaining smooth 60 FPS interaction on older iOS devices while reducing UI stalls and memory pressure.",
      "Created reusable SwiftUI components and view-model patterns, wrote 100+ XCTest unit/UI tests, maintained CI workflows, and participated in code reviews to catch regressions before release.",
    ],
    stack: ["Swift", "SwiftUI", "Combine", "async/await", "Instruments", "XCTest", "CI/CD"],
  },
  {
    title: "iOS Developer",
    company: "Grid Dynamics",
    location: "Hyderabad, India",
    period: "Jul 2021 – Jul 2022",
    highlights: [
      "Built customer-facing iOS features for retail and e-commerce clients in Swift and UIKit, including product catalog, checkout, and account-management workflows.",
      "Integrated 15+ REST APIs, push-notification services, analytics SDKs, and reusable UI components to support scalable product features and consistent client experiences.",
      "Diagnosed and resolved 75+ pre-production and live defects across API connectivity, checkout flows, push notifications, and device-specific UI behavior while coordinating with product, QA, and backend teams.",
      "Migrated 15+ legacy UIKit components toward SwiftUI and Combine through modular refactoring, pair programming, architecture reviews, and incremental rollout.",
    ],
    stack: ["Swift", "UIKit", "REST APIs", "Push notifications", "SwiftUI migration"],
  },
];

export const skills = [
  { group: "Languages", items: ["Swift", "Python", "SQL"] },
  {
    group: "iOS & Apple Platforms",
    items: [
      "iOS SDK", "SwiftUI", "UIKit", "Swift Concurrency", "async/await", "multithreading", "Combine", "GCD",
      "SwiftData", "Core Data", "HealthKit", "WatchKit", "WidgetKit", "Live Activities", "Dynamic Island",
      "StoreKit 2", "CoreML", "Vision", "NaturalLanguage", "AVFoundation", "MapKit", "Swift Charts", "PDFKit",
    ],
  },
  {
    group: "Architecture & Data",
    items: [
      "MVVM", "State management", "Protocol-oriented programming", "Dependency injection",
      "Modular feature architecture", "Local-first / offline-first", "REST APIs", "URLSession", "Codable",
      "JSON", "iCloud sync", "Firebase Analytics", "Realtime Database", "Crashlytics", "App Check",
    ],
  },
  {
    group: "AI & On-Device Intelligence",
    items: [
      "LLM integration", "Structured AI workflows", "Deterministic validation and fallbacks",
      "On-device intent classification", "Privacy-first AI boundaries", "CoreML",
    ],
  },
  {
    group: "Quality & Tooling",
    items: [
      "XCTest", "XCUITest", "UI testing", "Instruments", "Performance optimization",
      "Memory management and profiling", "Accessibility", "Dynamic Type", "VoiceOver", "Xcode",
      "Git / GitHub", "CI/CD", "App Store Connect", "Agile / Scrum",
    ],
  },
];

export const education = [
  {
    degree: "M.S. Data Science",
    school: "University of Maryland, Baltimore County (UMBC)",
    location: "Baltimore, Maryland",
    period: "Jan 2025 – Dec 2026 (Expected)",
    detail: "GPA 3.97 / 4.00",
  },
  {
    degree: "B.Tech. Computer Science",
    school: "Vidya Jyothi Institute of Technology",
    location: "Hyderabad, India",
    period: "2017 – 2021",
    detail: "GPA 3.45 / 4.00",
  },
];

export const honors = [
  {
    title: "1st Place, Cangialosi Business Innovation Competition (CBIC) 2026",
    detail: "Awarded a $4,000 prize by bwTech@UMBC for ZEALO (formerly RepTrack Pro).",
    image: "/assets/achievements/cbic/1.jpg",
    imageAlt: "Manikanta Sirumalla at the CBIC 2026 awards",
  },
  {
    title: "Apple WWDC 2026",
    detail: "Selected for in-person attendance at Apple Park through an Apple Developer Program invitation.",
    image: "/assets/achievements/wwdc/img-6656.jpg",
    imageAlt: "Manikanta Sirumalla at Apple Park for WWDC 2026",
  },
  {
    title: "First-author manuscript in preparation",
    detail:
      "“ZEALO: A Hybrid AI-Deterministic Architecture for Personalized Fitness and Nutrition Plan Generation on iOS.”",
  },
];

export const stage = [
  {
    kicker: "Top 5 finalist",
    title: "ATA × IdeaBazz",
    period: "2026",
    detail:
      "Pitched ZEALO at IdeaBazz, the startup pitch competition at the American Telugu Association (ATA) Convention, and placed in the top 5. Recognized on the main convention stage.",
    images: [
      { src: "/assets/achievements/ata/01.jpg", alt: "Manikanta receiving a top 5 certificate on stage at the ATA Convention", width: 1022, height: 1600 },
      { src: "/assets/achievements/ata/02.jpg", alt: "Manikanta pitching ZEALO with a microphone at ATA × IdeaBazz", width: 900, height: 1600 },
    ],
  },
  {
    kicker: "Cohort member",
    title: "UMBC Launchpad",
    period: "Summer 2026",
    detail:
      "Selected for the summer 2026 cohort of UMBC Launchpad, the startup program of the Alex. Brown Center for Entrepreneurship & Innovation. Built ZEALO alongside fellow student founders and presented the venture to the cohort and program mentors.",
    images: [
      { src: "/assets/achievements/launchpad/06.jpg", alt: "The UMBC Launchpad cohort in front of the Alex. Brown Center for Entrepreneurship & Innovation slide", width: 1320, height: 720 },
      { src: "/assets/achievements/launchpad/01.jpg", alt: "Manikanta in front of the bwtech@UMBC Research & Technology Park banner", width: 921, height: 1600 },
      { src: "/assets/achievements/launchpad/03.jpg", alt: "Manikanta presenting ZEALO to the Launchpad cohort", width: 1109, height: 1600 },
      { src: "/assets/achievements/launchpad/04.jpg", alt: "Manikanta gesturing toward the audience while presenting", width: 1124, height: 1600 },
      { src: "/assets/achievements/launchpad/02.jpg", alt: "Three moments from Manikanta's Launchpad presentation", width: 911, height: 1600 },
      { src: "/assets/achievements/launchpad/05.jpg", alt: "Manikanta with Launchpad founders and program staff", width: 1205, height: 706 },
    ],
  },
  {
    kicker: "Founder presentation",
    title: "1 Million Cups Baltimore",
    period: "2026",
    detail:
      "Presented ZEALO at 1 Million Cups Baltimore, the Kauffman Foundation’s founder forum, followed by open Q&A with Baltimore’s entrepreneur community.",
    images: [
      { src: "/assets/achievements/1-million-cups/01.jpg", alt: "Manikanta beside the 1 Million Cups banner", width: 974, height: 1525 },
      { src: "/assets/achievements/1-million-cups/02.jpg", alt: "Manikanta presenting ZEALO at 1 Million Cups Baltimore", width: 900, height: 1600 },
      { src: "/assets/achievements/1-million-cups/03.jpg", alt: "Manikanta explaining ZEALO to the 1 Million Cups audience", width: 900, height: 1600 },
    ],
  },
  {
    kicker: "Panelist",
    title: "UMBC Fall ’26 Orientation",
    period: "Fall 2026",
    detail:
      "Spoke as a student panelist at UMBC’s Fall 2026 orientation, sharing my experience as a graduate student and founder with incoming students.",
    images: [
      { src: "/assets/achievements/orientation-panel/01.jpg", alt: "Manikanta seated with fellow student panelists at UMBC orientation", width: 1413, height: 941 },
      { src: "/assets/achievements/orientation-panel/02.jpg", alt: "Manikanta speaking into a microphone on the orientation panel", width: 1392, height: 928 },
      { src: "/assets/achievements/orientation-panel/03.jpg", alt: "Manikanta answering a question beside another panelist", width: 1086, height: 1448 },
    ],
  },
];

export const press = [
  {
    source: "UMBC Stories",
    title: "Meet a Retriever: Manikanta Sirumalla",
    description:
      "UMBC’s profile of my path as an international data science graduate student, solo founder, and creator of ZEALO.",
    href: "https://umbc.edu/stories/meet-a-retriever-manikanta-sirumalla-entrepreneur/",
    image: "https://umbc.edu/wp-content/uploads/2026/06/IMG_4668-Manikanta-Sirumalla-1200x981.jpeg",
    imageAlt: "Manikanta Sirumalla in the UMBC feature photograph",
  },
  {
    source: "YouTube podcast",
    title: "Founder journey and building ZEALO",
    description:
      "A conversation about building as a student founder and turning an iOS product into a venture.",
    href: "https://www.youtube.com/watch?v=N1Cx6gILh2c",
    image: "https://img.youtube.com/vi/N1Cx6gILh2c/hqdefault.jpg",
    imageAlt: "Thumbnail for the founder journey podcast",
  },
];

export const recommendations = [
  {
    quote:
      "Mani brought all the talent and hard work. I just helped with the storytelling. He was open to feedback, kept refining the pitch, and it was incredibly exciting to share in the moment when he was announced as the winner.",
    author: "Chris White",
    role: "Presquared, Entrepreneur in Residence at bwtech",
  },
  {
    quote:
      "Manikanta consistently delivered clean, well-architected iOS code that was easy to maintain and extend. His SwiftUI animations boosted user engagement by 20%, and his API optimizations cut data retrieval time by 30%. A reliable, detail-oriented engineer.",
    author: "Venkateshwar Rao",
    role: "Engineering Lead, ZetoStudio",
  },
  {
    quote:
      "Manikanta has shown strong applied ML judgment across both classical machine-learning work and product-oriented modeling. In his telecommunications churn project and later [ZEALO] modeling discussions, he demonstrated thoughtful model selection, metric-driven evaluation, and a clear understanding of how ML systems can scale into real-world applications.",
    author: "Dr. Masoud Soroush",
    role: "UMBC Data Science Faculty",
  },
];

export const writing = [
  "Demystifying Debounce and Throttle in Combine Framework",
  "Exploring SwiftData: Enhancing Data Management in iOS Applications",
  "How to Implement Native Volume Controls and AirPlay Button in SwiftUI",
  "A Guide to Localizing Your iOS Applications",
  "Creating Custom iOS Frameworks",
];
