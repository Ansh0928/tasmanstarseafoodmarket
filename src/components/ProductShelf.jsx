import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';

const categories = ["All", "Fish Fillet", "Whole Fish", "Prawns", "Crustaceans", "Oysters"];

const ProductShelf = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="py-24 bg-color-bg relative">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-accent uppercase tracking-[0.2em] font-bold text-sm mb-4">Our Collection</h2>
                        <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Premium Seafood <br /> Selection</h3>
                        <p className="text-text-dim">
                            Hand-picked, sustainable, and delivered fresh daily. Filter by category or search for your favorite catch.
                        </p>
                    </div>
                </div>

                {/* Filters & Search */}
                <div className="flex flex-col lg:flex-row gap-8 mb-12 items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === cat
                                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                                    : "bg-white/5 text-text-dim hover:bg-white/10"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full lg:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim" size={20} />
                        <input
                            type="text"
                            placeholder="Search fresh seafood..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-accent/50 transition-colors"
                        />
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    layout
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                        <p className="text-xl text-text-dim">No products found matching your criteria.</p>
                        <button
                            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                            className="mt-4 text-accent hover:underline font-bold"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductShelf;
