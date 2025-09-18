
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, DollarSign, Users, ArrowRight, Filter, Search } from "lucide-react"

export default function ProjectsPage() {
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
      image: "/placeholder.svg?height=300&width=500&text=Offshore+Wind+Farm",
      services: ["Engineering", "Construction Management", "Operations Support"],
      highlights: [
        "500MW renewable energy capacity",
        "Advanced foundation design for harsh conditions",
        "Innovative installation techniques",
        "Local workforce development program",
      ],
    },
    {
      title: "Petrosafe Ijesha Gas Project",
      location: "Queensland, Australia",
      client: "Pacific Gas Solutions",
      value: "$3.2B",
      duration: "60 months",
      status: "Completed",
      year: "2022",
      description:
        "Full EPCM delivery of a liquefied natural gas processing facility with capacity of 8 million tonnes per annum.",
      image: "/placeholder.svg?height=300&width=500&text=LNG+Processing+Facility",
      services: ["Engineering", "Procurement", "Construction", "Operations"],
      highlights: [
        "8 MTPA processing capacity",
        "Advanced modular construction approach",
        "Indigenous workforce participation",
        "World-class safety performance",
      ],
    },
  ]

  const projectStats = [
    { label: "Total Project Value", value: "$50B+", description: "Cumulative project portfolio" },
    { label: "Projects Completed", value: "500+", description: "Successfully delivered worldwide" },
    { label: "Countries", value: "50+", description: "Global project presence" },
    { label: "Safety Record", value: "0.12", description: "LTIR industry leading performance" },
  ]

  const industries = [
    "Oil & Gas",
    "Petrochemicals",
    "Power Generation",
    "Renewable Energy",
    "Mining & Minerals",
    "Infrastructure",
    "Manufacturing",
    "Water Treatment",
  ]

  const regions = ["North America", "Europe", "Asia Pacific", "Middle East", "Africa", "South America"]

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="border-primary text-primary">
              Our Projects
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Delivering Excellence Across the Globe
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Explore our portfolio of successfully delivered projects spanning multiple industries and continents,
              showcasing our expertise in complex EPCM solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="font-semibold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium text-foreground">Filter Projects:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" className="border-border bg-transparent">
                All Industries
              </Button>
              <Button variant="outline" size="sm" className="border-border bg-transparent">
                All Regions
              </Button>
              <Button variant="outline" size="sm" className="border-border bg-transparent">
                All Status
              </Button>
              <Button variant="outline" size="sm" className="border-border bg-transparent">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
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
                      <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{project.value}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{project.client}</span>
                      </div>
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

      {/* Industries & Regions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Industries We Serve</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Our expertise spans across multiple industry sectors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className="p-3 bg-muted rounded-lg text-center text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                    >
                      {industry}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Global Presence</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Project delivery across six continents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {regions.map((region, index) => (
                    <div
                      key={index}
                      className="p-3 bg-muted rounded-lg text-center text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                    >
                      {region}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Start Your Next Project?</h2>
            <p className="text-xl opacity-90 text-pretty">
              Let's discuss how our proven EPCM expertise can deliver success for your next industrial project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Discuss Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
