import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "@/typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

export default function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    if (typeof window !== "undefined") {
      window.location.href = `mailto: aimanrazali909@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    }
  };

  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-36">
        <h4 className="text-2xl md:text-3xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#7D12FF]/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-2 md:space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#7D12FF] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#7D12FF] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl">{pageInfo.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#7D12FF] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl">{pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-4/5 md:w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name", { required: true })}
              placeholder="Name"
              className="contactInput w-full"
              type="text"
              required
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-full"
              type="email"
              required
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#7D12FF] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
