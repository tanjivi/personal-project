// Hand-drawn SVG doodle components for scrapbook aesthetic

export const HandDrawnHeart = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 55" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 50C30 50 5 35 5 18C5 8 12 3 20 3C25 3 28 6 30 10C32 6 35 3 40 3C48 3 55 8 55 18C55 35 30 50 30 50Z"
      stroke="hsl(346, 100%, 65%)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      style={{ filter: "url(#wobble)" }}
    />
    <defs>
      <filter id="wobble">
        <feTurbulence baseFrequency="0.03" numOctaves="2" seed="1" />
        <feDisplacementMap in="SourceGraphic" scale="1.5" />
      </filter>
    </defs>
  </svg>
);

export const SmallFlower = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="20" cy="11" rx="6" ry="8" fill="hsl(340, 100%, 85%)" transform="rotate(0 20 20)" opacity="0.8" />
    <ellipse cx="20" cy="11" rx="6" ry="8" fill="hsl(350, 100%, 88%)" transform="rotate(72 20 20)" opacity="0.8" />
    <ellipse cx="20" cy="11" rx="6" ry="8" fill="hsl(340, 100%, 85%)" transform="rotate(144 20 20)" opacity="0.8" />
    <ellipse cx="20" cy="11" rx="6" ry="8" fill="hsl(350, 100%, 88%)" transform="rotate(216 20 20)" opacity="0.8" />
    <ellipse cx="20" cy="11" rx="6" ry="8" fill="hsl(340, 100%, 85%)" transform="rotate(288 20 20)" opacity="0.8" />
    <circle cx="20" cy="20" r="5" fill="hsl(40, 70%, 60%)" />
  </svg>
);

export const LoveEnvelope = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 50 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="8" width="44" height="28" rx="3" fill="white" stroke="hsl(340, 40%, 88%)" strokeWidth="2" />
    <path d="M3 11L25 26L47 11" stroke="hsl(340, 40%, 88%)" strokeWidth="2" strokeLinecap="round" />
    <path d="M25 18C25 18 22 14 22 12C22 10 23 9 25 9C27 9 28 10 28 12C28 14 25 18 25 18Z" fill="hsl(346, 100%, 65%)" />
    <circle cx="14" cy="6" r="1" fill="hsl(40, 70%, 60%)" opacity="0.6" />
    <circle cx="36" cy="5" r="0.8" fill="hsl(40, 70%, 60%)" opacity="0.6" />
    <circle cx="40" cy="8" r="1.2" fill="hsl(40, 70%, 60%)" opacity="0.4" />
  </svg>
);

export const TinyStarSparkle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2L10 18M2 10L18 10M4 4L16 16M16 4L4 16" stroke="hsl(40, 70%, 60%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
  </svg>
);

export const InterlockedHearts = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 70 45" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 40C22 40 2 28 2 14C2 6 7 2 13 2C17 2 19.5 4.5 22 8C24.5 4.5 27 2 31 2C37 2 42 6 42 14C42 20 36 26 32 30"
      stroke="hsl(346, 100%, 65%)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"
    />
    <path
      d="M42 40C42 40 22 28 22 14C22 10 24 7 28 5"
      stroke="hsl(0, 70%, 55%)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0"
    />
    <path
      d="M48 40C48 40 68 28 68 14C68 6 63 2 57 2C53 2 50.5 4.5 48 8C45.5 4.5 43 2 39 2C33 2 28 6 28 14C28 28 48 40 48 40Z"
      stroke="hsl(0, 70%, 55%)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"
    />
  </svg>
);

