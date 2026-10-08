export default function Reviews() {
  return (
    <section className="py-24 bg-surface" id="reviews">
      <div className="max-w-[1380px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mb-3">
            Trusted by Restaurants &amp; NGOs
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant">
            Voices from our verified kitchen and community network making culinary stewardship an effortless daily standard.
          </p>
        </div>
        
        {/* Testimonials 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review Card 1: Chef Sarah Jenkins */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 border border-secondary/25 ambient-warm-card flex flex-col justify-between relative group hover:border-secondary/50 transition-all duration-300">
            <div>
              {/* Star Rating & Score */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-yellow-500">
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-body-sm font-body-sm font-bold text-on-surface ml-1.5">4.9</span>
                </div>
                <span className="material-symbols-outlined text-surface-variant text-3xl group-hover:text-secondary/40 transition-colors" data-icon="format_quote">format_quote</span>
              </div>
              {/* Quote Text */}
              <p className="text-body-md font-body-md text-on-surface leading-relaxed italic mb-8">
                "We have eliminated commercial kitchen disposal entirely. FoodSphere’s evening logistics ensure that our slow-roasted meats and fresh organic side dishes are securely delivered to community shelters while still warm and pristine."
              </p>
            </div>
            {/* Author Info */}
            <div className="pt-6 border-t border-surface-variant/60 flex items-center gap-4">
              <img
                alt="Chef Sarah Jenkins"
                className="w-12 h-12 rounded-full object-cover border border-secondary/30 p-0.5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW1371wMlAWDcF9rsaEe06kUzUGpiPni-q8dgpF1ARO-kSuoAg5MbmySpyRO1rvLK2eQNUuBPQZubxMIA1FyVDgh49bivuacxMDBmClMcrFtSYFzRw9CAsMo4ueNwLgA_0UWLC7f79PcpIsnZW9Xz5Xpf5GD6vKNp5IfOO0Bntk2pDUCkJAWbPwfShYveFuu0KRatvsnbNy2K9PTp4X7QW0hcKE6_8MI3FJd7e8Cvgw7YoAFoCGs4_9Q"
              />
              <div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface text-base">Chef Sarah Jenkins</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Executive Chef, <span className="italic">Bistro L’Aura</span></p>
                <span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-secondary font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Verified Donor Partner
                </span>
              </div>
            </div>
          </div>

          {/* Review Card 2: Elena Rostova */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 border border-tertiary-container/30 jewel-emerald-glow flex flex-col justify-between relative group hover:border-tertiary-container/60 transition-all duration-300">
            <div>
              {/* Star Rating & Score */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-yellow-500">
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-body-sm font-body-sm font-bold text-on-surface ml-1.5">5.0</span>
                </div>
                <span className="material-symbols-outlined text-surface-variant text-3xl group-hover:text-tertiary/40 transition-colors" data-icon="format_quote">format_quote</span>
              </div>
              {/* Quote Text */}
              <p className="text-body-md font-body-md text-on-surface leading-relaxed italic mb-8">
                "The dignity of our recipients is paramount. Receiving curated gourmet allocations rather than haphazard scraps has completely altered the morale in our dining halls. FoodSphere 360 is pure culinary compassion."
              </p>
            </div>
            {/* Author Info */}
            <div className="pt-6 border-t border-surface-variant/60 flex items-center gap-4">
              <img
                alt="Elena Rostova"
                className="w-12 h-12 rounded-full object-cover border border-tertiary-container/40 p-0.5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5Rdm_Zr2AyXqW46R3Ads5aYjNQE5AOVLovAmDyU9j-R65e0_aQT01QUylReFIEb1ifQa97C25Gzm3iADAWtI7z6-eRbHuwZtnfJ1TouYdDisAQj4J9W4LasXB4Ts3DEZepMpNg8iGQO-uDZ1Nu1UhgWY9jEtGIAoH0kiJxHrzP5-enFwOoMp4COU5_Ft6u2nsIaQ31UyLD5WFMlOgGYXsUUFUur-0Bihu7zKBmRafKiSUJfRab7lJ2Q"
              />
              <div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface text-base">Elena Rostova</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Director, <span className="italic">Table for All Foundation</span></p>
                <span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-tertiary font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span> NGO Fleet Dispatcher
                </span>
              </div>
            </div>
          </div>

          {/* Review Card 3: Marcus Vance */}
          <div className="bg-surface-container-lowest rounded-2xl p-8 border border-primary/25 ambient-warm-card flex flex-col justify-between relative group hover:border-primary/50 transition-all duration-300">
            <div>
              {/* Star Rating & Score */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-yellow-500">
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-sm" data-icon="star" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-body-sm font-body-sm font-bold text-on-surface ml-1.5">4.9</span>
                </div>
                <span className="material-symbols-outlined text-surface-variant text-3xl group-hover:text-primary/40 transition-colors" data-icon="format_quote">format_quote</span>
              </div>
              {/* Quote Text */}
              <p className="text-body-md font-body-md text-on-surface leading-relaxed italic mb-8">
                "Compliance and liability were always our hesitation with food redistribution. FoodSphere solved both with their automated health certificates and instant NGO pairing. We look forward to our 10 PM dispatch every night."
              </p>
            </div>
            {/* Author Info */}
            <div className="pt-6 border-t border-surface-variant/60 flex items-center gap-4">
              <img
                alt="Marcus Vance"
                className="w-12 h-12 rounded-full object-cover border border-primary/30 p-0.5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiRB4wcVU49bwJM3NG5RHPVhURXlqDwuRJGQGCWosxARhkMZY7AmnKGxmhTAr62TIufXUhtGFlX6BlFW5kSsqPoGdJMMNP5ZGvBXe8dz_RHbsB1JrC-6CYXe6RZlRctrauIMBPICjBnpzluXNlApVTq6yanBxkLjUc6r9V2XL52obJbEOFOpb2kCb9HHsoUK4zQvUJze8t_cIAF4u8WigwMewV23t6XrRFHm_t0HkZaZvknzluXQ8Nkg"
              />
              <div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface text-base">Marcus Vance</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">General Manager, <span className="italic">The Artisan Hearth</span></p>
                <span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-primary font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> Michelin Partner
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Metrics Bar */}
        <div className="mt-16 py-8 px-6 bg-surface-container-low rounded-2xl border border-surface-variant/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-display-lg-mobile md:text-headline-lg font-headline-lg text-primary italic">99.4%</div>
            <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mt-1">Temperature Compliance</p>
          </div>
          <div>
            <div className="text-display-lg-mobile md:text-headline-lg font-headline-lg text-secondary italic">28 Mins</div>
            <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mt-1">Average Courier Arrival</p>
          </div>
          <div>
            <div className="text-display-lg-mobile md:text-headline-lg font-headline-lg text-tertiary italic">148,000+</div>
            <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mt-1">Dignified Meals Served</p>
          </div>
          <div>
            <div className="text-display-lg-mobile md:text-headline-lg font-headline-lg text-on-surface italic">0 kg</div>
            <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mt-1">Acceptable Landfill Waste</p>
          </div>
        </div>
      </div>
    </section>
  );
}
