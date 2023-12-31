"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";

type Images = {
  title: string;
  path: string;
};

type Slides = {
  images: Images[];
};

type WorkSlides = {
  slides: Slides[];
};

// data
const workSlides: WorkSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/Home-page-Shopping.png",
        },
        {
          title: "title",
          path: "/Admin-Dashboard.png",
        },
        {
          title: "title",
          path: "/Spotify-Clone (2).png",
        },
        {
          title: "title",
          path: "/Weblog (2).png",
        },
      ],
    },
  ],
};

const WorkSlider: React.FC = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden group flex justify-center items-center group"
              >
                <div className="flex justify-center items-center relative overflow-hidden">
                  <Image src={image.path} width={500} height={300} alt="" />

                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc]
                   to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                  />

                  <div
                    className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                     transition-all duration-300"
                  >
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      <div className="delay-100">LIVE</div>

                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>

                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
