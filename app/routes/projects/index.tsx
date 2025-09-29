import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

/*  your original data  */
const featuredProjects = [
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
    image: "/igando.png",
    services: ["Engineering", "Procurement", "Construction", "Commissioning"],
    highlights: [
      "Zero lost-time incidents over 48 months",
      "Delivered 2 months ahead of schedule",
      "15% cost savings through optimization",
      "Environmental compliance exceeded targets",
    ],
    /* slug used for detail link */
    slug: "igando-petroleum-fuel-station",
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
    image: "/petrosafe.png",
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
    title: "Mushin Petroleum Project",
    location: "Queensland, Australia",
    client: "Pacific Gas Solutions",
    value: "$3.2B",
    duration: "60 months",
    status: "Completed",
    year: "2022",
    description:
      "Full EPCM delivery of a liquefied natural gas processing facility with capacity of 8 million tonnes per annum.",
    image: "/mushin.png",
    services: ["Engineering", "Procurement", "Construction", "Operations"],
    highlights: [
      "8 MTPA processing capacity",
      "Advanced modular construction approach",
      "Indigenous workforce participation",
      "World-class safety performance",
    ],
    slug: "mushin-petroleum-project",
  },
] as const;

export default function ProjectsIndex() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section
        className="relative py-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/industrial-construction-site-with-cranes-and-moder-UHlzyiPgUarcrnUW8VTrff2BdFxDBG.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-start space-y-6">
            <h1 className="text-xl lg:text-4xl text-white text-balance">Projects</h1>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Our Executed Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} project showcase`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-4 p-6">
                  <h3 className="text-white font-bold text-lg text-center text-balance">
                    {project.title}
                  </h3>
                  <Link to={`/projects/${project.slug}`} className="w-full">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-primary hover:bg-white/90 w-full"
                    >
                      More Details
                    </Button>
                  </Link>
                </div>

                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={
                      project.status === "Completed"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}