import { useState } from "react";

interface PasswordLockProps {
  onUnlock: () => void;
}

const PasswordLock = ({ onUnlock }: PasswordLockProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [fading, setFading] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  const correctPassword = "iloveyou";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === correctPassword) {
      setFading(true);
      setTimeout(() => setShowQuote(true), 1000);
      setTimeout(() => onUnlock(), 3500);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (showQuote) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#FF4D6D] flex items-center justify-center px-4">
        <p className="font-handwritten text-2xl md:text-4xl text-[hsl(0,0%,90%)] text-center leading-relaxed animate-fade-in max-w-lg">
          Every love story has chapters.
          <br />
          <span className="text-black">Ours survived them all.</span>
        </p>
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center px-4 transition-all duration-1000 ${
        fading ? "opacity-0 bg-[hsl(0,0%,5%)]" : "opacity-100"
      }`}
    >
      <div className="text-center max-w-sm w-full">
        <div className="text-7xl mb-6 float-bob">🔒</div>
        <h2 className="font-handwritten text-4xl md:text-5xl text-primary mb-2">
          Only for My Pinku 💗
        </h2>
        <p className="text-muted-foreground mb-8">
          Enter the secret password to continue 💕
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type the magic word..."
            className={`w-full px-6 py-3 rounded-xl border-2 bg-card text-center font-handwritten text-xl
              focus:outline-none focus:border-primary transition-colors
              ${error ? "border-accent animate-[gift-shake_0.3s_ease-in-out]" : "border-border"}`}
          />
          <button
            type="submit"
            className="glow-btn w-full py-3 bg-primary text-primary-foreground rounded-xl font-handwritten text-xl
              hover:opacity-90 transition-opacity"
          >
            Open My Surprise 💝
          </button>
        </form>

        {error && (
          <p className="mt-4 text-accent font-handwritten text-lg animate-pulse">
            Wrong. Try again, Mr. Overthinker 😏
          </p>
        )}

        <p className="mt-6 text-xs text-muted-foreground">
          Hint: What's the magic word? 😘
        </p>
      </div>
    </div>
  );
};

export default PasswordLock;
