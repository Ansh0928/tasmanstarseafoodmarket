# 🦐 Tasman Star Seafood Market

A premium seafood e-commerce website for Tasman Star Seafood Market, featuring a stunning dark theme with Licious-inspired product cards, interactive Australian sourcing map, and smooth scroll animations.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Premium Dark Theme** - Sleek, modern UI with glass-morphism effects
- **Licious-Style Product Cards** - Specs, discounts, delivery badges, and Add+ buttons
- **Interactive Australia Map** - Shows sourcing locations with hover tooltips
- **Smooth Scroll Animations** - Lenis-powered buttery smooth scrolling
- **Framer Motion Animations** - Fluid page transitions and micro-interactions
- **Responsive Design** - Mobile-first, works on all devices
- **12+ Product Catalog** - Fish, prawns, oysters, crustaceans

## 🏗️ Architecture

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed navigation with smooth scroll links
│   ├── Hero.jsx            # Full-screen hero with CTA buttons
│   ├── Mission.jsx         # Brand mission statement section
│   ├── ProductShelf.jsx    # Product grid with category filters & search
│   ├── ProductCard.jsx     # Individual product card (Licious-style)
│   ├── AustraliaMap.jsx    # Interactive SVG map of Australia
│   ├── SmoothScroll.jsx    # Lenis scroll wrapper
│   └── fishData.js         # Australian seafood sourcing data
├── data/
│   └── products.js         # Product catalog (12 items)
├── assets/
│   ├── images/             # Hero backgrounds, product images
│   └── australia-states.json  # GeoJSON for map rendering
├── App.jsx                 # Main app with section routing
├── index.css               # Global styles & Tailwind config
└── main.jsx                # React entry point
```

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Build Tool | Vite 7.3 |
| Styling | Tailwind CSS 4.0 |
| Animations | Framer Motion |
| Smooth Scroll | Lenis |
| Maps | react-simple-maps + d3-geo |
| Icons | Lucide React |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Ansh0928/tasmanstarseafoodmarket.git

# Navigate to project
cd tasmanstarseafoodmarket

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

### Build for Production

```bash
npm run build
npm run preview
```

## 📦 Key Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "framer-motion": "^12.6.3",
  "lenis": "^1.3.7",
  "lucide-react": "^0.480.0",
  "react-simple-maps": "^3.0.0",
  "d3-geo": "^3.1.1",
  "topojson-client": "^3.1.0"
}
```

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#0a0a0f` | Main background |
| `--color-accent` | `#ff7a3d` | Buttons, highlights |
| `--color-text-primary` | `#ffffff` | Headings |
| `--color-text-dim` | `#9ca3af` | Secondary text |

### Typography
- **Headings**: Inter, system-ui
- **Body**: Inter, system-ui

## 📱 Sections

1. **Hero** - Full-screen with animated text and CTA
2. **Our Story** - Mission and values
3. **Shop** - Product grid with filters
4. **Sourcing** - Interactive Australia map
5. **Contact** - Location, phone, email

## 🚢 Deployment

Deployed on **Vercel**:
- Auto-deploys from `master` branch
- Uses `.npmrc` for peer dependency resolution

## 📄 License

MIT License - feel free to use for your own projects!

---

**Built with ❤️ for Tasman Star Seafood Market**
