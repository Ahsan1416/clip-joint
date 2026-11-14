'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import {
  Sparkles,
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle,
  Calendar,
  AlertCircle,
  ArrowRight,
  Heart,
} from 'lucide-react';

const studentPrices = [
  { service: 'Ladies Precision Cut & Blowdry', price: '$25.00', duration: '60 - 90 mins' },
  { service: 'Mens / Barbering Clipper & Scissor Cut', price: '$15.00 - $20.00', duration: '45 mins' },
  { service: 'Blowdry & Thermal Heat Styling', price: '$20.00', duration: '45 mins' },
  { service: 'Permanent Regrowth Colour', price: '$50.00 - $65.00', duration: '90 mins' },
  { service: 'Full Head Permanent Colour (Short/Medium)', price: '$65.00 - $80.00', duration: '90 - 120 mins' },
  { service: 'Quarter Head Foils / T-Section Highlights', price: '$60.00 - $75.00', duration: '75 mins' },
  { service: 'Half Head Foils / Creative Placement', price: '$85.00 - $100.00', duration: '120 mins' },
  { service: 'Full Head Foils / Multi-Tone Highlights', price: '$120.00 - $140.00', duration: '150 mins' },
  { service: 'Toner & Cuticle Shine Glaze', price: '$20.00 - $30.00', duration: '30 mins' },
  { service: 'Deep Reconstructing Hair Ritual / Mask', price: '$10.00 - $20.00', duration: '20 mins' },
];

export default function StudentSalonPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-amber-400 selection:text-black">
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
      />

      <main className="flex-1 pt-28 pb-20">
        {/* Hero Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs uppercase tracking-wider font-semibold">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Adelaide CBD Student Training Salon • Open to the Public
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white leading-tight">
            Student Training <span className="italic gold-gradient-text">Salon</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Support the next generation of creative hairdressers while enjoying professional salon services at accessible, student-clinic rates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Student Salon Appointment
            </button>
            <a
              href="tel:+61882235600"
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call (08) 8223 5600
            </a>
          </div>
        </section>

        {/* Supervision & Quality Notice */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-6">
          <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-400/30 flex items-start gap-4 text-xs">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-white font-semibold text-sm">Supervised Practical Learning</h4>
              <p className="text-zinc-300 leading-relaxed">
                Clip Joint Education is committed to delivering industry-ready graduates. Services within our training salon are performed by enrolled students under the active, step-by-step guidance of qualified educators. Because services involve educational assessment, appointment times are slightly longer than a commercial salon.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Transparent Clinic Rates
            </span>
            <h2 className="text-3xl font-serif text-white">Student Salon Service Menu</h2>
            <p className="text-xs text-zinc-400">
              Pricing covers product materials and facility operational costs.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl overflow-hidden bg-[#121216] shadow-xl">
            <table className="w-full text-xs text-left">
              <thead className="bg-white/5 uppercase tracking-wider text-zinc-400 text-[11px] border-b border-white/10">
                <tr>
                  <th className="p-4">Service</th>
                  <th className="p-4">Approx. Duration</th>
                  <th className="p-4 text-right">Student Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {studentPrices.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-medium text-white flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      {item.service}
                    </td>
                    <td className="p-4 text-zinc-400">{item.duration}</td>
                    <td className="p-4 text-right font-mono font-bold text-emerald-400 text-sm">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              Book an Appointment Now
            </button>
          </div>
        </section>

        {/* Clinic Location & Hours */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Campus Location
              </span>
              <h3 className="text-3xl font-serif text-white">
                Visit the Adelaide CBD Student Salon
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Located on Level 1, 86 Pirie Street in the Adelaide CBD, just a short walk from Rundle Mall, bus routes, and the Pirie St tram stop.
              </p>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <strong>Address:</strong> Level 1, 86 Pirie Street, Adelaide SA 5000
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <strong>Direct Line:</strong> (08) 8223 5600
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <strong>Clinic Schedule:</strong> Tuesday – Friday (Term dependent)
                </div>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/images/industry-education.jpg"
                alt="Adelaide Pirie Street Training Salon"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultType="salon"
      />
    </div>
  );
}

