import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Instagram, Linkedin, Github, Mail, User } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];
    
    const socialLinks = [
        { name: "Instagram", href: "https://www.instagram.com/sasi__x___/", icon: Instagram },
        { name: "LinkedIn", href: "https://linkedin.com/in/sasi-tamada-88546734b", icon: Linkedin },
        { name: "GitHub", href: "https://github.com/Sasitamada", icon: Github },
        { name: "Email", href: "mailto:tsasi1302@gmail.com", icon: Mail },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 max-w-6xl md:px-12 flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <a
                        href="#home"
                        onClick={(e) => scrollToSection(e, "#home")}
                        className="p-2 bg-purple-500/10 rounded-xl border border-purple-500/20 hover:scale-110 transition-all duration-300 group"
                    >
                        <User size={24} className="text-purple-400 group-hover:text-purple-300" strokeWidth={1.6875} />
                    </a>

                    {/* Desktop Nav - Now on the left side near logo */}
                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-5">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target={social.name === "Email" ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-purple-400 transition-all duration-300 hover:scale-110"
                            aria-label={social.name}
                        >
                            <social.icon size={20} strokeWidth={1.5} />
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden ml-auto text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <>
                    <div 
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-8 px-6 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-2xl font-bold text-foreground py-2 border-b border-border/50 flex justify-between items-center group"
                            >
                                {link.name}
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-400">→</span>
                            </a>
                        ))}
                        <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border/50">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target={social.name === "Email" ? "_self" : "_blank"}
                                    rel="noopener noreferrer"
                                    className="p-3 bg-purple-500/10 text-purple-400 rounded-xl hover:bg-purple-500/20 transition-all"
                                    aria-label={social.name}
                                >
                                    <social.icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
