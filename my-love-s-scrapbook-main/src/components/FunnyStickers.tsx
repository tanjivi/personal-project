// Funny and cute interactive sticker components
import { useState } from "react";
import { TeddyBear, HandDrawnHeart, KissLips, BowRibbon } from "./DoodleSVGs";

// Funny speech bubble stickers
const funnyQuotes = [
  "You're stuck with me forever 😏",
  "No refunds on this relationship 🧾",
  "WiFi, food, and you. That's all I need 📶",
  "You're my favorite weirdo 🤪",
  "I love you more than pizza 🍕 (and that's A LOT)",
  "Still can't believe you said yes 😳",
  "My brain: 90% thinking about you 🧠",
  "Error 404: Life without you not found 💻",
  "You had me at 'Hey' 🫠",
  "Together we're a beautiful disaster 🌪️❤️",
];

// Funny rotating quotes that appear on scroll
export const FunnyQuoteBubble = () => {
  const [index, setIndex] = useState(0);
  const [popping, setPopping] = useState(false);

  const nextQuote = () => {
    setPopping(true);
    setTimeout(() => {
      setIndex((i) => (i + 1) % funnyQuotes.length);
      setPopping(false);
    }, 300);
  };

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <p className="font-handwritten text-xl text-muted-foreground">Tap for a funny truth 👇</p>
      <button
        onClick={nextQuote}
        className={`relative bg-card border-2 border-primary/30 rounded-2xl px-8 py-5 max-w-sm
          shadow-lg sticker transition-all duration-300 ${popping ? "scale-90 opacity-50" : "scale-100 opacity-100"}`}
      >
        {/* Speech bubble tail */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-card border-b-2 border-r-2 border-primary/30 rotate-45" />
        <p className="font-handwritten text-xl text-foreground relative z-10">
          {funnyQuotes[index]}
        </p>
      </button>
      <p className="text-xs text-muted-foreground">{index + 1}/{funnyQuotes.length}</p>
    </div>
  );
};

// Poke the heart - it wiggles and giggles
export const PokeHeart = () => {
  const [pokes, setPokes] = useState(0);
  const [wiggling, setWiggling] = useState(false);
  const reactions = ["🥰", "😳", "🤭", "😘", "🫣", "😍", "💀", "🥺", "😏", "🤯"];

  const poke = () => {
    setWiggling(true);
    setPokes((p) => p + 1);
    setTimeout(() => setWiggling(false), 500);
  };

  return (
    <div className="text-center py-6">
      <p className="font-handwritten text-lg text-muted-foreground mb-3">Poke me! 👉</p>
      <button
        onClick={poke}
        className={`text-6xl transition-transform duration-300 select-none ${wiggling ? "wiggle" : "hover:scale-110"}`}
      >
        ❤️
      </button>
      {pokes > 0 && (
        <div className="mt-3 bounce-in">
          <span className="text-3xl">{reactions[(pokes - 1) % reactions.length]}</span>
          {pokes >= 10 && (
            <p className="font-handwritten text-lg text-primary mt-2 heart-pop">
              Okay okay you really love me!! 🥹💕
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// Flying emoji that shoots across when clicked
export const EmojiShooter = () => {
  const [emojis, setEmojis] = useState<Array<{ id: number; emoji: string; x: number; y: number }>>([]);
  const shootEmojis = ["💕", "💗", "💖", "😘", "🥰", "✨", "🦋", "🌸"];

  const shoot = () => {
    const newEmojis = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      emoji: shootEmojis[i],
      x: (Math.random() - 0.5) * 300,
      y: -(Math.random() * 200 + 100),
    }));
    setEmojis((prev) => [...prev, ...newEmojis]);
    setTimeout(() => {
      setEmojis((prev) => prev.filter((e) => !newEmojis.find((n) => n.id === e.id)));
    }, 1500);
  };

  return (
    <div className="relative flex flex-col items-center py-8">
      <button
        onClick={shoot}
        className="glow-btn bg-primary text-primary-foreground font-handwritten text-xl px-8 py-4 rounded-full
          hover:scale-105 transition-transform shadow-lg active:scale-95"
      >
        Send Love Burst! 💥
      </button>
      {emojis.map((e) => (
        <span
          key={e.id}
          className="absolute text-2xl pointer-events-none emoji-burst"
          style={{
            "--burst-x": `${e.x}px`,
            "--burst-y": `${e.y}px`,
          } as React.CSSProperties}
        >
          {e.emoji}
        </span>
      ))}
    </div>
  );
};

// Scratch card to reveal a message
export const ScratchReveal = () => {
  const [scratched, setScratched] = useState(false);

  return (
    <div className="flex flex-col items-center py-6">
      <p className="font-handwritten text-lg text-muted-foreground mb-3">
        {scratched ? "You found it! 🎉" : "Tap to scratch! 🪄"}
      </p>
      <button
        onClick={() => setScratched(true)}
        className={`relative w-64 h-32 rounded-xl overflow-hidden border-2 border-primary/20 shadow-lg
          transition-all duration-500 ${scratched ? "" : "cursor-pointer hover:scale-105"}`}
      >
        {/* Hidden message */}
        <div className="absolute inset-0 flex items-center justify-center bg-card p-4">
          <p className="font-handwritten text-xl text-primary text-center">
            Free reassurance for lifetime 🥹💕
          </p>
        </div>
        {/* Scratch overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br from-gold via-secondary to-blush
          flex items-center justify-center transition-all duration-700
          ${scratched ? "opacity-0 scale-110" : "opacity-100"}`}
        >
          <p className="font-handwritten text-2xl text-foreground">🎫 Scratch Me!</p>
        </div>
      </button>
    </div>
  );
};

// Cute handwritten post-it notes scattered
export const PostItNote = ({ text, color = "bg-[hsl(50,90%,85%)]", rotation = -2 }: { text: string; color?: string; rotation?: number }) => (
  <div
    className={`${color} p-4 w-40 shadow-md sticker relative`}
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    {/* Pin */}
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/60 shadow-sm" />
    <p className="font-handwritten text-base text-foreground leading-snug">{text}</p>
  </div>
);

// Row of post-it notes
export const PostItRow = () => (
  <div className="flex flex-wrap justify-center gap-6 py-8 px-4">
    <PostItNote text="Remember: You're the cutest 🥰" rotation={-3} />
    <PostItNote text="Note to self: Never let this one go 📌" color="bg-[hsl(340,80%,92%)]" rotation={2} />
    <PostItNote text="Reminder: Kiss him more 💋" rotation={-1} color="bg-[hsl(200,70%,90%)]" />
    <PostItNote text="TODO: Love you forever ✅" rotation={4} />
  </div>
);

// Animated stamp that slams down
export const LoveStamp = () => {
  const [stamped, setStamped] = useState(false);

  return (
    <div className="flex flex-col items-center py-6">
      {!stamped ? (
        <button
          onClick={() => setStamped(true)}
          className="font-handwritten text-xl text-muted-foreground hover:text-primary transition-colors"
        >
          Tap to stamp! 📮
        </button>
      ) : (
        <div className="stamp-slam">
          <div className="border-4 border-primary rounded-xl px-8 py-4 rotate-[-8deg]">
            <p className="font-handwritten text-2xl text-primary font-bold">
              CERTIFIED CUTEST 💕
            </p>
            <p className="font-handwritten text-sm text-primary/70">
              Official Stamp of Love™
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
