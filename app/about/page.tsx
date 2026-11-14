'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import {
  Award,
  Sparkles,
  Scissors,
  GraduationCap,
  Heart,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

export default function AboutPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-amber-400 selection:text-black">
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
      />

      <main className="flex-1 pt-28 pb-20">
        {/* Hero */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs uppercase tracking-wider font-semibold">
            <Award className="w-4 h-4" />
            Half a Century of Australian Hair Excellence • Est. 1974
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white leading-tight">
            Our Story & <span className="italic gold-gradient-text">Creative Heritage</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            For over 50 years, Clip Joint has stood as the benchmark for creative hairdressing, barbering, and technical education in South Australia.
          </p>
        </section>

        {/* Heritage Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative h-[480px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/founders.jpg"
                  alt="Atilio & Dusa - Founders of Clip Joint"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                    Pioneers of Adelaide Style
                  </span>
                  <h3 className="text-2xl font-serif text-white">Atilio & Dusa</h3>
                  <p className="text-xs text-zinc-300 mt-1">
                    Founders and visionary directors behind Clip Joint Salons and Academy.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                A 50-Year Legacy
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-white leading-tight">
                From a Single Adelaide Chair to <br />
                <span className="italic gold-gradient-text">An International Institution</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Founded in Adelaide in 1974, Clip Joint was born with an uncompromising vision: that hairdressing is not merely a service, but a high-discipline design craft requiring structural geometry, creative bravery, and deep client empathy.
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Over five decades, Clip Joint expanded from flagship salons in Adelaide’s premier districts into one of the nation’s most esteemed Registered Training Organisations (RTO 0186, CRICOS 02103K), educating thousands of qualified stylists who today helm leading salons across Australia, Europe, and Asia.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-2xl font-serif text-amber-400 font-bold block">1974</span>
                  <span className="text-xs text-zinc-300 font-medium">Established in Adelaide</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-2xl font-serif text-amber-400 font-bold block">30+ Yrs</span>
                  <span className="text-xs text-zinc-300 font-medium">Educational Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Sassoon Connection */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs uppercase tracking-wider font-semibold">
                <Award className="w-4 h-4" />
                Exclusive Partnership
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-light text-white leading-tight">
                The Sassoon Academy Connection: <br />
                <span className="italic gold-gradient-text">Only at Clip Joint</span>
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Sassoon is universally acclaimed for revolutionizing 20th-century hair architecture through geometric precision. Clip Joint Education is proud to be the <strong className="text-white">only Sassoon Academy | School Connection Member School in Australia</strong>.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Certified Educators:</strong>
                    <p className="text-zinc-400">Our instructors undergo direct intensive training with Sassoon global creative teams.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Exclusive Curriculum & Resources:</strong>
                    <p className="text-zinc-400">Students access proprietary Sassoon ABC cutting manuals, video archives, and diagrammatic theory.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Global Career Advantage:</strong>
                    <p className="text-zinc-400">A Sassoon credential provides unprecedented employability in high-end global fashion capitals.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/hairdressing-craft.jpg"
                  alt="Sassoon Precision Cutting at Clip Joint"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* High Fashion Runway Pedigree */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Runway & Campaign Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Creative Direction for Australia’s Fashion Leaders
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Our educators and stylists actively direct editorial shoots and runway hair for leading designers, including Paolo Sebastian and Adelaide Fashion Week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 group shadow-xl">
              <Image
                src="/images/adelaide-fashion-week.jpg"
                alt="Adelaide Fashion Week Hair Direction"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white font-serif text-xl">Adelaide Fashion Week: Icons Only</h4>
                <p className="text-xs text-zinc-300 mt-1">Official styling partner for South Australia’s premier runway.</p>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 group shadow-xl">
              <Image
                src="/images/paolo-sebastian.jpg"
                alt="Paolo Sebastian Couture Hair Direction"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white font-serif text-xl">Paolo Sebastian Campaign</h4>
                <p className="text-xs text-zinc-300 mt-1">Haute couture hair direction styled by Academy Educator Eliza Collier.</p>
              </div>
            </div>
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

