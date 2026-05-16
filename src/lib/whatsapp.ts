// WhatsApp Business configuration
export const WHATSAPP_NUMBER = "923001234567"; // Pakistan format without +

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

// Pre-written messages for different contexts
export const whatsappMessages = {
  general:
    "Hi MyKahani, I visited your website and would like to know more about your therapy services.",
  booking:
    "Hi MyKahani, I would like to book a therapy session. Please guide me through the process.",
  corporate:
    "Hi MyKahani, I am interested in corporate mental health services / EAP for my organization. Can we discuss a customized package?",
  couples:
    "Hi MyKahani, I am looking for couples counseling. Can you share more details about your approach and availability?",
} as const;
