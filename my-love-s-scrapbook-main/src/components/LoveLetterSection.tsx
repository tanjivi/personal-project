import { useEffect, useState, useRef } from "react";

const letterContent = `My love,

Happy Birthday to the most beautiful soul in my life. ❤️

If someone told me in August 2024 that one chess call would become my whole world, I wouldn’t believe it.

I don't even know where to begin because loving you has become so natural to me, like breathing. You didn't just enter my life… you slowly became my peace, my comfort, my strength, and my biggest blessing.

You are not just my boyfriend.
You are my safe place.
You are the person I run to in happiness, in sadness, in confusion, in everything.

Sometimes we fight. Sometimes we argue. Sometimes we both say things out of emotion. But do you know what makes us different?
We never give up on each other.

You blocked me once. But you never left me.
You taught me Python, Django, and patience.
You stayed when things were messy.

You help me grow. You push me to become better. You see potential in me even when I doubt myself. You teach me things without even realizing it. You stood beside me during those long 6-hour calls when I was stressed. You explained one concept 20 times without losing your temper.

And that… that means everything.

I love the way you care for me.
I love the way you explain things patiently.
I love the way you act strong but still have the softest heart.

You are my favorite person.
My favorite notification.
My favorite voice.
My favorite smile.
My favorite human.

I may not say it in words… but I show it in effort.

I don't promise that life will always be easy.
But I promise that I will always choose you. In every fight. In every problem. In every lifetime.

I want more birthdays with you.
More late-night talks.
More stupid arguments.
More hugs.
More dreams.
More us.

You are not perfect. I am not perfect.
But what we have? It's real. And that's more beautiful than perfection.

P.S. — You are still Certified Cutest. 💕

Happy Birthday, my Pinku.
Thank you for existing.
Thank you for loving me.
Thank you for being mine.

Forever yours,
❤️`;

const LoveLetterSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < letterContent.length) {
        setDisplayedText(letterContent.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section id="love-letter" ref={ref} className="min-h-screen py-20 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <h2 className="font-handwritten text-6xl md:text-7xl text-primary text-center mb-4">
          💌 Love Letter
        </h2>
        <p className="font-handwritten text-2xl md:text-3xl text-primary/80 text-center mb-12">
          To My Pinku, My Safe Place, My Forever
        </p>

        <div className="bg-paper relative rounded-lg p-8 md:p-12 shadow-xl border border-border">
          {/* Tape stickers */}
          <div className="tape -top-3 left-8" />
          <div className="tape -top-3 right-8" style={{ transform: "rotate(3deg)" }} />

          {/* Heart stamp */}
          <div className="absolute top-6 right-6 text-4xl opacity-30 rotate-12">
            💗
          </div>

          {/* Letter text */}
          <div className="font-handwritten text-xl md:text-2xl leading-relaxed text-foreground whitespace-pre-line">
            <span>{displayedText}</span>
            {displayedText.length < letterContent.length && (
              <span className="typing-cursor">&nbsp;</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
