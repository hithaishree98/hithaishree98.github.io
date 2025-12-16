import { certifications } from "../constants";
import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({ title, issuer, image }) => {
  return (
    <motion.div
      variants={fadeIn("left", "spring", 0.5, 0.75)}
      className="w-[300px] min-w-[300px] flex-shrink-0 h-[500px]"
    >
      <Tilt
        options={{
          max: 60,
          scale: 1,
          speed: 500,
        }}
      >
        <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#5596ab] via -[#8ca1a8] to-[#0d0f0f] shadow-card">
          <div className="bg-tertiary rounded-2xl p-5 h-full">
            <div className="relative w-full h-[230px]">
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="mt-5">
              <h3 className="text-white-100 font-bold text-[24px]">{title}</h3>
              <p className="mt-2 text-secondary text-[14px]">{issuer}</p>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        ></motion.p>
      </div>
      <div className="mt-20 flex flex-row gap-7">
        {certifications.map((cert, index) => (
          <CertificationCard
            key={`certification-${index}`}
            index={index}
            {...cert}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
