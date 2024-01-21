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
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to pursue my
        passion for design 👨‍💻. I enrolled in a UI/UX bootcamp 💪 and learned{" "}
        <span className="font-medium">UI and UX philosophies</span>.{" "}
        <span className="italic">My favorite part of design</span> is the
        creativity 🚀 aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core skills
        are{" "}
        <span className="font-medium">
          Figma, and User Experience
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        cricket 🏏, watching movies 🎞️, and reading 📖. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">investments and financial management 💵</span>.
      </p>
    </motion.section>
  );
}
