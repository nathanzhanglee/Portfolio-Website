import dineImg from "@/public/dine.png";
import instaImg from "@/public/insta.png";
import minesweeperImg from "@/public/minesweeper.png";
import pandemicImg from "@/public/pandemic-simulator.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "InstaLite",
    description:
      "A social media platform allowing users to interact with shared posts and real-time chat, with ranking algorithms and natural language search",
    tags: ["Node.js", "RDS", "S3", "EC2", "ChromaDB", "Spark", "Kafka", "JavaScript", "Axios", "React"],
    imageUrl: instaImg,
  },
  {
    title: "HereBeforeItGoesViral",
    description:
      "An interactive web-based pandemic simulation tool: Best Simulation Hack and 3rd Place Overall at Georgetown HoyaHacks 2025",
    tags: ["Python", "HTML", "CSS", "FastAPI"],
    imageUrl: pandemicImg,
  },
  {
    title: "DineDecide",
    description:
      "An iOS app that helps users discover nearby restaurants based on preferences, using location services and the Google Places API",
    tags: ["Swift", "SwiftUI", "Core Location"],
    imageUrl: dineImg,
  },
  {
    title: "Minesweeper",
    description:
      "Implemented Minesweeper with a GUI replicating Microsoft Window's version from the 90s, featuring save and reload function via file I/O operations.",
    tags: ["Java", "JUnit", "Java Swing"],
    imageUrl: minesweeperImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python", 
  "JavaScript",
  "Typescript",
  "OCaml",
  "C",
  "C++",
  "HTML",
  "CSS",
  "Swift",
  "Assembly",
  "SQL", 
  "R",
  "React",
  "Node.js",
  "Java Spark",
  "Kafka", 
  "AWS EC2",
  "AWS S3",
  "AWS DynamoDB", 
  "ChromaDB",
  "Git",
  "Github",
  "Docker"
] as const;
