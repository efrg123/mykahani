import type { Metadata } from "next";
import "./globals.css";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: "MyKahani.pk - Online Therapy & Mental Health Services Pakistan",
  description:
    "Pakistan's leading platform for online therapy, counseling, and corporate mental health. Connect with licensed psychologists in Karachi, Lahore, Islamabad & across Pakistan. Book private sessions in English or Urdu.",
  keywords: [
    "mental health Pakistan",
    "online therapy Pakistan",
    "online counselling Pakistan",
    "psychologist Karachi",
    "psychologist Lahore",
    "psychologist Islamabad",
    "corporate wellness Pakistan",
    "workplace mental health",
    "EAP Pakistan",
    "depression anxiety help",
    "licensed therapist Pakistan",
    "family counseling Pakistan",
    "child psychologist Pakistan",
  ],
  openGraph: {
    title: "MyKahani.pk - Mental Health & Wellness for Pakistan",
    description:
      "Pakistan's trusted platform for personal and corporate mental health. Online therapy, counseling, and workplace wellness.",
    url: "https://mykahani.pk",
    siteName: "MyKahani.pk",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyKahani.pk - Mental Health & Wellness for Pakistan",
    description:
      "Pakistan's trusted platform for personal and corporate mental health.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://mykahani.pk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel */}
        {META_PIXEL_ID && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${META_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        {/* Google Analytics */}
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "MyKahani.pk",
              url: "https://mykahani.pk",
              logo: "https://mykahani.pk/logo.png",
              description:
                "Pakistan's trusted platform for personal and corporate mental health services.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
                addressLocality: "Karachi",
                addressRegion: "Sindh",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-300-1234567",
                contactType: "customer service",
                availableLanguage: ["English", "Urdu"],
              },
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "21:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
