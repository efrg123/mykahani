"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is online therapy as effective as in-person therapy?",
    a: "Yes. Research consistently shows that online therapy is just as effective as in-person therapy for many conditions including anxiety, depression, and stress. Our secure video platform ensures privacy and convenience without compromising quality.",
  },
  {
    q: "Are your psychologists licensed in Pakistan?",
    a: "All our psychologists are fully licensed and hold recognized qualifications from HEC-accredited institutions or international universities. Many have additional certifications in specialized areas like CBT, trauma therapy, and family counseling.",
  },
  {
    q: "Can I choose between English and Urdu sessions?",
    a: "Absolutely. We understand the importance of expressing yourself in your preferred language. You can filter psychologists by language and choose someone you are most comfortable speaking with.",
  },
  {
    q: "How much does a session cost?",
    a: "Individual sessions range from PKR 3,000 to PKR 8,000 depending on the psychologist's experience and specialization. We also offer subsidized rates for students and corporate packages for businesses. Financial aid may be available for those who qualify.",
  },
  {
    q: "Is my information kept confidential?",
    a: "100%. Confidentiality is the foundation of our practice. All sessions are encrypted, and your personal information is never shared with employers, family members, or third parties without your explicit consent — except in cases where there is a risk of harm.",
  },
  {
    q: "What is the cancellation policy?",
    a: "You can reschedule or cancel your appointment up to 24 hours before the scheduled time without any charge. Late cancellations may incur a fee of 50% of the session cost.",
  },
  {
    q: "Do you offer corporate packages?",
    a: "Yes. We offer comprehensive Employee Assistance Programs (EAP) tailored for Pakistani organizations. This includes counseling sessions, workshops, manager training, and 24/7 crisis support. Contact us for a customized proposal.",
  },
  {
    q: "How do I know if I need therapy?",
    a: "If you are experiencing persistent sadness, anxiety, difficulty sleeping, relationship problems, or simply feel overwhelmed, therapy can help. You do not need to be in crisis to benefit — many people seek therapy for personal growth and preventive care.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <section id="faqs" className="bg-white py-20 lg:py-28" ref={ref}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-teal-700 uppercase tracking-wider mb-3">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions About Online Therapy in Pakistan
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about getting started with online
            therapy, counseling, and corporate mental health services at
            MyKahani.pk.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={"item-" + i} className="border-slate-100">
                <AccordionTrigger className="text-left text-slate-900 hover:text-teal-700 hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