// Hugging couple silhouette doodle
export const HuggingCouple = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 90" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Left person */}
    <circle cx="28" cy="20" r="9" stroke="hsl(346, 100%, 65%)" strokeWidth="2" fill="none" />
    <path d="M28 29C28 29 18 35 16 50C15 58 17 70 20 78" stroke="hsl(346, 100%, 65%)" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Right person */}
    <circle cx="52" cy="18" r="9" stroke="hsl(0, 70%, 55%)" strokeWidth="2" fill="none" />
    <path d="M52 27C52 27 62 33 64 48C65 56 63 68 60 76" stroke="hsl(0, 70%, 55%)" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Arms hugging */}
    <path d="M28 38C28 38 35 32 42 34C49 36 52 38 52 38" stroke="hsl(346, 100%, 65%)" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M52 36C52 36 45 30 38 32C31 34 28 36 28 36" stroke="hsl(0, 70%, 55%)" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* Heart above */}
    <path d="M40 6C40 6 37 2 34 2C31 2 30 4 30 6C30 9 40 14 40 14C40 14 50 9 50 6C50 4 49 2 46 2C43 2 40 6 40 6Z"
      fill="hsl(346, 100%, 75%)" opacity="0.6" />
  </svg>
);

// Kissing lips doodle
export const KissLips = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 50 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20C10 20 15 12 25 12C35 12 40 20 40 20" stroke="hsl(346, 100%, 65%)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M10 20C10 20 15 28 25 28C35 28 40 20 40 20" stroke="hsl(346, 100%, 65%)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M25 12C25 12 22 16 25 20C28 16 25 12 25 12Z" fill="hsl(346, 100%, 75%)" opacity="0.5" />
    {/* Lipstick mark sparkles */}
    <circle cx="8" cy="15" r="1.5" fill="hsl(346, 100%, 65%)" opacity="0.4" />
    <circle cx="42" cy="15" r="1" fill="hsl(346, 100%, 65%)" opacity="0.3" />
    <circle cx="44" cy="22" r="1.5" fill="hsl(346, 100%, 65%)" opacity="0.4" />
  </svg>
);

// Cupid's arrow
export const LoveArrow = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 30" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Arrow shaft */}
    <path d="M10 15L80 15" stroke="hsl(346, 100%, 65%)" strokeWidth="2" strokeLinecap="round" />
    {/* Arrow tip */}
    <path d="M80 15L72 8M80 15L72 22" stroke="hsl(346, 100%, 65%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Feathers */}
    <path d="M10 15L5 9M10 15L5 21" stroke="hsl(340, 80%, 75%)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 15L9 10M14 15L9 20" stroke="hsl(340, 80%, 80%)" strokeWidth="1.5" strokeLinecap="round" />
    {/* Heart at tip */}
    <path d="M88 15C88 15 86 11 83 11C80 11 79 13 79 15C79 18 88 22 88 22C88 22 97 18 97 15C97 13 96 11 93 11C90 11 88 15 88 15Z"
      fill="hsl(346, 100%, 65%)" opacity="0.7" />
  </svg>
);

// Bow ribbon doodle
export const BowRibbon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Left loop */}
    <path d="M30 20C30 20 20 8 12 10C4 12 6 22 14 22C22 22 30 20 30 20Z"
      fill="hsl(346, 100%, 80%)" stroke="hsl(346, 100%, 65%)" strokeWidth="1.5" opacity="0.8" />
    {/* Right loop */}
    <path d="M30 20C30 20 40 8 48 10C56 12 54 22 46 22C38 22 30 20 30 20Z"
      fill="hsl(346, 100%, 80%)" stroke="hsl(346, 100%, 65%)" strokeWidth="1.5" opacity="0.8" />
    {/* Center knot */}
    <circle cx="30" cy="20" r="4" fill="hsl(346, 100%, 65%)" />
    {/* Tails */}
    <path d="M28 24C28 24 22 34 18 38" stroke="hsl(346, 100%, 65%)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M32 24C32 24 38 34 42 38" stroke="hsl(346, 100%, 65%)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Cute teddy bear doodle
