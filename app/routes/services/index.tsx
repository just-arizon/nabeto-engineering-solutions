import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";


const sectionMeta = {
  "engineering-design": { title: "Engineering Design", bg: "bg-muted" },
  "procurement":          { title: "Procurement Management", bg: "bg-background" },
  "construction":         { title: "Construction Services", bg: "bg-muted" },
  "operations":           { title: "Operation & Maintenance", bg: "bg-background" },
} as const;

/*  your original data  */
const designedProjects = [
  {
    title: "Igando Petroleum Fuel Station",
    location: "Houston, Texas, USA",
    client: "Global Energy Corp",
    value: "$2.8B",
    duration: "48 months",
    status: "Completed",
    year: "2023",
    description:
      "Complete EPCM services for a world-class petrochemical complex expansion including new production units, utilities, and infrastructure.",
    image: "3d-engineering-design.png",
    services: ["Engineering", "Procurement", "Construction", "Commissioning"],
    highlights: [
      "Zero lost-time incidents over 48 months",
      "Delivered 2 months ahead of schedule",
      "15% cost savings through optimization",
      "Environmental compliance exceeded targets",
    ],
    /* slug used for detail link */
    slug: "igando-petroleum-fuel-station",
    section: "engineering-design",
  },
  {
    title: "Petrosafe Underground LPG Tank Installation",
    location: "North Sea, UK",
    client: "Renewable Energy Partners",
    value: "$1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: "engineering-design-2.png",
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
    title: "Petrosafe Underground LPG Tank Installation",
    location: "North Sea, UK",
    client: "Renewable Energy Partners",
    value: "$1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: "engineering-design-3.png",
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
    title: "Petrosafe Underground LPG Tank Installation",
    location: "North Sea, UK",
    client: "Renewable Energy Partners",
    value: "$1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: "engineering-design.png",
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
    title: "Igando Petroleum Fuel Station",
    location: "Houston, Texas, USA",
    client: "Global Energy Corp",
    value: "$2.8B",
    duration: "48 months",
    status: "Completed",
    year: "2023",
    description:
      "Complete EPCM services for a world-class petrochemical complex expansion including new production units, utilities, and infrastructure.",
    image: "procurement.png",
    services: ["Engineering", "Procurement", "Construction", "Commissioning"],
    highlights: [
      "Zero lost-time incidents over 48 months",
      "Delivered 2 months ahead of schedule",
      "15% cost savings through optimization",
      "Environmental compliance exceeded targets",
    ],
    /* slug used for detail link */
    slug: "igando-petroleum-fuel-station",
    section: "procurement",

  },
  {
    title: "Petrosafe Underground LPG Tank Installation",
    location: "North Sea, UK",
    client: "Renewable Energy Partners",
    value: "$1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: "procurement-two.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
    section: "procurement",

  },
  {
    title: "Petrosafe Underground LPG Tank Installation",
    location: "North Sea, UK",
    client: "Renewable Energy Partners",
    value: "$1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: "procurement-three.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
    section: "procurement",
  },


] as const;

const constructionServices = [

  {
    title: "Petrosafe Underground LPG Tank Installation",
    location: "North Sea, UK",
    client: "Renewable Energy Partners",
    value: "$1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: "base-construction.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
    section: "construction",
  },
  {
    title: "Petrosafe Underground LPG Tank Installation",
    location: "North Sea, UK",
    client: "Renewable Energy Partners",
    value: "$1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: "tank-construction.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
    section: "construction",
  },

] as const;

const operationServices = [

  {
    title: "Petrosafe Underground LPG Tank Installation",
    location: "North Sea, UK",
    client: "Renewable Energy Partners",
    value: "$1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: "operation-one.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
  },
  {
    title: "Petrosafe Underground LPG Tank Installation",
    location: "North Sea, UK",
    client: "Renewable Energy Partners",
    value: "$1.5B",
    duration: "36 months",
    status: "In Progress",
    year: "2024",
    description:
      "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
    image: "operation-two.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
  },

] as const;

const allServices = [
  ...designedProjects.map((s) => ({ ...s, category: "Engineering Design" })),
  ...procurementServices.map((s) => ({ ...s, category: "Procurement" })),
  ...constructionServices.map((s) => ({ ...s, category: "Construction" })),
  ...operationServices.map((s) => ({ ...s, category: "Operations" })),
] as const;


type Section = keyof typeof sectionMeta;

const servicesBySection = (Object.keys(sectionMeta) as Section[]).map((key) => ({
  id: key,
  ...sectionMeta[key],
  items: allServices.filter((s) => s.section === key),
}));

export default function ServicesIndex() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[20vh]  flex items-center justify-start bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeAk4XhHXT_O6XbRdOo_WhHDYt3Y3KV-UvA&s)" }}>
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-bold text-white text-balance">Services</h1>
        </div>
      </section>
     {servicesBySection.map((sec) => (
        <section
          key={sec.id}
          id={sec.id}
          className={`py-20 ${sec.bg}`} // muted / white alternating
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">
              {sec.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sec.items.map((s) => (
                <div
                  key={s.slug}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
                >
                  <img
                    src={s.image || "/placeholder.svg"}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 flex flex-col items-start justify-end space-y-1 p-3">
                    <Badge className="text-xs">{sec.title}</Badge>
                    <Link to={`/services/${s.slug}`} className="w-full">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-primary hover:bg-white/90 w-full text-xs"
                      >
                        View
                      </Button>
                    </Link>
                  </div>

                  <div className="absolute top-3 left-3">
                    <Badge
                      className={
                        s.status === "Completed"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }
                    >
                      {s.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
export { designedProjects, procurementServices, constructionServices, operationServices };