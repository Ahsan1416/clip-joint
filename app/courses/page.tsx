'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard, { CourseData } from '@/components/CourseCard';
import BookingModal from '@/components/BookingModal';
import {
  GraduationCap,
  Award,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Calendar,
  Users,
  Building,
  Phone,
  BookOpen,
} from 'lucide-react';

const allCourses: CourseData[] = [
  {
    id: 'cert3',
    title: 'SHB30416 Certificate III in Hairdressing',
    code: 'SHB30416 / SHB30418',
    category: 'Accredited Qualification • Full-Time / Apprenticeship',
    duration: '1 - 3 Years Flexible',
    studyMode: 'Adelaide CBD Campus (86 Pirie St)',
    image: '/images/industry-education.jpg',
    description:
      'The premier trade qualification in Australian hairdressing. Integrates standard training package competencies with the exclusive Sassoon ABC geometric cutting and colour methodology.',
    highlights: [
      'Precision cutting: One Length, Graduation, and Layering geometry',
      'Advanced formulation, grey blending, foils, balayage & glossing',
      'Extensive hands-on practice in live client training salon',
      'CRICOS registered (02103K) for international students',
    ],
    intakes: 'January, April, July & October 2026',
    badge: 'National Trade Standard',
  },
  {
    id: 'cert2',
    title: 'SHB20216 Certificate II in Salon Assistant',
    code: 'SHB20216',
    category: 'VET in Schools & Foundation Pathway',
    duration: '6 Months (Part-Time / Term Based)',
    studyMode: 'Adelaide CBD or Marcellin Tech Campus',
    image: '/images/school-students.jpg',
    description:
      'Engineered for high school students in Years 10, 11, and 12 looking to gain credit towards their SACE while learning essential salon operations and basin care.',
    highlights: [
      'Salon reception, client consultation, basin shampoo rituals',
      'Thermal styling, blowdrying, and brush mechanics',
      'Direct credit pathway into Certificate III apprenticeship',
      'VET in Schools funding available for South Australia students',
    ],
    intakes: 'Term 1 & Term 3 Intakes',
    badge: 'SACE Recognized',
  },
  {
    id: 'barbering',
    title: 'Precision Barbering & Men\'s Grooming',
    category: 'Specialist Barbering Stream',
    duration: '12 - 16 Weeks Intensive',
    studyMode: 'Evening & Day Intensives',
    image: '/images/hairdressing-craft.jpg',
    description:
      'Master modern fade transitions, skin fades, taper fades, beard sculpting, hot towel service, and classic British scissor-over-comb architecture.',
    highlights: [
      'Clipper ergonomics, zero-gap calibration & fade mechanics',
      'Traditional razor shaving and beard shaping rituals',
      'Fast-track employment in boutique barbershops across SA',
    ],
    intakes: 'Monthly Intakes 2026',
    badge: 'High Demand',
  },
  {
    id: 'masterclasses',
    title: 'Sassoon ABC Precision Masterclasses',
    category: 'Industry Professional Development',
    duration: '1 to 3 Days Immersive',
    studyMode: 'Hands-on Workshop + Model Sessions',
    image: '/images/salons-header.jpg',
    description:
      'Designed exclusively for qualified hairdressers, salon owners, and emerging seniors wanting to elevate precision cut architecture and runway editorial speed.',
    highlights: [
      'Led by Clip Joint Creative Directors & Sassoon Certified Educators',
      'Live model demonstrations and tailored hands-on cutting',
      'Personalized critique, technique diagnosis, and photographic capture',
    ],
    intakes: 'Quarterly Dates Throughout 2026',
    badge: 'Educator Led',
  },
  {
    id: 'holiday-workshops',
    title: 'School Holiday Hair & Makeup Workshops',
    category: 'Teens & Creative Exploration (Ages 14-18)',
    duration: '2 Days Immersive',
    studyMode: 'School Holiday Dates',
    image: '/images/school-students.jpg',
    description:
      'A fun, high-energy two-day introduction to runway hair styling, braided updos, creative makeup artistry, and salon industry careers.',
    highlights: [
      'Interactive hands-on mannequin work and photoshoot styling',
      'Introduction to session styling and editorial moodboards',
      'Certificate of participation and graduation showcase',
    ],
    intakes: 'April, July & October School Holidays',
    badge: 'Teen Immersive',
  },
  {
    id: 'international',
    title: 'International Student Hairdressing Program',
    code: 'CRICOS: 02103K',
    category: 'CRICOS Registered Study in Australia',
    duration: 'Up to 2 Years',
    studyMode: 'Full-Time On Campus (Adelaide, SA)',
    image: '/images/international-students.jpg',
    description:
      'Study world-renowned hairdressing in Adelaide—one of the world’s most livable cities. Combines nationally accredited qualifications with Australian work placement.',
    highlights: [
      'English language & vocational support',
      'Authentic Australian salon client experience',
      'Global recognition through Sassoon Academy affiliation',
    ],
    intakes: 'February & July Intakes',
    badge: 'CRICOS 02103K',
  },
];

