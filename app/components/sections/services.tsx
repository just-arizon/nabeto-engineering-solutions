import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, Shield, Clock, Users } from "lucide-react"

export function ServiceSection() {
  const specializedServices = [
    {
      icon: Zap,
      title: "Digital Solutions",
      description:
        "Advanced digital technologies for enhanced project delivery and asset management.",
    },
    {
      icon: Shield,
      title: "HSE Consulting",
      description:
        "Health, safety, and environmental consulting to ensure regulatory compliance.",
    },
    {
      icon: Clock,
      title: "Project Controls",
      description:
        "Comprehensive project controls including scheduling, cost management, and risk analysis.",
    },
    {
      icon: Users,
      title: "Training Services",
      description:
        "Technical training and capability development for your workforce.",
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
            Specialized Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Additional expertise to complement our core EPCM services and
            enhance project outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializedServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="text-center border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
