import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Fish, Waves } from 'lucide-react';
import fishImg from '../assets/images/fish-bg.png';

const Mission = () => {
    const missionText = "to provide the highest quality and widest range of Australian and selected imported seafood products available, coupled with experienced knowledgeable service and value, and the continued dedication and innovation of the way seafood is delivered and experienced by the public.";

    return (
        <section id="mission" className="relative py-24 md:py-40 bg-color-bg overflow-hidden">
            {/* Decorative Underwater Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/4 -left-20 animate-pulse">
                    <Fish size={150} className="text-accent rotate-12" />
                </div>
                <div className="absolute bottom-1/4 -right-20 animate-pulse" style={{ animationDelay: '1s' }}>
                    <Fish size={120} className="text-accent -rotate-12" />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Animated Mission Image/Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group lg:order-2"
                    >
                        <div className="absolute -inset-4 bg-accent/20 rounded-[2rem] blur-2xl group-hover:bg-accent/30 transition-all duration-500" />
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-square md:aspect-video lg:aspect-square shadow-2xl">
                            <img
                                src={fishImg}
                                alt="Fresh Australian Seafood"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-color-bg via-transparent to-transparent" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-accent p-8 rounded-full shadow-2xl border-4 border-color-bg"
                        >
                            <Ship size={40} className="text-white" />
                        </motion.div>
                    </motion.div>

                    {/* Mission Content */}
                    <div className="lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-accent uppercase tracking-[0.4em] font-bold text-sm mb-6 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-accent"></span> Our Navigator's Mission
                            </h2>
                            <h3 className="text-4xl md:text-6xl font-bold mb-8 italic">
                                Sailing Toward <br /> Seafood Excellence
                            </h3>

                            <div className="space-y-6">
                                <p className="text-2xl md:text-3xl font-serif text-white/90 leading-relaxed italic border-l-4 border-accent pl-8 py-2">
                                    "Our goal is simple..."
                                </p>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 1 }}
                                    viewport={{ once: true }}
                                    className="text-lg md:text-xl text-text-dim leading-relaxed"
                                >
                                    {missionText}
                                </motion.p>
                            </div>

                            <div className="mt-12 flex flex-wrap gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/5 p-4 rounded-xl">
                                        <Waves className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Freshly Caught</p>
                                        <p className="text-sm text-text-dim">Direct from local boats</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/5 p-4 rounded-xl">
                                        <Fish className="text-accent" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Highest Quality</p>
                                        <p className="text-sm text-text-dim">Aussie & Premium Imports</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Mission;
