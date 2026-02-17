import { useEffect, useState } from "react";

const hearts = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: Math.random() * 16 + 10,
  duration: Math.random() * 10 + 12,
  delay: Math.random() * 10,
  opacity: Math.random() * 0.3 + 0.1,
}));

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="floating-heart absolute text-primary"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
