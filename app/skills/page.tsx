"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import ParticlesContainer from "@/components/ParticlesContainer";

import { fadeIn } from "@/lib/variants-utils";

const mySkills = [
  {
    name: "HTML",
    image: "/html.png",
    url: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    image: "/css.png",
    url: "https://www.w3schools.com/css/",
  },
  {
    name: "SCSS",
    image: "/sass.png",
    url: "https://sass-lang.com/",
  },
  {
    name: "JavaScript",
    image: "/javascript.png",
    url: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    image: "/typescript.png",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    image: "/react.png",
    url: "https://react.dev/",
  },
  {
    name: "TailwindCSS",
    image: "/tailwind-css.png",
    url: "https://tailwindcss.com/",
  },
  {
    name: "MaterialUI",
    image: "/material-ui.png",
    url: "https://mui.com/",
  },
  {
    name: "Git",
    image: "/git.png",
    url: "https://git-scm.com/",
  },
  {
    name: "Redux(Toolkit)",
    image: "/redux.png",
    url: "https://redux.js.org/",
  },
  {
    name: "Next.js 13",
    image: "/nextjs.png",
    url: "https://nextjs.org/",
  },
  {
    name: "Framer Motion",
    image: "/framer-motion.svg",
    url: "https://www.framer.com/",
  },
  {
    name: "Zustand",
    image: "/bear.png",
    url: "https://zustand-demo.pmnd.rs/",
  },
  {
    name: "Swiper",
    image: "/swiper.svg",
    url: "https://swiperjs.com/",
  },
  {
    name: "NextAuth",
    image: "/next-auth.png",
    url: "https://next-auth.js.org/",
  },
  {
    name: "Chart.js",
    image: "/chartjs.svg",
    url: "https://www.chartjs.org/",
  },
];

const SkillsPage: React.FC = () => {
  return (
    <div className="h-full min-h-screen bg-primary/30 py-36 flex items-center">
      <Circles />

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Skills <span className="text-accent">.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto xl:mx-0"
            >
              Languages and technologies that I master and use in my projects
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] gap-5 max-h-[350px] overflow-y-auto xl:overflow-visible
              flex flex-wrap justify-center items-center"
          >
            {mySkills.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                className="flex justify-center items-center gap-2 py-3 px-4 rounded-lg bg-white/10 hover:scale-105 transition"
              >
                <div className="">
                  <Image src={item.image} width={25} height={25} alt="" />
                </div>

                <h2>{item.name}</h2>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default SkillsPage;
