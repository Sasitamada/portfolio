import React, { useState } from "react";
import { Mail, Github, Linkedin, Send, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate sending
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-16 md:py-24 px-6 md:px-12 bg-background border-t border-border/10 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[60vh] h-[60vh] bg-purple-600/5 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/4"></div>

            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center mb-16 text-center">
                    <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 mb-4">
                        <Mail className="h-8 w-8 text-purple-400" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
                        Whether you have a question, a project proposal, or just want to say hi, feel free to reach out. I'll get back to you as soon as possible!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="flex items-center gap-4 group">
                            <div className="p-4 rounded-full bg-card border border-border group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-colors">
                                <Mail className="h-6 w-6 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <a href="mailto:tsasi1302@gmail.com" className="text-lg font-medium hover:text-purple-400 transition-colors">
                                    tsasi1302@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="p-4 rounded-full bg-card border border-border group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-colors">
                                <Linkedin className="h-6 w-6 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">LinkedIn</p>
                                <a href="https://linkedin.com/in/sasi-tamada-88546734b" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-purple-400 transition-colors">
                                    linkedin.com/in/sasi-tamada-88546734b
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="p-4 rounded-full bg-card border border-border group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-colors">
                                <Github className="h-6 w-6 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">GitHub</p>
                                <a href="https://github.com/Sasitamada" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-purple-400 transition-colors">
                                    github.com/Sasitamada
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="p-4 rounded-full bg-card border border-border group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-colors">
                                <Instagram className="h-6 w-6 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Instagram</p>
                                <a href="https://www.instagram.com/sasi__x___/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:text-purple-400 transition-colors">
                                    @sasi__x___
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card/40 backdrop-blur-md border border-border hover:border-purple-500/50 p-6 md:p-10 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(170,59,255,0.1)]">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground" htmlFor="name">Full Name</label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Your full name"
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground" htmlFor="email">Email Address</label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground" htmlFor="message">Message</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Write your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder:text-zinc-500 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all group h-12"
                                disabled={status === "submitting" || status === "success"}
                            >
                                {status === "submitting" ? (
                                    "Sending..."
                                ) : status === "success" ? (
                                    "Message Sent!"
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
