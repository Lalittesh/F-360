import { useEffect, useRef } from "react";

const CARDS = [
  {
    id: 1,
    title: "Restaurant",
    icon: "🍽️",
    img: "/images/carousel/restaurant.jpg",
  },
  {
    id: 2,
    title: "Surplus Food",
    icon: "📦",
    img: "/images/carousel/surplus-food.jpg",
  },
  {
    id: 3,
    title: "Rescue",
    icon: "❤️",
    img: "/images/carousel/rescue.jpg",
  },
  {
    id: 4,
    title: "NGO",
    icon: "🤝",
    img: "/images/carousel/ngo.jpg",
  },
  {
    id: 5,
    title: "Community",
    icon: "🏠",
    img: "/images/carousel/community.jpg",
  },
];

export default function FoodCarousel() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    let animationId;
    let globalOffset = 0;
    const speed = 1.0;
    let isHovered = false;
    let itemWidth = 0;
    let totalWidth = 0;
    let windowStart = 0;

    const calculateWidths = () => {
      if (itemsRef.current[0]) {
        itemWidth = itemsRef.current[0].offsetWidth;
        totalWidth = itemWidth * 5;
        windowStart = -itemWidth;
      }
    };

    calculateWidths();

    const resizeObserver = new ResizeObserver(() => {
      calculateWidths();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const animate = () => {
      if (!isHovered && containerRef.current && itemWidth > 0) {
        globalOffset -= speed;
        if (globalOffset <= -totalWidth) {
          globalOffset += totalWidth;
        }

        itemsRef.current.forEach((el, i) => {
          if (!el) return;
          const p = i * itemWidth + globalOffset;
          const wrappedP =
            (((p - windowStart) % totalWidth) + totalWidth) % totalWidth +
            windowStart;

          el.style.transform = `translate3d(${wrappedP}px, -50%, 0)`;
        });
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      isHovered = true;
    };
    const handleMouseLeave = () => {
      isHovered = false;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      className="py-20 bg-surface-container-low border-y border-surface-variant/50 relative overflow-hidden"
      id="surplus-harvest"
    >
      {/* Ambient soft backdrop glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-fixed/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-[360px] h-[360px] bg-tertiary-fixed/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-[1380px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-bright border border-secondary/30 text-label-md font-label-md text-secondary tracking-widest uppercase mb-4 shadow-sm pearl-glass">
            <span
              className="material-symbols-outlined text-sm text-secondary"
              data-icon="auto_awesome"
            >
              auto_awesome
            </span>
            <span>CURATED CULINARY REDISTRIBUTION</span>
          </div>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mb-3">
            Surplus to <span className="italic font-normal text-secondary">Sustenance</span>
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
            Explore active redistribution pipelines where exceptional surplus is cataloged,
            protected, and shared with uncompromising dignity.
          </p>
        </div>

        {/* Carousel Stage with Fixed Central Silver / Pearl Plate */}
        <div className="relative w-full max-w-4xl mx-auto min-h-[460px] md:min-h-[500px] flex items-center justify-center">
          {/* FIXED STATIC CENTRAL SILVER / PEARL PRESENTATION PLATE */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] md:w-[450px] md:h-[450px] rounded-full pointer-events-none z-10 flex items-center justify-center filter drop-shadow-[0_20px_35px_rgba(30,41,59,0.22)]">
            <img
              alt="Classic presentation silver plate"
              className="w-full h-full object-contain pointer-events-none select-none"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-IyNQasVl96pdUkCkNg5F6Thny2GvxE7cYRT32SUxzseuprrHghFPi_XkPcfm813jDjewBX64b5-S1wtrDoBbzGiTJdPH_WM7aem-8xWO7OYMFnIcuGjwIcrPh1haIh9DQSTJ4M2W7glFsIAu1yORJvkIDSe5wAivzde_TL-hagdTjUMLlpBm5CCn54El54lM0Sb_PAmaTQ8lW5z_da3fPFebOnok4KGHSFJEeYTnZDKFgHeIBJisJuJqDUVpxkfVKY4"
            />
          </div>

          {/* Interactive / Animated Circular Carousel Track */}
          <div
            className="relative w-full h-[420px] flex items-center justify-center overflow-hidden z-20 pointer-events-auto"
            id="circular-carousel-stage"
          >
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-r from-surface-container-low to-transparent z-30 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-44 bg-gradient-to-l from-surface-container-low to-transparent z-30 pointer-events-none"></div>

            <div className="carousel-track" ref={containerRef}>
              {CARDS.map((card, index) => (
                <div
                  key={card.id}
                  ref={(el) => (itemsRef.current[index] = el)}
                  className="carousel-item-node px-5 md:px-8"
                >
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-surface shadow-2xl relative bg-surface-container transition-transform duration-500 hover:scale-105">
                    <img
                      alt={`${card.icon} ${card.title}`}
                      className="w-full h-full object-cover object-center"
                      src={card.img}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/50 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full pearl-glass border border-surface-variant/80 text-on-surface shadow-md flex items-center gap-2 whitespace-nowrap backdrop-blur-md">
                      <span className="text-base leading-none">{card.icon}</span>
                      <span className="text-label-md font-label-md tracking-wider font-semibold uppercase text-secondary">
                        {card.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
