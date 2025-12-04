import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Driven by innovation, <br />
                            <span className="text-primary">focused on you.</span>
                        </h2>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            We started with a simple mission: to make web development accessible, fast, and beautiful for everyone.
                            What began as a side project has grown into a platform trusted by thousands of developers worldwide.
                        </p>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Our team is passionate about open source, clean code, and user-centric design. We believe that
                            great tools should get out of your way and let you focus on what matters most—building amazing products.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-4xl font-bold text-slate-900 mb-2">10k+</h4>
                                <p className="text-slate-500">Active Users</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-slate-900 mb-2">99%</h4>
                                <p className="text-slate-500">Satisfaction</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Team working together"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-[-20px] right-[-20px] w-full h-full border-2 border-primary/20 rounded-3xl z-0" />
                        <div className="absolute bottom-[-20px] left-[-20px] w-40 h-40 bg-secondary/10 rounded-full blur-2xl z-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
