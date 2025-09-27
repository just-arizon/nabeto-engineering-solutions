import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, ShoppingCart, HardHat, Cog } from "lucide-react"
// import Image from "next/image"

export function ServiceSection() {
  const services = [
    {
      icon: Wrench,
      title: "Engineering Design",
      description:
        "Comprehensive engineering design and technical consulting services for complex industrial projects.",
      features: ["Process Design", "Structural Engineering", "Electrical & Instrumentation"],
      image: "/engineering-design.png",
    },
    {
      icon: ShoppingCart,
      title: "Procurement",
      description: "Strategic sourcing and procurement management ensuring quality materials and equipment delivery.",
      features: ["Vendor Management", "Quality Assurance", "Supply Chain Optimization"],
      image: "/procurement.png",
    },
    {
      icon: HardHat,
      title: "Construction",
      description: "Expert construction management and execution with focus on safety, quality, and timely delivery.",
      features: ["Project Management", "Safety Compliance", "Quality Control"],
      image: "/construction.png",
    },
    {
      icon: Cog,
      title: "Operations & Maintenance",
      description: "Comprehensive O&M services to ensure optimal performance and longevity of your assets.",
      features: ["Preventive Maintenance", "Performance Optimization", "Asset Management"],
      image: "/operations.png",
    },
  ]

  return (
    <section className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-10">
          <div className="">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance ">Our Services</h2>
             <div className="flex justify-center mt-5">
                  <div className="bg-primary h-1 w-12"><span></span></div>
                </div>
          </div>
        </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border bg-card overflow-hidden relative h-80 bg-blue-200"
              >
                <div className="absolute inset-0">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={`${service.title} services`}

                    className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
                  />
            <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black/100 to-transparent" />


                </div>

                <div className="relative z-10 h-full flex flex-col p-3 justify-end">
                  <div className="text-start space-y-3">
                    <h3 className="text-xl font-bold text-muted">{service.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View All Services
            {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
          </Button>
        </div>
      </div>
    </section>
  )
}
