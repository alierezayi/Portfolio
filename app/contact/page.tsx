"use client";

import { motion } from "framer-motion";

import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "@/lib/variants-utils";

const ContactPage: React.FC = () => {
  return (
    <div className="h-full bg-primary/30 min-h-screen">
      <div className="container mx-auto py-32 text-center xl:text-left flex justify-center items-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-clip mb-12"
          >
            Let&rsquo;s <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-1 flex-col gap-6 w-full mx-auto"
          >
            <input type="text" placeholder="email" className="input" />

            <textarea placeholder="message" className="textarea" />

            <button
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all
              duration-300 flex justify-center items-center overflow-hidden hover:border-accent group"
            >
              <span className=" group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Lets talk.
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:opacity-100 group-hover:-translate-y-0
                group-hover:flex transition-all duration-300 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
