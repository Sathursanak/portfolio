"use client";
import Navbar from "../components/navbar";
import { AnimatePresence, delay } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-full bg-gradient-to-b from-blue-50 to-blue-300"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black  z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: "0.5", ease: "easeOut" }}
        ></motion.div>

        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: "0.8", ease: "easeOut" }}
        >
          {pathName.substring(1, 2).toUpperCase() + pathName.substring(2)}

        </motion.div>

        <motion.div
          className="h-screen w-screen fixed bg-black buttom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition:{delay: 0.5} }}
        ></motion.div>

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)] overflow-auto">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
