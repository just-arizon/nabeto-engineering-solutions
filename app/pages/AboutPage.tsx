"use-client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Target, Eye, Heart } from "lucide-react"

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Team Members", value: "500+" },
    { icon: Award, label: "Years Experience", value: "25+" },
    { icon: Globe, label: "Countries", value: "50+" },
    { icon: Target, label: "Projects Delivered", value: "1000+" },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in every project, delivering solutions that exceed expectations and industry standards.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We conduct business with the highest ethical standards, building trust through transparency and accountability.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork, fostering partnerships that drive innovation and success.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We are committed to sustainable practices that protect the environment for future generations.",
    },
  ]

  const leadership = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      experience: "20+ years in industrial engineering",
      image: "/placeholder.svg?height=300&width=300&text=CEO",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      experience: "18+ years in process engineering",
      image: "/placeholder.svg?height=300&width=300&text=CTO",
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Operations Officer",
      experience: "15+ years in project management",
      image: "/placeholder.svg?height=300&width=300&text=COO",
    },
  ]

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="border-primary text-primary">
              About EPCM Solutions
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Building the Future Through Engineering Excellence
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              For over 25 years, we have been at the forefront of industrial engineering, delivering comprehensive EPCM
              solutions that transform ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center space-y-3">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1998, EPCM Solutions began as a small engineering consultancy with a vision to
                  revolutionize industrial project delivery. Our founders recognized the need for integrated solutions
                  that could seamlessly connect engineering design with practical implementation.
                </p>
                <p>
                  Over the decades, we have grown into a global leader in EPCM services, expanding our capabilities
                  across multiple industries including oil & gas, petrochemicals, power generation, and renewable
                  energy. Our success is built on a foundation of technical excellence, innovative thinking, and
                  unwavering commitment to our clients.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in industrial engineering, embracing new
                  technologies and sustainable practices to deliver solutions that not only meet today's needs but
                  anticipate tomorrow's challenges.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Company+History"
                  alt="EPCM Solutions company history and milestones"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-border bg-card">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl text-card-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To deliver world-class EPCM solutions that enable our clients to achieve their strategic objectives
                  while contributing to sustainable industrial development and environmental stewardship.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl text-card-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To be the global leader in integrated EPCM services, recognized for our innovation, sustainability,
                  and ability to transform complex challenges into successful project outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              These fundamental principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center border-border bg-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Meet the experienced professionals who guide our strategic vision and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center border-border bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-32 h-32 rounded-full overflow-hidden bg-muted border border-border mb-4">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={`${leader.name} - ${leader.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{leader.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{leader.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{leader.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
