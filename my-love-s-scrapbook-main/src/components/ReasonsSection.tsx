import { useState } from "react";

const reasons = [
  "Because you ask permission for everything — even to hold my hand 🤍",
  "Because you blocked me once… but you came back stronger 💌",
  "Because your care is always bigger than your ego 🫶",
  "Because even when you’re frustrated, you still worry about me 🥺",
  "Because you forced me to study when I just wanted to sleep 📚😤",
  "Because you count money like a serious businessman… but smile like a baby 💸👶",
  "Because you were happiest after getting that 5000 — and that happiness was pure 🥹",
  "Because you invested in my growth, not just in our romance 🌱",
  "Because you respect my comfort and my boundaries 💞",
  "Because you never forced me into anything — ever 🤍",
  "Because no matter how messy it gets… you stay 🫂",
  "Because you choose me even after fights and ego battles ⚖️",
  "Because you explain the same code 20 times without giving up on me 💻✨",
  "Because you treat love seriously — not like a timepass ❤️",
  "Because you show effort in actions, not just words 💯",
  "Because you make me feel safe in a world that isn’t always soft 🛡️",
  "Because we argue… but we don’t quit #TheKaleshis 😌",
  "Because the way you look at me makes me feel important 🌸",
  "Because you believe in “us” even on the hard days 🌙",
  "Because loving you doesn’t feel complicated… it feels right 💗",
];

const ReasonsSection = () => {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const toggleReason = (index: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id="reasons" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-handwritten text-6xl md:text-7xl text-primary mb-4">
          💖 Reasons I Love You
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Click each heart to reveal a reason 💕
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {reasons.map((reason, i) => (
            <div key={i} className="relative">
              <button
                onClick={() => toggleReason(i)}
                className={`w-16 h-16 md:w-20 md:h-20 text-3xl md:text-4xl transition-all duration-300 rounded-full
                  ${revealed.has(i)
                    ? "bg-primary text-primary-foreground scale-110 shadow-lg"
                    : "bg-secondary hover:bg-blush hover:scale-110"
                  }`}
              >
                {revealed.has(i) ? "💗" : "🤍"}
              </button>

              {revealed.has(i) && (
                <div className="heart-pop absolute top-full mt-3 left-1/2 -translate-x-1/2 
                  bg-card border border-primary/20 rounded-xl p-4 shadow-lg z-10 w-56 md:w-64">
                  <p className="font-handwritten text-lg text-foreground">
                    {reason}
                  </p>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 
                    bg-card border-l border-t border-primary/20 rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
