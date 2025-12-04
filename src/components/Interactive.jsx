import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Interactive = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="py-32 bg-slate-900 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div style={{ opacity, y }}>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        Experience the Future
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
                        Immerse your users in a world of fluid animations and seamless interactions.
                    </p>

                    <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 glass-dark">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                            </div>
                        </div>
                        {/* Abstract animated shapes */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-20 -right-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Interactive;
