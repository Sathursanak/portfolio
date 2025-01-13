"use client";

import Link from "next/link";
import { MdMenu } from "react-icons/md";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: "0",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* Name Section (Visible only on smaller screens) */}
      <div className="md:hidden lg:flex">
        <Link
          href="/"
          className="text-lg text-white bg-black rounded-md p-2 flex items-center justify-center mt-2"
        >
          Sathursana
        </Link>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link
          href="https://github.com/Sathursanak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.png" className="w-9 h-9" alt="GitHub" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sathursana-kanakasapapathy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.png" className="w-8 h-8" alt="LinkedIn" />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className="w-10 h-8 z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <MdClose className="text-4xl text-white absolute top-4 right-4 z-50" />
          ) : (
            <MdMenu className="text-4xl text-black" />
          )}
        </div>

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            style={{ pointerEvents: "auto" }} // Ensure it responds to clicks
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url} className="cursor-pointer">
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
