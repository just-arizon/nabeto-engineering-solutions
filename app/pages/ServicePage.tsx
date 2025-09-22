
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wrench, ShoppingCart, HardHat, Cog, CheckCircle, ArrowRight, Zap, Shield, Clock, Users } from "lucide-react"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Wrench,
      title: "Engineering Design Services",
      description: "Comprehensive engineering design and technical consulting for complex industrial projects.",
      image: "/placeholder.svg?height=300&width=400&text=Engineering",
      capabilities: [
        "Process Engineering & Design",
        "Mechanical & Structural Engineering",
        "Electrical & Instrumentation",
        "Piping & Pipeline Design",
        "Safety & Risk Assessment",
        "Environmental Engineering",
      ],
      industries: ["Oil & Gas", "Petrochemicals", "Power Generation", "Mining"],
    },
    // {
    //   icon: ShoppingCart,
    //   title: "Procurement Services",
    //   description: "Strategic sourcing and procurement management ensuring quality materials and equipment delivery.",
    //   image: "/placeholder.svg?height=300&width=400&text=Procurement",
    //   capabilities: [
    //     "Vendor Qualification & Management",
    //     "Strategic Sourcing",
    //     "Contract Negotiation",
    //     "Quality Assurance & Inspection",
    //     "Supply Chain Optimization",
    //     "Logistics Coordination",
    //   ],
    //   industries: ["Manufacturing", "Infrastructure", "Energy", "Industrial"],
    // },
    // {
    //   icon: HardHat,
    //   title: "Construction Management",
    //   description: "Expert construction management and execution with focus on safety, quality, and timely delivery.",
    //   image: "/placeholder.svg?height=300&width=400&text=Construction",
    //   capabilities: [
    //     "Project Management & Planning",
    //     "Construction Supervision",
    //     "Safety Management",
    //     "Quality Control & Assurance",
    //     "Schedule & Cost Control",
    //     "Commissioning & Startup",
    //   ],
    //   industries: ["Infrastructure", "Industrial Plants", "Facilities", "Energy"],
    // },
    // {
    //   icon: Cog,
    //   title: "Operations & Maintenance",
    //   description: "Comprehensive O&M services to ensure optimal performance and longevity of your assets.",
    //   image: "/placeholder.svg?height=300&width=400&text=Operations",
    //   capabilities: [
    //     "Preventive & Predictive Maintenance",
    //     "Asset Performance Management",
    //     "Reliability Engineering",
    //     "Turnaround Management",
    //     "Spare Parts Management",
    //     "Training & Development",
    //   ],
    //   industries: ["Process Industries", "Power Plants", "Manufacturing", "Utilities"],
    // },
  ]



  const benefits = [
    "Reduced project delivery time by up to 30%",
    "Cost optimization through integrated approach",
    "Enhanced safety performance and compliance",
    "Single point of accountability",
    "Global expertise with local presence",
    "Proven track record across industries",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="border-primary text-primary">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Comprehensive EPCM Solutions for Every Industry
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              From concept to completion and beyond, we deliver integrated engineering, procurement, construction,
              operations, and maintenance services that drive project success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
                >
                  <div className={`space-y-6 ${!isEven ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">{service.title}</h2>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground">Key Capabilities</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Industries Served</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map((industry, indIndex) => (
                          <Badge
                            key={indIndex}
                            variant="secondary"
                            className="bg-secondary/20 text-secondary-foreground"
                          >
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className={`relative ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={`${service.title} capabilities`}
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


      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Why Choose Our EPCM Services?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our integrated approach delivers measurable value through enhanced efficiency, reduced risk, and
                optimized project outcomes.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border">
                <img
                  src="/placeholder.svg?height=400&width=600&text=EPCM+Benefits"
                  alt="EPCM services benefits and value proposition"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Start Your Next Project?</h2>
            <p className="text-xl opacity-90 text-pretty">
              Contact our experts to discuss how our EPCM services can deliver value for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Contact Us Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
