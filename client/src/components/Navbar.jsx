import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="docked full-width top-0 sticky z-50 bg-surface/85 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(92,79,61,0.05)] border-b border-surface-variant/40 transition-all duration-200">
      <div className="flex justify-between items-center max-w-[1380px] mx-auto px-6 py-4 w-full">
        {/* Brand Logo Anchor */}
        <Link className="flex items-center gap-3 group" to="/">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant/60 flex items-center justify-center text-secondary shadow-sm transition-transform duration-200 group-hover:scale-105">
            <span
              className="material-symbols-outlined text-secondary"
              data-icon="restaurant"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              restaurant
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-headline-sm font-headline-sm italic text-on-surface tracking-tight leading-none">
              FoodSphere 360
            </span>
            <span className="text-label-sm font-label-sm text-secondary tracking-widest uppercase mt-0.5">
              Surplus &amp; Dignity
            </span>
          </div>
        </Link>
        {/* Desktop Primary Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            className="text-primary font-semibold border-b-2 border-primary pb-1 text-label-md font-label-md tracking-wider transition-colors duration-200"
            href="/#home"
          >
            Home
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface hover:text-primary transition-colors duration-200 text-label-md font-label-md tracking-wider"
            href="/#surplus-harvest"
          >
            About
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface hover:text-primary transition-colors duration-200 text-label-md font-label-md tracking-wider"
            href="/#reviews"
          >
            Review
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface hover:text-primary transition-colors duration-200 text-label-md font-label-md tracking-wider"
            href="/#contact"
          >
            Contact
          </a>
        </nav>
        {/* Action Items */}
        <div className="flex items-center space-x-3">
          <Link
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-label-md font-label-md text-secondary border border-secondary/30 rounded-lg hover:bg-surface-container-low transition-all duration-200 scale-[0.98] active:scale-95"
            to="/login"
          >
            <span className="material-symbols-outlined text-sm" data-icon="storefront">
              storefront
            </span>
            <span>LOGIN</span>
          </Link>
          {/* Portal / Get Started Action with Dropdown Trigger */}
          <div className="relative group">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary rounded-lg text-label-md font-label-md shadow-sm hover:bg-primary transition-all duration-200 scale-[0.98] active:scale-95 jewel-sapphire-glow">
              <span className="material-symbols-outlined text-sm" data-icon="verified_user">
                verified_user
              </span>
              <span>GET STARTED</span>
              <span
                className="material-symbols-outlined text-xs transition-transform duration-200 group-hover:rotate-180"
                data-icon="expand_more"
              >
                expand_more
              </span>
            </button>
            {/* Dual Role Flyout */}
            <div className="absolute right-0 mt-2 w-56 p-2 rounded-xl bg-surface-bright border border-surface-variant/70 shadow-xl opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50">
              <div className="px-3 py-1.5 border-b border-surface-variant/50">
                <p className="text-label-sm font-label-sm uppercase tracking-wider text-outline">
                  Direct Dispatch Access
                </p>
              </div>
              <Link
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low transition-colors"
                to="/register?role=restaurant"
              >
                <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                <span>Join as Restaurant</span>
              </Link>
              <Link
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low transition-colors"
                to="/register?role=ngo"
              >
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                <span>Join as Verified NGO</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
