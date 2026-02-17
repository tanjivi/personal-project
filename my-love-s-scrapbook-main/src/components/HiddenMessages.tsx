import { useState, useRef, useCallback } from "react";

// Option 1: Footer heart — click 5 times to reveal secret message
export const FooterSecretHeart = () => {
  const [clicks, setClicks] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    const next = clicks + 1;
    setClicks(next);
    if (next >= 5 && !revealed) {
      setRevealed(true);
    }
  };

  return (
    <div className="text-center mt-4">
      <button
        onClick={handleClick}
        className="text-3xl transition-transform duration-200 hover:scale-125 active:scale-95"
        aria-label="Secret heart"
      >
        {revealed ? "💖" : "🤍"}
      </button>
      {!revealed && clicks > 0 && clicks < 5 && (
        <p className="text-xs text-muted-foreground mt-1 animate-pulse">
          {5 - clicks} more...
        </p>
      )}
      {revealed && (
        <div className="heart-pop mt-4 bg-card/90 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 max-w-sm mx-auto shadow-xl">
          <p className="font-handwritten text-2xl text-primary mb-2">Surpriseeee 😏</p>
          <p className="font-handwritten text-lg text-foreground">
            You thought this was over?<br />
            I love you more than you'll ever know. 💕
          </p>
        </div>
      )}
    </div>
  );
};

// Option 3: Hover reveal on photo section
export const HoverRevealText = ({ children }: { children: React.ReactNode }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <div
        className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-handwritten text-lg text-primary transition-all duration-500
          ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
      >
        You are my forever. 💕
      </div>
    </div>
  );
};

// Option 4: Hold-to-reveal heart
export const HoldToReveal = () => {
  const [holding, setHolding] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  const startHold = useCallback(() => {
    setHolding(true);
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(elapsed / 3000, 1);
      setProgress(pct);
      if (pct >= 1) {
        setRevealed(true);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 50);
  }, []);

  const stopHold = useCallback(() => {
    setHolding(false);
    if (!revealed) setProgress(0);
    if (timerRef.current) clearInterval(timerRef.current);
  }, [revealed]);

  return (
    <div className="text-center my-12">
      {!revealed ? (
        <>
          <p className="font-handwritten text-xl text-muted-foreground mb-4">
            Press and hold this heart ❤️
          </p>
          <button
            onMouseDown={startHold}
            onMouseUp={stopHold}
            onMouseLeave={stopHold}
            onTouchStart={startHold}
            onTouchEnd={stopHold}
            className="relative text-6xl select-none transition-transform duration-200"
            style={{ transform: holding ? "scale(1.2)" : "scale(1)" }}
          >
            ❤️
            {/* Progress ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50" cy="50" r="45"
                fill="none"
                stroke="hsl(346, 100%, 65%)"
                strokeWidth="4"
                strokeDasharray={`${progress * 283} 283`}
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </button>
        </>
      ) : (
        <div className="heart-pop bg-card/90 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 max-w-md mx-auto shadow-xl">
          <p className="text-4xl mb-3">🥺💕</p>
          <p className="font-handwritten text-2xl text-primary mb-2">
            You survived the tough chapters.
          </p>
          <p className="font-handwritten text-lg text-foreground">
            Hug unlocked. 🫂💗
            <br />
            You held on… just like you always do.
          </p>
        </div>
      )}
    </div>
  );
};
