'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard, { CourseData } from '@/components/CourseCard';
import SalonServiceTable from '@/components/SalonServiceTable';
import BookingModal from '@/components/BookingModal';
import PitchAuditModal from '@/components/PitchAuditModal';
import {
  GraduationCap,
  Scissors,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
  Phone,
  Star,
  Zap,
  ExternalLink,
} from 'lucide-react';

const featuredCourses: CourseData[] = [
  {
    id: 'cert3',
    title: 'Certificate III in Hairdressing',
    code: 'SHB30416 / SHB30418',
    category: 'Full Qualification • Apprenticeship or Institutional',
    duration: '1 - 3 Years Flexible',
    studyMode: 'Adelaide CBD Campus + In-Salon',
    image: '/images/industry-education.jpg',
    description:
      "Australia's benchmark qualification. Combines rigorous government-accredited competencies with exclusive Sassoon ABC cutting and coloring methodology.",
    highlights: [
      'Exclusive Sassoon Academy curriculum in Australia',
      'Hands-on experience in Adelaide CBD live training salon',
      'Endorsed by Australia’s top luxury salons and stylists',
      'Domestic & CRICOS International student eligibility',
    ],
    intakes: 'January, April, July & October 2026',
    badge: 'Flagship RTO Course',
  },
  {
    id: 'cert2',
    title: 'Certificate II in Salon Assistant',
    code: 'SHB20216',
    category: 'Entry Level Pathway • VET in Schools',
    duration: '6 Months',
    studyMode: 'Blended / School Compatible',
    image: '/images/school-students.jpg',
    description:
      'The ideal launchpad for secondary school students and beginners looking to gain practical salon skills, client communication, and baseline styling.',
    highlights: [
      'Credits towards SACE (South Australia Certificate of Education)',
      'Basic blow-drying, basin rituals, and salon prep',
      'Direct pathway into Certificate III apprenticeship',
    ],
    intakes: 'Term 1 & Term 3 Intakes',
    badge: 'High School Pathway',
  },
  {
    id: 'masterclasses',
    title: 'Precision Masterclass Series',
    category: 'Advanced Stylist Professional Development',
    duration: '1 - 3 Day Immersions',
    studyMode: 'Intensive Hands-On',
    image: '/images/hairdressing-craft.jpg',
    description:
      'Curated for qualified hairdressers and senior stylists eager to sharpen geometric precision, modern creative coloring, and runway speed.',
    highlights: [
      'Delivered by Clip Joint Creative Directors',
      'Exclusive Sassoon ABC geometry dissection',
      'Live model execution and commercial salon translation',
    ],
    intakes: 'Monthly Masterclass Sessions',
    badge: 'Industry Masterclass',
  },
];

