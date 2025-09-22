
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, DollarSign, Users, ArrowRight, Filter, Search } from "lucide-react"

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
      image: "/placeholder.svg?height=300&width=500&text=Petrochemical+Complex",
      services: ["Engineering", "Procurement", "Construction", "Commissioning"],
      highlights: [
        "Zero lost-time incidents over 48 months",
        "Delivered 2 months ahead of schedule",
        "15% cost savings through optimization",
        "Environmental compliance exceeded targets",
      ],
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
  ]
    return (
    
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Featured Projects</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Highlighting some of our most significant and innovative project deliveries across various industries.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => {
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={`space-y-6 ${!isEven ? "lg:col-start-2" : ""}`}>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Badge
                          variant={project.status === "Completed" ? "default" : "secondary"}
                          className={
                            project.status === "Completed"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground"
                          }
                        >
                          {project.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{project.title}</h3>
                      {/* <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p> */}
                    </div>

                   

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Services Provided</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, serviceIndex) => (
                          <Badge
                            key={serviceIndex}
                            variant="outline"
                            className="border-primary/30 text-primary bg-primary/5"
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      View Project Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className={`relative ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} project showcase`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
}