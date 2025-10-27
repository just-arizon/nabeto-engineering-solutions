import { useParams, Link } from 'react-router';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

/* 1.  bring in the same arrays you export from services/index.tsx  */
import {
  designedProjects,
  procurementServices,
  constructionServices,
  operationServices,
} from '~/routes/services/index';

/* 2.  single flat pool  */
const pool = [
  ...designedProjects,
  ...procurementServices,
  ...constructionServices,
  ...operationServices,
] as const;

/* 3.  human-readable titles  */
const titles: Record<string, string> = {
  'engineering-design': 'Engineering Design',
  'procurement': 'Procurement Management',
  'construction': 'Construction Services',
  'operations': 'Operations & Maintenance',
};

export default function ServiceSectionIndex() {
  const { slug } = useParams<{ slug: string }>();

  /* 4.  filter by section  */
  const items = pool.filter((p) => p.section === slug);
  if (!items.length)
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Section not found</h1>
        <Link to="/services" className="text-primary hover:underline">
          ← Back to services
        </Link>
      </div>
    );

  /* 5.  same layout you had in services/index.tsx  */
  return (
    <main className="min-h-screen">
      {/*  HERO  */}
      <section className="relative h-[20vh] flex items-center justify-start bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-bold text-white text-balance">{titles[slug]}</h1>
        </div>
      </section>

      {/*  GRID  – identical to services/index.tsx  */}
      <section className={`py-20 ${titles[slug].includes('Design') || titles[slug].includes('Services') ? 'bg-muted' : 'bg-background'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-balance">{titles[slug]}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((s) => (
              <div key={s.id} className="group relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={s.image || '/placeholder.svg'} alt={s.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />

                <div className="absolute inset-0 bg-black/20 flex flex-col items-start justify-end space-y-1 p-3">
                  <Badge className="text-xs">{titles[slug]}</Badge>

                  {/*  detail link uses ID  */}
                  <Link to={`/services/${slug}/${s.id}`} className="w-full">
                    <Button size="sm" variant="secondary" className="bg-white text-primary hover:bg-white/90 w-full text-xs">
                      View
                    </Button>
                  </Link>
                </div>

                <div className="absolute top-3 left-3">
                  <Badge className={s.status === 'Completed' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}>
                    {s.status}
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