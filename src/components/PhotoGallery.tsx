import { useEffect, useRef, useState } from "react";

const ROTATIONS = [-3, 2, -1.5, 3, -2, 1.5];

const PhotoGallery = () => {
  const [visible, setVisible] = useState<boolean[]>(Array(6).fill(false));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ROTATIONS.forEach((_, i) => {
            setTimeout(() => {
              setVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {ROTATIONS.map((rotation, i) => (
            <div
              key={i}
              className="transition-all duration-700"
              style={{
                opacity: visible[i] ? 1 : 0,
                transform: visible[i]
                  ? `translateY(0) rotate(${rotation}deg)`
                  : `translateY(40px) rotate(${rotation}deg)`,
              }}
            >
              <div className="bg-card p-3 pb-12 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                <div className="aspect-square bg-secondary rounded-sm flex items-center justify-center overflow-hidden">
                  <span className="text-4xl text-primary/30">♥</span>
                </div>
                <p className="absolute bottom-3 left-0 right-0 text-center text-xs text-muted-foreground font-body">
                  Photo {i + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-2xl font-romantic text-primary text-glow">
          Us, my favorite story 💕
        </p>
      </div>
    </section>
  );
};

export default PhotoGallery;
