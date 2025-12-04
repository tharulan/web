import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ children, variant = 'primary', className, ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-indigo-600 shadow-lg hover:shadow-indigo-500/30",
        secondary: "bg-white text-slate-900 border border-slate-200 hover:border-primary hover:text-primary",
        outline: "border-2 border-white text-white hover:bg-white/10",
        ghost: "text-slate-600 hover:text-primary hover:bg-slate-50",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
