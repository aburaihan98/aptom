import { useState, useEffect } from "react";
import bg from "../../assets/pre-loader/bg.png";

export default function PreLoader({ onLoadComplete }) {
  const [progress, setProgress] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let startTime = Date.now();
    let animationFrame;

    // Simulate page load tracking
    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime;

      // Calculate progress based on document readyState and elapsed time
      let calculatedProgress = 1;

      if (document.readyState === "loading") {
        // Loading phase: 1% to 30%
        calculatedProgress = Math.min(30, 1 + (elapsedTime / 100) * 3);
      } else if (document.readyState === "interactive") {
        // Interactive phase: 30% to 70%
        calculatedProgress = Math.min(70, 30 + (elapsedTime / 100) * 4);
      } else if (document.readyState === "complete") {
        // Complete phase: 70% to 100%
        calculatedProgress = Math.min(100, 70 + (elapsedTime / 50) * 3);
      }

      setProgress(Math.floor(calculatedProgress));

      // Continue animation until 100%
      if (calculatedProgress < 100) {
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        // Finished loading
        setTimeout(() => {
          setIsLoading(false);
          onLoadComplete?.();
        }, 300);
      }
    };

    // Start monitoring page load
    if (document.readyState === "complete") {
      // Already loaded, finish quickly
      let currentProgress = 1;
      const quickLoad = setInterval(() => {
        currentProgress += 10;
        setProgress(currentProgress);
        if (currentProgress >= 100) {
          clearInterval(quickLoad);
          setTimeout(() => {
            setIsLoading(false);
            onLoadComplete?.();
          }, 300);
        }
      }, 50);
    } else {
      // Start progress animation
      animationFrame = requestAnimationFrame(updateProgress);

      // Listen for load complete
      window.addEventListener("load", () => {
        // Force to 100% when window loads
        const finishLoading = () => {
          setProgress((prev) => {
            if (prev < 100) {
              const remaining = 100 - prev;
              const increment = Math.max(5, remaining / 10);
              setTimeout(finishLoading, 50);
              return Math.min(100, prev + increment);
            }
            return 100;
          });
        };
        finishLoading();
      });
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Loading background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Progress Counter */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="font-medium text-dark mb-6">Aptom Agency</h2>
        <div className="text-6xl md:text-8xl font-bold mb-4 drop-shadow-lg">
          {progress}%
        </div>
        <p className="text-primary font-medium mt-6">Loading ...</p>
        {/* Optional: Progress Bar */}
        <div className="fixed bottom-0 left-0 w-full h-[5px] bg-dark">
          <div
            className="h-full bg-dark transition-all duration-200 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
