// app/routes/services.$slug.$projectId.tsx
import { useParams, Link } from 'react-router';
import { projectPool } from '~/lib/service-data';
import { Button } from "@/components/ui/button";


export default function ProjectDetail() {
  const { slug, projectId } = useParams();
  const project = projectPool.find(
    (p) => p.section === slug && p.id === Number(projectId)
  );

  if (!project)
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Project not found</h1>
        <Link to={`/services/${slug}`} className="text-primary">
          ← Back to list
        </Link>
      </div>
    );

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <img src={project.image} alt={project.title} className="w-full rounded-xl mb-6" />

      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-muted-foreground">{project.location}</p>

      <div className="mt-6 space-y-4">
        <p>{project.description}</p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h2 className="font-semibold">Client</h2>
            <p>{project.client}</p>
          </div>
          <div>
            <h2 className="font-semibold">Value</h2>
            <p>{project.value}</p>
          </div>
          <div>
            <h2 className="font-semibold">Duration</h2>
            <p>{project.duration}</p>
          </div>
          <div>
            <h2 className="font-semibold">Status</h2>
            <p>{project.status}</p>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button asChild>
            <Link to={`/services/${slug}`}>← Back to list</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}