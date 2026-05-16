"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Video } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-200/30 rounded-full blur-3xl translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm text-teal-800 mb-6">
              <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
              Now serving all major cities in Pakistan
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Your Mental Health
              <br />
              <span className="text-teal-700">Journey Starts Here</span>
            </h1>

            <p className="text-lg text-slate-600 mb-4 max-w-xl mx-auto lg:mx-0">
              Pakistan&apos;s most trusted online therapy platform for personal
              counseling and corporate mental wellness. Speak with licensed
              psychologists in Karachi, Lahore, Islamabad, and across Pakistan
              in English or Urdu — privately, affordably, and from the comfort
              of your home.
            </p>

            <p className="text-base text-slate-500 mb-8 max-w-xl mx-auto lg:mx-0 italic">
              &quot;آپ کی ذہنی صحت کا سفر یہاں سے شروع ہوتا ہے&quot;
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8 bg-teal-700 hover:bg-teal-800 text-white rounded-full text-base font-medium transition-colors"
              >
                Book a Session <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#corporate"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full text-base border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Corporate Wellness
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-600" />
                <span>100% Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-teal-600" />
                <span>Licensed Psychologists</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-teal-600" />
                <span>Online Sessions</span>
              </div>
            </div>

            {/* Credibility bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {["PMDC Verified", "Data Secure", "HEC Recognized"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {badge}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Hero Image / Visual */}
          <motion.div
            initial={{ x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-100 to-emerald-100 p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className="text-3xl font-bold text-teal-700">2,500+</div>
                    <div className="text-sm text-slate-500">Clients Helped</div>
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className="text-3xl font-bold text-emerald-700">50+</div>
                    <div className="text-sm text-slate-500">Licensed Psychologists</div>
                  </div>
                </div>
                <div className="space-y-4 pt-6">
                  <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className="text-3xl font-bold text-teal-700">15,000+</div>
                    <div className="text-sm text-slate-500">Sessions Conducted</div>
                  </div>
                  <div className="bg-white rounded-2xl p-5 shadow-sm">
                    <div className="text-3xl font-bold text-emerald-700">4.9</div>
                    <div className="text-sm text-slate-500">Average Rating</div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                    <Video className="w-5 h-5 text-teal-700" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Online Therapy</div>
                    <div className="text-xs text-slate-500">Available 7 days a week</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
