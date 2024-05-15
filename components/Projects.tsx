import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#7D12FF]/80 scrollbar-thin h-screen">
        {projects?.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-start p-32 overflow-x-auto scrollbar-track-gray-400/20 scrollbar-thumb-[#7D12FF]/80 scrollbar-thin">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              className="h-44 md:h-96 w-auto mt-12"
              src={urlFor(project?.image).url()}
              alt=""
            />
            <div className="space-y-7 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#7D12FF]">
                  {project?.linkToBuild ? (
                    <a
                      href={project?.linkToBuild}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      {project?.title}
                    </a>
                  ) : (
                    project?.title
                  )}
                </span>{" "}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    alt=""
                    className="h-10 w-10"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                  />
                ))}
              </div>

              <p className="text-sm md:text-base xl:text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#7D12FF]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
