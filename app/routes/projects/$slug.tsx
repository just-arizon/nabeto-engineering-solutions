"use client";

import { useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Card } from "@/components/ui/card";

/* ----------  TYPES  ---------- */
type Project = {
  title: string;
  location: string;
  client: string;
  value: string;
  scope: string;
  completed: string;
  images: string[];
  services?: string[];
  highlights?: string[];
};

/* ----------  DUMMY DB  ---------- */
const details: Record<string, Project> = {
  "igando-petroleum-fuel-station": {
    title: "Igando Petroleum Fuel Station",
    location: "Houston, Texas, USA",
    client: "Global Energy Corp",
    value: "$2.8 B",
    scope: "Complete EPCM services for a world-class petrochemical complex expansion including new production units, utilities, and infrastructure.",
    completed: "2023",
    images: ["/igando.png"],
    services: ["Engineering", "Procurement", "Construction", "Commissioning"],
    highlights: [
      "Zero lost-time incidents over 48 months",
      "Delivered 2 months ahead of schedule",
      "15 % cost savings through optimization",
      "Environmental compliance exceeded targets",
    ],
  },
  "petrosafe-underground-lpg-tank-installation": {
    title: "Petrosafe Underground LPG Tank Installation",
    location: "North Sea, UK",
    client: "Renewable Energy Partners",
    value: "$1.5 B",
    scope: "Engineering and construction management for a 500 MW offshore wind farm including turbine installation and grid connection.",
    completed: "2024",
    images: ["/petrosafe.png"],
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500 MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
  },
  "mushin-petroleum-project": {
    title: "Mushin Petroleum Project",
    location: "Queensland, Australia",
    client: "Pacific Gas Solutions",
    value: "$3.2 B",
    scope: "Full EPCM delivery of a liquefied natural gas processing facility with capacity of 8 million tonnes per annum.",
    completed: "2022",
    images: ["/mushin.png"],
    services: ["Engineering", "Procurement", "Construction", "Operations"],
    highlights: [
      "8 MTPA processing capacity",
      "Advanced modular construction approach",
      "Indigenous workforce participation",
      "World-class safety performance",
    ],
  },
};

/* ----------  CAROUSEL SUB-COMPONENT  ---------- */
function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [index, isPaused, images.length]);

  return (
    <div
      className="relative w-full aspect-video rounded-xl overflow-hidden bg-card border border-border"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Project"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* prev / next */}
      <button
        onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-black"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setIndex((i) => (i + 1) % images.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-black"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition ${i === index ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ----------  PAGE  ---------- */
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = details[slug!];

  if (!data)
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Project not found</h1>
        <Link to="/projects" className="text-primary hover:underline">
          ← Back to projects
        </Link>
      </div>
    );

  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/projects">Projects</Link>
          <span>/</span>
          <span className="text-foreground">{data.title}</span>
        </nav>

        {/* two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT – image carousel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ImageCarousel images={data.images} />
          </motion.div>

          {/* RIGHT – content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <header>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">{data.title}</h1>
              <p className="text-muted-foreground mt-2">{data.location} • Completed {data.completed}</p>
            </header>

            {/* key facts */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-4 border-border">
                <p className="text-sm text-muted-foreground">Client</p>
                <p className="font-semibold">{data.client}</p>
              </Card>
              <Card className="p-4 border-border">
                <p className="text-sm text-muted-foreground">Project value</p>
                <p className="font-semibold">{data.value}</p>
              </Card>
            </div>

            {/* scope */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Scope</h2>
              <p className="text-muted-foreground leading-relaxed">{data.scope}</p>
            </div>

            {/* services */}
            {data.services && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Services provided</h2>
                <div className="flex flex-wrap gap-2">
                  {data.services.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* highlights */}
            {data.highlights && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Key highlights</h2>
                <ul className="space-y-2">
                  {data.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="pt-4">
              <Button asChild>
                <Link to="/projects">← Back to all projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}