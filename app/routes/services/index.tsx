import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const sectionMeta = {
  "engineering-design": { title: "Engineering Design", bg: "bg-muted" },
  "procurement-management": { title: "Procurement Management", bg: "bg-background" },
  "construction-services": { title: "Construction Services", bg: "bg-muted" },
  "operations-&-maintainance": { title: "Operation & Maintenance", bg: "bg-background" },
} as const;

/*  your original data  */
const designedProjects = [
  {
    id: 1,
    title: "Igand0 Petroleum Fuel Station",
    location: "Igando, Lagos, Nigeria",
    client: "Global Energy Corp",
    value: "₦2.8B",
    duration: "48 months",
    status: "Completed",
    year: "2023",
    description:
      "Complete EPCM services for a world-class petrochemical complex expansion including new production units, utilities, and infrastructure.",
    image: ["/3d-engineering-design.png", "/designImg-2.png", "/designImg-3.png", "/designImg-4.png"],
    services: ["Engineering", "Procurement", "Construction", "Commissioning"],
    highlights: [
      "Zero lost-time incidents over 48 months",
      "Delivered 2 months ahead of schedule",
      "15% cost savings through optimization",
      "Environmental compliance exceeded targets",
    ],
    /* slug used for detail link */
    slug: "design of Igando station",
    section: "engineering-design",
  },
  {
    id: 2,
    title: "Petrosafe Underground LPG Tank Installation",
    location: "Mushin, Lagos, Nigeria",
    client: "Renewable Energy Partners",
    value: "₦1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: ["/engineering-design-2.png"],
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
    section: "engineering-design",
  },
  {
    id: 3,
    title: "Petrosafe Underground LPG Tank Installation",
    location: "Port Harcourt, Rivers, Nigeria",
    client: "Renewable Energy Partners",
    value: "₦1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: ["/engineering-design-3.png"],
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
    section: "engineering-design",
  },
  {
    id: 4,
    title: "Petrosafe Underground LPG Tank Installation",
    location: "Warri, Delta, Nigeria",
    client: "Renewable Energy Partners",
    value: "₦1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: ["/engineering-design.png"],
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
    section: "engineering-design",
  },
] as const;

const procurementServices = [
  {
    id: 1,
    title: "Igando Petroleum Fuel Station",
    location: "Igando, Lagos, Nigeria",
    client: "Global Energy Corp",
    value: "₦2.8B",
    duration: "48 months",
    status: "Completed",
    year: "2023",
    description:
      "Complete EPCM services for a world-class petrochemical complex expansion including new production units, utilities, and infrastructure.",
    image: ["/procurement.png"],
    services: ["Engineering", "Procurement", "Construction", "Commissioning"],
    highlights: [
      "Zero lost-time incidents over 48 months",
      "Delivered 2 months ahead of schedule",
      "15% cost savings through optimization",
      "Environmental compliance exceeded targets",
    ],
    slug: "igando-petroleum-fuel-station",
    section: "procurement-management",
  },
  {
    id: 2,
    title: "Petrosafe Underground LPG Tank Installation",
    location: "Mushin, Lagos, Nigeria",
    client: "Renewable Energy Partners",
    value: "₦1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: ["/procurement-two.png"],
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
    section: "procurement-management",
  },
  {
    id: 3,
    title: "Petrosafe Underground LPG Tank Installation",
    location: "Port Harcourt, Rivers, Nigeria",
    client: "Renewable Energy Partners",
    value: "₦1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: ["/procurement-three.png"],
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
    section: "procurement-management",
  },
] as const;
const constructionServices = [
  {
    id: 1,
    title: "Petrosafe Underground LPG Tank Installation",
    location: "North Sea, UK",
    client: "Renewable Energy Partners",
    value: "₦1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: ["/base-construction.png"],
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
    section: "construction-services",
  },
  {
    id: 2,
    title: "Petrosafe Underground LPG Tank Installation",
    location: "North Sea, UK",
    client: "Renewable Energy Partners",
    value: "₦1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: ["/tank-construction.png"],
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
    section: "construction-services",
  },
];

