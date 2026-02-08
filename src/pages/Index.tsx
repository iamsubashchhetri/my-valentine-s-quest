import { useState, useRef } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import LoveLetter from "@/components/LoveLetter";

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleYes = () => {
    setShowContent(true);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <main className="valentine-gradient min-h-screen overflow-x-hidden relative">
      <FloatingHearts />
      <HeroSection onYes={handleYes} />

      {showContent && (
        <div
          ref={contentRef}
          className="animate-slide-up-fade"
        >
          <PhotoGallery />
          <LoveLetter />
        </div>
      )}
    </main>
  );
};

export default Index;
