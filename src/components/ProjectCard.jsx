import React from "react";
import { Github, ExternalLink } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProjectCard = ({ project }) => {
    return (
        <Card className="group/card relative overflow-hidden flex flex-col h-full bg-card/40 backdrop-blur-md border border-white/5 hover:border-purple-500/50 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(170,59,255,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
            <CardHeader className="p-6 pb-2 relative z-10">
                <CardTitle className="text-xl font-bold tracking-tight text-foreground">
                    {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2 line-clamp-3">
                    {project.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 p-6 pt-4 relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-500/10 text-purple-300 border border-purple-500/20">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="flex gap-4 p-6 pt-4 border-t border-border/10 relative z-10">
                <a 
                    href={project.githubLink || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }), "border-border hover:bg-muted/50 w-full group")}
                >
                    <Github className="w-4 h-4 mr-2 group-hover:text-purple-400 transition-colors" />
                    GitHub
                </a>
                {project.liveLink && (
                    <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "default", size: "sm" }), "bg-purple-600 hover:bg-purple-700 w-full group")}
                    >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                    </a>
                )}
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
