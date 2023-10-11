"use client";

import Transition from "@/components/Transition";

import { motion, AnimatePresence } from "framer-motion";

const FramerMotionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div className="h-full">
        <Transition />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default FramerMotionWrapper;
