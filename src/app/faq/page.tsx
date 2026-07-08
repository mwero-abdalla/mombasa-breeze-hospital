import { HelpCircle, Mail, MessageCircle, Phone } from "lucide-react";
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
      <section className="relative bg-gradient-to-br from-[#0B6BCB] via-[#0B6BCB] to-[#0D9488] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-blue-100 mb-6 border border-white/10">
              <HelpCircle className="h-3.5 w-3.5" />
              FAQ
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80">
              Find answers to common questions about our services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          {categoryOrder.map((category) => {
            const items = grouped.get(category);
            if (!items) return null;
            return (
              <div key={category} className="mb-14 last:mb-0">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="h-7 w-1.5 bg-gradient-to-b from-[#0B6BCB] to-[#0D9488] rounded-full" />
                  {category}
                </h2>
                <div className="rounded-2xl bg-white dark:bg-card ring-1 ring-foreground/5 shadow-sm overflow-hidden">
                  <Accordion>
                    {items.map((faq, idx) => (
                      <AccordionItem
                        key={faq.question}
                        value={faq.question}
                        className={
                          idx !== items.length - 1
                            ? "border-b border-border/50"
                            : ""
                        }
                      >
                        <AccordionTrigger className="px-6 py-4 text-sm font-medium hover:bg-muted/30 transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="px-6 pb-5">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0B6BCB]/5 via-[#0D9488]/5 to-transparent">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-[#0B6BCB] to-[#0D9488] text-white mb-6">
            <HelpCircle className="h-7 w-7" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            We&apos;re here to help. Reach out to us and we&apos;ll get back to
            you as soon as possible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto mb-10">
            <div className="group rounded-2xl bg-white dark:bg-card p-6 ring-1 ring-foreground/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 text-left">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-[#0B6BCB]/10 to-[#0D9488]/10 text-[#0B6BCB] mb-3">
                <Phone className="h-4.5 w-4.5" />
              </div>
              <p className="font-semibold mb-1">Call Us</p>
              <p className="text-sm text-muted-foreground">
                {siteConfig.phone.reception}
              </p>
            </div>
            <div className="group rounded-2xl bg-white dark:bg-card p-6 ring-1 ring-foreground/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 text-left">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-[#0B6BCB]/10 to-[#0D9488]/10 text-[#0B6BCB] mb-3">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <p className="font-semibold mb-1">Email Us</p>
              <p className="text-sm text-muted-foreground">
                {siteConfig.email}
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B6BCB] to-[#0D9488] text-white hover:opacity-90 px-6 py-3 font-medium transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
