// routes/policies.tsx  (or any page you already have)
import { Card } from "@/components/ui/card";

const policies = [
  {
    title: "Safety Policy",
    anchor: "safety",
    items: [
      "NABETO ENGINEERING Limited is dedicated to the implementation of the highest safety standards through awareness, training, and motivation of her employees towards safe engineering practices.",
      "We shall safeguard the lives of persons and equipment that may be exposed to our operations.",
      "Adequate personal protective equipment (PPE) shall be provided by NABETO ENGINEERING LIMITED for persons engaged in any work.The wearing of adequate PPE shall be enforced at all times.",
      "To nip all hazards in the bud, the Managing Director’s representative shall endorse the Safety plan for any job before mobilization.",

    ],
  },
  {
    title: "Health Policy",
    anchor: "quality",
    items: [
      "NABETO ENGINEERING LIMITED is committed to the Health of her employees and persons that may be influenced by the presence of health hazard either in the office or on site.",
      "Project quality plans are prepared and approved before work commences.",
      "NABETO shall strive at all times to detect, assess, mitigate, or eliminate any health hazard through the provision of good house keeping, first aid and good retainer Clinic to take care of all employees and persons that may be exposed to the presence of health hazard.",
      "In any health emergency evacuation situation, the Managing Director of NABETO should be contacted immediately and all necessary resources at the disposal of the Safety Manager or Coordinator should be deployed without any hesitation.",
      "Importantly, on no account shall any person under the influence of alcohol or drugs even when administered by a medical practitioner be engaged in any form of work or driving.",
      "NABETO ENGINEERING Limited shall through the instrument of workmen’s compensation insurance cater for persons that may be inadvertently exposed to health accident."
    ],
  },
  {
    title: "Environment Policy",
    anchor: "environment",
    items: [
      "NABETO ENGINEERING LIMITED shall achieve and maintain high standards of environmental care, protection and management in all aspects of her activities.",
      "Our approach to environmental management shall be based on harmonious and balanced environmental preservation.",
      "We shall avoid or minimize any adverse environmental impact, damage and pollution resulting from our operations and activities.",
      "NABETO ENGINEERING LIMITED shall comply with all applicable laws, regulations and standards towards enhancement of sustainable development.",
      "We shall reduce noise and fumes as practical as possible during all operations.",
      "We shall ensure that all employees and sub-contractors are aware of their environmental responsibilities."
    ],
  },
  {
    title: "Security Policy",
    anchor: "security",
    items: [
      "The security of persons engaged in work for NABETO is paramount to the Management; hence appropriate mechanism shall be in place to secure lives and property of the company.",
      "It is the duty of all the employees to protect property in their possession.No Company property shall be given or transferred to a third party without written authorization from the Management.",
      "Movement logbook shall be kept on site and offices to trace the whereabouts of all persons.",
      "We report our compliance metrics transparently to clients and regulators.",
      "Where risks to personnel and property may arise due to crime, civil disorder, armed conflict, or malicious practices, NABETO will identify,evaluate and manage such developments.",
    ],
  },
];

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[30vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0dvvENorYKkTbDpk5Ssr5dNHhrBbyMD-MQ&s')" }}>
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <h1 className="relative text-3xl lg:text-4xl font-bold text-white text-balance">Company Policies</h1>
      </section>

      {/* Policies – simple vertical stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto space-y-12">
        {policies.map((policy) => (
          <Card key={policy.anchor} id={policy.anchor} className="p-6 border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-4">{policy.title}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {policy.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </section>
    </main>
  );
}