"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a student at the University of Pennsylvania studying Computer Science{" "}
        <span className="font-medium">in the School</span> of Engineering and Applied Sciences.
        I'm deeply passionate about the intersection of software development and entrepreneurship,{" "}
        <span className="font-medium">constantly exploring how innovative technology </span> can drive impactful solutions.
        Currently, I'm advancing my technical and leadership skills {" "}
        <span className="font-medium">as a Software Engineering Intern at MediVoiceAI</span> while mentoring{" "}
        <span className="font-medium">students as a Teaching Assistant for CIS 1200: Programming Languages and Techniques II</span>.
      </p>


      <p>
        When I'm not coding, you'll probably find me running around Penn's campus, experimenting with new recipes in the kitchen, hitting the gym, 
        or uncovering hidden gems around Philly. I love challenging myself—whether it's pushing my limits in weightlifting or diving into the latest tech trends to sharpen my skills.
      </p>

    </motion.section>
  );
}