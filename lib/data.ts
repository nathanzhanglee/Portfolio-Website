import spotifyImg from "@/public/spotify.png";
import flightImg from "@/public/flight-delay.png";
import minesweeperImg from "@/public/minesweeper.png";

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
    title: "Spotify Clone",
    description:
      "Built a full-stack Spotify clone with a responsive UI and real-time data handling. Features include song uploads, playlist creation, and recurring Stripe subscriptions.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "HTML", "SQL"],
    imageUrl: spotifyImg,
  },
  {
    title: "Flight Delay Predictor",
    description:
      "Created a machine learning model designed to predict flight delays using a dataset of over 4 million flights, using data cleaning and model training.",
    tags: ["Python", "Pandas", "Sciki-Learn", "Matplotlib"],
    imageUrl: flightImg,
  },
  {
    title: "Minesweeper",
    description:
      "Developed Minesweeper with a GUI replicating Microsoft Window's version from the 90s, features save and reload function via file I/O operations.",
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
  "Pandas",
  "Numpy",
  "Scikit-Learn",
  "Git",
  "Flask",
  "AWS Services",
  "Docker",
] as const;
