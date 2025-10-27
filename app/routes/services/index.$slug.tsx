// app/routes/services.$slug.tsx
import { useParams, Link } from 'react-router';
import { projectPool } from '~/lib/service-data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function ServiceIndex() {
  const { slug } = useParams<{ slug: string }>();

  // filter by section
  const projects = projectPool.filter((p) => p.section === slug);

  if (!projects.length)
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">{slug}</h1>
        <p>No projects in this section yet.</p>
      </div>
    );

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">{slug.replace('-', ' ')}</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.id} className="overflow-hidden">
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold">{p.title}</h2>
              <p className="text-sm text-muted-foreground">{p.location}</p>
              <Button asChild className="mt-3 w-full">
                <Link to={`/services/${slug}/${p.id}`}>View details</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}