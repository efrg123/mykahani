"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  Building2,
  Users,
  Presentation,
  Headphones,
  TrendingDown,
  HeartPulse,
  BarChart3,
  Briefcase,
  Phone,
  MessageCircle,
} from "lucide-react";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { track_whatsapp_click } from "@/lib/tracking";

const corporateServices = [
  {
    icon: Building2,
    title: "Employee Assistance Program (EAP)",
    description:
      "Comprehensive mental health support for your employees including counseling, crisis intervention, and referral services.",
  },
  {
    icon: Presentation,
    title: "Workplace Workshops",
    description:
      "Interactive sessions on stress management, resilience building, leadership psychology, and team dynamics.",
  },
  {
    icon: Users,
    title: "Mental Health Training",
    description:
      "Train your managers and HR teams to recognize signs of mental health struggles and respond appropriately.",
  },
  {
    icon: Headphones,
    title: "24/7 Helpline",
    description:
      "Round-the-clock mental health support line for employees facing urgent challenges or crises.",
  },
];

const benefits = [
  "Reduced absenteeism and turnover",
  "Improved employee productivity",
  "Enhanced workplace culture",
  "Compliance with mental health standards",
  "Customized programs for your industry",
  "Detailed impact reporting",
];

const roiStats = [
  {
    icon: TrendingDown,
    value: "40%",
    label: "Average reduction in sick days",
  },
  {
    icon: HeartPulse,
    value: "92%",
    label: "Employee satisfaction score",
  },
  {
    icon: BarChart3,
    value: "3.2x",
    label: "ROI within first 12 months",
  },
];

const industries = [
  "Banking & Finance",
  "Telecom",
  "Healthcare",
  "Technology",
  "Manufacturing",
  "Education",
];

const clientLogos = [
  "Leading Pakistani Bank",
  "Top Telecom Operator",
  "Major Hospital Chain",
  "Global Tech Firm",
  "National Retail Brand",
  "Pharma Leader",
];

export default function CorporateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="corporate" className="bg-slate-50 py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-sm font-semibold text-teal-700 uppercase tracking-wider mb-3">
            Corporate Wellness
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Corporate Mental Health &amp; EAP Services in Pakistan
          </h2>
          <p className="text-lg text-slate-600">
            Forward-thinking Pakistani companies partner with MyKahani to build
            resilient, productive, and mentally healthy workplaces. Our
            Employee Assistance Programs (EAP), workplace workshops, and
            corporate counseling services are trusted by 25+ organizations
            across Karachi, Lahore, and Islamabad.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14"
        >
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
            Trusted by leading organizations across Pakistan
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {clientLogos.map((name) => (
              <div
                key={name}
                className="px-4 py-2 bg-white rounded-lg border border-slate-200 text-sm font-medium text-slate-500 shadow-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ROI Stats */}
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid sm:grid-cols-3 gap-4 mb-14"
        >
          {roiStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 border border-slate-100 text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-5 h-5 text-teal-700" />
              </div>
              <div className="text-3xl font-bold text-teal-700 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Services + Benefits */}
          <div className="space-y-10">
            <div className="grid sm:grid-cols-2 gap-4">
              {corporateServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ y: 20 }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full bg-white border-slate-100 hover:shadow-md hover:border-teal-200 transition-all">
                    <CardContent className="p-5">
                      <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                        <service.icon className="w-5 h-5 text-teal-700" />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-2 text-sm">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Industries We Serve
              </h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <span
                    key={ind}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-medium border border-teal-100"
                  >
                    <Briefcase className="w-3 h-3" />
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-5">
                Why Partner With MyKahani?
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-teal-700" />
                    </div>
                    <span className="text-slate-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Corporate WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm sticky top-24 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Discuss Your Corporate Needs
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Message us on WhatsApp for a customized EAP quote, free
              consultation, or to schedule a demo for your organization.
            </p>

            <a
              href={whatsappLink(whatsappMessages.corporate)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track_whatsapp_click("corporate")}
              className="inline-flex items-center justify-center w-full h-12 bg-green-600 hover:bg-green-700 text-white rounded-full text-base font-medium transition-colors mb-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>

            <a
              href="tel:+923001234567"
              className="inline-flex items-center justify-center w-full h-11 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-full text-sm font-medium transition-colors mb-5"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call 0300-1234567
            </a>

            <div className="text-left border-t border-slate-100 pt-5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                What you will get
              </p>
              <ul className="space-y-2">
                {[
                  "Free workplace mental health assessment",
                  "Customized EAP package quote within hours",
                  "Pilot program option for 30 days",
                  "Dedicated account manager",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
