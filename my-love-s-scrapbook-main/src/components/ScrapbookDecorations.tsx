// Scattered scrapbook decorations that float around sections
import { HuggingCouple, KissLips, LoveArrow, BowRibbon, TeddyBear, WashiTape, KissMark, LoveCloud, InfinityLove, XoxoSticker, SparkleBurst, HandDrawnHeart, SmallFlower } from "./DoodleSVGs";

// A collection of floating romantic stickers scattered across the page
export const ScatteredStickers = () => (
  <>
    {/* Hugging couple - top area */}
    <HuggingCouple className="fixed top-32 right-4 w-16 h-20 opacity-15 sway pointer-events-none z-0" />
    
    {/* Kiss lips mark */}
    <KissMark className="fixed top-[60%] left-4 w-10 h-12 opacity-15 twinkle pointer-events-none z-0" />
    
    {/* Love arrow - rotated via className */}
    <div className="fixed top-[45%] right-2 opacity-10 pointer-events-none z-0 -rotate-[15deg]">
      <LoveArrow className="w-20 h-6" />
    </div>

    {/* Bow ribbon */}
    <BowRibbon className="fixed bottom-[40%] left-6 w-12 h-8 opacity-15 float-bob pointer-events-none z-0" />
    
    {/* XOXO sticker */}
    <XoxoSticker className="fixed top-[75%] right-8 w-16 h-6 opacity-15 sway pointer-events-none z-0" />
    
    {/* Sparkle bursts */}
    <SparkleBurst className="fixed top-[20%] left-[15%] w-8 h-8 opacity-15 sparkle-flash pointer-events-none z-0" />
    <SparkleBurst className="fixed bottom-[25%] right-[20%] w-6 h-6 opacity-10 sparkle-flash pointer-events-none z-0 [animation-delay:1.2s]" />
  </>
);

// Section divider with romantic doodles
export const RomanticDivider = ({ variant = 1 }: { variant?: number }) => {
  if (variant === 1) return (
    <div className="flex items-center justify-center gap-3 py-6 opacity-25">
      <SmallFlower className="w-6 h-6 sway" />
      <LoveArrow className="w-16 h-5" />
      <HandDrawnHeart className="w-8 h-8 pulse-glow" />
      <div className="-scale-x-100">
        <LoveArrow className="w-16 h-5" />
      </div>
      <SmallFlower className="w-6 h-6 sway [animation-delay:1s]" />
    </div>
  );
  if (variant === 2) return (
    <div className="flex items-center justify-center gap-4 py-6 opacity-20">
      <KissLips className="w-10 h-8 float-bob" />
      <InfinityLove className="w-20 h-10" />
      <KissLips className="w-10 h-8 float-bob [animation-delay:0.5s] -scale-x-100" />
    </div>
  );
  return (
    <div className="flex items-center justify-center gap-5 py-6 opacity-20">
      <BowRibbon className="w-12 h-8 sway" />
      <HuggingCouple className="w-14 h-16" />
      <BowRibbon className="w-12 h-8 sway [animation-delay:0.8s]" />
    </div>
  );
};

// Washi tape accent for section tops
export const SectionWashiTape = ({ color, pattern }: { color?: string; pattern?: "dots" | "stripes" | "hearts" }) => (
  <div className="flex justify-center -mt-4 mb-6">
    <WashiTape className="w-32 md:w-40 washi-tape sticker" color={color} pattern={pattern} />
  </div>
);

// Cute sticker cluster for empty areas
export const StickerCluster = ({ className = "" }: { className?: string }) => (
  <div className={`inline-flex items-end gap-1 ${className}`}>
    <TeddyBear className="w-12 h-14 sticker" />
    <HandDrawnHeart className="w-6 h-6 pulse-glow -ml-2 -mb-1" />
  </div>
);
