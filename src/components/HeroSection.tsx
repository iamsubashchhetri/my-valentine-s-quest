import { useState, useRef } from "react";
import NoButton from "./NoButton";
import CelebrationEffect from "./CelebrationEffect";

interface HeroSectionProps {
  onYes: () => void;
}

const HeroSection = ({ onYes }: HeroSectionProps) => {
  const [accepted, setAccepted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleYes = () => {
    setAccepted(true);
    setShowCelebration(true);
    setTimeout(() => {
      onYes();
    }, 2000);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-4"
    >
      {showCelebration && <CelebrationEffect />}

      <div className="text-center z-10 animate-slide-up-fade">
        <h1 className="font-romantic text-6xl sm:text-7xl md:text-8xl text-primary text-glow mb-6 leading-tight">
          Will you be my Valentine? 💖
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-lg mx-auto mb-12 font-body">
          Every moment with you feels like magic, and I want this Valentine's Day to be ours.
        </p>

        {!accepted ? (
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={handleYes}
              className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-xl shadow-lg glow-rose hover:animate-heartbeat transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Yes! 💕
            </button>
            <NoButton />
          </div>
        ) : (
          <div className="animate-slide-up-fade">
            <p className="text-3xl md:text-4xl font-romantic text-primary text-glow">
              Yayyy! You just made me the happiest person alive ❤️
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
