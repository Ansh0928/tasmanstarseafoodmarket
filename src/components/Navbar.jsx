import React, { useState, useEffect } from 'react';
import { Anchor, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 flex-shrink-0">
                    <img
                        src="https://tasmanstarseafoodmarket.com.au/cdn/shop/files/1e0e640a464cdc2c1254a5dc4d24c2ff_1.png"
                        alt="Tasman Star Seafood Logo"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold tracking-widest uppercase ml-4">
                    <a href="#home" className="hover:text-accent transition-colors">Home</a>
                    <a href="#story" className="hover:text-accent transition-colors">Our Story</a>
                    <a href="#map" className="hover:text-accent transition-colors">Sourcing</a>
                    <a href="#products" className="hover:text-accent transition-colors">Shop</a>
                    <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
                    <div className="flex items-center gap-4 ml-4">
                        <div className="relative cursor-pointer hover:text-accent transition-colors">
                            <ShoppingCart size={24} />
                            <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">2</span>
                        </div>
                        <button className="bg-accent text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all font-bold">
                            Order Now
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full glass py-8 flex flex-col items-center gap-6 animate-in slide-in-from-top duration-300">
                    <a href="#home" className="text-lg" onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#story" className="text-lg" onClick={() => setIsMenuOpen(false)}>Our Story</a>
                    <a href="#map" className="text-lg" onClick={() => setIsMenuOpen(false)}>Sourcing</a>
                    <a href="#products" className="text-lg" onClick={() => setIsMenuOpen(false)}>Shop</a>
                    <a href="#contact" className="text-lg" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    <button className="bg-accent text-white px-8 py-3 rounded-full">Order Now</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
