import React from "react";
import "./style.css";

export default function AnimationStyle() {
  return (
    <>
      <div
        className="w-[75px] h-[75px] rounded-full border-2 border-solid border-[#16ff00] animate-[circle_2s_linear_infinite] 
      before:content-[''] before:absolute before:w-[18px] before:h-[18px] before:bg-[#16ff00] before:rounded-full before:shadow-[0_0_20px_#16ff00]"
      ></div>
      <div
        className="w-[50px] h-[50px] animate-[loader_1s_infinite]
      before:content-[''] before:block before:w-[20px] before:h-[20px] before:rounded-full before:mb-[10px] before:shadow-[0_0_20px_#0079ff] before:bg-[#16ff00] before:animate-[loader1_1s_infinite]
      after:content-[''] after:block after:w-[20px] after:h-[20px] after:rounded-full after:shadow-[0_0_20px_#ffed00] after:bg-[#ff0060] after:animate-[loader2_1s_infinite]"
      ></div>
      <div>
        <span className="text">H</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span>O</span>
        <span>!</span>
      </div>
    </>
  );
}
