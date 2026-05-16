"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Heart,
  Users,
  Baby,
  Briefcase,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Individual Therapy",
    description:
      "One-on-one online therapy sessions with licensed psychologists for anxiety, depression, trauma, and personal growth — available in English or Urdu across Pakistan.",
  },
  {
    icon: Heart,
    title: "Couples & Family Counseling",
    description:
      "Strengthen relationships and resolve conflicts with professional online counseling tailored to Pakistani family dynamics in Karachi, Lahore, Islamabad, and nationwide.",
  },
  {
    icon: Users,
    title: "Group Therapy",
    description:
      "Connect with others facing similar challenges in safe, moderated group sessions focused on healing together.",
  },
  {
    icon: Baby,
    title: "Child & Adolescent Therapy",
    description:
      "Specialized online therapy for children and teens dealing with school stress, behavioral issues, and emotional challenges — available across Pakistan.",
  },
  {
    icon: Briefcase,
    title: "Career & Academic Counseling",
    description:
      "Navigate career transitions, burnout, and academic pressure with structured counseling and coaching.",
  },
  {
    icon: Sparkles,
    title: "Mindfulness & Wellness Coaching",
    description:
      "Learn evidence-based mindfulness techniques and stress management strategies for everyday resilience.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-slate-50 py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-teal-700 uppercase tracking-wider mb-3">
            Personal Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Mental Health Support for Every Stage of Life
          </h2>
          <p className="text-lg text-slate-600">
            Whether you are struggling with anxiety, navigating relationship
            challenges, or simply seeking personal growth, our licensed
            psychologists in Karachi, Lahore, Islamabad, and across Pakistan
            are here to help through private online therapy and counseling.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ y: 30 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full bg-white border-slate-100 hover:shadow-lg hover:border-teal-200 transition-all duration-300 group">
                <CardContent className="p-6 lg:p-8">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
                    <service.icon className="w-6 h-6 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
