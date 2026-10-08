export default function Footer() {
  return (
    <footer className="full-width bottom bg-surface-container-low border-t border-surface-variant/50">
      <div className="max-w-[1380px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 w-full">
        {/* Brand & Mission statement */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a className="text-headline-md font-headline-md italic text-on-surface tracking-tight" href="#home">
            FoodSphere 360
          </a>
          <p className="text-body-sm font-body-sm text-on-surface-variant mt-1.5 max-w-sm">
            Rescue Food. Share Hope. Cultivating dignity through culinary surplus redistribution.
          </p>
          <p className="text-label-sm font-label-sm text-outline mt-3">
            © 2025 FoodSphere 360. Cultivating dignity through culinary surplus redistribution.
          </p>
        </div>
        {/* Footer Links Cluster */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-label-sm font-label-sm">
          <a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#manifesto">Manifesto</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#culinary-network">Culinary Network</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#logistics-framework">Logistics Framework</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#impact-registry">Impact Registry</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#privacy-charter">Privacy &amp; Charter</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#contact-dispatch">Contact Dispatch</a>
        </div>
      </div>
    </footer>
  );
}
