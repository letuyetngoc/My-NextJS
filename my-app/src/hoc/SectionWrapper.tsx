"use client"
import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";
import { styles } from "@/utils/style";

const SectionWrapper = (Component: React.ComponentType, idName: string) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>

      <Component />
    </motion.section>
  );
};

export default SectionWrapper;
