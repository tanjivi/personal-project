import { useEffect, useRef, useState } from "react";

const chapters = [
  {
    num: 1,
    emoji: "♟️",
    title: "Chess & Coincidences",
    date: "August 2024",
    text: `3rd year. Just classmates.

One random call about chess.

Practice rooms.
Tournaments.
Daily roasting.

It started with chess.
Something else followed.`,
    mood: "warm",
  },
  {
    num: 2,
    emoji: "🌙",
    title: "The 2AM Decision",
    date: "March 3 – 2:00 AM",
    text: `You asked.
I said yes.

Fastest yes of my life.

Simple.
Real.`,
    mood: "dreamy",
  },
  {
    num: 3,
    emoji: "💞",
    title: "First Rides & First Courage",
    date: "March 4",
    text: `You asked permission for everything.

You never rushed me.
You made me feel safe.

That’s when I knew.`,
    mood: "warm",
  },
  {
    num: 4,
    emoji: "💔",
    title: "The Fights & The Blocks",
    text: `We fought.
You blocked me.
I cried.

But we didn’t give up.`,
    mood: "emotional",
  },
  {
    num: 5,
    emoji: "🕊️",
    title: "Nashik & Self-Respect",
    text: `We weren’t talking.

I messaged you anyway.

Love over ego.`,
    mood: "healing",
  },
  {
    num: 6,
    emoji: "📚",
    title: "Growth Era",
    text: `You taught me patiently.

Repeated code.
Explained everything.

You helped me grow.`,
    mood: "warm",
  },
  {
    num: 7,
    emoji: "💸",
    title: "Support System",
    text: `We supported each other.

Sometimes broke.
Always trying.

Rich in effort.`,
    mood: "warm",
  },
  {
    num: 8,
    emoji: "💍",
    title: "The Ring",
    date: "January 21",
    text: `You proposed.

I lost the ring.

But not the promise.`,
    mood: "dreamy",
  },
  {
    num: 9,
    emoji: "✨",
    title: "Us",
    text: `Not perfect.

Persistent.

Stronger.`,
    mood: "eternal",
  },
];


const moodBg: Record<string, string> = {
  warm: "border-primary/20",
  dreamy: "border-[hsl(280,60%,80%)]/30",
  emotional: "border-accent/30 bg-accent/5",
  healing: "border-[hsl(160,40%,70%)]/30",
};

const OurStorySection = () => {
  const [visibleChapters, setVisibleChapters] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            setVisibleChapters((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.3 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="our-story" className="py-20 px-4 relative">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-handwritten text-5xl md:text-7xl text-primary text-center mb-4">
          📖 Our Story
        </h2>
        <p className="font-handwritten text-2xl text-primary/70 text-center mb-16">
          The Real Version
        </p>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20" />

          {chapters.map((ch, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i] = el; }}
              data-idx={i}
              className={`relative pl-16 mb-14 transition-all duration-700 ease-out ${
                visibleChapters.has(i)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Dot */}
              <div className="absolute left-[18px] top-2 w-5 h-5 rounded-full bg-primary/80 shadow-[0_0_12px_hsl(346,100%,65%,0.4)] z-10" />

              {/* Chapter */}
              <div
                className={`bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border shadow-lg ${
                  moodBg[ch.mood] || moodBg.warm
                }`}
              >
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Chapter {ch.num}
              </p>

              {ch.date && (
                <p className="text-[11px] tracking-[3px] text-primary/70 italic mb-3">
                  {ch.date}
                </p>
              )}

              <h3 className="font-handwritten text-3xl text-foreground mb-3">
                {ch.emoji} {ch.title}
              </h3>

                <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
                  {ch.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="text-center mt-8">
          <p className="font-handwritten text-3xl md:text-4xl text-primary leading-relaxed">
            We are not perfect.
            <br />
            <span className="text-foreground">We are persistent.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