export const TeddyBear = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 70" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Ears */}
    <circle cx="18" cy="14" r="9" fill="hsl(30, 40%, 75%)" stroke="hsl(30, 30%, 55%)" strokeWidth="1.5" />
    <circle cx="42" cy="14" r="9" fill="hsl(30, 40%, 75%)" stroke="hsl(30, 30%, 55%)" strokeWidth="1.5" />
    <circle cx="18" cy="14" r="5" fill="hsl(340, 60%, 80%)" opacity="0.5" />
    <circle cx="42" cy="14" r="5" fill="hsl(340, 60%, 80%)" opacity="0.5" />
    {/* Head */}
    <circle cx="30" cy="25" r="16" fill="hsl(30, 40%, 75%)" stroke="hsl(30, 30%, 55%)" strokeWidth="1.5" />
    {/* Eyes */}
    <circle cx="24" cy="23" r="2" fill="hsl(30, 20%, 20%)" />
    <circle cx="36" cy="23" r="2" fill="hsl(30, 20%, 20%)" />
    <circle cx="25" cy="22" r="0.8" fill="white" />
    <circle cx="37" cy="22" r="0.8" fill="white" />
    {/* Nose */}
    <ellipse cx="30" cy="28" rx="3" ry="2" fill="hsl(30, 30%, 45%)" />
    {/* Mouth */}
    <path d="M27 30C27 30 30 33 33 30" stroke="hsl(30, 30%, 45%)" strokeWidth="1" strokeLinecap="round" fill="none" />
    {/* Body */}
    <ellipse cx="30" cy="52" rx="15" ry="14" fill="hsl(30, 40%, 75%)" stroke="hsl(30, 30%, 55%)" strokeWidth="1.5" />
    {/* Arms */}
    <path d="M16 48C16 48 8 42 6 46C4 50 12 52 16 50" fill="hsl(30, 40%, 75%)" stroke="hsl(30, 30%, 55%)" strokeWidth="1.5" />
    <path d="M44 48C44 48 52 42 54 46C56 50 48 52 44 50" fill="hsl(30, 40%, 75%)" stroke="hsl(30, 30%, 55%)" strokeWidth="1.5" />
    {/* Heart on belly */}
    <path d="M30 48C30 48 27 44 25 44C23 44 22 45.5 22 47C22 49 30 54 30 54C30 54 38 49 38 47C38 45.5 37 44 35 44C33 44 30 48 30 48Z"
      fill="hsl(346, 100%, 65%)" opacity="0.7" />
  </svg>
);

// Washi tape strip (horizontal)
export const WashiTape = ({ className = "", color = "hsl(340, 80%, 85%)", pattern = "dots" }: { className?: string; color?: string; pattern?: "dots" | "stripes" | "hearts" }) => (
  <svg viewBox="0 0 120 28" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="120" height="28" rx="1" fill={color} opacity="0.6" />
    {/* Torn edges */}
    <path d="M0 0C3 2 6 0 9 1C12 2 15 0 18 1C21 2 24 0 27 1C30 2 33 0 36 1C39 2 42 0 45 1C48 2 51 0 54 1C57 2 60 0 63 1C66 2 69 0 72 1C75 2 78 0 81 1C84 2 87 0 90 1C93 2 96 0 99 1C102 2 105 0 108 1C111 2 114 0 117 1L120 0"
      fill={color} opacity="0.8" />
    {pattern === "dots" && (
      <>
        {Array.from({ length: 8 }, (_, i) => (
          <circle key={i} cx={10 + i * 14} cy="14" r="2" fill="white" opacity="0.5" />
        ))}
      </>
    )}
    {pattern === "stripes" && (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <line key={i} x1={5 + i * 10} y1="0" x2={5 + i * 10} y2="28" stroke="white" strokeWidth="1.5" opacity="0.3" />
        ))}
      </>
    )}
    {pattern === "hearts" && (
      <>
        {Array.from({ length: 6 }, (_, i) => (
          <path key={i} d={`M${12 + i * 18} 14C${12 + i * 18} 14 ${10 + i * 18} 10 ${8 + i * 18} 10C${6 + i * 18} 10 ${6 + i * 18} 12 ${6 + i * 18} 13C${6 + i * 18} 15 ${12 + i * 18} 18 ${12 + i * 18} 18C${12 + i * 18} 18 ${18 + i * 18} 15 ${18 + i * 18} 13C${18 + i * 18} 12 ${18 + i * 18} 10 ${16 + i * 18} 10C${14 + i * 18} 10 ${12 + i * 18} 14 ${12 + i * 18} 14Z`}
            fill="white" opacity="0.4" />
        ))}
      </>
    )}
  </svg>
);

