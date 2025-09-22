import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AboutSection } from "~/components/sections/about";
import { ContactSection } from "~/components/sections/contact";
import { ServiceSection } from "~/components/sections/services";
import { ProjectSection } from "~/components/sections/project";

export default function Main() {
  const companies = [
    { name: "Total", logo: "/logos/total-logo.svg" },
    // { name: "Conoil", logo: "/logos/conoil.png" },
    { name: "Sahara", logo: "/logos/sahara-logo.svg" },
    { name: "Mobil", logo: "/logos/mobil-logo.svg" },
    { name: "Pinnacle", logo: "/logos/pinnacle-logo.svg" },
    { name: "Oando", logo: "/logos/Oando_logo.svg" },
    { name: "Nipco", logo: "/logos/Nipco-logo.svg" },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight text-balance">
                  Engineering Excellence in{" "}
                  <span className="text-primary">Every Project</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                  Comprehensive EPCM solutions delivering world-class
                  engineering, procurement, construction, operation, and
                  maintenance services for industrial projects worldwide.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-3">
                {[
                  "20+ years of industry expertise",
                  "Global project delivery capability",
                  "Sustainable and innovative solutions",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  View Projects
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border">
                <img
                  src="/industryImg.jpg"
                  alt="Industrial construction site showcasing EPCM capabilities"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">
                      Projects Completed
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">
                      States Served
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Marquee Section */}
      <section className="pt-24 0">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 mb-8 font-semibold">
            Approved by leading companies in Nigeria
          </p>
          <div className="logo-marquee-container overflow-hidden">
            <div className="logo-marquee-track flex gap-12 animate-marquee">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="logo-marquee-item flex items-center justify-center px-4"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-auto object-contain "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* About Section */}
      <div className="my-16 lg:my-32">
        <AboutSection />
      </div>
        {/* Services Section */}

      <div className="my-16 lg:my-32">
        <ServiceSection />
      </div>

        {/* Projects Section */}
      <div className="">
        <ProjectSection />
      </div>
      
        {/* Services Section */}
      <div className="">
        <ContactSection />
      </div>

    </div>
  );
}
