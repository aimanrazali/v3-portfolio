import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

export default function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        alt="skill"
        className="rounded-full border border-gray-800 object-cover w-16 h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-95 transition duration-300 ease-in-out group-hover:bg-[#171717] h-16 w-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-[#7d12ff] opacity-100">{skill?.progress}%</p>
        </div>
      </div>
    </div>
  );
}
