"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const callRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: callRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={callRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] dark:from-gray-900 dark:to-[#1F2A48] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5 text-gray-700 dark:text-gray-300">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <motion.img
            src={StarImage.src}
            alt="Star img"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />

          <motion.img
            src={SpringImage.src}
            alt="Spring img"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>

        <div className="flex justify-center items-center gap-6 mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text text-gray-800 dark:text-gray-200">
            Learn more
            <ArrowIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
