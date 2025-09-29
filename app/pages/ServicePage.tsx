"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Shield,
  Clock,
  Users,
  Target,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

/* ----------  DATA  ---------- */
const stats = [
  { value: "20+", label: "Years in Business", icon: Clock },
  { value: "350+", label: "Projects Delivered", icon: Target },
  { value: "4", label: "Continents Served", icon: TrendingUp },
  { value: "97%", label: "Client Retention", icon: Award },
];

const values = [
  {
    icon: Shield,
    title: "Safety First",
    text: "Zero-incident mindset embedded in every design decision and site procedure.",
  },
  {
    icon: Zap,
    title: "Innovation",
    text: "Digital twins, AI-driven maintenance and green-design are our day-to-day tools.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Single-point accountability with open-book transparency for every stakeholder.",
  },
];

const timeline = [
  { year: "2004", event: "Founded in Houston, TX – refinery revamp EPC" },
  { year: "2011", event: "Opened Dubai hub – Middle-East expansion" },
  { year: "2016", event: "ISO 9001 / 45001 / 14001 triple certification" },
  { year: "2021", event: "Launched digital O&M division – 24/7 remote ops" },
  { year: "2024", event: "Carbon-neutral roadmap published – net-zero by 2030" },
];

const clients = [
  "Shell", "Saudi Aramco", "BHP", "Dow", "Chevron", "ExxonMobil",
];

/* ----------  PAGE  ---------- */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO ----------------------------------------------------*/}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="border-primary text-primary">
              About Us
            </Badge>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-foreground text-balance"
            >
              Engineering Excellence, Built on Partnership
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed text-pretty"
            >
              We are an employee-owned, independent EPCM partner trusted by
              energy, chemical and mining leaders to turn complex ideas into
              reliable, sustainable assets.
            </motion.p>
          </div>
        </div>
      </section>

      {/* STATS ---------------------------------------------------*/}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="text-center"
                >
                  <Icon className="mx-auto h-8 w-8 text-primary mb-3" />
                  <div className="text-3xl font-bold text-foreground">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STORY + TIMELINE ----------------------------------------*/}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Started by three engineers in a Houston garage, we grew into a
                global practice by refusing to compartmentalise engineering,
                procurement and operations. That integrated mindset still drives
                every decision we make.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today our 650+ specialists work out of centres in North & South
                America, the Middle-East and APAC, delivering projects that
                range from 5 MW solar farms to 200 kbd refinery expansions.
              </p>
              <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                Meet the Board
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <Card className="shadow-none border-border">
              <CardHeader>
                <CardTitle>Key Milestones</CardTitle>
                <CardDescription>Two decades of steady growth</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {timeline.map((t) => (
                  <div key={t.year} className="flex gap-4">
                    <div className="w-20 text-sm font-semibold text-primary">
                      {t.year}
                    </div>
                    <div className="flex-1 text-sm text-foreground">
                      {t.event}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* VALUES --------------------------------------------------*/}
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
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
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

      {/* TEAM TEASER ---------------------------------------------*/}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[5/4] rounded-2xl overflow-hidden border border-border">
              <img
                src="/placeholder.svg?height=600&width=700&text=Leadership+Team"
                alt="Leadership team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">People & Culture</h2>
              <p className="text-muted-foreground leading-relaxed">
                Employee-ownership keeps decision-making close to the project
                floor. Average industry tenure is 18 years, but our graduate
                programme keeps fresh ideas flowing.
              </p>
              <div className="space-y-3">
                {[
                  "25 % women in technical roles – double industry average",
                  "Continuous professional development – 60 h/year per employee",
                  "Chartered & PMP accreditation fully sponsored",
                ].map((txt) => (
                  <div key={txt} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{txt}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Careers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR -----------------------------------------------*/}
      <section className="py-14 bg-card border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Trusted on every continent by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {clients.map((c) => (
              <div
                key={c}
                className="text-lg font-semibold text-foreground/60 grayscale hover:grayscale-0 transition"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA -------------------------------------------------------*/}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-balance">Looking for a Partner That Owns the Outcome?</h2>
          <p className="text-lg opacity-90">
            Let’s talk about your project objectives and how we can help you
            reach first oil, first fire or first watt faster – safely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-foreground hover:bg-background/90"
            >
              Book a Discovery Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Download Capability Statement
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}