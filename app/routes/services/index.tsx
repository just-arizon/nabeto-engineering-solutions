import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

/*  your original data  */
const designedProjects = [
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
    image: "3d-engineering-design.png",
    services: ["Engineering", "Procurement", "Construction", "Commissioning"],
    highlights: [
      "Zero lost-time incidents over 48 months",
      "Delivered 2 months ahead of schedule",
      "15% cost savings through optimization",
      "Environmental compliance exceeded targets",
    ],
    /* slug used for detail link */
    slug: "igando-petroleum-fuel-station",
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
    image: "engineering-design-2.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
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
    image: "engineering-design-3.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
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
    image: "engineering-design.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
  },

] as const;

const procurementServices = [
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
    image: "procurement.png",
    services: ["Engineering", "Procurement", "Construction", "Commissioning"],
    highlights: [
      "Zero lost-time incidents over 48 months",
      "Delivered 2 months ahead of schedule",
      "15% cost savings through optimization",
      "Environmental compliance exceeded targets",
    ],
    /* slug used for detail link */
    slug: "igando-petroleum-fuel-station",
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
    image: "procurement-two.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
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
    image: "procurement-three.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
  },


] as const;

const constructionServices = [

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
    image: "base-construction.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
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
    image: "tank-construction.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
  },

] as const;

const operationServices = [

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
    image: "operation-one.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
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
    image: "operation-two.png",
    services: ["Engineering", "Construction Management", "Operations Support"],
    highlights: [
      "500MW renewable energy capacity",
      "Advanced foundation design for harsh conditions",
      "Innovative installation techniques",
      "Local workforce development program",
    ],
    slug: "petrosafe-underground-lpg-tank-installation",
  },

] as const;

export default function ServicesIndex() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[20vh]  flex items-center justify-start bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeAk4XhHXT_O6XbRdOo_WhHDYt3Y3KV-UvA&s)" }}>
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-bold text-white text-balance">Services</h1>
        </div>
      </section>
       {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-start space-y-2">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">
              Engineering Design
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designedProjects.map((service) => (
              <div
                key={service.slug}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} service showcase`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                  {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20  transition-opacity duration-300 flex flex-col items-start justify-end space-y-1 p-3">
                {/* <h3 className="text-white font-bold text-lg text-start text-balance">
                  {service.title}
                </h3> */}
                <div className="flex flex-col space-y-3">
                   <Link to={`/services/${service.slug}`} className="w-full">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-primary hover:bg-white/90 w-full text-xs"
                    >
                      View
                    </Button>
                  </Link>
                </div>
              </div>

                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={
                      service.status === "Completed"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }
                  >
                    {service.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Procurement Grid */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-start space-y-2">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">
              Procurement Management
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procurementServices.map((service) => (
              <div
                key={service.slug}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} service showcase`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                  {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20  transition-opacity duration-300 flex flex-col items-start justify-end space-y-1 p-3">
                {/* <h3 className="text-white font-bold text-lg text-start text-balance">
                  {service.title}
                </h3> */}
                <div className="flex flex-col space-y-3">
                   <Link to={`/services/${service.slug}`} className="w-full">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-primary hover:bg-white/90 w-full text-xs"
                    >
                      View
                    </Button>
                  </Link>
                </div>
              </div>

                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={
                      service.status === "Completed"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }
                  >
                    {service.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Construction Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-start space-y-2">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">
              Construction Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionServices.map((service) => (
              <div
                key={service.slug}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} service showcase`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                  {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20  transition-opacity duration-300 flex flex-col items-start justify-end space-y-1 p-3">
                {/* <h3 className="text-white font-bold text-lg text-start text-balance">
                  {service.title}
                </h3> */}
                <div className="flex flex-col space-y-3">
                   <Link to={`/services/${service.slug}`} className="w-full">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-primary hover:bg-white/90 w-full text-xs"
                    >
                      View
                    </Button>
                  </Link>
                </div>
              </div>

                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={
                      service.status === "Completed"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }
                  >
                    {service.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* Operations & Management Grid */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-start space-y-2">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">
              Operation and Maintenance Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationServices.map((service) => (
              <div
                key={service.slug}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} service showcase`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                  {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20  transition-opacity duration-300 flex flex-col items-start justify-end space-y-1 p-3">
                {/* <h3 className="text-white font-bold text-lg text-start text-balance">
                  {service.title}
                </h3> */}
                <div className="flex flex-col space-y-3">
                   <Link to={`/services/${service.slug}`} className="w-full">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-primary hover:bg-white/90 w-full text-xs"
                    >
                      View
                    </Button>
                  </Link>
                </div>
              </div>

                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    className={
                      service.status === "Completed"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }
                  >
                    {service.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}