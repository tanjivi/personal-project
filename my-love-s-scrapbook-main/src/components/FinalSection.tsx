import { useEffect, useRef, useState } from "react";

const FinalSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div
        className={`text-center max-w-xl transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="font-handwritten text-3xl md:text-5xl text-primary leading-relaxed mb-8">
          If love was easy,
          <br />
          everyone would have it.
        </p>
        <p className="font-handwritten text-2xl md:text-4xl text-foreground leading-relaxed mb-4">
          But we fought for ours.
        </p>
        <p
          className={`font-handwritten text-2xl md:text-4xl text-primary transition-all duration-1000 delay-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          And I'd fight again. 💗
        </p>
      </div>
    </section>
  );
};

export default FinalSection;
