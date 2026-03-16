import React from "react";
import ProjectCard from "../components/ProjectCard";
import { FolderGit2 } from "lucide-react";

const Projects = () => {
    const projectList = [
        {
            title: "MiniHelpDesk – Work Management Platform",
            description: "Developing a full-stack task and project management tool inspired by modern work management platforms. Includes features such as task creation, views, real-time updates, user management, and workspace customization.",
            techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
            githubLink: "https://github.com/Sasitamada",
        },
        {
            title: "Project Management Dashboard",
            description: "A secure and scalable dashboard for managing team workflows, tracking progress, and communicating in real-time.",
            techStack: ["React.js", "Node.js", "SQL", "TailwindCSS"],
            githubLink: "https://github.com/Sasitamada",
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-background border-t border-border/10">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 mb-4">
                        <FolderGit2 className="h-8 w-8 text-purple-400" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-lg">
                        A selection of my recent work showing my capability in building full-stack applications and solving complex problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
