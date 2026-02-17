import memoriesVideo from "../assets/videos/memories.mp4";

const VideoSection = () => {
  return (
    <section
      id="video"
      className="min-h-screen py-20 px-4 flex items-center justify-center"
    >
      <div className="max-w-3xl w-full text-center">
        {/* Title */}
        <h2 className="font-handwritten text-6xl md:text-7xl text-primary mb-6">
          🎥 Special Video
        </h2>

        <p className="font-handwritten text-2xl text-muted-foreground mb-12 leading-relaxed">
          This is not perfect love.
          <br />
          <span className="text-primary">This is real love.</span>
        </p>

        {/* Video Wrapper */}
        <div className="relative inline-block">

          {/* Dashed Romantic Border */}
          <div className="absolute -inset-6 border-4 border-dashed border-primary/30 rounded-[50px]" />

          {/* Floating Hearts */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl">
            💕
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-3xl">
            💕
          </div>
          <div className="absolute top-1/2 -left-6 -translate-y-1/2 text-3xl">
            💕
          </div>
          <div className="absolute top-1/2 -right-6 -translate-y-1/2 text-3xl">
            💕
          </div>

          {/* Phone Style Video */}
          <div className="bg-card rounded-[40px] overflow-hidden shadow-2xl border border-border w-[280px] sm:w-[320px] mx-auto transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(255,105,180,0.15)]">
            <video
              src={memoriesVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
