'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Scissors,
  GraduationCap,
} from 'lucide-react';

export default function ContactPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Clip Joint Education (Courses & Admissions)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-amber-400 selection:text-black">
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
      />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs uppercase tracking-wider font-semibold">
            <MapPin className="w-4 h-4" />
            Adelaide, South Australia Locations
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-light text-white leading-tight">
            Connect With <span className="italic gold-gradient-text">Clip Joint</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Whether inquiring about accredited hairdressing qualifications or scheduling a luxury salon appointment, our team is at your service.
          </p>
        </section>

        {/* Contact Information & Locations Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Education Campus */}
            <div className="p-6 rounded-2xl bg-[#121216] border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                    RTO 0186 • CRICOS 02103K
                  </span>
                  <h3 className="text-lg font-serif text-white font-medium">
                    Adelaide CBD Academy
                  </h3>
                </div>
                <p className="text-xs text-zinc-400">
                  Level 1, 86 Pirie Street, Adelaide SA 5000
                </p>
                <div className="pt-2 space-y-1.5 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <a href="tel:+61882235600" className="hover:text-white">
                      (08) 8223 5600
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <a href="mailto:academy@clipjoint.com.au" className="hover:text-white">
                      academy@clipjoint.com.au
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-zinc-400">
                Mon - Fri: 8:30am - 5:00pm
              </div>
            </div>

            {/* Melbourne St */}
            <div className="p-6 rounded-2xl bg-[#121216] border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                    Flagship Salon
                  </span>
                  <h3 className="text-lg font-serif text-white font-medium">
                    Melbourne Street Salon
                  </h3>
                </div>
                <p className="text-xs text-zinc-400">
                  167 Melbourne Street, North Adelaide SA 5006
                </p>
                <div className="pt-2 space-y-1.5 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <a href="tel:+61882674044" className="hover:text-white">
                      (08) 8267 4044
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-zinc-400">
                Tue - Wed, Fri: 9am-5:30pm | Thu: 9am-8pm | Sat: 8:30am-4pm
              </div>
            </div>

            {/* Burnside Village */}
            <div className="p-6 rounded-2xl bg-[#121216] border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-amber-400 uppercase font-bold tracking-wider">
                    Luxury Precinct
                  </span>
                  <h3 className="text-lg font-serif text-white font-medium">
                    Burnside Village Salon
                  </h3>
                </div>
                <p className="text-xs text-zinc-400">
                  Shop 53, Burnside Village, 447 Portrush Rd, Glenside SA
                </p>
                <div className="pt-2 space-y-1.5 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <a href="tel:+61883799421" className="hover:text-white">
                      (08) 8379 9421
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-zinc-400">
                Mon - Wed, Fri: 9am-5:30pm | Thu: 9am-9pm | Sat: 9am-5pm
              </div>
            </div>
          </div>
        </section>

        {/* Form & Map Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form */}
            <div className="lg:col-span-7 p-8 rounded-2xl bg-[#121216] border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-serif text-white mb-2">Send an Online Enquiry</h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill in your details below and our team will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-serif text-white">Message Dispatched!</h4>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                    Thank you {form.name}. Our admissions or salon coordinator will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-lg bg-emerald-500 text-black font-semibold text-xs uppercase"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jessica Smith"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="0412 345 678"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@domain.com.au"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">Enquiry Department</label>
                    <select
                      value={form.department}
                      onChange={(e) => setForm({ ...form, department: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                    >
                      <option>Clip Joint Education (Courses & Admissions RTO 0186)</option>
                      <option>Student Training Salon Bookings (From $15)</option>
                      <option>Melbourne Street Salon Appointments</option>
                      <option>Burnside Village Salon Appointments</option>
                      <option>Industry Masterclasses & Salon Partnerships</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-300 font-medium mb-1">Your Message</label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="How can our Adelaide team assist you?"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-semibold uppercase tracking-wider text-xs shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>

            {/* Visual Location Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <Image
                  src="/images/salons-header.jpg"
                  alt="Clip Joint Adelaide Salons"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-serif text-lg">Central Adelaide Locations</h4>
                  <p className="text-xs text-zinc-300">
                    Easily accessible by Adelaide public transport, trams, and parking precincts.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-4 text-xs">
                <span className="font-semibold text-white uppercase tracking-wider block">
                  South Australia Accreditations
                </span>
                <p className="text-zinc-400 leading-relaxed">
                  Clip Joint Education is an accredited private training provider registered under ASQA (Australian Skills Quality Authority) and listed on the Commonwealth Register of Institutions and Courses for Overseas Students (CRICOS).
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-black/50 border border-white/10 text-zinc-300 font-mono">
                    RTO: 0186
                  </span>
                  <span className="px-3 py-1 rounded bg-black/50 border border-white/10 text-zinc-300 font-mono">
                    CRICOS: 02103K
                  </span>
                </div>
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

