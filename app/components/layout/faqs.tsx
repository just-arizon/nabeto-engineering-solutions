"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    id: "item-1",
    question: "What services does your EPC company provide?",
    answer:
      "We provide comprehensive Engineering, Procurement, Construction, Operation, and Maintenance services. Our expertise spans across industrial projects including petrochemical facilities, power plants, LNG terminals, and infrastructure development. We handle the complete project lifecycle from initial design through operational support.",
  },
  {
    id: "item-2",
    question: "How do you ensure project quality and safety?",
    answer:
      "Quality and safety are our top priorities. We implement rigorous HSE (Health, Safety, and Environment) management systems, conduct regular inspections, maintain ISO certifications, and follow international standards. Our team undergoes continuous training and we maintain a zero-incident safety culture across all projects.",
  },
  {
    id: "item-3",
    question: "What is your project delivery timeline?",
    answer:
      "Project timelines vary based on scope and complexity. We provide detailed project schedules during the planning phase and maintain strict adherence to deadlines. Our experienced project managers use advanced planning tools to optimize schedules while maintaining quality standards.",
  },
  {
    id: "item-4",
    question: "Do you handle international projects?",
    answer:
      "Yes, we have extensive experience with international projects across multiple continents. Our team is experienced in navigating different regulatory environments, cultural considerations, and local requirements. We have successfully completed projects in Asia, Middle East, Africa, and Europe.",
  },
  {
    id: "item-5",
    question: "How do you manage project costs?",
    answer:
      "We provide transparent cost estimates and maintain strict budget controls throughout the project. Our procurement team negotiates competitive rates with suppliers, and we implement value engineering to optimize costs without compromising quality. Regular financial reporting keeps stakeholders informed.",
  },
  {
    id: "item-6",
    question: "What support do you provide after project completion?",
    answer:
      "We offer comprehensive Operation and Maintenance services including equipment monitoring, preventive maintenance, emergency support, and staff training. Our O&M team ensures optimal facility performance and extends asset lifespan through proactive management.",
  },
  {
    id: "item-7",
    question: "How do you handle project changes and modifications?",
    answer:
      "We have a structured change management process that evaluates impact on schedule, budget, and quality. All changes are documented and approved through proper channels. We maintain flexibility to accommodate necessary modifications while minimizing disruption.",
  },
  {
    id: "item-8",
    question: "What certifications and qualifications does your team have?",
    answer:
      "Our team includes certified engineers, project managers, and safety professionals with relevant industry certifications. We maintain ISO 9001 (Quality), ISO 14001 (Environment), and OHSAS 18001 (Safety) certifications. Our staff regularly updates their qualifications through professional development programs.",
  },
]

export function FAQ() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our EPCM services and project delivery
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-border">
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-4">
                  <span className="text-base md:text-lg font-semibold">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  <p className="text-base leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Section */}
          <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Didn't find your answer?</h3>
            <p className="text-muted-foreground mb-4">
              Contact our team directly for more information about our services
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
