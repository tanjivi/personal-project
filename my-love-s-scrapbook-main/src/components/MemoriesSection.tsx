import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import smilingVideo from "../assets/videos/smilingVideo.mp4";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";




const photos = [
  { id: 1, rotation: -3, caption: "Us ❤️",type: "image",src: photo1},
  { id: 2, rotation: 2, caption: "That day 🌸" ,type: "image",src: photo2},
  { id: 3, rotation: -1, caption: "Always smiling 😊",type: "video", src: smilingVideo  },
  { id: 4, rotation: 4, caption: "My favorite 💕",type: "image",src: photo3 },
  { id: 5, rotation: -2, caption: "Together 🥰",type: "image", src: photo4},
  { id: 6, rotation: 3, caption: "Forever ✨", type: "image", src: photo5  },
];

const MemoriesSection = () => {
  return (
    <section id="memories" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-handwritten text-6xl md:text-7xl text-primary text-center mb-4">
          📸 Our Memories
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Every moment with you is a treasure ✨
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="polaroid bg-popover p-3 pb-14 rounded shadow-lg relative mx-auto"
              style={{ transform: `rotate(${photo.rotation}deg)`, maxWidth: "280px" }}
            >
              {/* Tape sticker */}
              <div className="tape -top-3 left-1/2 -translate-x-1/2" />

              {/* Photo placeholder */}
              <div className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 transition-all duration-500">
  {photo.type === "video" ? (
    <video
      src={photo.src}
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
  ) : (
    <img
      src={photo.src}
      alt={photo.caption}
      className="w-full h-full object-cover"
    />
  )}
              </div>


              {/* Caption */}
              <p className="absolute bottom-3 left-0 right-0 text-center font-handwritten text-xl text-foreground">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
