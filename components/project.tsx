"use client";

import { useRef, useState, useEffect } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const [toggle, setToggle] = useState(false)
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  console.log(toggle)
 
  return ( 
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      onClick={() => setToggle(true)}
      className="group mb-3 sm:mb-8 last:mb-0"
      >

<div
  aria-hidden="true"
  className={`${toggle ? 'block' : 'hidden'} scrollbar-thin scrollbar-thumb-white scrollbar-track-white fixed top-1/2 left-1/2 rounded-xl transform -translate-x-1/2 -translate-y-1/2 overflow-y-auto overflow-x-hidden z-50 w-full max-w-3xl max-h-[80%]`}
>
      <div className="relative w-full modal-width-50 max-h-full">
          <div className="p-8 relative bg-white rounded-2xl shadow dark:bg-gray-700">
              <div className="flex border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl p-0 flex justify-center w-full font-semibold text-gray-900 dark:text-white">
                  Quantus Revamp
                </h3>
                <button type="button" onClick={(e) => {e.stopPropagation(), setToggle(false)}} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only" >Close modal</span>
                </button>
              </div>
              <br></br><h1 className="text-xl text-[#86C5FF]">Overview</h1>
            <p>Welcome to our EHR Web App, dedicated to revolutionizing healthcare experiences in Texas, USA. Our platform is designed to streamline Electronic Health Records (EHR) management, providing a secure and efficient way for healthcare professionals to organize, access, and share patient information. With user-friendly interfaces and advanced features, our EHR solution aims to enhance the overall efficiency of healthcare delivery. </p>
            <br></br>
            <p>________________________________________________________________________________________________</p>
            <br></br>
            <h1 className="text-xl text-[#86C5FF]">Problem</h1>
            <p>
              The primary challenge revolved around disorganization, but a more critical issue surfaced—essential information was consistently omitted. In the context of the medical sector, ensuring all important details are accessible is paramount, considering that overlooking such vital information could potentially jeopardize a person's life.</p>
              <br></br>
              <p>________________________________________________________________________________________________</p>
            <br></br>
            <h1 className="text-xl text-[#86C5FF]">Solution</h1>
            <p>
              The initial screens were disorganized and utilized basic templates, overlooking crucial information required by doctors, such as ICD codes. The redesigned screens, seen after the improvements, maintain a consistent color scheme while strategically organizing data. Recognizing the significance of ICD codes for healthcare professionals, a dedicated section has been incorporated, not only improving the overall interface aesthetics but also elevating the user experience.</p>
              <br></br>
              <p>________________________________________________________________________________________________</p>
              <br></br>
              <h1 className="text-xl text-[#86C5FF]">Process</h1>  
              <p>The design process initiated with collaborative discussions to outline and fine-tune requirements, involving consultations with the CEO. Following these conversations, I engaged in brainstorming sessions to devise design solutions for the overhaul of the web app. Subsequently, a series of iterative steps were undertaken, ensuring a meticulous creation and refinement of the designs.</p><br></br>
              <img src = "Design Process.png"></img>
              <br></br>
              <p>________________________________________________________________________________________________</p>
              <br></br>
              <h1 className="text-xl text-[#86C5FF]">Ideation</h1>
              <p>Venturing into medical sector design posed a unique challenge, as even a minor error could potentially misguide medical professionals. To tackle this, I began by conceptualizing the visual appearance, translating my thoughts onto paper to explore various ideas. My mood board drew inspiration from existing products in the field, incorporating diverse influences to refine the design process.</p><br></br>
              <img src="Ideation Frame.png"></img>
              <br></br>
              <p>________________________________________________________________________________________________</p>
              <br></br>
              <h1 className="text-xl text-[#86C5FF]">Design Revamp and High-Fidelity Mockups</h1>
              <p>To enhance the user experience for medical professionals, I strategically implemented the brand's color scheme, particularly focusing on call-to-action elements. This not only aids in the recognition of functions but also ensures easy navigation, aligning with the usability heuristic of "Recognition Rather than Recall." To optimize user understanding, I incorporated iconography alongside button labels.
                <br></br><br></br>Moreover, I applied color psychology principles, combining pastel colors with a solid blue brand color. This choice aims to evoke feelings of approachability and calmness, creating a visually pleasing atmosphere. Additionally, bright gradients were introduced as accent colors on certain cards, introducing a playful element to the design.
                <br></br><br></br>In summary, by integrating pastel and bright tones while adhering to usability heuristics, this design approach promotes an accessible and user-friendly environment for medical professionals. Some of the main screens are displayed below.</p>
                <br></br>
                <p>________________________________________________________________________________________________</p>
              <h1 className="text-2xl text-[#86C5FF]">Final Mockups</h1>
              <br></br>
              <h1 className="text-xl text-[#86C5FF]">Login Page</h1>
              <img src="Home page.png"></img>
              <br></br>
              <h1 className="text-xl text-[#86C5FF]">Lab Order</h1>
              <img src="Lab Order Frame.png"></img>
              <br></br>
              <h1 className="text-xl text-[#86C5FF]">Medication</h1>
              <img src="Medication Frame.png"></img>
              <br></br>
              <p>________________________________________________________________________________________________</p>
              <br></br>
              <h1 className="text-xl text-[#86C5FF]">Style Guide</h1>
              <img src="Style Guide.png"></img>
              <br></br>
              <p>________________________________________________________________________________________________</p>
              <br></br>
              <h1 className="text-xl text-[#86C5FF]">Key Takeaways</h1>
              <p>My work at Quantus was a rewarding experience that provided me with valuable insights and skills that I can apply to future projects. While there were some challenges, that helped me grow as a designer and allowed me to develop new strategies for communicating my designs.</p>
              <p>________________________________________________________________________________________________</p>
              <br></br>
              <h1 className="text-xl text-[#86C5FF]">Web App</h1>
              <Link className="underline" href="https://clinidrive.quantushealthinc.com:8443/pcaresp/login.jsf#"> View App</Link>
          </div>
      </div>
  </div>

      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
