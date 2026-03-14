import React from "react";
import { Laptop, Server, Database, Wrench, Code2, Cloud, BrainCircuit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Laptop className="text-purple-400 w-6 h-6" />,
            skills: ["Python", "JavaScript", "C", "HTML", "CSS"],
        },
        {
            title: "Technologies",
            icon: <BrainCircuit className="text-purple-400 w-6 h-6" />,
            skills: ["Machine Learning", "Deep Learning", "Generative AI", "AI Agent"],
        },
        {
            title: "Frameworks",
            icon: <Server className="text-purple-400 w-6 h-6" />,
            skills: ["React.js", "Tailwind CSS", "FastAPI"],
        },
        {
            title: "Databases",
            icon: <Database className="text-purple-400 w-6 h-6" />,
            skills: ["MySQL", "PostgreSQL"],
        },
        {
            title: "Cloud",
            icon: <Cloud className="text-purple-400 w-6 h-6" />,
            skills: ["AWS (Amazon Web Services)", "Google Cloud Platform (GCP)"],
        },
        {
            title: "Tools",
            icon: <Wrench className="text-purple-400 w-6 h-6" />,
            skills: ["Git", "GitHub", "VS Code"],
        },
    ];

    return (
        <section id="skills" className="py-24 px-6 md:px-12 bg-background border-t border-border/10 relative overflow-hidden">
            {/* Background Decorator */}
            <div className="absolute top-0 right-0 w-[50vh] h-[50vh] bg-purple-600/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto max-w-5xl">
                <div className="flex items-center gap-4 mb-16 justify-center">
                    <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                        <Code2 className="h-6 w-6 text-purple-400" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-center">
                        Skills
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => (
                        <Card
                            key={idx}
                            className="group/card relative overflow-hidden flex flex-col h-full bg-card/40 backdrop-blur-md border border-white/5 hover:border-purple-500/50 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(170,59,255,0.1)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                            <CardHeader className="flex flex-row items-center gap-4 p-6 pb-2 relative z-10">
                                <div className="p-2.5 rounded-xl bg-purple-500/10 group-hover/card:bg-purple-500/20 transition-all duration-300">
                                    {category.icon}
                                </div>
                                <CardTitle className="text-xl m-0 p-0 text-foreground font-bold tracking-tight">
                                    {category.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-4 relative z-10">
                                <ul className="space-y-3">
                                    {category.skills.map((skill, i) => (
                                        <li key={i} className="flex items-center text-muted-foreground group-hover/card:text-foreground/80 transition-colors">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 mr-3"></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
