"use client";
import { motion, useScroll } from "framer-motion";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Brain from "../../components/brain";
import { useRef } from "react";

const page = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-48 lg:w-2/3 lg:pr-0  xl:w-1/2">
          {/* biography container */}
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className=" text-lg">
              Hi, I’m Sathursana Kanakasapapathy I’m a beginner software
              engineer who loves creating easy-to-use and practical software
              solutions. My goal is to solve real-world problems with creative
              ideas and technology.
              <br />
              <br />
              I’m currently studying Software Engineering at Sabaragamuwa
              University of Sri Lanka. I have skills in programming, web
              development, and building apps. Apart from coding, I enjoy
              learning about new technology and solving puzzles.
            </p>

            <motion.div
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="flex justify-start"
            >
              <IoIosArrowDropdownCircle size={35} className="text-black" />
            </motion.div>
          </div>

          {/* Skills Container */}
          <div className="flex flex-col gap-8 justify-center" >
            {/* Skills Header */}
            <h1 className="font-bold text-2xl">SKILLS</h1>

            {/* Skills Sections */}
            <div className="flex flex-col gap-8">
              {/* Programming Languages */}
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-lg">Programming Languages</h2>
                <div className="flex gap-4 flex-wrap">
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Java
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    JavaScript
                  </div>
                </div>
              </div>

              {/* Frontend Technologies */}
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-lg">Frontend Technologies</h2>
                <div className="flex gap-4 flex-wrap">
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    HTML, CSS
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    React Native
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    React.js
                  </div>
                </div>
              </div>

              {/* Backend Technologies */}
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-lg">Backend Technologies</h2>
                <div className="flex gap-4 flex-wrap">
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Spring Boot
                  </div>
                </div>
              </div>

              {/* Databases */}
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-lg">Databases</h2>
                <div className="flex gap-4 flex-wrap">
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    MongoDB
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    MySQL
                  </div>
                </div>
              </div>

              {/* Non-Technical Skills */}
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-lg">Non-Technical Skills</h2>
                <div className="flex gap-4 flex-wrap">
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Communication Skills
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Problem-Solving
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Decision Making
                  </div>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    Adaptability
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Icon */}
            <motion.div
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="flex justify-start"
            >
              <IoIosArrowDropdownCircle size={35} className="text-black" />
            </motion.div>
          </div>

          {/* education container */}
          <div className="flex flex-col gap-8 justify-center pb-48" >
            <h1 className="font-bold text-2xl">EDUCATION</h1>

            {/* education list */}
            <div className="">
              {/* list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3">
                  {/* title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg break-words w-full">
                    MU/Vidyanandha College
                  </div>
                  {/* description */}
                  <div className="p-3 text-sm italic">
                    Completed my G.C.E (A/L) exams in 2019 with subjects in
                    Combined Mathematics, Chemistry, and Physics. This helped me
                    develop strong problem-solving and analytical skills.
                  </div>
                  {/* time */}
                  <div className="p-3 text-blue-500 text-sm font-semibold">
                    2017–2019
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6  flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className=" absolute w-5 h-5 rounded-full ring-4 ring-blue-500 bg-white -left-2"></div>
                  </div>
                </div>

                {/* right */}
                <div className="w-1/3"></div>
              </div>

              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-500 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3">
                  {/* TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg break-words w-full">
                    Sabaragamuwa University of Sri Lanka
                  </div>
                  {/* DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Bachelor of Science (Hons) in Software Engineering. This
                    program provides in-depth knowledge and skills in software
                    development, preparing me for a career in the tech industry.
                  </div>
                  {/* TIME */}
                  <div className="p-3 text-blue-500 text-sm font-semibold">
                    2021 - Present
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* svg container */}
        <div className="hidden lg:block sticky top-0 z-30   w-1/3 xl:w-1/2 ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default page;
