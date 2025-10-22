import { useParams, Link } from "react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

/* 1.  four complete page objects  */
const servicePages: Record<string, {
  title: string;
  hero: string;
  intro: string;
  points: string[];
  services?: string[];
  highlights?: string[];
}> = {
  "engineering-design": {
    title: "Engineering Design",
    hero: "/engineering-hero.jpg",
    intro: "Full-scope engineering from concept to commissioning.",
    points: [
      "Process & conceptual design",
      "3D modelling and digital twins",
      "FEED / Detailed engineering",
      "Safety & risk studies (HAZOP, SIL, QRA)",
      "Multi-discipline 3D coordination",
      "As-built and hand-over documentation",
    ],
    services: ["Process", "Mechanical", "Electrical", "Instrumentation"],
    highlights: ["ISO 9001 certified workflows", "Zero-lost-time projects"],
  },
  "procurement-management": {
    title: "Procurement Management",
    hero: "/procurement-hero.jpg",
    intro: "Strategic sourcing and supply-chain excellence.",
    points: [
      "Global vendor qualification",
      "Purchase-order management",
      "Inspection & expediting",
      "Logistics and customs clearance",
      "Materials management on site",
    ],
    services: ["Sourcing", "Expediting", "Logistics", "Inspection"],
    highlights: ["15 % cost savings tracked", "On-time delivery > 97 %"],
  },
  "construction-services": {
    title: "Construction Services",
    hero: "/construction-hero.jpg",
    intro: "Safe, on-time and on-budget site execution.",
    points: [
      "Construction management & supervision",
      "Site safety leadership",
      "Sub-contractor management",
      "Progress and cost control",
      "Mechanical completion & hand-over",
    ],
    services: ["Management", "Supervision", "Safety", "QC/QA"],
    highlights: ["Zero-harm mindset", "Delivered 2 months ahead"],
  },
  "operations-maintenance": {
    title: "Operations & Maintenance",
    hero: "/operations-hero.jpg",
    intro: "Asset performance and reliability for the full lifecycle.",
    points: [
      "Preventive & predictive maintenance",
      "Asset performance management",
      "Turnaround / shutdown planning",
      "Spare-parts optimisation",
      "Remote monitoring & diagnostics",
    ],
    services: ["Maintenance", "Reliability", "Turnarounds", "Training"],
    highlights: ["97 % equipment availability", "Remote 24/7 support"],
  },
};

/* 2.  single slug component  */
export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const page = servicePages[slug!];

  if (!page) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Service page not found</h1>
        <Link to="/services" className="text-primary hover:underline">
          ← Back to services
        </Link>
      </div>
    );
  }

  const bullets = [...page.points, ...(page.highlights ?? [])];

  return (
    <main className="min-h-screen bg-background">
      {/* HERO – uses page.hero  */}
      <section
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${page.hero})` }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-3xl lg:text-5xl font-bold text-white text-balance"
        >
          {page.title}
        </motion.h1>
      </section>

      {/*  keep your exact two-column layout  */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/*  LEFT – image placeholder  */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden border border-border"
          >
            <img src="/placeholder.svg?height=600&width=900" alt={page.title} className="w-full aspect-video object-cover" />
          </motion.div>

          {/*  RIGHT – narrative  */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <header>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">{page.title}</h1>
              <p className="text-muted-foreground mt-2">{page.intro}</p>
            </header>

            <Card className="p-4 border-border">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {page.services && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Disciplines</h2>
                <div className="flex flex-wrap gap-2">
                  {page.services.map((s) => (
                    <Badge key={s} variant="secondary">{s}</Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Button asChild>
                <Link to="/services">← All Services</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}