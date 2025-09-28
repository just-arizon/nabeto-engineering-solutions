import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Use the same array of projects (this can be fetched from an API if needed)
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
    image: "/igando.png",
    services: ["Engineering", "Procurement", "Construction", "Commissioning"],
    highlights: [
      "Zero lost-time incidents over 48 months",
      "Delivered 2 months ahead of schedule",
      "15% cost savings through optimization",
      "Environmental compliance exceeded targets",
    ],
  },
  // Other projects here...
];

export default function ProjectDetail() {
  // Extract the projectId from the URL
  const { projectId } = useParams<{ projectId: string }>();

  // Find the project by projectId
  const project = featuredProjects.find((p) => p.title === projectId);

  // If the project doesn't exist, display a "Not Found" message
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <Link to="/projects" className="text-blue-600 hover:underline">
          Go Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${project.image})`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-white text-balance">
              {project.title}
            </h1>
            <p className="text-xl text-white/90">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Project Details
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold">Location</h3>
                <p>{project.location}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold">Client</h3>
                <p>{project.client}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold">Value</h3>
                <p>{project.value}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold">Duration</h3>
                <p>{project.duration}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold">Status</h3>
                <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                  {project.status}
                </Badge>
              </div>

              <div>
                <h3 className="text-lg font-bold">Year</h3>
                <p>{project.year}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold">Services</h3>
                <ul>
                  {project.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold">Highlights</h3>
                <ul>
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Projects Button */}
      <section className="py-8 text-center">
        <Link to="/projects">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Back to Projects
          </Button>
        </Link>
      </section>
    </main>
  );
}
