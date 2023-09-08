"use client"

import React from "react";
import Image from "next/image"
import { TypeAnimation } from "react-type-animation";



const HeroSection = () => {
   return (      

   <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-white">Hello, I'm {" "}</span> 
            <br />
            <TypeAnimation
        sequence={[
          'Gideon',
          1000, 
          'Junior Fullstack Developer',
          1000,
          'Fullstack Developer',
          1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
      </h1>
        <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my Portfolio, here you will see my journey to become a fullstack developer
        </p>
        <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mb-4 mr-4 mt-1 bg-gradient-to-br from-gray-600 via-gray-500 to-white hover:bg-slate-600 text-white">About Me</button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg- bg-gradient-to-br from-gray-600 via-gray-500 to-white hover:bg-slate-800 border">
                <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                </button>
        </div>
            </div>
            <div className="col-span-5 place-self-center mb-6 mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
            src={"/images/gideon.png"}
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
            />
            </div>
            </div>
        </div>
    </section>
)}


export default HeroSection