// Floating kiss mark (lipstick)
export const KissMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 45" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5C20 5 12 8 10 14C8 20 12 24 20 28C28 24 32 20 30 14C28 8 20 5 20 5Z"
      fill="hsl(346, 100%, 65%)" opacity="0.6" />
    <path d="M14 30C14 30 17 34 20 35C23 34 26 30 26 30"
      fill="hsl(346, 100%, 65%)" opacity="0.5" />
    <path d="M20 28C20 28 18 32 20 35C22 32 20 28 20 28Z"
      fill="hsl(346, 100%, 55%)" opacity="0.4" />
    {/* Sparkles */}
    <circle cx="8" cy="8" r="1" fill="hsl(346, 100%, 75%)" opacity="0.6" />
    <circle cx="33" cy="10" r="1.2" fill="hsl(346, 100%, 75%)" opacity="0.5" />
    <circle cx="6" cy="20" r="0.8" fill="hsl(346, 100%, 75%)" opacity="0.4" />
  </svg>
);

// Cute cloud with hearts
export const LoveCloud = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 50" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="40" cy="30" rx="30" ry="15" fill="hsl(340, 100%, 95%)" opacity="0.6" />
    <ellipse cx="25" cy="25" rx="18" ry="14" fill="hsl(340, 100%, 95%)" opacity="0.5" />
    <ellipse cx="55" cy="25" rx="18" ry="14" fill="hsl(340, 100%, 95%)" opacity="0.5" />
    <ellipse cx="40" cy="20" rx="15" ry="12" fill="hsl(340, 100%, 95%)" opacity="0.6" />
    {/* Mini hearts raining */}
    <path d="M30 40C30 40 29 38 28 38C27 38 27 39 27 39.5C27 40 30 42 30 42C30 42 33 40 33 39.5C33 39 33 38 32 38C31 38 30 40 30 40Z"
      fill="hsl(346, 100%, 65%)" opacity="0.5" />
    <path d="M45 42C45 42 44 40 43 40C42 40 42 41 42 41.5C42 42 45 44 45 44C45 44 48 42 48 41.5C48 41 48 40 47 40C46 40 45 42 45 42Z"
      fill="hsl(346, 100%, 65%)" opacity="0.4" />
    <path d="M38 45C38 45 37 43 36 43C35 43 35 44 35 44.5C35 45 38 47 38 47C38 47 41 45 41 44.5C41 44 41 43 40 43C39 43 38 45 38 45Z"
      fill="hsl(346, 100%, 65%)" opacity="0.6" />
  </svg>
);

// Infinity love symbol
export const InfinityLove = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 35" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M40 17.5C40 17.5 30 5 18 5C8 5 3 12 3 17.5C3 23 8 30 18 30C30 30 40 17.5 40 17.5Z"
      stroke="hsl(346, 100%, 65%)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M40 17.5C40 17.5 50 5 62 5C72 5 77 12 77 17.5C77 23 72 30 62 30C50 30 40 17.5 40 17.5Z"
      stroke="hsl(346, 100%, 65%)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Heart at center */}
    <path d="M40 12C40 12 38 9 36 9C34 9 33 10.5 33 12C33 14 40 18 40 18C40 18 47 14 47 12C47 10.5 46 9 44 9C42 9 40 12 40 12Z"
      fill="hsl(346, 100%, 65%)" opacity="0.6" />
  </svg>
);

// Sticker: "XOXO"
export const XoxoSticker = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 90 35" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="86" height="31" rx="8" fill="hsl(346, 100%, 90%)" stroke="hsl(346, 100%, 65%)" strokeWidth="1.5" />
    <text x="45" y="24" textAnchor="middle" fontFamily="cursive" fontSize="18" fill="hsl(346, 100%, 55%)" fontWeight="bold">
      XOXO
    </text>
  </svg>
);

// Sparkle burst
export const SparkleBurst = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5L22 16L30 8L24 18L35 20L24 22L30 32L22 24L20 35L18 24L10 32L16 22L5 20L16 18L10 8L18 16Z"
      fill="hsl(40, 80%, 65%)" opacity="0.6" />
    <circle cx="20" cy="20" r="3" fill="hsl(40, 90%, 70%)" opacity="0.8" />
  </svg>
);
