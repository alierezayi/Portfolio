"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import Circles from "@/components/Circles";
import Avatar from "@/components/Avatar";

import { fadeIn } from "@/lib/variants-utils";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { TbCircleFilled, TbCircleDashed } from "react-icons/tb";

type InfoItem = {
  title: string | any;
  icons?: JSX.Element[];
  stage?: string;
};

type AboutData = {
  title: string;
  info: InfoItem[];
};

//  data
const aboutData: AboutData[] = [
  {
    title: "personal",
    info: [
      {
        title: "Date of Birth",
        stage: "2003-05-18",
      },
      {
        title: "Marital Status",
        stage: "Single",
      },
      {
        title: "Military Service",
        stage: "Educational Exemption",
      },
      {
        title: <HiOutlineMail size={25} />,
        stage: "im1.bitcode@gmail.com",
      },
      {
        title: <HiOutlinePhone size={25} />,
        stage: "+98 991 693 7150",
      },
      {
        title: <SlLocationPin size={25} />,
        stage: "Iran, Kerman",
      },
    ],
  },
  {
    title: "languages",
    info: [
      {
        title: "English",
        icons: [
          <TbCircleFilled key="circle" />,
          <TbCircleFilled key="circle" />,
          <TbCircleFilled key="circle" />,
          <TbCircleDashed key="circle" />,
          <TbCircleDashed key="circle" />,
          <TbCircleDashed key="circle" />,
        ],
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Branch",
        stage: "IT",
      },
      {
        title: "Grade",
        stage: "Undergraduate",
      },
      {
        title: "University",
        stage: "Besat non-profit university",
      },
      {
        title: "Study period",
        stage: "2022 - Present",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title:
          "I don't have any work experience in a company or organization yet !",
        stage: "",
      },
    ],
  },
];

const AboutPage: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  return (
    <div className="h-full min-h-screen bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        className="hidden xl:flex absolute bottom-0 -left-[250px] w-full h-full max-w-[550px] max-h-[470px]"
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row xl:items-start gap-x-6 mt-10">
        <div className="flex flex-1 flex-col justify-center z-10 mb-5 xl:mb-0">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Learn about <span className=" text-accent">me</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] hidden xl:block mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I am a passionate Front End Developer in creating dynamic and
            visually appealing websites. Proficient in HTML, CSS, and
            JavaScript, with expertise in using various frameworks such as React
            and Next. Experienced in optimizing websites to ensure optimal user
            experience. Excellent problem-solving abilities and the ability to
            work seamlessly in a team environment. Committed to staying up to
            date with the latest industry trends and technologies to deliver
            cutting-edge solutions.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, indexItem) => (
              <div
                key={indexItem}
                className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white font-semibold
                after:absolute after:-bottom-1 after:left-0 text-sm ${
                  index === indexItem &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                }`}
                onClick={() => setIndex(indexItem)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start mt-5">
            {aboutData[index].info.map((item, indexItem: number) => (
              <div
                key={indexItem}
                className="flex flex-1  md:flex-row max-w-max gap-x-2 items-center mb-2 justify-center"
              >
                <div className="font-light text-white/60">{item.title}</div>

                {item.stage?.length ? (
                  <div className=" text-white/60">-</div>
                ) : null}

                <div className="text-white/90">{item.stage}</div>

                <div className="flex gap-x-2">
                  {item.icons?.map((item, indexItem: number) => (
                    <div key={indexItem} className="text-2xl text-white/90">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
