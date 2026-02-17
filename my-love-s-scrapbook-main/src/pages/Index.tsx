import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import GiftBox from "@/components/GiftBox";
import NavigationButtons from "@/components/NavigationButtons";
import SurpriseSection from "@/components/SurpriseSection";
import OurStorySection from "@/components/OurStorySection";
import MemoriesSection from "@/components/MemoriesSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import VideoSection from "@/components/VideoSection";
import ReasonsSection from "@/components/ReasonsSection";
import FutureSection from "@/components/FutureSection";
import FinalSection from "@/components/FinalSection";
import MusicToggle from "@/components/MusicToggle";
import PasswordLock from "@/components/PasswordLock";
import { HandDrawnHeart, SmallFlower, LoveEnvelope, TinyStarSparkle, LoveCloud, TeddyBear, KissMark, BowRibbon, InfinityLove } from "@/components/DoodleSVGs";
import { FooterSecretHeart, HoldToReveal } from "@/components/HiddenMessages";
import { ScatteredStickers, RomanticDivider, SectionWashiTape, StickerCluster } from "@/components/ScrapbookDecorations";
import { FunnyQuoteBubble, PokeHeart, EmojiShooter, ScratchReveal, PostItRow, LoveStamp } from "@/components/FunnyStickers";

const PrimeTimeEasterEgg = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="text-center py-4">
      <button
        onClick={() => setShow(true)}
        className="text-xs text-muted-foreground/40 hover:text-muted-foreground transition-colors cursor-pointer"
      >
        Prime Time survived.
      </button>
      {show && (
        <div className="heart-pop mt-3 bg-card/90 backdrop-blur-sm border border-accent/30 rounded-xl p-4 max-w-xs mx-auto shadow-lg">
          <p className="font-handwritten text-lg text-accent">
            Next time don't sleep 😤💗
          </p>
        </div>
      )}
    </div>
  );
};

const Index = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);

  if (!unlocked) {
    return <PasswordLock onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="relative bg-hearts-pattern min-h-screen">
      <FloatingHearts />
      <MusicToggle />
      <ScatteredStickers />

      {/* Scattered doodle decorations */}
      <HandDrawnHeart className="fixed top-20 left-6 w-10 h-10 opacity-15 twinkle pointer-events-none z-0" />
      <SmallFlower className="fixed top-40 right-8 w-8 h-8 opacity-20 twinkle pointer-events-none z-0" />
      <TinyStarSparkle className="fixed bottom-32 left-12 w-6 h-6 opacity-20 twinkle pointer-events-none z-0" />
      <LoveEnvelope className="fixed bottom-20 right-10 w-10 h-10 opacity-15 twinkle pointer-events-none z-0" />
      <LoveCloud className="fixed top-[15%] right-[10%] w-16 h-10 opacity-10 float-bob pointer-events-none z-0" />
      <TeddyBear className="fixed bottom-[15%] left-3 w-10 h-12 opacity-10 sway pointer-events-none z-0" />

      {/* Hero / Landing */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
        <span className="absolute top-10 left-10 text-4xl opacity-20 twinkle">✨</span>
        <span className="absolute top-20 right-16 text-3xl opacity-20 twinkle [animation-delay:1s]">⭐</span>
        <span className="absolute bottom-20 left-16 text-3xl opacity-20 twinkle [animation-delay:2s]">🌸</span>
        <span className="absolute bottom-32 right-10 text-4xl opacity-20 twinkle [animation-delay:0.5s]">💫</span>
        <BowRibbon className="absolute top-6 right-6 w-14 h-10 opacity-20 sway" />
        <InfinityLove className="absolute bottom-10 left-8 w-16 h-8 opacity-15" />

        {!giftOpened ? (
          <div className="text-center">
            <h1 className="font-handwritten text-5xl md:text-8xl text-primary mb-4 leading-tight">
              Happy Birthday<br />My Love ❤️
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-body">
              I didn't buy you a gift… I built our journey.
            </p>
            <GiftBox onOpen={() => setGiftOpened(true)} />
          </div>
        ) : (
          <div className="text-center">
            <h1 className="font-handwritten text-5xl md:text-8xl text-primary mb-4 heart-pop">
              Happy Birthday<br />My Love ❤️
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body">
              Explore everything I made for you 💕
            </p>
            <NavigationButtons show={giftOpened} />
          </div>
        )}
      </section>

      {/* All Sections */}
      {giftOpened && (
        <>
          <SectionWashiTape pattern="hearts" />
          <SurpriseSection />

          <FunnyQuoteBubble />
          <RomanticDivider variant={1} />

          <SectionWashiTape pattern="dots" color="hsl(30, 60%, 80%)" />
          <OurStorySection />

          <RomanticDivider variant={2} />

          <SectionWashiTape pattern="stripes" />
          <MemoriesSection />

          <PostItRow />
          <RomanticDivider variant={3} />

          <SectionWashiTape pattern="hearts" color="hsl(346, 80%, 85%)" />
          <LoveLetterSection />

          <LoveStamp />
          <RomanticDivider variant={1} />

          <VideoSection />

          <EmojiShooter />
          <RomanticDivider variant={2} />

          <SectionWashiTape pattern="dots" color="hsl(340, 60%, 85%)" />
          <ReasonsSection />

          <PokeHeart />

          <div className="flex justify-center py-4">
            <StickerCluster />
          </div>

          <ScratchReveal />
          <HoldToReveal />

          <PrimeTimeEasterEgg />

          <RomanticDivider variant={3} />

          <SectionWashiTape pattern="stripes" color="hsl(240, 40%, 85%)" />
          <FutureSection />

          <RomanticDivider variant={1} />

          <FinalSection />

          {/* Footer */}
          <footer className="text-center py-16 relative z-10">
            <KissMark className="w-8 h-10 mx-auto opacity-30 mb-4" />
            <p className="font-handwritten text-3xl text-primary">
              Made with all my love, just for you 💕
            </p>
            <p className="text-muted-foreground mt-2">Happy Birthday, my Pinku! 🎂</p>

            <div className="mt-8">
              <FooterSecretHeart />
            </div>

            <InfinityLove className="w-20 h-8 mx-auto mt-6 opacity-20" />
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;
