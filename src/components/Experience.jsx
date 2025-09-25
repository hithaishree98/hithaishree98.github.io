import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  // use index to decide animation direction
  const fromLeft = index % 2 === 0;

  const contentMotion = {
    initial: { x: fromLeft ? -100 : 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const iconMotion = {
    initial: { scale: 0.6, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.45, ease: "easeOut" },
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#13242aff",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      dateClassName="text-secondary whitespace-pre-line"
      iconStyle={{ background: experience.iconBg }}
      // use an animated icon wrapper so icon also animates
      icon={
        <motion.div
          initial={iconMotion.initial}
          whileInView={iconMotion.whileInView}
          viewport={iconMotion.viewport}
          transition={iconMotion.transition}
          className="flex justify-center items-center w-full h-full"
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </motion.div>
      }
    >
      {/* animate the content container (the part that slides in) */}
      <motion.div
        initial={contentMotion.initial}
        whileInView={contentMotion.whileInView}
        viewport={contentMotion.viewport}
        transition={contentMotion.transition}
      >
        <div>
          <h3 className="text-white-100 text-[24px] font-bold">
            {experience.title}
          </h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, idx) => (
            <li
              key={`experience-point-${idx}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            // pass index into the card so we can animate left/right
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
