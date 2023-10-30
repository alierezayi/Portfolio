"use client";

import { motion } from "framer-motion";

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import WorkSlider from "@/components/WorkSlider";

import { fadeIn } from "@/lib/variants-utils";
import ParticlesContainer from "@/components/ParticlesContainer";

const WorkPage: React.FC = () => {
  return (
    <>
      <ParticlesContainer />

      <div className="h-full min-h-screen bg-primary/30 py-36 flex items-center">
        <Circles />

        <div className="container mx-auto">
          <div className="flex justify-center items-center flex-col">
            <div className="text-center flex flex-col lg:text-left mb-4 xl:mb-10">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 "
              >
                My Work <span className="text-accent">.</span>
              </motion.h2>
            </div>

            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>

        <Bulb />
      </div>
    </>
  );
};

export default WorkPage;
