import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { AboutSection } from "~/components/sections/about";
import { ContactSection } from "~/components/sections/contact";
import { ServiceSection } from "~/components/sections/services";
import { ProjectSection } from "~/components/sections/project";
import { motion } from "framer-motion";
import HeroSection from "~/components/sections/hero";
import { FAQ } from "~/components/layout/faqs";

export default function Main() {
  const companies = [
    { name: "Total", logo: "/logos/total-logo.svg" },
    // { name: "Conoil", logo: "/logos/conoil.png" },
    { name: "Sahara", logo: "/logos/sahara-logo.svg" },
    { name: "Mobil", logo: "/logos/mobil-logo.svg" },
    { name: "Dangote", logo: "/logos/dangote-logo.png" },
    { name: "ForteOil", logo: "/logos/forteoil-logo.png" },
    { name: "Conoil", logo: "/logos/conoil.png" },
    { name: "Techoil", logo: "/logos/techoil.png" },
    { name: "Oando", logo: "/logos/Oando_logo.svg" },
    { name: "Nipco", logo: "/logos/Nipco-logo.svg" },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Company Marquee Section */}
      <section className="pt-10">
        <div className="">
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
      
        {/* Faqs Section */}
      <div className="">
        <FAQ />
      </div>

    </div>
  );
}
