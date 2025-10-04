import { Button } from "@/components/ui/button";
import { Link } from "react-router";
// import storyImg from "../public/storyImg.jpg";

export function AboutSection() {
  return (
    <section className="lg:px-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-row-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance text-center">
                Nabeto Engineering Limited
              </h2>
              <div className="flex justify-center mt-5">
                <div className="bg-primary h-1 w-12"><span></span></div>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-center">
              <p>
                The company is a wholly indigenous company owned and managed by
                seasoned and experienced Nigerian professionals ranging from engineering design, procurement, construction, installation, commissioning and maintanance.
              </p>
            </div>
            <Link to="/about" className="flex justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Read more
                {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
              </Button>
            </Link>
          </div>
          <div className="relative grid grid-cols-1 gap-4 justify-items-center">
            <div className="lg:w-2/3 rounded-2xl overflow-hidden bg-card border border-border">
              <img
                src="/company-profile.png"
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
