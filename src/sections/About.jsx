import { User } from "lucide-react";
import profileImg from "../assets/profile.jpg";

const About = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-background border-t border-border/10">
            <div className="container mx-auto max-w-5xl">
                <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                        <User className="h-6 w-6 text-purple-400" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        About Me
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 text-center md:text-left">
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p className="animate-fade-in-up">
                            Hello! I'm <span className="text-purple-400 font-medium">Tamada Sasi Kiran</span>, a B.Tech CSE (Data Science) graduate and Full-Stack Developer focused on building modern web applications and AI-powered tools.
                        </p>
                        <p className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                            I develop responsive user interfaces with React and scalable backend APIs using Node.js, Express, and FastAPI, along with efficient database design and API integrations.
                        </p>
                        <p className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                            I am also exploring Generative AI, AI Agents, and Voice AI, building intelligent applications using platforms like ElevenLabs.
                        </p>
                        <p className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                            I enjoy learning new technologies and creating clean, efficient, and user-focused digital solutions.
                        </p>
                    </div>

                    <div className="relative group mx-auto w-full max-w-sm rounded-[2rem] p-1 bg-gradient-to-br from-purple-500/50 via-purple-500/20 to-transparent">
                        <div className="w-full aspect-square rounded-[1.8rem] bg-card flex flex-col items-center justify-end overflow-hidden relative shadow-[0_0_30px_rgba(170,59,255,0.1)] transition-transform duration-500 hover:scale-[1.02] group">
                            <img 
                                src={profileImg} 
                                alt="Tamada Sasi Kiran" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mt-8 md:mt-12 pt-12 border-t border-border/10 text-left">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-foreground">Education</h3>
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

export default About;
