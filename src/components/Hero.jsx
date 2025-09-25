import { motion } from "framer-motion";
import { styles } from "../styles";
import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "../assets/";

const Hero = () => {
  const name = "Hithaishree.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < name.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prev => prev + name.charAt(index));
        setIndex(prev => prev + 1);
      }, 140);

      return () => clearTimeout(timeoutId);
    }
  }, [index, name]);

  return (
    <section className={`relative w-full h-screen mx-auto flex flex-col justify-between`}>
      
      {/* Main Hero Text - centered vertically */}
      <div className={`flex flex-col justify-center items-center flex-1 ${styles.paddingX}`}>
        <h1 className={`${styles.heroHeadText}`}>
          Hi, I'm{" "}
          <span className="text-[#60bddb]">
            {displayedText}
            <span className="inline-block w-[4px] h-10 bg-[#60bddb] ml-1 animate-blink"></span>
          </span>
        </h1>
        <p className="mt-4 text-secondary text-[24px] sm:text-[26px] leading-relaxed max-w-5xl text-center">
          Software Engineer | Siemens, PathVu, Bosch
        </p>

        <p className="mt-4 text-white-100 text-[24px] sm:text-[16px] leading-relaxed max-w-3xl text-center">
          Driven by curiosity and a passion for building systems that solve real problems, I’ve contributed to diagnostic software, simulation tools, and data pipelines. 
    I enjoy exploring new technologies, collaborating across teams, and turning ideas into solutions that make a difference while continuously growing as an engineer.
        </p>
      </div>

      {/* Contact Links - near bottom */}
      <div className="flex justify-center items-center mb-32 space-x-10">
        <a href="mailto:hithaishreeshankar98@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={FaEnvelope} alt="Email" className="w-12 h-12 hover:scale-150 transition-transform"/>
        </a>
        <a href="https://github.com/hithaishree98" target="_blank" rel="noopener noreferrer">
          <img src={FaGithub} alt="GitHub" className="w-8 h-8 hover:scale-150 transition-transform"/>
        </a>
        <a href="https://www.linkedin.com/in/hithaishree-shankar/" target="_blank" rel="noopener noreferrer">
          <img src={FaLinkedin} alt="LinkedIn" className="w-12 h-12 hover:scale-150 transition-transform"/>
        </a>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center">
        <a href="#about" className="flex flex-col items-center animate-bounce text-white-100 text-sm">
          <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
