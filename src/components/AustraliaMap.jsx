import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';
import { fishRegions } from './fishData';
import geoUrl from '../assets/australia-states.json';

const AustraliaMap = () => {
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [tooltipContent, setTooltipContent] = useState("");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleRegionClick = (geo) => {
        const regionCode = geo.properties.STATE_CODE || geo.properties.iso_3166_2?.split('-')[1] || geo.properties.name?.toUpperCase(); // Adjust based on actual GeoJSON props
        // Robust matching logic
        const geoName = geo.properties.name || geo.properties.STATE_NAME || geo.properties.NAME;
        let regionKey = Object.keys(fishRegions).find(key =>
            fishRegions[key].name.toLowerCase() === geoName?.toLowerCase() ||
            key === (geo.properties.STATE_CODE || geo.properties.state_code)
        );

        // Ultimate fallback for common variations
        if (!regionKey && geoName) {
            const name = geoName.trim();
            if (name.includes("New South Wales")) regionKey = "NSW";
            else if (name.includes("Victoria")) regionKey = "VIC";
            else if (name.includes("Queensland")) regionKey = "QLD";
            else if (name.includes("Western Australia")) regionKey = "WA";
            else if (name.includes("South Australia")) regionKey = "SA";
            else if (name.includes("Tasmania")) regionKey = "TAS";
            else if (name.includes("Northern Territory")) regionKey = "NT";
            else if (name.includes("Capital Territory")) regionKey = "ACT";
        }

        console.log("Clicked:", geoName, "Matched Key:", regionKey);

        if (regionKey) {
            setSelectedRegion(fishRegions[regionKey]);
        }
    };

    return (
        <section className="py-24 bg-color-secondary relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-accent uppercase tracking-[0.2em] font-bold text-sm mb-4">Sourcing Map</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Explore Our Waters</h3>
                    <p className="text-text-dim max-w-2xl mx-auto">
                        Discover the premium seafood species we source from the pristine waters around Australia. Click on a region to see what we catch.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Map Container */}
                    <div className="lg:col-span-2 bg-white/5 rounded-3xl p-4 border border-white/10 shadow-2xl relative min-h-[500px] flex items-center justify-center">
                        <ComposableMap
                            projection="geoMercator"
                            projectionConfig={{
                                center: [133, -28],
                                scale: 800
                            }}
                            className="w-full h-full"
                        >
                            <ZoomableGroup>
                                <Geographies geography={geoUrl}>
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                onClick={() => handleRegionClick(geo)}
                                                style={{
                                                    default: {
                                                        fill: selectedRegion && selectedRegion.name === (geo.properties.name || geo.properties.STATE_NAME) ? selectedRegion.color : "#D1D5DB",
                                                        stroke: "#0F172A",
                                                        strokeWidth: 0.75,
                                                        outline: "none",
                                                        transition: "all 0.3s"
                                                    },
                                                    hover: {
                                                        fill: "#FF8543",
                                                        filter: "drop-shadow(0 0 8px rgba(255,133,67,0.5))",
                                                        outline: "none",
                                                        cursor: "pointer"
                                                    },
                                                    pressed: {
                                                        fill: "#E2743A",
                                                        outline: "none"
                                                    }
                                                }}
                                            />
                                        ))
                                    }
                                </Geographies>
                            </ZoomableGroup>
                        </ComposableMap>

                        <div className="absolute bottom-6 left-6 text-sm text-text-dim bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                            Tip: Click on a state to view local species
                        </div>
                    </div>

                    {/* Info Panel */}
                    <div className="lg:col-span-1 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {selectedRegion ? (
                                <motion.div
                                    key={selectedRegion.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white/5 p-8 rounded-3xl border border-white/10 h-full"
                                >
                                    <h4 className="text-3xl font-serif font-bold text-white mb-2" style={{ color: selectedRegion.color }}>
                                        {selectedRegion.name}
                                    </h4>
                                    <div className="w-16 h-1 bg-white/20 mb-8 rounded-full" />

                                    <div className="space-y-6">
                                        {selectedRegion.species.map((fish, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                                            >
                                                <span className="text-4xl">{fish.icon}</span>
                                                <div>
                                                    <h5 className="text-lg font-bold text-white">{fish.name}</h5>
                                                    <p className="text-sm text-text-dim mt-1">{fish.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <button className="w-full py-3 bg-accent hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/20">
                                            View All {selectedRegion.name} Products
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-white/10 rounded-3xl"
                                >
                                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4">
                                        <span className="text-4xl">🗺️</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">Select a Region</h4>
                                    <p className="text-text-dim">Tap on any state in the map to discover its unique seafood offerings.</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AustraliaMap;
