"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Frown,
  Zap,
  CloudRain,
  UserX,
  BedDouble,
  AlertTriangle,
} from "lucide-react";

const challenges = [
  {
    icon: Frown,
    title: "Anxiety & Depression",
    description:
      "Persistent worry, sadness, or loss of interest that interferes with daily life.",
  },
  {
    icon: Zap,
    title: "Stress & Burnout",
    description:
      "Overwhelming pressure from work, studies, or family responsibilities.",
  },
  {
    icon: CloudRain,
    title: "Trauma & Grief",
    description:
      "Processing difficult experiences, loss, or major life changes.",
  },
  {
    icon: UserX,
    title: "Relationship Issues",
    description:
      "Conflicts with partners, family tension, or social isolation.",
  },
  {
    icon: BedDouble,
    title: "Sleep Disorders",
    description:
      "Insomnia, nightmares, or disrupted sleep patterns affecting wellbeing.",
  },
  {
    icon: AlertTriangle,
    title: "Anger Management",
    description:
      "Difficulty controlling anger that damages relationships and wellbeing.",
  },
];

export default function Challenges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-teal-700 uppercase tracking-wider mb-3">
            Common Challenges
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Common Mental Health Challenges We Treat
          </h2>
          <p className="text-lg text-slate-600">
            Mental health challenges are more common than you think. Our
            licensed psychologists in Karachi, Lahore, Islamabad, and across
            Pakistan have helped thousands of clients overcome anxiety,
            depression, stress, and more through online therapy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, i) => (
            <motion.div
              key={challenge.title}
              initial={{ y: 20 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-teal-50 border border-transparent hover:border-teal-100 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
                <challenge.icon className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {challenge.title}
                </h3>
                <p className="text-sm text-slate-600">{challenge.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
