import React from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
    return (
        <section id="education" className="py-24 px-6 md:px-12 bg-background border-t border-border/10">
            <div className="container mx-auto max-w-5xl">
                <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                        <GraduationCap className="h-6 w-6 text-purple-400" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        Education
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start text-left">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-foreground"></h3>
                        <div className="space-y-4">
                            <div className="border-l-2 border-purple-500/30 pl-4 py-1">
                                <h4 className="font-bold text-foreground text-lg uppercase tracking-tight">AVANTHI INSTITUTE OF ENGINEERING & TECHNOLOGY</h4>
                                <p className="text-purple-400 font-medium italic">B.Tech – CSE (Data Science)</p>
                                <p className="text-sm text-muted-foreground mt-1">2023–2026</p>
                            </div>
                            <div className="border-l-2 border-purple-500/30 pl-4 py-1">
                                <h4 className="font-bold text-foreground text-lg uppercase tracking-tight">SRI CHAITANYA JUNIOR COLLEGE</h4>
                                <p className="text-purple-400 font-medium italic">Intermediate (MPC)</p>
                                <p className="text-sm text-muted-foreground mt-1">2019–2021</p>
                            </div>
                            <div className="border-l-2 border-purple-500/30 pl-4 py-1">
                                <h4 className="font-bold text-foreground text-lg uppercase tracking-tight">BHASHYAM SCHOOL</h4>
                                <p className="text-purple-400 font-medium italic">SSC</p>
                                <p className="text-sm text-muted-foreground mt-1">2018–2019</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-foreground">Personal Details</h3>
                        <div className="bg-card/40 backdrop-blur-md border border-border p-6 rounded-2xl space-y-4 shadow-sm">
                            <div className="flex justify-between items-center py-2 border-b border-border/50">
                                <span className="text-muted-foreground font-medium">Date of Birth</span>
                                <span className="text-foreground">01/12/2003</span>
                            </div>
                            <div className="flex flex-col gap-2 py-2">
                                <span className="text-muted-foreground font-medium">Hobbies</span>
                                <div className="flex flex-wrap gap-2">
                                    {["Watching podcasts", "Browsing Internet", "Learning New Tech"].map(hobby => (
                                        <span key={hobby} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-semibold border border-purple-500/20">
                                            {hobby}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
