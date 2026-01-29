import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Clock, Zap } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="group bg-white/[0.03] rounded-2xl overflow-hidden border border-white/10 hover:border-accent/40 hover:bg-white/[0.06] transition-all duration-300"
        >
            {/* Image Section */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Discount Badge */}
                {product.discount && (
                    <div className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                        {product.discount}% OFF
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-4">
                {/* Product Name */}
                <h3 className="text-white font-semibold text-base mb-1 line-clamp-1 group-hover:text-accent transition-colors">
                    {product.name}
                </h3>

                {/* Description */}
                <p className="text-text-dim text-xs line-clamp-1 mb-3">
                    {product.description}
                </p>

                {/* Specs Row */}
                <div className="flex items-center gap-2 text-xs text-text-dim mb-3 pb-3 border-b border-white/10">
                    <span>{product.weight}</span>
                    <span className="text-white/30">|</span>
                    <span>{product.pieces}</span>
                    <span className="text-white/30">|</span>
                    <span>{product.serves}</span>
                </div>

                {/* Delivery Badge */}
                <div className="flex items-center gap-1 mb-3">
                    {product.deliveryTime === "Same Day" ? (
                        <Zap size={12} className="text-amber-400" />
                    ) : (
                        <Clock size={12} className="text-accent" />
                    )}
                    <span className="text-xs text-text-dim">{product.deliveryTime}</span>
                </div>

                {/* Price Row & Add Button */}
                <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                        <span className="text-white font-bold text-lg">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                            <span className="text-text-dim text-sm line-through">
                                ${product.originalPrice.toFixed(2)}
                            </span>
                        )}
                    </div>

                    <button className="bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-lg flex items-center gap-1 font-semibold text-sm transition-all hover:scale-105 active:scale-95">
                        Add <Plus size={16} strokeWidth={3} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;

