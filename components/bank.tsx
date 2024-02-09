"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Bank({
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
      className="group mb-3 sm:mb-8 last:mb-0"
      onClick={() => setToggle(true)} data-modal-target="bank-modal" data-modal-toggle="bank-modal"
    >
    

<div
  id="bank-modal"
  aria-hidden="true"
  className={`scrollbar-thin scrollbar-thumb-white scrollbar-track-white fixed top-1/2 left-1/2 rounded-xl transform -translate-x-1/2 -translate-y-1/2 ${toggle ? 'block' : 'hidden'} overflow-y-auto overflow-x-hidden z-50 w-full max-w-3xl max-h-[80%]`}
>
      <div className="relative w-full modal-width-50 max-h-full">
        <div className="p-8 relative bg-white rounded-2xl shadow dark:bg-gray-700">
            <div className="flex border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl p-0 flex justify-center w-full font-semibold text-gray-900 dark:text-white">
                    Money Solution Bank
                  </h3>
                <button type="button" onClick={(e) => {{e.stopPropagation(), setToggle(false)}}} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="bank-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <br></br><h1 className="text-xl text-[#FF5959]">Overview</h1>
           <p>Welcome to the Money Solution Bank App, committed to transforming banking experiences globally. Our platform is crafted to simplify finance management, offering a secure and effective solution for users to organize, access, and share their finances. With intuitive interfaces and cutting-edge features, our banking app is designed to elevate the overall efficiency of financial management.</p>
           <br></br>
           <p>________________________________________________________________________________________________</p>
           <br></br>
           <h1 className="text-xl text-[#FF5959]">Problem</h1>
           <p>The main hurdle was to create a user-friendly and appealing interface, yet a more crucial problem emerged—vital information was consistently being left out. In the realm of finance, it's of utmost importance to guarantee accessibility to all essential details, as neglecting such critical information could potentially pose a risk to an individual's financial well-being.</p>
            <br></br>
           <p>________________________________________________________________________________________________</p>
           <br></br>
           <h1 className="text-xl text-[#FF5959]">Solution</h1>
           <p>To address this challenge, we implemented a comprehensive solution by conducting a thorough review of our user interface. Recognizing the critical nature of the financial information at stake, we initiated a redesign process focused on ensuring that every essential detail is prominently featured and easily accessible within the app. Through meticulous iterations and enhancements, we enhanced the visibility of crucial data, including implementing strategic placements, intuitive labeling, and additional prompts to guide users effectively. This solution not only rectifies the initial issue of overlooking vital information but also significantly improves the overall user experience, reinforcing our commitment to providing a secure and efficient financial management platform.</p>
            <br></br>
            <p>________________________________________________________________________________________________</p>
            <br></br>
            <h1 className="text-xl text-[#FF5959]">Process</h1>  
            <p>The design process initiated with collaborative discussions to outline and fine-tune requirements, involving consultations with the users. Following these conversations, I engaged in brainstorming sessions to devise design solutions for the overhaul of the mobile app. Subsequently, a series of iterative steps were undertaken, ensuring a meticulous creation and refinement of the designs.</p><br></br>
            <img src = "Design Process Bank.png"></img>
            <br></br>
            <p>________________________________________________________________________________________________</p>
            <br></br>
            <h1 className="text-xl text-[#FF5959]">Ideation</h1>
            <p>Embarking on the design journey within the Finance sector presented a distinctive challenge. To address this, I initiated the process by visualizing the aesthetic aspects and sketching preliminary ideas on paper to explore diverse concepts. My mood board became a canvas of inspiration, integrating elements from existing products in the field to shape and refine the design process.</p><br></br>
            <img src="Ideation.png"></img>
            <br></br>
            <p>________________________________________________________________________________________________</p>
            <br></br>
            <h1 className="text-xl text-[#FF5959]">Design and High-Fidelity Mockups</h1>
            <p>To elevate the user experience, I strategically incorporated the brand's color scheme, with a special emphasis on call-to-action elements. Recognizing the pivotal role of transactional history, I prioritized the clarity of this feature. In addressing the heuristic analysis's guideline of "Visibility of System Status", I ensured that users receive immediate and transparent information about their recent transactions, meeting their expectations seamlessly.</p><br></br>
            <p>________________________________________________________________________________________________</p>
            <h1 className="text-2xl text-[#FF5959]">Final Mockups</h1>
            <br></br>
            <h1 className="text-xl text-[#FF5959]">Screens</h1>
            <img src="Screens1.png"></img><br></br>
            <img src = "Screens2.png"></img><br></br>
            <p>________________________________________________________________________________________________</p>
            <br></br>
            <h1 className="text-xl text-[#FF5959]">Style Guide</h1>
            <img src="Style Guide Bank.png"></img>
            <br></br>
            <p>________________________________________________________________________________________________</p>
            <br></br>
            <h1 className="text-xl text-[#FF5959]">Key Takeaways</h1>
            <p>My work on Money Solution Bank App was a rewarding experience that provided me with valuable insights and skills that I can apply to future projects. While there were some challenges, that helped me grow as a designer and allowed me to develop new strategies for communicating my designs.</p>
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
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
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
