"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Target, Eye, Zap, Shield, Users, Award, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";



/* ----------  CAROUSEL DATA  ---------- */
const IMAGES = ["/storyImg.jpg", "/storyImg-two.png", "/storyImg-three.png"];
const AUTOPLAY_DELAY = 5_000;

/* ----------  DUMMY DATA  ---------- */
const stats = [
  { value: "20+", label: "Years Experience", icon: Clock },
  { value: "350+", label: "Projects Delivered", icon: TrendingUp },
  { value: "4", label: "Continents", icon: Target },
  { value: "97%", label: "Client Retention", icon: Award },
];

const values = [
  { icon: Shield, title: "Safety First", text: "Zero-harm mindset embedded in every design and site procedure." },
  { icon: Zap, title: "Innovation", text: "Digital twins, AI-driven maintenance and green-design are our day-to-day tools." },
  { icon: Users, title: "Collaboration", text: "Single-point accountability with open-book transparency for every stakeholder." },
];

const team = [
  {
    name: "Engr Raphael Chinweuba",
    role: "Managing Director",
    experience: "21 years",
    qualification: "B.Eng. Electrical/Electronics Engineering",
    certification: "Chartered Engineer (COREN), FIPMA, MBA, MNSE, MNIEE",
    nationality: "Nigerian",
    photo: "/ralph-img.jpg",
  },
  {
    name: "Evelyne Chinenye Chinweuba",
    role: "General Manager, Adminstration",
    experience: "13 years",
    qualification: "B.Sc. Economics",
    certification: "MBA (In view)",
    nationality: "Nigerian",
    // photo: "/placeholder.svg?height=400&width=400&text=Chinedu",
  },
  {
    name: "Olisaemeka Okpala",
    role: "Company Secretary",
    experience: "8 years",
    qualification: "B.Eng. Electrical Engineering",
    // certification: "SHRM-SCP, CIPD",
    nationality: "Nigerian",
    // photo: "/placeholder.svg?height=400&width=400&text=Fatima",
  },
  {
    name: "Ikechukwu Onuaguluchi",
    role: "Engineering Manager",
    experience: "15 years",
    qualification: "B.Sc. Chemical Engineering",
    certification: "MNSE",
    nationality: "Nigerian",
    // photo: "/placeholder.svg?height=400&width=400&text=Olumide",
  },
  {
    name: "Jokotoye Oyewola",
    role: "Lead, Electrical Engineer",
    experience: "20 years",
    qualification: "B.Eng. Electrical Engineering",
    certification: "MNSE, MNIEEE",
    nationality: "Nigerian",
    // photo: "/placeholder.svg?height=400&width=400&text=Grace",
  },
  {
    name: "Adeyanju Emmanuel",
    role: "Lead, Mechanical Engineer",
    experience: "16 years",
    qualification: "B.Eng. Mechanical Engineering",
    certification: "Mechanical Engineering",
    nationality: "Nigerian",
    // photo: "/placeholder.svg?height=400&width=400&text=Ibrahim",
  },
  {
  
    name: "Ihuoma Victoria",
    role: "Document Controller",
    experience: "7 years",
    qualification: "B.Sc. Computer Science",
    // certification: "Mechanical Engineering",
    nationality: "Nigerian",
    // photo: "/placeholder.svg?height=400&width=400&text=Ibrahim",
  },
];

const clients = ["Shell", "Saudi Aramco", "BHP", "Dow", "Chevron", "ExxonMobil"];

/* ----------  SUB-COMPONENTS  ---------- */
function Carousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % IMAGES.length), AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [index, isPaused]);

  const prev = () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setIndex((i) => (i + 1) % IMAGES.length);

  return (
    <div
      className="relative w-full aspect-video rounded-lg overflow-hidden bg-card border border-border"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={IMAGES[index]}
          src={IMAGES[index]}
          alt={`Story ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-black">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-black">
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {IMAGES.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`w-2 h-2 rounded-full transition ${i === index ? "bg-white" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}

/* ----------  PAGE  ---------- */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative h-[20vh]  flex items-center justify-start bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/industrial-construction-site-with-cranes-and-moder-UHlzyiPgUarcrnUW8VTrff2BdFxDBG.jpg)" }}>
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-bold text-white text-balance">About</h1>
        </div>
      </section>

      {/* STORY + CAROUSEL */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>NABETO Engineering Limited is an Engineering, Procurement, Installation, Construction, Operation and Maintenance (EPICOM) company in the Oil and Gas Industry.</p>
              <p>The company is a wholly indigenous company owned and managed by seasoned and experienced Nigerian professionals.</p>
              <p>The engineering and management staff have multi-disciplinary experiences with an average technical and management experience of above 20 years in the oil and gas service industry.</p>
            </div>
          </div>
          <Carousel />
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <Card className="border-border shadow-sm">
            <CardHeader>
              <Target className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground capitalize">NABETO ENGINEERING 
LIMITEDIS ESTABLISHED TO 
PROVIDE  BEST-IN- CLASS 
ENGINEERING, PROCUREMENT, 
CONSTRUCTION, OPERATION AND 
MAINTENANCE SERVICES IN THE OIL, 
GAS, PETROCHEMICAL & AGRO ALLIED 
INDUSTRIES IN WEST AFRICA. </p>
            </CardContent>
          </Card>
          <Card className="border-border shadow-sm">
            <CardHeader>
              <Eye className="h-8 w-8 text-primary mb-2" />
              <CardTitle className="text-xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground capitalize">
                TO MAINTAIN A DYNAMIC ORGANISATION, 
DEPLOYING HIGHEST PROFFESSIONAL 
COMPETENCE, ENSURING 
CUSTOMER/EMPLOYEE SATISFACTION 
AND BEST RETURNS TO STAKE HOLDERS

              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="text-center">
                <Icon className="mx-auto h-8 w-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-foreground">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </section>


      {/* VALUES */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Core Values</h2>
            <p className="mt-2 text-muted-foreground">The non-negotiables that guide us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card className="h-full border-border shadow-sm">
                    <CardHeader>
                      <Icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-xl">{v.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{v.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM */}
 <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-12">
          <Users className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">People & Culture</h2>
          <p className="mt-2 text-muted-foreground">Meet the specialists who deliver your projects</p>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Card className="h-full flex flex-col border-border shadow-sm">
                {/* photo */}
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{person.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{person.role}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Experience:</span>
                    <Badge variant="secondary">{person.experience}</Badge>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Qualification:</span>
                    <p className="text-foreground">{person.qualification}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Certification:</span>
                    <p className="text-foreground">{person.certification}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-auto pt-2">
                    <span className="text-muted-foreground">Nationality:</span>
                    <Badge variant="outline">{person.nationality}</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View Open Roles
          </Button>
        </div>
      </div>
    </section>

      {/* CLIENTS */}
      <section className="py-14 bg-card border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-6">Trusted on every continent by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {clients.map((c) => (
              <div key={c} className="text-lg font-semibold text-foreground/60 grayscale hover:grayscale-0 transition">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-balance">Looking for a Partner That Owns the Outcome?</h2>
          <p className="text-lg opacity-90">Let’s talk about your project objectives and how we can help you reach first oil, first fire or first watt faster – safely.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Book a Discovery Call
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Capability Statement
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}