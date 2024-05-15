import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        // viewport={{ once: true }} // if don't want it to do it again
        className="md:mb-20 mt-20 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 xl:w-[300px] md:h-[300px]"
        src={urlFor(pageInfo?.profilePic).url()}
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#7d12ff]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
