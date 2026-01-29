import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import SmoothScroll from './components/SmoothScroll';
import AustraliaMap from './components/AustraliaMap';
import ProductShelf from './components/ProductShelf';

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-color-bg text-color-text">
        <Navbar />
        <main>
          <div id="home"><Hero /></div>
          <div id="story"><Mission /></div>
          <div id="map"><AustraliaMap /></div>
          <div id="products"><ProductShelf /></div>

          <section id="contact" className="py-24 bg-color-bg relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-accent uppercase tracking-[0.2em] font-bold text-sm mb-4">Visit Us</h2>
                <h3 className="text-4xl md:text-6xl font-serif font-bold text-white italic">Get In Touch</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-all">
                  <div className="text-accent text-3xl mb-4">📍</div>
                  <h4 className="text-xl font-bold text-white mb-2">Location</h4>
                  <p className="text-text-dim">Shop 5/1 Tasman Court<br />Currumbin Waters QLD 4223</p>
                </div>

                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-all">
                  <div className="text-accent text-3xl mb-4">📞</div>
                  <h4 className="text-xl font-bold text-white mb-2">Call Us</h4>
                  <p className="text-text-dim">(07) 5598 2598</p>
                </div>

                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-all">
                  <div className="text-accent text-3xl mb-4">📧</div>
                  <h4 className="text-xl font-bold text-white mb-2">Email</h4>
                  <p className="text-text-dim">info@tasmanstar.com.au</p>
                </div>
              </div>
              <div className="mt-20 p-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent h-[1px] w-full" />
            </div>
          </section>
        </main>

        <footer className="py-12 border-t border-white/10 bg-color-secondary/30">
          <div className="container mx-auto px-6 text-center">
            <img
              src="https://tasmanstarseafoodmarket.com.au/cdn/shop/files/1e0e640a464cdc2c1254a5dc4d24c2ff_1.png"
              alt="Logo"
              className="h-12 mx-auto mb-8 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer"
            />
            <p className="text-text-dim text-sm uppercase tracking-widest">
              © 2026 Tasman Star Seafood Market. Quality Meets Freshness.
            </p>
          </div>
        </footer>
      </div>
    </SmoothScroll>
  );
}

export default App;