export default function HomePage() {
  const [activePortal, setActivePortal] = useState<'all' | 'education' | 'salons'>('all');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'education' | 'salon'>('education');
  const [pitchOpen, setPitchOpen] = useState(false);

  const handleOpenBooking = (type: 'education' | 'salon' = 'education') => {
    setBookingType(type);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Top Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenPitch={() => setPitchOpen(true)}
      />

      {/* Floating Pitch Badge (For pitching client) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setPitchOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold text-xs uppercase tracking-wider shadow-2xl shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all border border-amber-300"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute -top-1 -right-1" />
          <ShieldCheck className="w-4 h-4 text-black" />
          <span>Pitch Audit: 100/100 SEO & Security</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Image with Layered Gradients */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-salon.jpg"
              alt="Clip Joint Adelaide luxury styling"
              fill
              priority
              className="object-cover object-center filter brightness-[0.35] scale-105 animate-fade-in"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-zinc-200">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="font-semibold uppercase tracking-wider text-amber-300">
                RTO Code: 0186 • CRICOS: 02103K
              </span>
              <span className="text-zinc-400">|</span>
              <span className="text-zinc-300 italic font-serif">
                Exclusive Sassoon School Connection in Australia
              </span>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white leading-[1.1]">
                Private Education <br />
                <span className="italic font-normal gold-gradient-text">for Creatives.</span>
                <br />
                50 Years of Style.
              </h1>
              <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                Adelaide’s premier Registered Training Organisation and luxury salons. From nationally accredited hairdressing qualifications to high-fashion editorial styling for Adelaide Fashion Week.
              </p>
            </div>

            {/* Portal Switcher Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setActivePortal('all')}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activePortal === 'all'
                    ? 'bg-white text-black shadow-lg shadow-white/10'
                    : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                Complete Ecosystem
              </button>
              <button
                onClick={() => setActivePortal('education')}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activePortal === 'education'
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                    : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                Clip Joint Education (RTO)
              </button>
              <button
                onClick={() => setActivePortal('salons')}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activePortal === 'salons'
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                    : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                <Scissors className="w-4 h-4" />
                Clip Joint Salons
              </button>
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => handleOpenBooking('education')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-black font-semibold text-xs uppercase tracking-wider shadow-xl shadow-amber-400/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                Explore Courses & Enrol
              </button>

              <button
                onClick={() => handleOpenBooking('salon')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 backdrop-blur transition-all flex items-center justify-center gap-2"
              >
                <Scissors className="w-4 h-4 text-amber-400" />
                Book Salon Appointment
              </button>

              <Link
                href="/student-salon"
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-semibold text-xs uppercase tracking-wider border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Student Salon (From $15)
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-white/10 text-left">
              <div className="p-3">
                <span className="text-2xl font-serif text-white font-semibold block">50+</span>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider">Years of Style</span>
              </div>
              <div className="p-3">
                <span className="text-2xl font-serif text-amber-400 font-semibold block">#1</span>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider">Sassoon Partner AU</span>
              </div>
              <div className="p-3">
                <span className="text-2xl font-serif text-white font-semibold block">0186</span>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider">RTO Registered</span>
              </div>
              <div className="p-3">
                <span className="text-2xl font-serif text-emerald-400 font-semibold block">100%</span>
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider">Industry Endorsed</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: SASSOON EXCLUSIVITY & CREDENTIALS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-[#0e0e12]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative h-[480px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/founders.jpg"
                  alt="Clip Joint Founders Atilio & Dusa"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Heritage & Leadership
                  </span>
                  <h4 className="text-white font-serif text-xl font-medium mt-1">
                    Atilio & Dusa • Founders of Clip Joint
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1">
                    Celebrating half a century of pioneering precision hairdressing in South Australia.
                  </p>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -top-4 -right-4 bg-amber-400 text-black px-4 py-2 rounded-xl font-serif font-bold text-xs shadow-xl uppercase tracking-wider border border-amber-300">
                Est. 1974 Adelaide
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs uppercase tracking-wider font-semibold">
                <Award className="w-4 h-4" />
                World-Class Pedagogical Standard
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-light text-white leading-tight">
                Australia&apos;s Only <span className="italic gold-gradient-text">Sassoon Academy</span> Connection
              </h2>

              <p className="text-zinc-300 text-sm leading-relaxed">
                Sassoon has defined modern hair design for more than six decades. Clip Joint Education is honored to be the <strong className="text-white">only Registered Training Organisation in Australia</strong> granted membership to the prestigious Sassoon Academy | School Connection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <h4 className="text-white font-semibold text-sm">Sassoon ABC Methodology</h4>
                  <p className="text-xs text-zinc-400">
                    Our educators are exclusively certified in the Sassoon ABC geometric cutting system, imparting timeless mastery to every apprentice.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <h4 className="text-white font-semibold text-sm">International Credentials</h4>
                  <p className="text-xs text-zinc-400">
                    Graduates receive credentials recognized by high-end salons in London, New York, Tokyo, Melbourne, and Sydney.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
                >
                  Learn About The Sassoon Connection
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://www.myskills.gov.au/RegisteredTrainers/Details?rtocode=0186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-amber-300 transition-colors flex items-center gap-1.5 underline underline-offset-4"
                >
                  Verify Australian RTO 0186 on MySkills.gov.au
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: ACCREDITED COURSES (EDUCATION) */}
        {(activePortal === 'all' || activePortal === 'education') && (
          <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Registered Training Organisation 0186 • CRICOS 02103K
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-light text-white">
                  Accredited Pathways & <span className="italic gold-gradient-text">Masterclasses</span>
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                  Whether you are starting an apprenticeship, selecting your Year 11-12 VET focus, or advancing your craft with precision masterclasses, your journey starts here.
                </p>
              </div>

              <Link
                href="/courses"
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 transition-colors self-start md:self-auto flex items-center gap-2"
              >
                View Full Course Directory
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onSelect={(title) => {
                    handleOpenBooking('education');
                  }}
                />
              ))}
            </div>

            {/* Quick Enrolment Advisory Banner */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-amber-950/30 to-zinc-900 border border-amber-400/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                  Speak Directly With An Adelaide Educator
                </span>
                <h3 className="text-xl font-serif text-white font-medium">
                  Unsure which qualification suits your career goals?
                </h3>
                <p className="text-xs text-zinc-400 max-w-xl">
                  Book a confidential, obligation-free course consultation with our Admissions Advisors. We can assess your previous credits, SACE compatibility, and apprenticeship employer placement.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="tel:+61882235600"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  Call (08) 8223 5600
                </a>
                <button
                  onClick={() => handleOpenBooking('education')}
                  className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Book Course Consultation
                </button>
              </div>
            </div>
          </section>
        )}

        {/* SECTION: STUDENT TRAINING SALON (Real Public Clinic) */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950/80 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs uppercase tracking-wider font-semibold">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Adelaide CBD Student Clinic
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-light text-white leading-tight">
                Authentic In-Salon Training. <br />
                <span className="italic gold-gradient-text">Exceptional Value for Clients.</span>
              </h2>

              <p className="text-sm text-zinc-300 leading-relaxed">
                At our central Adelaide CBD campus on Pirie Street, our student training salon operates as a live commercial salon open to the public. All services are performed by academy students under the close, hands-on supervision of master educators.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xl font-bold font-mono text-emerald-400 block">$25</span>
                  <span className="text-zinc-300 font-medium">Cut & Blowdry</span>
                  <span className="text-[10px] text-zinc-500 block mt-0.5">Under educator guidance</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xl font-bold font-mono text-emerald-400 block">$15 - $20</span>
                  <span className="text-zinc-300 font-medium">Mens & Barbering</span>
                  <span className="text-[10px] text-zinc-500 block mt-0.5">Fade, taper or classic</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xl font-bold font-mono text-emerald-400 block">$65+</span>
                  <span className="text-zinc-300 font-medium">Full Colour / Foils</span>
                  <span className="text-[10px] text-zinc-500 block mt-0.5">Premium formulations</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  href="/student-salon"
                  className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  View Complete Service Guide & Book
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-zinc-400">
                  📍 Level 1, 86 Pirie St, Adelaide SA
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/melbourne-st.jpg"
                  alt="Student Training Salon at Clip Joint"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider block">
                      Live Student Salon
                    </span>
                    <h4 className="text-white font-serif text-lg">Pirie Street CBD Campus</h4>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur border border-white/10 text-xs text-zinc-200">
                    Tue - Fri Appointments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CLIP JOINT SALONS (Luxury Flagships & Menu) */}
        {(activePortal === 'all' || activePortal === 'salons') && (
          <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center justify-center gap-2">
                <Scissors className="w-4 h-4" />
                Clip Joint Salons • Celebrating 50 Years
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-white">
                Invest in Your Personal Style with <span className="italic gold-gradient-text">Confidence</span>
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                An experience extending far beyond the appointment chair. With flagships in Melbourne Street North Adelaide and Burnside Village, Clip Joint Salons delivers technical precision and bespoke luxury.
              </p>
            </div>

            {/* Salons Location Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Melbourne Street */}
              <div className="rounded-2xl bg-[#121216] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-amber-400/40 transition-all">
                <div className="relative h-64 w-full bg-zinc-900">
                  <Image
                    src="/images/melbourne-st.jpg"
                    alt="Melbourne Street Salon North Adelaide"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-amber-300 border border-amber-400/30 uppercase tracking-wider">
                    Flagship Studio
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif text-white font-medium">
                      Melbourne Street Salon
                    </h3>
                    <p className="text-xs text-zinc-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      167 Melbourne Street, North Adelaide SA 5006
                    </p>
                    <p className="text-xs text-zinc-400 pt-1 leading-relaxed">
                      Located in Adelaide’s vibrant heritage dining and boutique strip, our Melbourne Street salon offers sanctuary, precision cutting, and master colourists.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <a
                      href="tel:+61882674044"
                      className="text-xs text-amber-300 hover:underline flex items-center gap-1.5 font-medium"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      (08) 8267 4044
                    </a>

                    <button
                      onClick={() => handleOpenBooking('salon')}
                      className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      Book Melbourne St
                    </button>
                  </div>
                </div>
              </div>

              {/* Burnside Village */}
              <div className="rounded-2xl bg-[#121216] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-amber-400/40 transition-all">
                <div className="relative h-64 w-full bg-zinc-900">
                  <Image
                    src="/images/salons-header.jpg"
                    alt="Burnside Village Salon Adelaide"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-amber-300 border border-amber-400/30 uppercase tracking-wider">
                    Luxury Precinct
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif text-white font-medium">
                      Burnside Village Salon
                    </h3>
                    <p className="text-xs text-zinc-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      Shop 53, Burnside Village, 447 Portrush Rd, Glenside SA
                    </p>
                    <p className="text-xs text-zinc-400 pt-1 leading-relaxed">
                      Nestled inside Adelaide’s premier luxury fashion retail centre, Burnside Village brings effortless high-end styling, blow-dry rituals, and seasonal transformations.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <a
                      href="tel:+61883799421"
                      className="text-xs text-amber-300 hover:underline flex items-center gap-1.5 font-medium"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      (08) 8379 9421
                    </a>

                    <button
                      onClick={() => handleOpenBooking('salon')}
                      className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      Book Burnside
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Service & Price Table */}
            <div className="pt-8 space-y-8">
              <div className="text-center space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  Signature Services & Transparent Pricing
                </h3>
                <p className="text-xs text-zinc-400 max-w-xl mx-auto">
                  Every service includes our signature consultation, bespoke scalp treatment ritual, and precision styling.
                </p>
              </div>

              <SalonServiceTable
                onBookService={(name) => {
                  handleOpenBooking('salon');
                }}
              />
            </div>
          </section>
        )}

        {/* SECTION: EDITORIAL & ADELAIDE FASHION WEEK BTS */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0b0e] border-t border-white/5">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Runway & Editorial Pedigree
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-light text-white">
                  From Academy to <span className="italic gold-gradient-text">Couture Runway</span>
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
                  Clip Joint educators and stylists lead hair direction for prestigious runway showcases, high fashion campaigns, and international couture labels.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AFW */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group h-96">
                <Image
                  src="/images/adelaide-fashion-week.jpg"
                  alt="Adelaide Fashion Week Hair Direction by Clip Joint"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Official Styling Partners
                  </span>
                  <h3 className="text-2xl font-serif text-white font-medium">
                    Adelaide Fashion Week: Icons Only
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Behind-the-scenes mastery crafting iconic hair silhouettes for South Australia’s most celebrated runway event.
                  </p>
                </div>
              </div>

              {/* Paolo Sebastian */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group h-96">
                <Image
                  src="/images/paolo-sebastian.jpg"
                  alt="Paolo Sebastian Campaign Hair by Clip Joint"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Couture Collaboration
                  </span>
                  <h3 className="text-2xl font-serif text-white font-medium">
                    Paolo Sebastian BTS Campaign
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Academy Educator Eliza Collier styling ethereal campaign hair for world-renowned Adelaide couture designer Paolo Sebastian.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: BOTTOM INTAKE & BOOKING CONVERSION BAR */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-gradient-to-b from-zinc-950 to-black text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Join Australia&apos;s Next Generation of Stylists
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif text-white">
              Ready to Shape the Future of Hair Design?
            </h2>

            <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Applications are now open for 2026 course intakes at our Adelaide CBD Campus (RTO 0186, CRICOS 02103K). Reserve your place or book a VIP salon consultation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => handleOpenBooking('education')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-xs uppercase tracking-wider shadow-xl shadow-amber-400/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                Apply for Course Enrolment
              </button>

              <button
                onClick={() => handleOpenBooking('salon')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Scissors className="w-4 h-4 text-amber-400" />
                Book Salon Appointment
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultType={bookingType}
      />

      <PitchAuditModal
        isOpen={pitchOpen}
        onClose={() => setPitchOpen(false)}
      />
    </div>
  );
}

