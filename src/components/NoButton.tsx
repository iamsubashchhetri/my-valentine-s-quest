import { useState, useCallback } from "react";

const NoButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [isAbsolute, setIsAbsolute] = useState(false);

  const runAway = useCallback(() => {
    setAttempts((prev) => prev + 1);
    setIsAbsolute(true);

    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 60;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setPosition({ x: newX, y: newY });
  }, []);

  return (
    <>
      <button
        className="px-8 py-3 rounded-full border-2 border-primary/30 text-primary font-semibold transition-all duration-150 hover:border-primary/50 bg-card/80 backdrop-blur-sm text-lg"
        style={
          isAbsolute
            ? {
                position: "fixed",
                left: position.x,
                top: position.y,
                zIndex: 40,
                transition: "left 0.3s, top 0.3s",
              }
            : {}
        }
        onMouseEnter={runAway}
        onTouchStart={(e) => {
          e.preventDefault();
          runAway();
        }}
      >
        No 😢
      </button>
      {attempts >= 3 && (
        <p className="text-muted-foreground text-sm mt-4 animate-slide-up-fade">
          Heyyy, that button is broken 😜
        </p>
      )}
    </>
  );
};

export default NoButton;
