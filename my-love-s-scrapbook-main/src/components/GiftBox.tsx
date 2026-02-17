import { useState } from "react";

interface GiftBoxProps {
  onOpen: () => void;
}

const GiftBox = ({ onOpen }: GiftBoxProps) => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(true);
    setTimeout(onOpen, 600);
  };

  return (
    <div
      onClick={!opened ? handleClick : undefined}
      className={`cursor-pointer select-none transition-all duration-500 ${
        opened ? "scale-0 opacity-0" : "gift-bounce gift-shake"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Ribbon top */}
        <div className="w-8 h-12 bg-accent rounded-t-full relative z-10" />
        {/* Box lid */}
        <div
          className={`w-40 h-10 bg-primary rounded-lg relative z-10 flex items-center justify-center shadow-lg transition-transform duration-500 ${
            opened ? "-translate-y-8 -rotate-12" : ""
          }`}
        >
          <div className="w-4 h-full bg-accent" />
        </div>
        {/* Box body */}
        <div className="w-36 h-28 bg-deep-rose rounded-b-lg relative flex items-center justify-center shadow-xl">
          <div className="w-4 h-full bg-accent absolute" />
          <span className="text-4xl absolute -bottom-2">🎁</span>
        </div>
      </div>
      <p className="mt-6 font-handwritten text-2xl text-primary animate-pulse">
        Tap to open! 💝
      </p>
    </div>
  );
};

export default GiftBox;
