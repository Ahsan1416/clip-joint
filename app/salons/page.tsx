'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SalonServiceTable from '@/components/SalonServiceTable';
import BookingModal from '@/components/BookingModal';
import PitchAuditModal from '@/components/PitchAuditModal';
import {
  Scissors,
  MapPin,
  Phone,
  Clock,
  Sparkles,
  Award,
  Calendar,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function SalonsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [pitchOpen, setPitchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-amber-400 selection:text-black">
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
        onOpenPitch={() => setPitchOpen(true)}
      />

      <main className="flex-1 pt-28 pb-20">
        {/* Hero Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs uppercase tracking-wider font-semibold">
            <Scissors className="w-4 h-4" />
            Adelaide Luxury Salons • Celebrating 50 Years of Style
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white leading-tight">
            Clip Joint <span className="italic gold-gradient-text">Salons</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Delivering technical excellence, personalized consultations, and timeless hair architecture across Adelaide’s premier shopping precincts.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs uppercase tracking-wider shadow-lg shadow-amber-400/20 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book An Appointment
            </button>
            <a
              href="#locations"
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              View Locations & Hours
            </a>
          </div>
        </section>

        {/* Flagship Salon Locations */}
        <section id="locations" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Where to Find Us
            </span>
            <h2 className="text-3xl font-serif text-white">Our Salon Locations</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Melbourne St */}
            <div className="rounded-2xl bg-[#121216] border border-white/10 overflow-hidden flex flex-col group hover:border-amber-400/40 transition-all shadow-xl">
              <div className="relative h-72 w-full bg-zinc-900">
                <Image
                  src="/images/melbourne-st.jpg"
                  alt="Clip Joint Melbourne St North Adelaide"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-amber-300 border border-amber-400/30 uppercase tracking-wider">
                  North Adelaide Flagship
                </div>
              </div>

              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-serif text-white font-semibold">
                      Melbourne Street Salon
                    </h3>
                    <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      167 Melbourne Street, North Adelaide SA 5006
                    </p>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Set amidst North Adelaide’s historic café culture, Melbourne Street is an oasis of calm. Our team blends creative vision with precision craftsmanship.
                  </p>

                  {/* Hours */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1.5">
                    <div className="flex items-center gap-2 font-semibold text-white mb-2">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      Opening Hours
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Tuesday, Wednesday, Friday</span>
                      <span className="text-white">9:00am - 5:30pm</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Thursday (Late Night)</span>
                      <span className="text-white">9:00am - 8:00pm</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Saturday</span>
                      <span className="text-white">8:30am - 4:00pm</span>
                    </div>
                    <div className="flex justify-between text-zinc-500">
                      <span>Sunday - Monday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="tel:+61882674044"
                    className="text-xs text-amber-300 hover:underline flex items-center gap-1.5 font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    (08) 8267 4044
                  </a>

                  <button
                    onClick={() => setBookingOpen(true)}
                    className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Book Melbourne St
                  </button>
                </div>
              </div>
            </div>

            {/* Burnside Village */}
            <div className="rounded-2xl bg-[#121216] border border-white/10 overflow-hidden flex flex-col group hover:border-amber-400/40 transition-all shadow-xl">
              <div className="relative h-72 w-full bg-zinc-900">
                <Image
                  src="/images/salons-header.jpg"
                  alt="Clip Joint Burnside Village Salon"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-amber-300 border border-amber-400/30 uppercase tracking-wider">
                  Luxury Fashion Hub
                </div>
              </div>

              <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-serif text-white font-semibold">
                      Burnside Village Salon
                    </h3>
                    <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      Shop 53, Burnside Village, 447 Portrush Rd, Glenside SA 5065
                    </p>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Surrounded by luxury Australian and international fashion labels, Burnside Village delivers effortless, elevated salon rituals and customized colour work.
                  </p>

                  {/* Hours */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1.5">
                    <div className="flex items-center gap-2 font-semibold text-white mb-2">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      Opening Hours
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Monday - Wednesday, Friday</span>
                      <span className="text-white">9:00am - 5:30pm</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Thursday (Late Night)</span>
                      <span className="text-white">9:00am - 9:00pm</span>
                    </div>
                    <div className="flex justify-between text-zinc-400">
                      <span>Saturday</span>
                      <span className="text-white">9:00am - 5:00pm</span>
                    </div>
                    <div className="flex justify-between text-zinc-500">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="tel:+61883799421"
                    className="text-xs text-amber-300 hover:underline flex items-center gap-1.5 font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    (08) 8379 9421
                  </a>

                  <button
                    onClick={() => setBookingOpen(true)}
                    className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Book Burnside
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Service Menu */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-white/10 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Craftsmanship & Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">Salon Services & Pricing</h2>
            <p className="text-xs text-zinc-400 max-w-lg mx-auto">
              Our salons practice a strict “Not-Needed, Not-Recommended” product and service philosophy.
            </p>
          </div>

          <SalonServiceTable
            onBookService={() => setBookingOpen(true)}
          />
        </section>
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultType="salon"
      />

      <PitchAuditModal
        isOpen={pitchOpen}
        onClose={() => setPitchOpen(false)}
      />
    </div>
  );
}

