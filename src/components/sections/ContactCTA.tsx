"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                href={whatsappLink(whatsappMessages.booking)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-800 flex items-center justify-center group-hover:bg-teal-700 transition-colors">
                  <MessageCircle className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <div className="text-sm text-teal-300">WhatsApp</div>
                  <div className="font-semibold">0300-1234567</div>
                </div>
              </a>
              <a
                href="tel:+923001234567"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-800 flex items-center justify-center group-hover:bg-teal-700 transition-colors">
                  <Phone className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <div className="text-sm text-teal-300">Call us</div>
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
                href={whatsappLink(whatsappMessages.booking)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-8 bg-white text-teal-900 hover:bg-teal-50 rounded-full text-base font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+923001234567"
                className="inline-flex items-center justify-center h-11 px-8 border border-teal-600 text-white hover:bg-teal-800 rounded-full text-base font-medium transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 text-slate-900 text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-5">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Start on WhatsApp
              </h3>
              <p className="text-slate-600 mb-6 max-w-sm mx-auto">
                The fastest way to reach us. Send a message and our team will
                guide you through booking your first session — usually within
                minutes.
              </p>

              <a
                href={whatsappLink(whatsappMessages.booking)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full h-12 bg-green-600 hover:bg-green-700 text-white rounded-full text-base font-medium transition-colors mb-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Open WhatsApp
              </a>

              <p className="text-xs text-slate-500 mb-6">
                Or save our number and message us anytime: <strong>0300-1234567</strong>
              </p>

              <div className="border-t border-slate-100 pt-6">
                <p className="text-sm font-medium text-slate-900 mb-3">
                  What happens next?
                </p>
                <ul className="space-y-2 text-left max-w-xs mx-auto">
                  {[
                    "We reply within minutes during working hours",
                    "Discuss your concerns and match you with the right psychologist",
                    "Choose a time that works for you — online or in-person",
                    "Receive session confirmation and preparation guidance",
                  ].map((step) => (
                    <li key={step} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
