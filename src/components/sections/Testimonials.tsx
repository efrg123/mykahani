'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Ayesha K.',
    role: 'Software Engineer, Karachi',
    text: 'I was hesitant to seek therapy because of the stigma, but MyKahani made it so easy and private. My psychologist truly understood the cultural pressures I face. It has changed my life.',
    rating: 5,
  },
  {
    name: 'Omar H.',
    role: 'HR Director, Lahore',
    text: 'We partnered with MyKahani for our company EAP. The workshops were engaging, and our employees finally have access to quality mental health support. Highly recommended for any Pakistani business.',
    rating: 5,
  },
  {
    name: 'Fatima R.',
    role: 'University Student, Islamabad',
    text: 'Being able to speak in Urdu during my sessions made all the difference. I felt truly heard for the first time. The online format fits perfectly with my schedule and budget.',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className='bg-teal-50 py-20 lg:py-28' ref={ref}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center max-w-3xl mx-auto mb-16'
        >
          <span className='inline-block text-sm font-semibold text-teal-700 uppercase tracking-wider mb-3'>
            Testimonials
          </span>
          <h2 className='text-3xl sm:text-4xl font-bold text-slate-900 mb-4'>
            Client Reviews: Online Therapy in Pakistan
          </h2>
          <p className='text-lg text-slate-600'>
            Real experiences from Pakistanis in Karachi, Lahore, and Islamabad
            who took the first step toward better mental health with MyKahani.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-6 lg:gap-8'>
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ y: 20 }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className='bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm'
            >
              <div className='flex gap-1 mb-4'>
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className='w-4 h-4 fill-amber-400 text-amber-400'
                  />
                ))}
              </div>
              <p className='text-slate-700 mb-6 leading-relaxed'>
                &ldquo;{review.text}&rdquo;
              </p>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm'>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className='font-semibold text-slate-900 text-sm'>
                    {review.name}
                  </div>
                  <div className='text-xs text-slate-500'>{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
