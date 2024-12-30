"use client"
import Image from "next/image";
import {motion} from "framer-motion";

const Homepage = () => {
  return (
    <motion.div className="h-full" initial ={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}} >
    <div className="h-screen flex flex-col px-4 lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Image Section */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/sathu2.png"alt="" fill className="object-contain"
        />
      </div>

      {/* About Me Section */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I am Sathursana Kanakasapapathy!
        </h1>
        <p className="md:text-xl">
          I focus on designing simple, user-friendly software solutions that
          make a difference. With creativity and precision, I turn ideas into
          practical solutions. My goal is to use technology to solve problems
          effectively. Let’s collaborate to create something meaningful!
        </p>

        {/* buttons */}
        <div className="flex gap-4 w-full justify-center lg:justify-start">
          <button className="bg-black text-white px-4 py-2 rounded-lg ring-black hover:bg-gray-800 transition">
            View My Work
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-lg ring-black hover:ring-gray-400 transition">
            Contact Me
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
