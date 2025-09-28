import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


export function ProjectSection() {
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
    },
    {
      title: "PetroSafe Underground LPG Tank Installation",
      location: "North Sea, UK",
      client: "Renewable Energy Partners",
      value: "$1.5B",
      duration: "36 months",
      status: "In Progress",
      year: "2024",
      description:
        "Engineering and construction management for a 500MW offshore wind farm including turbine installation and grid connection.",
      image: "/petrosafe.png",
      services: [
        "Engineering",
        "Construction Management",
        "Operations Support",
      ],
      highlights: [
        "500MW renewable energy capacity",
        "Advanced foundation design for harsh conditions",
        "Innovative installation techniques",
        "Local workforce development program",
      ],
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
    },
    {
      title: "LPG Retail Station Construction",
      location: "Queensland, Australia",
      client: "Pacific Gas Solutions",
      value: "$3.2B",
      duration: "60 months",
      status: "Completed",
      year: "2022",
      description:
        "Full EPCM delivery of a liquefied natural gas processing facility with capacity of 8 million tonnes per annum.",
      image: "/lpg-station.png",
      services: ["Engineering", "Procurement", "Construction", "Operations"],
      highlights: [
        "8 MTPA processing capacity",
        "Advanced modular construction approach",
        "Indigenous workforce participation",
        "World-class safety performance",
      ],
    },
    {
      title: "Bulk Tank Construction",
      location: "Queensland, Australia",
      client: "Pacific Gas Solutions",
      value: "$3.2B",
      duration: "60 months",
      status: "Completed",
      year: "2022",
      description:
        "Full EPCM delivery of a liquefied natural gas processing facility with capacity of 8 million tonnes per annum.",
      image: "/bulk-tank.png",
      services: ["Engineering", "Procurement", "Construction", "Operations"],
      highlights: [
        "8 MTPA processing capacity",
        "Advanced modular construction approach",
        "Indigenous workforce participation",
        "World-class safety performance",
      ],
    },
    {
      title: "Civil Construction Works",
      location: "Queensland, Australia",
      client: "Pacific Gas Solutions",
      value: "$3.2B",
      duration: "60 months",
      status: "Completed",
      year: "2022",
      description:
        "Full EPCM delivery of a liquefied natural gas processing facility with capacity of 8 million tonnes per annum.",
      image: "/tank-construction.png",
      services: ["Engineering", "Procurement", "Construction", "Operations"],
      highlights: [
        "8 MTPA processing capacity",
        "Advanced modular construction approach",
        "Indigenous workforce participation",
        "World-class safety performance",
      ],
    },
    {
      title: "LPG Underground Tank Construction",
      location: "Queensland, Australia",
      client: "Pacific Gas Solutions",
      value: "$3.2B",
      duration: "60 months",
      status: "Completed",
      year: "2022",
      description:
        "Full EPCM delivery of a liquefied natural gas processing facility with capacity of 8 million tonnes per annum.",
      image: "/underground-tank.png",
      services: ["Engineering", "Procurement", "Construction", "Operations"],
      highlights: [
        "8 MTPA processing capacity",
        "Advanced modular construction approach",
        "Indigenous workforce participation",
        "World-class safety performance",
      ],
    },
    {
      title: "Tank Base Construction",
      location: "Queensland, Australia",
      client: "Pacific Gas Solutions",
      value: "$3.2B",
      duration: "60 months",
      status: "Completed",
      year: "2022",
      description:
        "Full EPCM delivery of a liquefied natural gas processing facility with capacity of 8 million tonnes per annum.",
      image: "/base-construction.png",
      services: ["Engineering", "Procurement", "Construction", "Operations"],
      highlights: [
        "8 MTPA processing capacity",
        "Advanced modular construction approach",
        "Indigenous workforce participation",
        "World-class safety performance",
      ],
    },
  ];
  return (
    <section className="pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance text-center">
            Featured Projects
          </h2>
          <div className="flex justify-center my-5">
            <div className="bg-primary h-1 w-12">
              <span></span>
            </div>
          </div>

          <p className="text-muted-foreground max-w-3xl mx-auto text-center">
            Highlighting some of our most significant and innovative project
            deliveries across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:my-10">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={`${project.title} project showcase`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40  transition-opacity duration-300 flex flex-col items-start justify-end space-y-1 p-6">
                <h3 className="text-white font-bold text-lg text-start text-balance">
                  {project.title}
                </h3>
                <div className="flex flex-col space-y-3">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90 w-full"
                  >
                    More Details
                  </Button>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <Badge
                  variant={
                    project.status === "Completed" ? "default" : "secondary"
                  }
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
  );
}
