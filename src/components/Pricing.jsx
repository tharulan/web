import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

const plans = [
    {
        name: "Starter",
        price: "$0",
        description: "Perfect for side projects and hobbyists.",
        features: ["Up to 3 projects", "Community support", "Basic analytics", "1GB storage"],
        highlight: false
    },
    {
        name: "Pro",
        price: "$29",
        description: "For growing teams and businesses.",
        features: ["Unlimited projects", "Priority support", "Advanced analytics", "10GB storage", "Custom domain"],
        highlight: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large-scale applications.",
        features: ["Unlimited everything", "24/7 Dedicated support", "Custom contracts", "SSO & Security", "SLA"],
        highlight: false
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Choose the plan that's right for you. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl transition-all duration-300 ${plan.highlight
                                    ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10'
                                    : 'bg-slate-50 text-slate-900 border border-slate-100 hover:shadow-lg'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                {plan.price !== "Custom" && <span className="text-sm opacity-70">/month</span>}
                            </div>
                            <p className={`mb-8 ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                                {plan.description}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-primary text-white' : 'bg-green-100 text-green-600'
                                            }`}>
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className="text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.highlight ? 'primary' : 'secondary'}
                                className="w-full"
                            >
                                Choose {plan.name}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
