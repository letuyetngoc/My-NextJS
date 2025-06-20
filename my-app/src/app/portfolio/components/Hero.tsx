"use client";
import { styles } from "@/utils/style";
import { motion } from "framer-motion";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 relative w-1 sm:h-80 h-40">
          <div className="absolute w-5 h-5 rounded-full bg-[#915EFF] top-0 z-1 " />
          <div className="absolute violet-gradient top-0 bottom-0 w-full h-full"></div>
        </div>

        <div>
          <h2 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915EFF]">Ngoc Le</span>
          </h2>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I&apos;m a Frontend Developer <br className="sm:block hidden" />
            passionate about building interactive web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute bottom-0 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
