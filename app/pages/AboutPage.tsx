
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Target, Eye, Heart } from "lucide-react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import { useRef, useEffect } from "react"

export default function AboutPage() {
  const mainRef = useRef<Splide>(null)
  const thumbsRef = useRef<Splide>(null)

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide)
    }
  }, [])

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
      name: "Engr. Raphael Chinweuba",
      role: "Managing Director/CEO",
      experience: "20+ years in industrial engineering",
      image: "?height=300&width=300&text=CEO",
    },
    {
      name: "Evelyn Chinenye Chinweuba",
      role: "General Manager, Administration",
      experience: "10+ years in process engineering",
      image: "?height=300&width=300&text=CTO",
    },
    {
      name: "Olisaemeka Okpala",
      role: "Company Secretary",
      experience: "15+ years in project management",
      image: "?height=300&width=300&text=COO",
    },
    {
      name: "Ikechukwu Onuaguluchi",
      role: "Engineering Manager",
      experience: "15+ years in project management",
      image: "?height=300&width=300&text=COO",
    },
    {
      name: "Jokotoye Oyewola",
      role: "Lead, Electrical Engineer",
      experience: "20+ years in project management",
      image: "?height=300&width=300&text=COO",
    },
    {
      name: "Adeyanju Emmanuel",
      role: "Lead, Mechanical Engineer",
      experience: "15+ years in project management",
      image: "?height=300&width=300&text=COO",
    },
    {
      name: "Ihuoma Victoria",
      role: "Document Controller",
      experience: "7+ years in project management",
      image: "?height=300&width=300&text=COO",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/industrial-construction-site-with-cranes-and-moder-UHlzyiPgUarcrnUW8VTrff2BdFxDBG.jpg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-white text-balance">
              About
            </h1>
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
                  NABETO Engineering Limited is an Engineering, Procurement, Installation, Construction, Operation and
                  Maintenance (EPICOM) company in the Oil and Gas Industry.
                </p>
                <p>
                  The company is a wholly indigenous company owned and managed by seasoned and experienced Nigerian
                  professionals.
                </p>
                <p>
                  The engineering and management staff have multi-disciplinary experiences with an average technical and
                  management experience of above 20 years in the oil and gas service industry.
                </p>
              </div>

              <div className="mt-8">
                <Splide
                  ref={thumbsRef}
                  aria-label="Thumbnail Navigation"
                  options={{
                    fixedWidth: 100,
                    fixedHeight: 60,
                    isNavigation: true,
                    gap: "1rem",
                    focus: "center",
                    pagination: false,
                    arrows: true,
                    cover: true,
                    breakpoints: {
                      640: {
                        fixedWidth: 80,
                        fixedHeight: 48,
                      },
                    },
                  }}

                >
                  <SplideSlide className="rounded-xl">
                    <img
                      src="/storyImg.jpg"
                      alt="Thumbnail 1"
                      className="cursor-pointer object-cover rounded-md w-full h-full"
                    />
                  </SplideSlide>
                  <SplideSlide className="rounded-xl">
                    <img
                      src="/storyImg-two.png"
                      alt="Thumbnail 2"
                      className="cursor-pointer object-cover rounded-md w-full h-full"
                    />
                  </SplideSlide>
                  <SplideSlide className="rounded-xl">
                    <img
                      src="/storyImg-three.png"
                      alt="Thumbnail 3"
                      className="cursor-pointer object-cover rounded-md w-full h-full"
                    />
                  </SplideSlide>
                  <SplideSlide className="rounded-xl">
                    <img
                      src="/storyImg.jpg"
                      alt="Thumbnail 4"
                      className="cursor-pointer object-cover rounded-md w-full h-full"
                    />
                  </SplideSlide>
                  <SplideSlide className="rounded-xl">
                    <img
                      src="/storyImg-two.png"
                      alt="Thumbnail 5"
                      className="cursor-pointer object-cover rounded-md w-full h-full"
                    />
                  </SplideSlide>
                  <SplideSlide className="rounded-xl">
                    <img
                      src="/storyImg-three.png"
                      alt="Thumbnail 6"
                      className="cursor-pointer object-cover rounded-md w-full h-full"
                    />
                  </SplideSlide>
                </Splide>
              </div>
            </div>

            <div>
              <Splide
                ref={mainRef}
                aria-label="Main Image Carousel"
                options={{
                  type: "fade",
                  height: "50vh",
                  pagination: false,
                  arrows: false,
                  cover: true,
                }}
                
              >
                <SplideSlide className="rounded-xl">
                  <img
                    src="/storyImg.jpg"
                    alt="Company Story 1"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SplideSlide>
                <SplideSlide className="rounded-xl">
                  <img
                    src="/storyImg-two.png"
                    alt="Company Story 2"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SplideSlide>
                <SplideSlide className="rounded-xl">
                  <img
                    src="/storyImg-three.png"
                    alt="Company Story 3"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SplideSlide>
                <SplideSlide className="rounded-xl">
                  <img
                    src="/storyImg.jpg"
                    alt="Company Story 4"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SplideSlide>
                <SplideSlide className="rounded-xl">
                  <img
                    src="/storyImg-two.png"
                    alt="Company Story 5"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SplideSlide>
                <SplideSlide className="rounded-xl">
                  <img
                    src="/storyImg-three.png"
                    alt="Company Story 6"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SplideSlide>
              </Splide>
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

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center border-border bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-32 h-32 rounded-full overflow-hidden bg-muted border border-border mb-4">
                    <img
                      src={leader.image || ""}
                      alt={`${leader.name} - ${leader.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg text-card-foreground">{leader.name}</CardTitle>
                  <CardDescription className="text-primary font-medium text-sm">{leader.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-xs">{leader.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
