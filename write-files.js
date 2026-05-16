const fs = require("fs");
const base = "/media/fahd/maindrive/mykahani/mykahani/src/components/sections";

const faq = `"use client";

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

  return (
    <section id="faqs" className="bg-white py-20 lg:py-28" ref={ref}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-teal-700 uppercase tracking-wider mb-3">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about getting started with MyKahani.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
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
`;

const contact = `"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="bg-teal-900 text-white py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold text-teal-300 uppercase tracking-wider mb-4">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Taking the First Step is Often the Hardest Part
            </h2>
            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
              Whether you are facing anxiety, depression, or simply feeling
              overwhelmed, you do not have to do it alone. We are here to walk
              alongside you — every step of the way.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-800 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <div className="text-sm text-teal-300">Call or WhatsApp</div>
                  <div className="font-semibold">0300-1234567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-800 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <div className="text-sm text-teal-300">Email us</div>
                  <div className="font-semibold">hello@mykahani.pk</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-800 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <div className="text-sm text-teal-300">Availability</div>
                  <div className="font-semibold">Mon - Sat: 9:00 AM - 9:00 PM</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <div className="text-sm text-teal-300">Locations</div>
                  <div className="font-semibold">
                    Karachi, Lahore, Islamabad, and Online
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-teal-900 hover:bg-teal-50 rounded-full px-8"
              >
                <a href="tel:+923001234567" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-600 text-white hover:bg-teal-800 rounded-full px-8"
              >
                <a href="mailto:hello@mykahani.pk">Send an Inquiry</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 text-slate-900">
              <h3 className="text-2xl font-bold mb-2">Request a Call Back</h3>
              <p className="text-slate-600 mb-6">
                Fill out the form below and our team will reach out within 24 hours.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="03XX-XXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    I am interested in
                  </label>
                  <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white">
                    <option>Individual Therapy</option>
                    <option>Couples Counseling</option>
                    <option>Corporate Wellness</option>
                    <option>Other</option>
                  </select>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-teal-700 hover:bg-teal-800 text-white rounded-full py-3 text-base"
                >
                  Request Call Back
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  Your information is kept strictly confidential.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`;

const footer = `"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">MK</span>
              </div>
              <span className="text-lg font-bold text-white">MyKahani</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Pakistan&apos;s trusted platform for personal and corporate mental
              health. Your story matters. Your healing matters.
            </p>
            <p className="text-sm italic text-slate-400">
              &ldquo;آپ کی کہانی، ہمیشہ محفوظ&rdquo;
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Individual Therapy</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Couples Counseling</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Child & Adolescent</a></li>
              <li><a href="#corporate" className="hover:text-teal-400 transition-colors">Corporate Wellness</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Online Therapy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-500" />
                <span>0300-1234567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-500" />
                <span>hello@mykahani.pk</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-500 mt-0.5" />
                <span>Karachi, Lahore, Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>MyKahani.pk. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
`;

fs.writeFileSync(base + "/FAQ.tsx", faq);
fs.writeFileSync(base + "/ContactCTA.tsx", contact);
fs.writeFileSync(base + "/Footer.tsx", footer);
console.log("Files written successfully");
