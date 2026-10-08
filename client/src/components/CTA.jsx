import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden border-t border-surface-variant/50"
      style={{
        backgroundImage:
          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQsCzRh933K2n3c2LnOhBNxHod9mPgAvgR_CzFXfWPtMBWJ6brW6aoLViDpm4MfI1GpugPGM07IucilqHvJ4z8WQ36LjmG0XVaC4y0gqXPJy6gUGuYQsCFyvL91yE5NOSe6D9qrf8N7cSrpD6_d9aeAdD7fsWUS5gt09Qw3K5yW7VOcJTrovOD-28qFwT2rrRcgU6k12HOsX-CsxfukIvQtC3zedcORmut7kUYUGv5Q4X-96nmHI7f8Ubyjhk4VDSOyQc")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1380px] mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center bg-surface-bright rounded-3xl p-10 md:p-16 border border-secondary/30 ambient-warm-card backdrop-blur-md">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed/30 border border-secondary/20 text-label-md font-label-md text-secondary tracking-widest uppercase mb-6">
            <span className="material-symbols-outlined text-sm" data-icon="handshake">
              handshake
            </span>
            Join The Movement
          </span>
          <h2 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-on-surface mb-6 leading-tight">
            Give Good Food <span className="italic text-secondary font-normal">a Second Chance.</span>
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto mb-10 leading-relaxed">
            Join FoodSphere 360 and help turn surplus food into meaningful impact. Onboarding takes
            less than five minutes for certified kitchens and registered charities.
          </p>
          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-primary-container text-on-primary rounded-lg text-label-lg font-label-lg tracking-wide hover:bg-primary transition-all duration-200 shadow-md jewel-sapphire-glow"
              to="/register"
            >
              <span className="material-symbols-outlined text-lg" data-icon="restaurant">
                restaurant
              </span>
              <span>Join as Restaurant</span>
            </Link>
            <Link
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-surface text-secondary border border-secondary/40 rounded-lg text-label-lg font-label-lg tracking-wide hover:bg-surface-container-low transition-all duration-200 jewel-gold-glow"
              to="/register"
            >
              <span className="material-symbols-outlined text-lg" data-icon="diversity_1">
                diversity_1
              </span>
              <span>Join as NGO</span>
            </Link>
          </div>
          <p className="text-label-sm font-label-sm text-outline uppercase tracking-widest mt-8">
            Strict Food Safety • End-to-End Cold Chain • Fully Tax-Deductible
          </p>
        </div>
      </div>
    </section>
  );
}
