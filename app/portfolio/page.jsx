"use client";

import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";

const projects = [
  {
    num: "01",
    category: " Individual Project",
    title: "Postify- Blog  Web Application ",
    description:
      "Developing a blog application with features like infinite scrolling, user roles, and content filters. The platform focuses on creating a seamless experience for users and administrators.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    live: "",
    img: "/postify.png",
    githubLink: "https://github.com/Sathursanak/Postify.git",
  },
  {
    num: "02",
    category: " Individual Project",
    title: "Animated Portfolio Website",
    description:
      "Building a visually engaging portfolio website featuring interactive animations and a responsive layout to showcase projects and skills.",
    stack: [
      { name: "Next.js" },
      { name: "Framer Motion" },
      { name: "Tailwind CSS" },
    ],
    img: "/porfolio.png",
    live: "",
    githubLink: "https://github.com/Sathursanak/portfolio.git",
  },
  {
    num: "03",
    category: " Individual Project",
    title: "ChatMate- One-on-One Chat Web Application",
    description:
      "Developed a real-time chat application for one-on-one communication, leveraging WebSocket for real-time data exchange.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Spring Boot" },
      { name: "WebSocket" },
    ],
    img: "/chatmate.png",
    live: "",
    githubLink: "https://github.com/Sathursanak/chatmate.git",
  },
  {
    num: "04",
    category: " Group Project",
    title: "Nook- Real-Time Housing Application",
    description:
      "Contributed to the frontend development of a mobile application that simplifies housing searches for university students with features like room value estimation and virtual tours.",
    stack: [
      { name: "React Native" },
      { name: "Spring Boot" },
      { name: "MongoDB" },
    ],
    img: "/nook.jpeg",
    live: "",
    githubLink: "https://github.com/Thars7/Nook.git",
  },
  {
    num: "05",
    category: " Group Project",
    title: "Moodwave- Music and Emotion Analysis",
    description:
      "Worked on frontend development of a web application for analyzing music and synchronizing emotion markers based on beat detection.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "MySQL" },
    ],
    img: "/moodwave.png",
    live: "",
    githubLink: "https://github.com/Sathursanak/MoodWave.git",
  },
  {
    num: "06",
    category: " Group Project",
    title: "SweetSlice- Custom Cake Ecommerce Website",
    description:
      "Collaborated on building an ecommerce website that enables users to order custom cakes online with various personalization options.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Vite" },
      { name: "Node.js" },
    ],
    img: "/sweetslice.png",
    live: "",
    githubLink: "https://github.com/malkiPamoda/SweetSliceNew.git",
  },
];

const page = () => {
  const [project, setProject] = useState(projects[0]);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const handleNextSlide = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrevSlide = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-6 px-4 sm:px-6" // Added sm:px-6 for small screen padding
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-black text-outline">
                {project.num}
              </div>

              {/* title */}
              <div className="text-[42px] font-bold leading-none text-black group-hover:text-accent duration-500 capitalize">
                {project.title}
              </div>
              {/* category */}
              <div className="text-[28px] font-semi-bold leading-none text-black group-hover:text-accent duration-500 capitalize">
                {project.category}
              </div>

              {/* project description */}
              <p className="">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4 text-sm text-green-100">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className=" text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white"></div>

              {/* buttons */}
              <div>
                {project.githubLink && (
                  <Link href={project.githubLink} target="_blank">
                    <button className="flex items-center gap-2 bg-black text-white py-2 px-4 rounded-lg hover:bg-accent duration-300">
                      <BsGithub size={20} />
                      GitHub
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-10 lg:mt-80">
              <button
                onClick={handlePrevSlide}
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-accent "
              >
                Prev
              </button>
              <button
                onClick={handleNextSlide}
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-accent"
              >
                Next
              </button>
            </div>
          </div>
          <div className="w-full xl:w-[50%] hidden xl:block">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              ref={swiperRef} // Attach ref here
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-black">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Mobile view image */}
          <div className="w-full xl:hidden mb-6">
            <div className="relative group flex justify-center items-center bg-black">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[300px] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
