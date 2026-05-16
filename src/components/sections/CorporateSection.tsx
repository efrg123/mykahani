"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
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
} from "lucide-react";

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
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
    employees: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.employees) newErrors.employees = "Please select company size";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // TODO: Wire to your backend / CRM / Zapier
    }
  };

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

          {/* Right: Corporate Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm sticky top-24"
          >
            {!submitted ? (
              <>
                <div className="mb-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    Request a Corporate Proposal
                  </h3>
                  <p className="text-sm text-slate-600">
                    Get a customized EAP quote for your organization within 24
                    hours. Free initial consultation included.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="e.g. HBL, Engro, Telenor"
                    />
                    {errors.company && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="you@company.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="03XX-XXXXXXX"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Company Size *
                    </label>
                    <select
                      value={formData.employees}
                      onChange={(e) =>
                        setFormData({ ...formData, employees: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                    >
                      <option value="">Select employee count</option>
                      <option value="1-50">1 - 50 employees</option>
                      <option value="51-200">51 - 200 employees</option>
                      <option value="201-1000">201 - 1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                    {errors.employees && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.employees}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Tell us about your needs (optional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                      className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                      placeholder="What challenges are you facing? Any specific requirements?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-700 hover:bg-teal-800 text-white rounded-full py-3 text-base font-medium transition-colors"
                  >
                    Get My Free Proposal
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    No commitment required. Your information is kept strictly
                    confidential.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Request Received
                </h3>
                <p className="text-slate-600 mb-6">
                  Thank you! Our corporate team will review your requirements
                  and reach out within 24 hours with a customized proposal.
                </p>
                <a
                  href="tel:+923001234567"
                  className="inline-flex items-center justify-center h-10 px-6 bg-teal-700 hover:bg-teal-800 text-white rounded-full text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Now
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
