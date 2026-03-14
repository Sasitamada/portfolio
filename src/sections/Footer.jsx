import React from "react";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-background border-t border-border/10 py-12 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-border/50">
                    <div className="md:col-span-2 space-y-4">
                        <a
                            href="#home"
                            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                            className="text-2xl font-bold tracking-tighter hover:text-purple-400 transition-colors inline-block"
                        >
                            TAMADA SASI KIRAN<span></span>
                        </a>
                        <p className="text-muted-foreground max-w-xs mt-4 leading-relaxed text-sm">
                            Sasi Tamada | Full Stack Developer specializing in Data Science and modern web applications.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Quick Links</h4>
                        <nav className="flex flex-col gap-2">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="text-sm text-muted-foreground hover:text-purple-400 transition-colors w-fit"
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/Sasitamada" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-card border border-border hover:border-purple-500/50 hover:text-purple-400 transition-all text-muted-foreground">
                                <Github size={18} />
                            </a>
                            <a href="https://linkedin.com/in/sasi-tamada-88546734b" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-card border border-border hover:border-purple-500/50 hover:text-purple-400 transition-all text-muted-foreground">
                                <Linkedin size={18} />
                            </a>
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="mt-4 flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group"
                        >
                            Back to top
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Tamada Sasi Kiran. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