const faqs = [
  {
    q: 'What makes Clip Joint Education different from TAFE or other colleges?',
    a: 'Clip Joint Education is Australia’s only Sassoon Academy | School Connection member. This means our students receive exclusive training in the world-famous Sassoon ABC cutting philosophy. In addition, our boutique campus features a live student training salon on Pirie St, ensuring you work on real clients throughout your training.',
  },
  {
    q: 'Can I study hairdressing while still in high school (VET in Schools)?',
    a: 'Yes! We offer the Certificate II in Salon Assistant (SHB20216) designed specifically for Year 10, 11, and 12 students. It earns SACE credits while giving you hands-on trade skills.',
  },
  {
    q: 'Are your courses nationally accredited in Australia?',
    a: 'Yes. Clip Joint Education is a Registered Training Organisation (RTO Code 0186) under ASQA (Australian Skills Quality Authority) and a CRICOS Provider (02103K). All vocational certificates are recognized across Australia and internationally.',
  },
  {
    q: 'How do I enrol or arrange an interview?',
    a: 'You can submit an enquiry via our online booking form or call our admissions team directly on (08) 8223 5600. We will book a campus tour and consultation to review your goals and start dates.',
  },
];

export default function CoursesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('SHB30416 - Certificate III in Hairdressing');

  const handleApply = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-amber-400 selection:text-black">
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
      />

      <main className="flex-1 pt-28 pb-20">
        {/* Header Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs uppercase tracking-wider font-semibold">
            <GraduationCap className="w-4 h-4" />
            RTO 0186 • CRICOS 02103K • ASQA Accredited
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white leading-tight">
            Accredited Courses & <span className="italic gold-gradient-text">Creative Pathways</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Gain an internationally recognized qualification powered by Sassoon methodology. Explore full-time certificates, apprenticeships, school programs, and masterclasses at our Adelaide CBD campus.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Enrolment Consultation
            </button>
            <a
              href="tel:+61882235600"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call (08) 8223 5600
            </a>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelect={handleApply}
              />
            ))}
          </div>
        </section>

        {/* Campuses & Learning Environment */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                <Building className="w-4 h-4" />
                World-Class Adelaide Campuses
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-white">
                Learn in a Authentic <br />
                <span className="italic gold-gradient-text">Commercial Salon Setting</span>
              </h2>
              <p className="text-zinc-300 text-sm leading-relaxed">
                The flagship Clip Joint Education Campus is situated in the heart of Adelaide CBD on Pirie Street, minutes from Rundle Mall. The modern academy features dedicated lecture theatres, state-of-the-art styling basins, and our fully operational student training salon.
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Our secondary campus at Marcellin Technical College provides dedicated delivery packages for high school students across Adelaide’s southern suburbs.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-amber-400 font-bold">1</span>
                  <div>
                    <strong className="text-white">Central Adelaide CBD Campus:</strong>
                    <p className="text-zinc-400">Level 1, 86 Pirie Street, Adelaide SA 5000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-amber-400 font-bold">2</span>
                  <div>
                    <strong className="text-white">Marcellin Technical Campus:</strong>
                    <p className="text-zinc-400">Selected VET in School training packages (Southern Adelaide)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/industry-education.jpg"
                alt="Clip Joint Adelaide Campus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-16 border-t border-white/10 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-serif text-white">Admissions & Enrolment FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-5 rounded-xl bg-[#121216] border border-white/10 space-y-2">
                <h4 className="text-white font-medium text-sm flex items-start gap-2">
                  <span className="text-amber-400 font-bold">Q:</span>
                  {faq.q}
                </h4>
                <p className="text-xs text-zinc-400 pl-5 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultType="education"
      />
    </div>
  );
}

