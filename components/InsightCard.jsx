"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import Link from "next/link";

const InsightCard = ({ imgUrl, title, subtitle, index, articaleURL }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>

        <Link
          href={articaleURL}
          target="blank"
          className="lg:hidden text-white border px-4 py-2 rounded-full w-fit text-right mt-3 hover:bg-white hover:text-black duration-500"
        >
          Learn more
        </Link>
      </div>

      <Link
        href={articaleURL}
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white hover:bg-black duration-500"
      >
        <svg
          width="30"
          height="25"
          viewBox="0 0 30 25"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[40%] h-[40%] object-contain"
        >
          <path
            d="M12.0363 0.993211C11.3858 0.910773 10.7547 1.31358 10.5699 1.96362C10.3659 2.68077 10.7819 3.42747 11.499 3.63144L11.4991 3.63144L24.4301 7.31073L24.7794 7.41013L24.4617 7.5862L1.40362 20.3662L1.24084 20.4713C0.711092 20.8695 0.542494 21.6077 0.872957 22.2038C1.23442 22.8559 2.05608 23.0915 2.70819 22.7301L25.7672 9.9496L26.0848 9.77358L25.9841 10.1224L22.2559 23.0294L22.2123 23.236C22.1271 23.8861 22.5273 24.5188 23.1765 24.7065C23.8928 24.9134 24.6412 24.5006 24.8482 23.7843L29.5892 7.37896L29.5918 7.36996L29.5925 7.36823C29.6077 7.31385 29.6195 7.25853 29.6278 7.20261C29.6279 7.20238 29.6279 7.20215 29.6279 7.20192L29.6306 7.18249C29.634 7.15754 29.6366 7.13275 29.6384 7.10961L29.6384 7.1094C29.641 7.07637 29.6424 7.04303 29.6426 7.00841C29.6427 6.98731 29.6423 6.96654 29.6414 6.94736L29.6413 6.94666C29.6396 6.90471 29.6358 6.8626 29.6299 6.81928C29.6269 6.7977 29.6234 6.77649 29.6198 6.75731L29.6197 6.75677C29.6122 6.71711 29.603 6.67747 29.5916 6.637C29.586 6.61753 29.5802 6.59856 29.5741 6.5807L29.5739 6.57994C29.5613 6.54221 29.547 6.50474 29.5308 6.46766L29.4714 6.34765L12.0363 0.993211ZM12.0363 0.993211L12.243 1.03594L28.6616 5.70566C28.7556 5.7324 28.8443 5.76839 28.927 5.81232C28.9533 5.82734 28.9781 5.84163 29.0021 5.85644L29.0021 5.8565L29.0061 5.85879C29.0247 5.8695 29.0438 5.88191 29.0639 5.89594C29.0942 5.91794 29.1238 5.94043 29.152 5.96368L29.1541 5.96541C29.175 5.982 29.1945 5.99916 29.2142 6.01759C29.2391 6.04155 29.2644 6.06707 29.2883 6.09331L29.2898 6.09491C29.3059 6.11198 29.3208 6.12918 29.3357 6.14736C29.3584 6.17564 29.3806 6.20508 29.4014 6.23527L29.4026 6.23686C29.4179 6.25841 29.4324 6.28069 29.4465 6.30398L12.0363 0.993211Z"
            fill="#F5F5F5"
            stroke="#F1F5F8"
            stroke-width="0.3"
          />
        </svg>
      </Link>
    </div>
  </motion.div>
);

export default InsightCard;
