"use client";

import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Corporate", href: "#corporate" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">MK</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900 leading-tight">
                MyKahani
              </span>
              <span className="text-[10px] text-teal-600 font-medium leading-tight tracking-wide">
                MENTAL HEALTH
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+923001234567"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0300-1234567</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-9 px-6 bg-teal-700 hover:bg-teal-800 text-white rounded-full text-sm font-medium transition-colors"
            >
              Book Session
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-slate-100 transition-colors" aria-label="Open menu">
              <Menu className="w-5 h-5 text-slate-700" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col h-full pt-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">MK</span>
                    </div>
                    <span className="text-lg font-bold text-slate-900">
                      MyKahani
                    </span>
                  </div>
                </div>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-3 py-3 text-base font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto pb-8 flex flex-col gap-3">
                  <a
                    href="tel:+923001234567"
                    className="flex items-center justify-center gap-2 text-sm font-medium text-slate-600"
                  >
                    <Phone className="w-4 h-4" />
                    <span>0300-1234567</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center w-full h-9 bg-teal-700 hover:bg-teal-800 text-white rounded-full text-sm font-medium transition-colors"
                  >
                    Book Session
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
