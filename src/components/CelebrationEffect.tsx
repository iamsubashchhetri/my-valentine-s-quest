import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  type: "heart" | "confetti";
  color: string;
  size: number;
  delay: number;
}

const COLORS = [
  "hsl(346, 77%, 55%)",
  "hsl(340, 60%, 65%)",
  "hsl(40, 60%, 55%)",
  "hsl(340, 40%, 75%)",
  "hsl(0, 80%, 65%)",
  "hsl(320, 60%, 60%)",
];

const CelebrationEffect = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items: Particle[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      type: i % 3 === 0 ? "heart" : "confetti",
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.random() * 12 + 8,
      delay: Math.random() * 2,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className={p.type === "heart" ? "animate-celebration-heart" : "animate-confetti"}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: p.type === "heart" ? "60%" : "-5%",
            fontSize: `${p.size}px`,
            color: p.color,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.type === "heart" ? "♥" : "●"}
        </span>
      ))}
    </div>
  );
};

export default CelebrationEffect;
