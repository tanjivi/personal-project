import { useRef, useState } from "react";
import bgMusic from "../assets/music/meriBanogi.mp3";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      {/* Hidden Audio */}
      <audio ref={audioRef} src={bgMusic} loop />

      {/* Toggle Button */}
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground
        shadow-lg flex items-center justify-center text-xl hover:scale-110 transition-transform"
        title={playing ? "Pause Music" : "Play Music"}
      >
        {playing ? "🔇" : "🎵"}
      </button>
    </>
  );
};

export default MusicToggle;
