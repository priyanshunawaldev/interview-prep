import { interviewCovers, mappings } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const techIconBaseURL =
  "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons";

const normalizeTechName = (tech: string) => {
  // First try direct mapping
  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
  const mapped = mappings[key as keyof typeof mappings];

  // If no mapping exists, clean up the tech name
  if (!mapped) {
    return key.replace(/[^a-z0-9]/g, "");
  }

  return mapped;
};

const checkIconExists = async (url: string) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok; // Returns true if the icon exists
  } catch {
    return false;
  }
};

export const getTechLogos = async (techArray: string[]) => {
  const variants = ["original", "plain", "original-wordmark"];

  const tryVariants = async (tech: string, normalized: string) => {
    for (const variant of variants) {
      const url = `${techIconBaseURL}/${normalized}/${normalized}-${variant}.svg`;
      if (await checkIconExists(url)) {
        return url;
      }
    }
    return "/tech.svg";
  };

  const logoPromises = techArray.map(async (tech) => {
    const normalized = normalizeTechName(tech);
    const url = await tryVariants(tech, normalized);
    return { tech, url };
  });

  return Promise.all(logoPromises);
};

export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
};
