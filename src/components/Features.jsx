import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, Globe, Cpu, Layers } from 'lucide-react';

const features = [
    {
        icon: <Zap size={24} />,
        title: "Lightning Fast",
        description: "Optimized for speed with zero-config builds and instant HMR.",
        color: "bg-amber-100 text-amber-600",
    },
    {
        icon: <Cpu size={24} />,
        title: "AI Powered",
        description: "Leverage our advanced AI to automate your workflow seamlessly.",
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        icon: <Layers size={24} />,
        title: "Full Customization",
        description: "Every component is fully customizable to match your brand identity.",
        color: "bg-pink-100 text-pink-600",
    },
    {
        icon: <Shield size={24} />,
        title: "Enterprise Security",
        description: "Bank-grade security standards to keep your data safe and sound.",
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        icon: <Smartphone size={24} />,
        title: "Mobile First",
        description: "Responsive design that looks stunning on any device, anywhere.",
        color: "bg-sky-100 text-sky-600",
    },
    {
        icon: <Globe size={24} />,
        title: "Global CDN",
        description: "Deploy to the edge with our global content delivery network.",
        color: "bg-violet-100 text-violet-600",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Everything you need to build
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Powerful features to help you build, launch, and scale your next big idea.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
