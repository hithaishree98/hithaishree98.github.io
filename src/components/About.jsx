import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import {profile} from "../assets/"; // replace with your photo path

const About = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-col md:flex-row items-center md:items-start md:justify-between gap-10 md:gap-16">
      
      {/* Left: Text */}
      <motion.div 
        className="md:w-2/3 p-4 bg-gray-900/50 rounded-xl"
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me.</h2>

        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        I’m a software engineer based in the USA with{" "}
        <span className="text-[#60bddb] font-semibold">3 years of professional experience</span> and a Master’s degree in Information Science from{" "}
        <span className="text-[#60bddb] font-semibold">University of Pittsburgh</span>. My work at Siemens, Bosch, and PathVu allowed me to contribute to {" "}
        <span className="text-[#60bddb] font-semibold">simulation platforms, diagnostic software, and data pipelines</span>, solving real-world problems while sharpening my technical skills.
        <br /><br />
        I’ve worked on projects such as building modular simulation modules to accelerate engineering workflows, developing data processing pipelines that automate complex transformations, and creating diagnostic tools with event-driven logic for improved reliability. These experiences strengthened my proficiency in {" "}<span className="text-[#60bddb] font-semibold">full-stack development, cloud platforms, machine learning, and designing systems that are scalable, maintainable, and efficient.</span>
        <br /><br />
        Each project taught me to quickly learn new frameworks, collaborate across teams, and deliver solutions with measurable impact. I’m enthusiastic about applying these skills to new challenges, continuously growing as an engineer, and contributing to high-impact projects.
      </motion.p>

      </motion.div>

      {/* Right: Photo */}
      <motion.div
        className="md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-32"
        variants={fadeIn("right", "", 0.5, 1)}
      >
        <img
          src={profile}
          alt="Hithaishree Shankar"
          className="w-[350px] h-[350px] object-cover rounded-full shadow-xl opacity-70 transition duration-300"
        />
      </motion.div>

    </div>
  );
};

export default SectionWrapper(About, "about");
