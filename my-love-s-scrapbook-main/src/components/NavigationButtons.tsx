interface NavButtonProps {
  label: string;
  emoji: string;
  onClick: () => void;
  delay: number;
}

const NavButton = ({ label, emoji, onClick, delay }: NavButtonProps) => (
  <button
    onClick={onClick}
    className="glow-btn bg-card border-2 border-primary/30 rounded-xl px-6 py-4 font-handwritten text-xl text-foreground 
    hover:bg-secondary hover:border-primary transition-all duration-300 hover:scale-105
    opacity-0 animate-[heart-pop_0.5s_ease-out_forwards] shadow-md"
    style={{ animationDelay: `${delay}ms` }}
  >
    <span className="mr-2 text-2xl">{emoji}</span>
    {label}
  </button>
);

interface NavigationButtonsProps {
  show: boolean;
}

const NavigationButtons = ({ show }: NavigationButtonsProps) => {
  if (!show) return null;

  const buttons = [
    { label: "Surprise", emoji: "🎉", section: "surprise" },
    { label: "Our Story", emoji: "📖", section: "our-story" },
    { label: "Our Memories", emoji: "📸", section: "memories" },
    { label: "Love Letter", emoji: "💌", section: "love-letter" },
    { label: "Special Video", emoji: "🎥", section: "video" },
    { label: "Reasons I Love You", emoji: "💖", section: "reasons" },
    { label: "Our Future", emoji: "🌙", section: "future" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mt-8">
      {buttons.map((btn, i) => (
        <NavButton
          key={btn.section}
          label={btn.label}
          emoji={btn.emoji}
          onClick={() => scrollTo(btn.section)}
          delay={i * 100}
        />
      ))}
    </div>
  );
};

export default NavigationButtons;
