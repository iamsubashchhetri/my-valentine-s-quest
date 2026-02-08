import { useEffect, useRef, useState } from "react";
import couple1 from "@/assets/couple-1.jpeg";
import couple2 from "@/assets/couple-2.jpeg";
import couple3 from "@/assets/couple-3.jpeg";
import couple4 from "@/assets/couple-4.jpeg";
import couple5 from "@/assets/couple-5.jpeg";
import couple6 from "@/assets/couple-6.png";

const PHOTOS = [
  { src: couple1, rotation: -3 },
  { src: couple2, rotation: 2 },
  { src: couple3, rotation: -1.5 },
  { src: couple4, rotation: 3 },
  { src: couple5, rotation: -2 },
  { src: couple6, rotation: 1.5 },
];

const PhotoGallery = () => {
  const [visible, setVisible] = useState<boolean[]>(Array(6).fill(false));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          PHOTOS.forEach((_, i) => {
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
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="transition-all duration-700"
              style={{
                opacity: visible[i] ? 1 : 0,
                transform: visible[i]
                  ? `translateY(0) rotate(${photo.rotation}deg)`
                  : `translateY(40px) rotate(${photo.rotation}deg)`,
              }}
            >
              <div className="bg-card p-3 pb-12 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                <div className="aspect-square bg-secondary rounded-sm overflow-hidden">
                  <img
                    src={photo.src}
                    alt={`Us - memory ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
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
