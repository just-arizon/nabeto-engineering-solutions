import { useParams, Link } from "react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
/* import the arrays from index file */
import {
  designedProjects,
  procurementServices,
  constructionServices,
  operationServices,
} from "./index";

const allServices = [
  ...designedProjects,
  ...procurementServices,
  ...constructionServices,
  ...operationServices,
];

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = allServices.find((s) => s.slug === slug);

  if (!data)
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Service case not found</h1>
        <Link to="/services" className="text-primary hover:underline">
          ← Back to services
        </Link>
      </div>
    );

  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/services">Services</Link>
          <span>/</span>
          <span className="text-foreground">{data.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden border border-border"
          >
            <img
              src={data.image || "/placeholder.svg"}
              alt={data.title}
              className="w-full aspect-video object-cover"
            />
          </motion.div>

          {/* content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <header>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">{data.title}</h1>
              <p className="text-muted-foreground mt-2">{data.location} • {data.year}</p>
            </header>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-4 border-border">
                <p className="text-sm text-muted-foreground">Client</p>
                <p className="font-semibold">{data.client}</p>
              </Card>
              <Card className="p-4 border-border">
                <p className="text-sm text-muted-foreground">Value</p>
                <p className="font-semibold">{data.value}</p>
              </Card>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Scope</h2>
              <p className="text-muted-foreground leading-relaxed">{data.scope}</p>
            </div>

            {data.services && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Services provided</h2>
                <div className="flex flex-wrap gap-2">
                  {data.services.map((s) => (
                    <Badge key={s} variant="secondary">{s}</Badge>
                  ))}
                </div>
              </div>
            )}

            {data.highlights && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Key highlights</h2>
                <ul className="space-y-2">
                  {data.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4">
              <Button asChild>
                <Link to="/services">← Back to all services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}