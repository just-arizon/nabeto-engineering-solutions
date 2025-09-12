import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The company is a wholly indigenous company owned and managed by
                seasoned and experienced Nigerian professionals. . The
                engineering and management staff have multi-disciplinary
                experiences with an average technical and management experience
                of above 20 years in the oil and gas service industry.
              </p>
              <p>
                Over the decades, we have grown into a global leader in EPCM
                services, expanding our capabilities across multiple industries
                including oil & gas, petrochemicals, power generation, and
                renewable energy. Our success is built on a foundation of
                technical excellence, innovative thinking, and unwavering
                commitment to our clients.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible in
                industrial engineering, embracing new technologies and
                sustainable practices to deliver solutions that not only meet
                today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Read more
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border">
              <img
                src="/placeholder.svg?height=400&width=600&text=Company+History"
                alt="EPCM Solutions company history and milestones"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
