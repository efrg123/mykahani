"use client";

import { useState, useEffect } from "react";
import { Phone, X, MessageCircle } from "lucide-react";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { track_whatsapp_click } from "@/lib/tracking";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-slate-500 truncate">
            Speak with a licensed psychologist today
          </p>
          <p className="text-sm font-semibold text-slate-900 truncate">
            0300-1234567
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(whatsappMessages.booking)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track_whatsapp_click("sticky")}
            className="inline-flex items-center justify-center h-10 px-4 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-medium transition-colors"
          >
            <MessageCircle className="w-4 h-4 mr-1.5" />
            WhatsApp
          </a>
          <a
            href="tel:+923001234567"
            className="inline-flex items-center justify-center h-10 px-4 bg-teal-700 hover:bg-teal-800 text-white rounded-full text-sm font-medium transition-colors"
          >
            <Phone className="w-4 h-4 mr-1.5" />
            Call
          </a>
        </div>
        <button
          onClick={() => {
            setDismissed(true);
            setVisible(false);
          }}
          className="p-2 text-slate-400 hover:text-slate-600"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
