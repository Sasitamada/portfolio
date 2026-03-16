import React from "react";
import { ArrowDown, Mail, Github } from "lucide-react";
import PixelBlast from "../components/PixelBlast";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section id="home" className="relative flex flex-col justify-center min-h-screen px-6 md:px-12 pt-20 overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <PixelBlast
                    variant="square"
                    pixelSize={5}
                    color="#B19EEF"
                    patternScale={3.25}
                    patternDensity={0.65}
                    pixelSizeJitter={0.4}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid={false}
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={1.1}
                    edgeFade={0.29}
                    transparent
                />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-purple-400 mb-4 md:mb-6 drop-shadow-sm leading-[1.1] max-w-4xl mx-auto">
                    Tamada <br className="md:hidden" />
                    <span>Sasi Kiran</span>
                </h1>

                <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up">
                    <span className="px-4 py-1.5 text-xs md:text-sm font-medium tracking-wide text-purple-300 border border-purple-500/30 bg-purple-500/10 rounded-full backdrop-blur-sm">
                        ML and DL Enthusiast
                    </span>
                    <span className="flex items-center text-purple-500/50 font-bold"></span>
                    <span className="px-4 py-1.5 text-xs md:text-sm font-medium tracking-wide text-purple-300 border border-purple-500/30 bg-purple-500/10 rounded-full backdrop-blur-sm">
                        Data Science
                    </span>
                    <span className="flex items-center text-purple-500/50 font-bold"></span>
                    <span className="px-4 py-1.5 text-xs md:text-sm font-medium tracking-wide text-purple-300 border border-purple-500/30 bg-purple-500/10 rounded-full backdrop-blur-sm">
                        Web Development
                    </span>
                </div>

                <p className="my-6 md:my-10 max-w-xl mx-auto text-sm md:text-base text-gray-400 leading-relaxed">
                    Full-stack developer specializing in modern web applications, API integrations,
                    and scalable solutions. Passionate about building clean UI and efficient backend systems.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
                    <Button
                        size="lg"
                        className="bg-purple-600 hover:bg-purple-700 text-white min-w-[200px] h-14 rounded-full text-lg shadow-[0_0_20px_rgba(170,59,255,0.4)] transition-all hover:scale-105"
                        onClick={() => {
                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        <ArrowDown className="mr-2 h-5 w-5" />
                        View Projects
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-400 text-foreground min-w-[200px] h-14 rounded-full text-lg transition-all"
                        onClick={() => {
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        <Mail className="mr-2 h-5 w-5" />
                        Contact Me
                    </Button>
                </div>
            </div>


        </section>
    );
};

export default Hero;
