"use client"

import React from "react";
import Image from "next/image"
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";



const HeroSection = () => {
   return (      
   <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-white">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Gideon",
                1000,
                "Junior Fullstack Developer",
                1000,
                "Fullstack Developer",
                1000,
                "Front-End Developer",
                1000,
                "Back-End Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Welcome to my Portfolio, here you will see my journey to become a fullstack developer
          </p>
          <div>
            <Link
              href="https://app.enhancv.com/share/acef5da2/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500  text-white mt-3"
            >
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg- bg-gradient-to-br from-gray-600 via-gray-500 to-white hover:bg-slate-800 border">
                <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/gideon.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default HeroSection