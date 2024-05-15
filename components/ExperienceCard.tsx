import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-full md:w-[600px] xl:w-[665px] snap-center p-5 md:p-10 mt-16 md:mt-0 bg-[#171717] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
      <div className="">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          className="md:w-24 md:h-24 w-20 h-20 rounded-full object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt=""
        />
      </div>

      <div className="px-0 w-full overflow-x-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-[#7D12FF]/80">
        <h4 className="text-xl md:text-2xl font-light">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold text-lg md:text-xl mt-1">
          {experience?.company}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              alt=""
              key={technology._id}
              className="w-7 h-7 md:w-10 md:h-10 rounded-full"
              src={urlFor(technology?.image).url()}
            />
          ))}
        </div>
        <p className="uppercase md:py-2 text-gray-300">
          {new Date(experience?.dateStarted).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}{" "}
          -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
        </p>
        <ul className="list-disc space-y-2 ml-5 text-xs md:text-sm  pr-5">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
