// Meta Pixel event tracking
export function fbq(
  event: "track" | "trackCustom",
  name: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    fbq?: (
      event: string,
      name: string,
      params?: Record<string, unknown>
    ) => void;
  };
  if (w.fbq) {
    w.fbq(event, name, params);
  }
}

// Google Ads conversion tracking
export function gtag_report_conversion(url?: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (
      cmd: string,
      targetId: string,
      config: { event_category: string; value?: number; currency?: string }
    ) => void;
  };
  if (w.gtag) {
    w.gtag("event", "conversion", {
      event_category: "conversion",
    });
  }
  if (url) {
    setTimeout(() => {
      window.location.href = url;
    }, 200);
  }
}

// GA4 custom events
export function gtag_event(
  name: string,
  params?: Record<string, unknown>
) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (cmd: string, name: string, params?: Record<string, unknown>) => void;
  };
  if (w.gtag) {
    w.gtag("event", name, params);
  }
}

// WhatsApp click tracking helper
export function track_whatsapp_click(context: "general" | "booking" | "corporate" | "nav" | "sticky" | "contact") {
  fbq("track", "Contact", { content_name: `whatsapp_${context}` });
  fbq("track", "Lead", { content_category: `whatsapp_${context}` });
  gtag_event("whatsapp_click", { context });
  gtag_report_conversion();
}

// Call click tracking helper
export function track_call_click(context: string) {
  fbq("track", "Contact", { content_name: `call_${context}` });
  gtag_event("call_click", { context });
}
