import React from 'react'
import ProjectsCard from './projectscard'

const projectsData = [
    {
      id: 1,
      title: "Next.Js Portfolio Website",
      description: "Project 1 description",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "WeShare Web Chatroom",
      description: "Project 2 description",
      image: "/images/projects/second-project-homepage.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Cohort Manager",
      description: "Project 3 description",
      image: "/images/projects/",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Spotify Clone",
      description: "Authentication and CRUD operations",
      image: "/images/projects/spotify-clone.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

const ProjectsSection = () => {
  return (
    <>
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects</h2>
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) =>  (
    <ProjectsCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
    ))}
    </div>
    </>
  )
        }

export default ProjectsSection