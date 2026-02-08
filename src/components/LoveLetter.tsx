import { useEffect, useRef, useState } from "react";

const LoveLetter = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4 pb-32">
      <div className="max-w-2xl mx-auto">
        <div
          className="transition-all duration-1000"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <div className="relative">
            {/* Decorative hearts */}
            <span className="absolute -top-6 -left-4 text-3xl text-primary/20 animate-gentle-float">♥</span>
            <span className="absolute -top-4 -right-3 text-2xl text-primary/15 animate-gentle-float" style={{ animationDelay: "1s" }}>♥</span>
            <span className="absolute -bottom-5 left-1/2 text-2xl text-primary/20 animate-gentle-float" style={{ animationDelay: "0.5s" }}>♥</span>

            <div className="bg-valentine-cream border border-primary/10 rounded-2xl p-8 md:p-12 shadow-lg">
              <h3 className="font-romantic text-4xl md:text-5xl text-primary text-center mb-8 text-glow">
                My Love Letter
              </h3>
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed text-center font-body italic">
                "From random laughs to quiet moments, from silly fights to deep talks
                — every version of life feels better with you in it.
              </p>
              <p className="text-foreground/80 text-lg md:text-xl leading-relaxed text-center font-body italic mt-4">
                You're not just my Valentine, you're my safe place, my happiness, my home."
              </p>
              <p className="text-right mt-8 font-romantic text-2xl text-primary">
                — Forever yours ♥
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
