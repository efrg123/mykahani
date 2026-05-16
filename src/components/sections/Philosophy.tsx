"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Heart, Target } from "lucide-react";

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-teal-900 text-white py-20 lg:py-28 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ x: -30 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold text-teal-300 uppercase tracking-wider mb-4">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              A Holistic Approach to Mental Wellness in Pakistan
            </h2>
            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
              There are many counseling services offering quick fixes and
              temporary relief. MyKahani was built with a vision to reshape how
              Pakistan understands mental health through evidence-based online
              therapy. We believe that difficult emotions are painful, but they
              are not the core problem.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Leaf,
                  title: "Know What Matters Most",
                  desc: "Identify your core values and what gives your life meaning.",
                },
                {
                  icon: Target,
                  title: "Address Internal Obstacles",
                  desc: "Confront the thoughts and patterns that hold you back.",
                },
                {
                  icon: Heart,
                  title: "Live in Line with Your Values",
                  desc: "Build a life that reflects who you truly want to be.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ y: 10 }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-800 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-teal-200 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-teal-800/50 rounded-3xl p-8 lg:p-12 border border-teal-700/50">
              <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-6">
                &ldquo;Mental health is not about feeling less bad. It is about
                living well.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center text-sm font-bold">
                  MK
                </div>
                <div>
                  <div className="font-semibold text-white">MyKahani Team</div>
                  <div className="text-sm text-teal-300">Founding Philosophy</div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white text-teal-900 rounded-xl px-4 py-3 shadow-lg text-sm font-medium"
            >
              100% Confidential
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
