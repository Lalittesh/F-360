import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-surface" id="home">
      {/* Ambient soft organic background glows and curves */}
      <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-secondary-fixed/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 -right-24 w-[480px] h-[480px] bg-primary-fixed/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] bg-tertiary-fixed/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
      {/* Delicate Decorative Gold Filigree SVG Background Paths */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -100,200 C 200,100 400,450 750,220 C 1100, -10 1300,380 1600,260"
          fill="none"
          opacity="0.6"
          stroke="#e6ca65"
          strokeDasharray="4,8"
          strokeWidth="1.2"
        ></path>
        <path
          d="M 100,550 C 350,300 700,600 1150,420 C 1400,320 1550,500 1700,440"
          fill="none"
          opacity="0.4"
          stroke="#dfb76c"
          strokeWidth="1"
        ></path>
      </svg>
      <div className="max-w-[1380px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Editorial Typography & Actions */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-bright/90 border border-secondary/30 text-label-md font-label-md text-secondary tracking-widest uppercase mb-6 shadow-sm pearl-glass">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container jewel-sapphire-glow"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
              </span>
              <span className="font-semibold">FOOD • COMMUNITY • IMPACT</span>
            </div>
            {/* Headline */}
            <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-on-surface tracking-tight leading-[1.1] mb-6">
              Good Food Deserves{" "}
              <span className="italic font-normal text-secondary underline-offset-4 decoration-secondary-fixed/60">
                Another Table.
              </span>
            </h1>
            {/* Narrative */}
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-8">
              FoodSphere 360 connects restaurants and NGOs to rescue surplus food and turn it into meaningful impact
              with uncompromising culinary dignity.
            </p>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <Link
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-primary-container text-on-primary rounded-lg text-label-lg font-label-lg tracking-wide hover:bg-primary transition-all duration-200 shadow-md jewel-sapphire-glow active:scale-95"
                to="/register"
              >
                <span className="material-symbols-outlined text-lg" data-icon="volunteer_activism">
                  volunteer_activism
                </span>
                <span>Donate Food</span>
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-surface-bright text-secondary border border-secondary/40 rounded-lg text-label-lg font-label-lg tracking-wide hover:bg-surface-container-low transition-all duration-200 jewel-gold-glow active:scale-95"
                to="/register"
              >
                <span className="material-symbols-outlined text-lg text-secondary" data-icon="diversity_1">
                  diversity_1
                </span>
                <span>Join as NGO</span>
              </Link>
            </div>
            {/* Trust Micro-Feature / Endorsement */}
            <div className="flex items-center gap-3 pt-2 text-label-md font-label-md text-on-surface-variant">
              <div className="flex -space-x-2">
                <span className="w-7 h-7 rounded-full bg-secondary-fixed border-2 border-surface flex items-center justify-center text-[10px] font-bold text-on-secondary-fixed">
                  120+
                </span>
                <span className="w-7 h-7 rounded-full bg-primary-fixed border-2 border-surface flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xs">verified</span>
                </span>
                <span className="w-7 h-7 rounded-full bg-tertiary-fixed border-2 border-surface flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-xs">eco</span>
                </span>
              </div>
              <span className="tracking-wide">Trusted by 120+ culinary kitchens &amp; certified NGO networks</span>
            </div>
          </div>
          {/* RIGHT COLUMN: Layered Editorial Food Collage */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] md:min-h-[540px]">
            {/* Decorative Underlay Orb */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-secondary-fixed/30 blur-2xl z-0 pointer-events-none"></div>
            {/* Flowing Gold Ribbon Outline in Collage Backdrop */}
            <div className="absolute -inset-4 border border-secondary/20 rounded-[48px] pointer-events-none z-0 transform rotate-2"></div>
            {/* Gemstone Specks */}
            <div className="absolute top-6 left-12 w-2.5 h-2.5 rounded-full bg-secondary-container jewel-gold-glow animate-pulse z-20"></div>
            <div className="absolute bottom-16 right-8 w-2.5 h-2.5 rounded-full bg-tertiary-container jewel-emerald-glow z-20"></div>
            <div className="absolute top-1/3 -right-2 w-2 h-2 rounded-full bg-primary-container jewel-sapphire-glow z-20"></div>
            {/* Main Anchor Culinary Visual: Gourmet Plating */}
            <div className="relative z-10 w-full max-w-[460px] aspect-[4/3] rounded-[40px] overflow-hidden border-2 border-secondary/30 shadow-xl ambient-warm-card group">
              <img
                alt="Curated artisanal culinary feast on rustic table"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe5N2nek2hYLysELHDEclqQlRWgxp5lH2xf6lGvZOg13T5XPV84XM0EOmDQgnrM09PQRpat7hzJ0LrSJnN3lUx3rpZInIaMRjzWqywgkffjBc7h1Mnc0MDY8WCltw0tlnznbMRSp8AavBDdet3iRGeHDUKK1_ywYxoGyRRQqoD0o1D3yawX80R5GW6aKibh3RNwJbCzTU8hLCj44aTG62301Uh4jeYvw0dYfe3B7gBN7f9qo5k40GSwyJ9agkau5HePS-a7f-lOhxJ6yw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
              <div className="absolute bottom-3 left-4 px-3 py-1 rounded-full pearl-glass border border-surface-variant/80 text-label-sm font-label-sm text-on-surface flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-xs text-secondary">restaurant</span>
              </div>
            </div>
            {/* Overlapping Secondary Visual 1: Fresh Organic Harvest (Bottom-Left) */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 md:-left-6 w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-surface shadow-xl z-20 group hover:scale-105 transition-transform duration-300 ambient-warm-card">
              <img
                alt="Fresh organic market harvest in woven baskets"
                className="w-full h-full object-cover object-center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5NxyaC148Z23idEMzpr74ZT__SbT4f3qgeryvl4FOuRdj69hDG9UGGkqDT2tffnh2f0cYZbQbzwic5B-GNk4JgO2ZerXe0Sa-WAMLazNssyBTlbiImDpnk0x3BsZQIBDRBq5vwZwHnv9djTL90WGzHs36APDJ7GX4VxDEMxY8D8qWcJUMOfmRCHCbM8zqBNQhIqXyMWxLGfLfjNKntU7zNpHxqJlEVfaEqYNh8vq1YykcI3KMNixMPzNl8ouwOa4DOzPToy35BljIP94"
              />
              <div className="absolute inset-0 bg-secondary-fixed/10 pointer-events-none"></div>
            </div>
            {/* Overlapping Secondary Visual 2: Artisanal Breads (Top-Right Floating Card) */}
            <div className="absolute -top-6 -right-2 sm:right-6 md:-right-4 w-32 h-32 md:w-44 md:h-40 rounded-2xl overflow-hidden border-3 border-surface shadow-xl z-20 group hover:scale-105 transition-transform duration-300 ambient-warm-card">
              <img
                alt="Artisanal freshly baked sourdough and pastries"
                className="w-full h-full object-cover object-center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcbfngWnW3DuLOcvBb7dA2RRVwgVyMZCh_aYBjSdKqBd93VAUKc5rt5PM_lsaYObXvG7h6AAUq7MiSegVZ8bBsr-3nWVk2s7CZ6rygpq4sDUoNBE1yLNaH3YtPoviptk0oU94px0qwnIWgwjzR_OuT4wy4CfOfBxbJnB2SvQEctnnwvG80iTVISfW4sITUS72TV0oaNuxtS0a2h-wvg1du-PUVxN4EsKc99JhSNQX3MLxgqO67l8bb7kLQEEIBNnuUuSO-xhT4YKmTN5Y"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/50 via-transparent to-transparent pointer-events-none"></div>
            </div>
            {/* Floating Frosted Glass Metric Badge 1: 2,500+ Meals Rescued (Top-Left) */}
            <div className="absolute top-4 -left-2 sm:left-2 md:-left-8 z-30 pearl-glass border border-tertiary-container/30 rounded-xl px-3.5 py-2 shadow-lg jewel-emerald-glow flex items-center gap-2.5 backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-tertiary-fixed/30 border border-tertiary-container/40 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-base">energy_savings_leaf</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                  <span className="text-body-sm font-bold text-on-surface leading-tight">2,500+</span>
                </div>
                <p className="text-label-sm font-label-sm text-on-surface-variant">Meals Rescued Today</p>
              </div>
            </div>
            {/* Floating Frosted Glass Metric Badge 2: 120+ Restaurant Partners (Bottom-Right) */}
            <div className="absolute -bottom-4 right-0 sm:right-6 md:-right-6 z-30 pearl-glass border border-secondary/30 rounded-xl px-3.5 py-2 shadow-lg jewel-gold-glow flex items-center gap-2.5 backdrop-blur-md">
              <div className="w-8 h-8 rounded-lg bg-secondary-fixed/40 border border-secondary/40 flex items-center justify-center text-secondary">
                <span
                  className="material-symbols-outlined text-base"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
              </div>
              <div>
                <div className="text-body-sm font-bold text-on-surface leading-tight">120+ Kitchens</div>
                <p className="text-label-sm font-label-sm text-secondary font-medium">Verified Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
