"use client"
import { technologies } from "@/constants/portfolio";
import React from "react";
import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "@/hoc";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div className='w-28 h-28' key={index}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");