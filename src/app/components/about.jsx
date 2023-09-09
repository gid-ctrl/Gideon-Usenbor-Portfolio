"use client"

import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './tabbutton'

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>JavaScript</li>
          <li>HTML</li>
          <li>PostgreSQL</li>
          <li>CSS</li>
          <li>Git</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Boolean UK - Fullstack Developer</li>
          <li>Nottingham Trent University - Bachelor of Law & Masters of Law</li>
        </ul>
      ),
    },
  ];
  
const AboutMe = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id)
    })
}
    return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/aboutme.png" width={300} height={300} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p>Enthusiastic junior software developer with a background in Law looking to launch a career in Tech. Always had an interest and desire in computing, as shown by achieving distinctions in GCSE and A-Level results. I have experience working with JavaScript, HTML, CSS, React, Node.Js, PostgresSQL and Git.</p>
                <div className='flex flex-row mt-8'>
                <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
                </div>
                <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
            </div>
            </div>
            </section>
    )
}

export default AboutMe