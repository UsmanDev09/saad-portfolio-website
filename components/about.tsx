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
        With a degree in{" "}
        <span className="font-medium">Computer Science</span>, my journey into the realm of
        design 👨‍💻 was accelarated by my final year project in game interface design. I got myself enrolled into User Experience course by Google while i kept working on my course "Learn UI" by Erik Kennedy 💪 and learned{" "}
        <span className="font-medium">UI and UX philosophies</span>.{" "}
        <span className="italic">My favorite part of design</span> is the
        creativity 🚀 aspect. My passion is <span className="underline">sparked</span> by the
        exhilarting process of crafting innovative and user-friendly designs enriched with a myriad of features. My core skills
        are{" "}
        <span className="font-medium">
          Figma, User Experience, and User Interface
        </span>
      </p>

      <p>
        <span className="italic">When I'm not designing</span>, I enjoy playing
        cricket 🏏, football ⚽, and watching movies 🎞️. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">how artificial intelligence is growing</span>.
      </p>
    </motion.section>
  );
}
