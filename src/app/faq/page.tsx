import { HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, siteConfig } from "@/lib/data";

const categoryOrder = [
  "Appointments",
  "Payments & Insurance",
  "Services",
  "Accessibility",
  "General",
];

function groupByCategory<T extends { category: string }>(
  items: T[],
): Map<string, T[]> {
  const groups = new Map<string, T[]>();
  for (const item of items) {
    const list = groups.get(item.category);
    if (list) {
      list.push(item);
    } else {
      groups.set(item.category, [item]);
    }
  }
  return groups;
}

export default function FAQPage() {
  const grouped = groupByCategory(faqs);

  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Find answers to common questions about our services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          {categoryOrder.map((category) => {
            const items = grouped.get(category);
            if (!items) return null;
            return (
              <div key={category} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="h-8 w-1 bg-primary rounded-full" />
                  {category}
                </h2>
                <Accordion>
                  {items.map((faq) => (
                    <AccordionItem key={faq.question} value={faq.question}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">Still have questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            We're here to help. Reach out to us and we'll get back to you as
            soon as possible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="bg-background rounded-xl p-6 border">
              <p className="font-semibold mb-1">Call Us</p>
              <p className="text-sm text-muted-foreground">
                Reception: {siteConfig.phone.reception}
              </p>
              <p className="text-sm text-muted-foreground">
                Appointments: {siteConfig.phone.appointments}
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 border">
              <p className="font-semibold mb-1">Email Us</p>
              <p className="text-sm text-muted-foreground">
                {siteConfig.email}
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 font-medium transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
