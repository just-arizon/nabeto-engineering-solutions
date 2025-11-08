"use client";
import { useParams, Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

/* ----------  import the same arrays  ---------- */
import {
  designedProjects,
  procurementServices,
  constructionServices,
  operationServices,
} from "~/routes/services/index";

const pool = [
  ...designedProjects,
  ...procurementServices,
  ...constructionServices,
  ...operationServices,
].map((s) => ({
  ...s,
  // guard: always give an images array
   images: Array.isArray(s.image) && s.image.length ? s.image : ["/placeholder.svg"],
}));

const titles: Record<string, string> = {
  "engineering-design": "Engineering Design",
  "procurement-management": "Procurement Management",
  "construction-services": "Construction Services",
  "operations-&-maintainance": "Operations & Maintenance",
};

export default function ServiceSectionIndex() {
  const { slug } = useParams<{ slug: string }>();
  const items = pool.filter((p) => p.section === slug);
  const [open, setOpen] = useState<number | null>(null);

  if (!items.length)
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Section not found</h1>
        <Link to="/services" className="text-primary hover:underline">
          ← Back to services
        </Link>
      </div>
    );

  const active = open !== null ? items[open] : null;

  return (
    <main className="min-h-screen bg-background">
      {/* ----------  HERO  ---------- */}
      <section className="relative h-[20vh] flex items-center justify-start bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-bold text-white text-balance">{titles[slug]}</h1>
        </div>
      </section>

      {/* ----------  GRID  ---------- */}
      <section className={`py-20 ${titles[slug].includes("Design") || titles[slug].includes("Services") ? "bg-muted" : "bg-background"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">{titles[slug]}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((s, idx) => (
              <div key={s.id} className="group relative rounded-2xl overflow-hidden border border-border">
                {/*  larger image  */}
                <div className="aspect-[4/3]">
                  <img
                    src={s.images[0]} // ✅ always safe
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-black/20 flex flex-col items-start justify-end space-y-2 p-4">
                  <Badge className="text-xs">{titles[slug]}</Badge>
                  <h3 className="text-white font-semibold text-sm">{s.title}</h3>

                  {/*  VIEW opens carousel  */}
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90 w-full text-xs"
                    onClick={() => setOpen(idx)}
                  >
                    View
                  </Button>
                </div>

                <div className="absolute top-3 left-3">
                  <Badge className={s.status === "Completed" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}>
                    {s.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------  CAROUSEL MODAL  ---------- */}
      <AnimatePresence>
        {open !== null && active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full mx-4 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* close */}
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-3 right-3 z-10 bg-white/20 text-white hover:bg-white/30"
                onClick={() => setOpen(null)}
              >
                <X className="h-5 w-5" />
              </Button>

              {/* images carousel */}
              <ImageCarousel images={active.images} />

              {/* meta */}
              <div className="p-6 bg-card space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className={active.status === "Completed" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}>
                    {active.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{active.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{active.title}</h3>
                <p className="text-sm text-muted-foreground">{active.location} • {active.value}</p>
                <p className="text-sm text-muted-foreground">{active.scope}</p>

                <div className="flex flex-wrap gap-2">
                  {active.services?.map((s) => (
                    <Badge key={s} variant="secondary">{s}</Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button asChild>
                    <Link to={`/projects/${active.slug}`}>Full Details →</Link>
                  </Button>
                  <Button variant="outline" onClick={() => setOpen(null)}>Close</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* ----------  sub-component: simple carousel  ---------- */
function ImageCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative h-80 bg-black">
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={images[idx]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition ${i === idx ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}