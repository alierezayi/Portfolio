"use client";

import { motion } from "framer-motion";

import ProjectsBtn from "@/components/ProjectsBtn";
import ParticlesContainer from "@/components/ParticlesContainer";
import Avatar from "@/components/Avatar";

import { fadeIn } from "@/lib/variants-utils";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-36 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 z-10"
          >
            Ali Rezaei
            <br /> <span className="text-accent mt-0">Web Developer</span>
          </motion.h1>

          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 z-10"
          >
            <p>
              Hello, I&apos;m Ali. I&apos;m a{" "}
              <span className="text-accent font-semibold">Front-End</span>{" "}
              developer I enjoy building sites & apps. My focus is in React
              (Next.js) . Here you can see my portfolio, download my CV file and
              contact me.
            </p>

            <div className="flex justify-center xl:justify-start items-center gap-4 mt-5">
              <Link
                className="group h-12 px-7 py-3 flex items-center gap-2 z-10 rounded-full  outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack bg-white/10"
                href="/Ali_Rezaei.pdf"
                download
              >
                Download CV{" "}
                <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
              </Link>

              <Link
                className="p-4 w-12 h-12 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack bg-white/10 text-white/60"
                href="https://github.com/alierezayi"
                target="_blank"
              >
                <FaGithubSquare />
              </Link>
            </div>
          </motion.div>

          <div className="flex justify-center xl:hidden relative z-20">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex mb-12"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0" />

        <ParticlesContainer />

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          exit="hidden"
          className="w-full h-full max-w-[550px] max-h-[470px] absolute -bottom-32 lg:bottom-0 lg:right-[6%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
