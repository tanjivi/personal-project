import { useEffect, useState, useRef } from "react";

const SurpriseSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; color: string; delay: number; duration: number }>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
          setConfetti(
            Array.from({ length: 40 }, (_, i) => ({
              id: i,
              left: Math.random() * 100,
              color: ["#FF4D6D", "#FFC0CB", "#FFD700", "#FF69B4", "#FF1493"][Math.floor(Math.random() * 5)],
              delay: Math.random() * 2,
              duration: Math.random() * 2 + 2,
            }))
          );
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <section id="surprise" ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="confetti-piece absolute top-0 w-3 h-3 rounded-sm"
          style={{
            left: `${c.left}%`,
            backgroundColor: c.color,
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
          }}
        />
      ))}

      {/* Balloons */}
      <div className="absolute inset-0 pointer-events-none">
        {visible && ["🎈", "🎈", "🎈", "🎈", "🎈"].map((b, i) => (
          <div
            key={i}
            className="balloon-float absolute text-5xl"
            style={{
              left: `${15 + i * 18}%`,
              bottom: "20%",
              animationDelay: `${i * 0.2}s`,
            }}
          >
            {b}
          </div>
        ))}
      </div>

      <div className={`text-center z-10 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="font-handwritten text-6xl md:text-8xl text-primary mb-8">
          🎉 Surprise! 🎉
        </h2>
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-lg mx-4 border border-primary/20 shadow-xl">
          <p className="font-handwritten text-3xl text-foreground mb-4">
            Happy Birthday, my love! 🎂
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Today is all about you. You make every single day brighter, 
            and I'm so grateful to celebrate another year of your beautiful life. 
            This little website is my way of showing you just how much you mean to me. 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default SurpriseSection;
