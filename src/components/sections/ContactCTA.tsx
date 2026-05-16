"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "Individual Therapy",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // TODO: Wire to backend / CRM / Zapier / WhatsApp API
    }
  };

  return (
    <section id="contact" className="bg-teal-900 text-white py-20 lg:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ x: -30 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold text-teal-300 uppercase tracking-wider mb-4">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Book a Session With a Licensed Psychologist in Pakistan
            </h2>
            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
              Whether you are facing anxiety, depression, or simply feeling
              overwhelmed, you do not have to do it alone. Our licensed
              psychologists in Karachi, Lahore, Islamabad, and across Pakistan
              are here to walk alongside you — every step of the way.
            </p>

            <div className="space-y-4 mb-10">
              <a
                href="tel:+923001234567"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-800 flex items-center justify-center group-hover:bg-teal-700 transition-colors">
                  <Phone className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <div className="text-sm text-teal-300">Call or WhatsApp</div>
                  <div className="font-semibold">0300-1234567</div>
                </div>
              </a>
              <a
                href="mailto:hello@mykahani.pk"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-800 flex items-center justify-center group-hover:bg-teal-700 transition-colors">
                  <Mail className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <div className="text-sm text-teal-300">Email us</div>
                  <div className="font-semibold">hello@mykahani.pk</div>
                </div>
              </a>
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
              <a
                href="tel:+923001234567"
                className="inline-flex items-center justify-center h-11 px-8 bg-white text-teal-900 hover:bg-teal-50 rounded-full text-base font-medium transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:hello@mykahani.pk"
                className="inline-flex items-center justify-center h-11 px-8 border border-teal-600 text-white hover:bg-teal-800 rounded-full text-base font-medium transition-colors"
              >
                Send an Inquiry
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 text-slate-900">
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-bold mb-2">
                    Request a Call Back
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Fill out the form below and our team will reach out within
                    24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Your name"
                        />
                        {errors.firstName && (
                          <p className="text-xs text-red-500 mt-1">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="Your last name"
                        />
                        {errors.lastName && (
                          <p className="text-xs text-red-500 mt-1">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="you@example.com"
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
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="03XX-XXXXXXX"
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        I am interested in
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            interest: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                      >
                        <option>Individual Therapy</option>
                        <option>Couples Counseling</option>
                        <option>Corporate Wellness</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-teal-700 hover:bg-teal-800 text-white rounded-full py-3 text-base font-medium transition-colors"
                    >
                      Request Call Back
                    </button>
                    <p className="text-xs text-slate-500 text-center">
                      Your information is kept strictly confidential.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-7 h-7 text-teal-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Request Sent
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Thank you! Our team will call you within 24 hours to book
                    your session.
                  </p>
                  <a
                    href="tel:+923001234567"
                    className="inline-flex items-center justify-center h-11 px-8 bg-teal-700 hover:bg-teal-800 text-white rounded-full text-base font-medium transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
