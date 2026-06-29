import { existsSync, readFileSync } from "node:fs";

const requiredFiles = [
  "public/resumes/Manikanta_iOS_Resume.pdf",
  "public/resumes/Manikanta_ML_Resume.pdf",
];

const requiredText = [
  {
    file: "components/layout/SiteNav.tsx",
    values: ['href: "#resume"', 'label: "Resume"'],
  },
  {
    file: "app/page.tsx",
    values: ["<ResumeHub />"],
  },
  {
    file: "components/sections/ResumeHub.tsx",
    values: [
      "/resumes/Manikanta_iOS_Resume.pdf",
      "/resumes/Manikanta_ML_Resume.pdf",
      "iOS Developer Resume",
      "ML / Data Science Resume",
    ],
  },
];

const failures = [];

for (const file of requiredFiles) {
  if (!existsSync(file)) {
    failures.push(`Missing file: ${file}`);
  }
}

for (const check of requiredText) {
  if (!existsSync(check.file)) {
    failures.push(`Missing source file: ${check.file}`);
    continue;
  }

  const contents = readFileSync(check.file, "utf8");
  for (const value of check.values) {
    if (!contents.includes(value)) {
      failures.push(`Missing "${value}" in ${check.file}`);
    }
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Resume assets and links are wired.");
