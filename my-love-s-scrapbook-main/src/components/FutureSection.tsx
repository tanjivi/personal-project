import { useEffect, useRef, useState } from "react";

const milestones = [
  { emoji: "📚", title: "Studying Together", text: "Late-night aptitude sessions and code reviews — growing smarter, together" },
  { emoji: "🚀", title: "Career Growth", text: "Landing dream jobs, celebrating each other's wins" },
  { emoji: "📱", title: "Buying Phones Without Stress", text: "No more budget anxiety — just picking what we love" },
  { emoji: "🚫", title: "No More Blocking", text: "Only blocking spam callers, never each other again" },
  { emoji: "💬", title: "Healthy Fights", text: "Arguing about dinner plans, not about who cares more" },
  { emoji: "🌙", title: "Peaceful Nights", text: "Falling asleep mid-call, knowing we're okay" },
  { emoji: "🏍️", title: "Our First Bike", text: "Riding into our future together" },
  { emoji: "👵👴", title: "Growing Old Together", text: "Still holding hands, still making each other laugh" },
];

const FutureSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="future" ref={ref} className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Moon & stars doodle bg */}
      <div className="absolute inset-0 pointer-events-none">
        {["✨", "⭐", "🌟", "✨", "⭐", "🌟", "✨", "⭐"].map((star, i) => (
          <span
            key={i}
            className="twinkle absolute text-xl"
            style={{
              left: `${10 + i * 12}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {star}
          </span>
        ))}
        <span className="absolute top-10 right-10 text-6xl opacity-20">🌙</span>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-handwritten text-5xl md:text-7xl text-primary text-center mb-4">
          🌙 The Life We'll Build
        </h2>
        <p className="font-handwritten text-2xl text-primary/70 text-center mb-16">
          After All This
        </p>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 md:-translate-x-px" />

          {milestones.map((m, i) => (
            <div
              key={i}
              className={`relative flex items-center mb-12 md:mb-16 transition-all duration-700
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10 shadow-md" />
              <div className={`ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 shadow-lg">
                  <span className="text-4xl">{m.emoji}</span>
                  <h3 className="font-handwritten text-2xl text-foreground mt-2">{m.title}</h3>
                  <p className="text-muted-foreground mt-1">{m.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-1000
          ${visible ? "opacity-100" : "opacity-0"}`}>
          <p className="font-handwritten text-3xl md:text-4xl text-primary leading-relaxed">
            No matter how much we argue…
            <br />
            <span className="text-foreground">we still come back.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
