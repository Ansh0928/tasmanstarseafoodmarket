import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Anchor } from 'lucide-react';
import heroImg from '../assets/images/hero-bg.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const boatRef = useRef(null);
    const contentRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect for the background
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // Boat movement animation
            gsap.to(boatRef.current, {
                x: 100,
                y: -10,
                rotation: 2,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
            });

            // Content fade out on scroll
            gsap.to(contentRef.current, {
                opacity: 0,
                y: -50,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '50% top',
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative flex items-center justify-center pt-20 overflow-hidden">
            {/* Background with Parallax */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${heroImg})`,
                    transform: 'scale(1.2)'
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Floating Boat Icon (Simulated) */}
            <div
                ref={boatRef}
                className="absolute bottom-20 left-10 md:bottom-40 md:left-20 z-10 text-white/5 select-none pointer-events-none"
            >
                <Anchor size={300} strokeWidth={0.1} className="rotate-[-10deg]" />
            </div>

            {/* Hero Content */}
            <div ref={contentRef} className="relative z-20 container mx-auto px-6 text-center">
                <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold mb-8 italic tracking-tight leading-[1.1]">
                    Where Quality <br />
                    <span className="text-accent underline decoration-white/10">Meets Freshness</span>
                </h1>
                <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/80 mb-12 font-sans tracking-wide leading-relaxed">
                    The Gold Coast's iconic seafood destination. Fresh wild-caught Aussie treasures delivered from our boat to your table.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="w-full sm:w-auto bg-accent text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-all shadow-2xl shadow-accent/40">
                        Order Fresh Today
                    </button>
                    <button className="w-full sm:w-auto border border-white/20 backdrop-blur-xl px-12 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all">
                        Our Story
                    </button>
                </div>
            </div>

            {/* Elegant Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 opacity-50">
                <span className="text-xs uppercase tracking-[0.3em]">Scroll Down</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
            </div>

            {/* Section Transition Mask */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-color-bg to-transparent z-40" />
        </section>
    );
};

export default Hero;