const operationServices = [
  {
    id: 1,
    title: "Petrosafe Underground LPG Tank Installation",
    location: "North Sea, UK",
    client: "Renewable Energy Partners",
    value: "₦1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: ["/operation-one.png"],
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
    section: "operations-&-maintainance",
  },
  {
    id: 2,
    title: "Petrosafe Underground LPG Tank Installation",
    location: "North Sea, UK",
    client: "Renewable Energy Partners",
    value: "₦1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: ["/operation-two.png"],
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
    section: "operations-&-maintainance",
  },
] as const;

const allServices = [
  ...designedProjects.map((s) => ({ ...s, category: "Engineering Design" })),
  ...procurementServices.map((s) => ({
    ...s,
    category: "Procurement Management",
  })),
  ...constructionServices.map((s) => ({
    ...s,
    category: "Construction Services",
  })),
  ...operationServices.map((s) => ({ ...s, category: "Operations" })),
].map((s) => ({
  ...s,
  // guard: always give an images array
   images: Array.isArray(s.image) && s.image.length ? s.image : ["/placeholder.svg"],
}));

type Section = keyof typeof sectionMeta;

const servicesBySection = (Object.keys(sectionMeta) as Section[]).map(
  (key) => ({
    id: key,
    ...sectionMeta[key],
    items: allServices.filter((s) => s.section === key),
  })
);

export default function ServicesIndex() {
  const [open, setOpen] = useState<{ section: Section; idx: number } | null>(null);
  const active = open ? servicesBySection.find((s) => s.id === open.section)?.items[open.idx] : null;

  return (
    <main className="min-h-screen bg-background">
      {/* ----------  HERO  ---------- */}
      <section className="relative h-[20vh] flex items-center justify-start bg-cover bg-center bg-no-repeat"
       style={{
          backgroundImage:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeAk4XhHXT_O6XbRdOo_WhHDYt3Y3KV-UvA&s)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-bold text-white text-balance">Services</h1>
        </div>
      </section>

      {/* ----------  SECTIONS  ---------- */}
      {servicesBySection.map((sec) => (
        <section key={sec.id} id={sec.id} className={`py-20 ${sec.bg}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">{sec.title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sec.items.map((s, idx) => (
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
                    <Badge className="text-xs">{sec.title}</Badge>
                    <h3 className="text-white font-semibold text-sm">{s.title}</h3>

                    {/*  VIEW opens carousel  */}
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-primary hover:bg-white/90 w-full text-xs"
                      onClick={() => setOpen({ section: sec.id, idx })}
                    >
                      View
                    </Button>
                  </div>

                  <div className="absolute top-3 left-3">
                    <Badge className={s.status === "Completed" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}>{s.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ----------  CAROUSEL MODAL  ---------- */}
      <AnimatePresence>
        {open && active && (
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
              {/*  close  */}
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-3 right-3 z-10 bg-white/20 text-white hover:bg-white/30"
                onClick={() => setOpen(null)}
              >
                <X className="h-5 w-5" />
              </Button>

              {/*  images  */}
              <ImageCarousel images={active.images} />

              {/*  meta  */}
              <div className="p-6 bg-card space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className={active.status === "Completed" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}>{active.status}</Badge>
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

                {/* <div className="flex gap-3 pt-2">
                  <Button asChild>
                    <Link to={`/projects/${active.slug}`}>Full Details →</Link>
                  </Button>
                  <Button variant="outline" onClick={() => setOpen(null)}>Close</Button>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* ----------  sub-component: carousel  ---------- */
function ImageCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative h-96 bg-black">
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
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30"><ChevronLeft className="h-5 w-5" /></button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30"><ChevronRight className="h-5 w-5" /></button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition ${i === idx ? "bg-white" : "bg-white/50"}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export {
  designedProjects,
  procurementServices,
  constructionServices,
  operationServices,
};
