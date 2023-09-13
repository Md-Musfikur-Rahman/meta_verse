"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    {
      id: "#about",
      Name: "About",
    },
    {
      id: "#explore",
      Name: "Explore",
    },
    {
      id: "#whatNew",
      Name: "Whats New",
    },
    {
      id: "#insight",
      Name: "Insight",
    },
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          METAVERSUS
        </h2>
        <img
          src="/menu.svg"
          alt="menu"
          className={
            isOpen
              ? "hidden"
              : "w-[24px] h-[24px] object-contain cursor-pointer"
          }
          // className=""
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className={isOpen ? "text-white text-xl h-fit" : "hidden"}>
        <div className="flex flex-col gap-3 absolute right-[11%] top-5 text-right z-10">
          {menus.map((menu, i) => (
            <a href={menu.id} key={i}>
              {menu.Name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
