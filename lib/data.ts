import spotifyImg from "@/public/spotify.png";
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
    title: "Epidemiological Simulator",
    description:
      "Developed an interactive pandemic simulation tool to analyze infection spreads following SIR epidemiology model, with adjustable parameters like lockdowns and mask mandates. 1st Place in HoyaHacks 2024 Simulation Track",
    tags: ["Python", "HTML", "CSS", "FastAPI"],
    imageUrl: pandemicImg,
  },
  {
    title: "Spotify Clone",
    description:
      "Built a full-stack Spotify clone with a responsive UI and real-time data handling. Features include song uploads, playlist creation, and recurring Stripe subscriptions.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "HTML", "SQL"],
    imageUrl: spotifyImg,
  },
  {
    title: "Minesweeper",
    description:
      "Developed Minesweeper with a GUI replicating Microsoft Window's version from the 90s, featuring save and reload function via file I/O operations.",
    tags: ["Java", "JUnit", "Java Swing"],
    imageUrl: minesweeperImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "Swift",
  "JavaScript",
  "TypeScript",
  "R",
  "OCaml",
  "C",
  "Assembly",
  "SQL",
  "HTML", 
  "CSS", 
  "Tailwind CSS", 
  "React.js",
  "Node.js",
  "Git",
  "Flask",
  "AWS Services",
  "Docker",
] as const;
