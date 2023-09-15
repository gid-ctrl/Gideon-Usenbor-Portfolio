"use client"

import React, {useState, useRef} from 'react'
import ProjectsCard from './projectscard'
import { motion, useInView } from 'framer-motion';


const projectsData = [

{
  id: 1,
      title: "Next.Js Portfolio Website",
      description: "Here is my Portfolio Website, using Next.Js to create the website",
      image: "/images/Gideon-logo.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "WeShare Web Chatroom",
      description: "CRUD app called WeShare, that allows you to share a web message with the world.",
      image: "/images/projects/second-project-homepage.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/gid-ctrl/weshare.git",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Cohort Manager",
      description: "Team Development simulation working on a real-world application",
      image: "/images/projects/",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Spotify Clone",
      description: "Spotify clone using HTML, CSS, and JavaScript, showcasing front-end skills in web page layout, styling, and responsiveness.",
      image: "/images/projects/spotify-clone.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/gid-ctrl/Spotify-Clone.git",
      previewUrl: "/",
    },
  ];
  
  const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };

    const filteredProjects = projectsData.filter((project) =>
    project.tag
  );
  
    return (
      <section>
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects</h2>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
    {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 1.8, delay: index * 1.4 }}
          >
          <ProjectsCard
          key={project.id}
          title={project.title}
          description={project.description}
          imgUrl={project.image}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
          />
          </motion.li>
    ))}
    </ul>
    </section>
  )
        }

export default ProjectsSection