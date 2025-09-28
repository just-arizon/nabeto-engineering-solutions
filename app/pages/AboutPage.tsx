import { useState } from "react";

export default function AboutPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/storyImg.jpg",
    "/storyImg-two.png",
    "/storyImg-three.png",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/industrial-construction-site-with-cranes-and-moder-UHlzyiPgUarcrnUW8VTrff2BdFxDBG.jpg')",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-start space-y-6">
            <h1 className="text-3xl lg:text-4xl  text-white text-balance">
              About
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  NABETO Engineering Limited is an Engineering, Procurement,
                  Installation, Construction, Operation and Maintenance (EPICOM)
                  company in the Oil and Gas Industry.
                </p>
                <p>
                  The company is a wholly indigenous company owned and managed
                  by seasoned and experienced Nigerian professionals.
                </p>
                <p>
                  The engineering and management staff have multi-disciplinary
                  experiences with an average technical and management experience
                  of above 20 years in the oil and gas service industry.
                </p>
              </div>
              {/* Carousel */}
              <div className="relative">
                <img
                  src={images[currentIndex]}
                  alt={`Company Story ${currentIndex + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Navigation Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
                >
                  &lt;
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission & Vision Cards */}
          </div>
        </div>
      </section>
    </main>
  );
}
