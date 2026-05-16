"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MessageCircle, Video, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Book a Session",
    description:
      "Choose a time that works for you. Book online or call us. Same-week appointments available.",
  },
  {
    icon: MessageCircle,
    step: "02",
    title: "Complete Intake",
    description:
      "Fill out a brief, confidential form so your psychologist understands your needs before the first session.",
  },
  {
    icon: Video,
    step: "03",
    title: "Attend Your Session",
    description:
      "Meet with your licensed psychologist via secure video call or in-person at one of our partner clinics.",
  },
  {
    icon: RefreshCw,
    step: "04",
    title: "Continue Your Journey",
    description:
      "Work together on a personalized plan. Schedule follow-ups as needed and track your progress over time.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-teal-700 uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How Online Therapy Works in Pakistan
          </h2>
          <p className="text-lg text-slate-600">
            Getting started with online therapy in Pakistan should not be
            complicated. We have made the process simple, private, and
            effective from booking to your first session.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ y: 20 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <div className="bg-slate-50 rounded-2xl p-6 h-full border border-slate-100 hover:border-teal-200 transition-colors">
                <div className="text-4xl font-black text-teal-100 mb-4">
                  {item.step}
                </div>
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm mb-4">
                  <item.icon className="w-5 h-5 text-teal-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-teal-200" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
