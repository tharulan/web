import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';
import Button from './Button';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 mb-6">
                        <span className="text-primary font-semibold text-sm">New Features Available 🚀</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-900">
                        Build Faster. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Launch Smarter.
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                        A modern platform designed to create stunning digital experiences with zero effort.
                        Elevate your brand with our intuitive tools.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="primary" className="px-8">
                            Get Started <ArrowRight size={20} />
                        </Button>
                        <Button variant="secondary" className="px-8">
                            <Play size={20} className="fill-current" /> Watch Demo
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center gap-4 text-slate-500 text-sm">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                            ))}
                        </div>
                        <p>Trusted by 10,000+ developers</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Abstract 3D/Illustration Placeholder */}
                    <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[40px] rotate-6 opacity-20 blur-xl" />
                        <div className="relative w-full h-full bg-white rounded-[30px] shadow-2xl overflow-hidden border border-slate-100 p-6 flex items-center justify-center">
                            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[length:20px_20px]" />

                            {/* Animated Elements inside the card */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="relative z-10 w-3/4 h-3/4 bg-slate-50 rounded-2xl shadow-lg border border-slate-200 p-6"
                            >
                                <div className="w-full h-8 bg-slate-200 rounded-lg mb-4" />
                                <div className="w-2/3 h-4 bg-slate-200 rounded mb-2" />
                                <div className="w-1/2 h-4 bg-slate-200 rounded mb-6" />

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-24 bg-indigo-50 rounded-xl border border-indigo-100" />
                                    <div className="h-24 bg-sky-50 rounded-xl border border-sky-100" />
                                </div>
                            </motion.div>

                            {/* Floating Badges */}
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl z-20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <Zap size={20} fill="currentColor" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500">Performance</p>
                                        <p className="font-bold text-slate-900">99.9%</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
