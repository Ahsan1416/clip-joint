'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Calendar, Menu, X, GraduationCap, Scissors, ShieldCheck, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking?: (type?: 'education' | 'salon') => void;
  onOpenPitch?: () => void;
}

export default function Navbar({ onOpenBooking, onOpenPitch }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Courses', href: '/courses', badge: 'RTO 0186' },
    { label: 'Salons', href: '/salons' },
    { label: 'Student Salon', href: '/student-salon', badge: 'From $15' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-white/10 py-2.5 shadow-2xl' : 'bg-[#09090b]/60 backdrop-blur-sm py-3 border-b border-white/5'
        }`}
      >
        {/* Top Mini Bar for RTO & Contact Alert */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-1.5 hidden xl:flex items-center justify-between text-[11px] tracking-wider uppercase text-zinc-400 border-b border-white/5 pb-1.5 whitespace-nowrap">
          <div className="flex items-center space-x-5 whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-zinc-300 font-medium whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              RTO Code: <strong className="text-white">0186</strong> | CRICOS: <strong className="text-white">02103K</strong>
            </span>
            <span className="text-amber-300/80 font-serif italic normal-case text-xs whitespace-nowrap">
              Exclusive Sassoon Academy | School Connection Member in Australia
            </span>
          </div>

          <div className="flex items-center space-x-5 whitespace-nowrap">
            <a
              href="tel:+61882235600"
              className="hover:text-amber-300 transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              Academy: (08) 8223 5600
            </a>
            <a
              href="tel:+61882674044"
              className="hover:text-amber-300 transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              <Scissors className="w-3 h-3 text-amber-400" />
              Salon: (08) 8267 4044
            </a>
            {onOpenPitch && (
              <button
                onClick={onOpenPitch}
                className="bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full flex items-center gap-1 text-[10px] font-semibold tracking-normal transition-all whitespace-nowrap"
                title="View Next.js Transformation & SEO Performance Audit"
              >
                <ShieldCheck className="w-3 h-3 text-amber-400" />
                Pitch / SEO 100
              </button>
            )}
          </div>
        </div>

        {/* Main Navigation Bar - Strictly 1 Line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 whitespace-nowrap h-11">
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-36 sm:w-44 h-8 sm:h-9 flex items-center">
                <Image
                  src="/images/logo-education-white.png"
                  alt="Clip Joint Education & Salons Adelaide"
                  fill
                  className="object-contain object-left group-hover:scale-[1.02] transition-transform"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav Links - Single Line */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 shrink-0 whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="whitespace-nowrap">{link.label}</span>
                    {link.badge && (
                      <span className="text-[9px] xl:text-[10px] bg-amber-400/20 text-amber-300 font-semibold px-1.5 py-0.5 rounded border border-amber-400/30 uppercase tracking-tighter whitespace-nowrap">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action CTAs - Strictly Single Line */}
            <div className="hidden md:flex items-center space-x-2.5 shrink-0 whitespace-nowrap">
              <button
                onClick={() => onOpenBooking ? onOpenBooking('education') : null}
                className="text-[11px] xl:text-xs uppercase tracking-wider font-semibold text-zinc-200 hover:text-white px-3 py-2 rounded-lg border border-white/15 hover:border-amber-400/50 bg-white/5 hover:bg-white/10 transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap"
              >
                <GraduationCap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="whitespace-nowrap">Course Enquiry</span>
              </button>
              <button
                onClick={() => onOpenBooking ? onOpenBooking('salon') : null}
                className="text-[11px] xl:text-xs uppercase tracking-wider font-bold bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black px-3.5 xl:px-4 py-2 rounded-lg shadow-md shadow-amber-400/20 transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5 text-black shrink-0" />
                <span className="whitespace-nowrap">Book Appointment</span>
              </button>
            </div>

            {/* Mobile / Tablet Actions */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => onOpenBooking ? onOpenBooking('salon') : null}
                className="sm:hidden text-[10px] uppercase tracking-wider font-bold bg-amber-400 text-black px-2.5 py-1.5 rounded-lg flex items-center gap-1 whitespace-nowrap"
              >
                <Calendar className="w-3 h-3" />
                Book
              </button>
              {onOpenPitch && (
                <button
                  onClick={onOpenPitch}
                  className="bg-amber-400/20 text-amber-300 p-2 rounded-lg border border-amber-400/30 text-xs"
                  title="SEO 100 Pitch"
                >
                  <ShieldCheck className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-zinc-300 hover:text-white bg-white/5 rounded-lg border border-white/10"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden pt-24 px-6 pb-10 flex flex-col justify-between overflow-y-auto animate-fade-in">
          <div className="space-y-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 mb-6">
              <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
                Clip Joint Education & Salons
              </p>
              <p className="text-[11px] text-zinc-400 mt-1">
                RTO Code 0186 • CRICOS Provider 02103K • Sassoon School Connection
              </p>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-xl text-base font-medium text-zinc-200 hover:text-white hover:bg-white/10 border border-white/5"
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.badge && (
                      <span className="text-xs bg-amber-400/20 text-amber-300 font-semibold px-2 py-0.5 rounded">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  <ChevronRight className="w-5 h-5 text-zinc-500" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="tel:+61882235600"
                className="flex items-center justify-center gap-1.5 p-3 rounded-lg bg-white/5 text-zinc-300 border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                Academy
              </a>
              <a
                href="tel:+61882674044"
                className="flex items-center justify-center gap-1.5 p-3 rounded-lg bg-white/5 text-zinc-300 border border-white/10"
              >
                <Scissors className="w-3.5 h-3.5 text-amber-400" />
                Salon
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking('salon');
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-center shadow-lg"
            >
              Book Salon Appointment
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking('education');
              }}
              className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-center border border-white/15"
            >
              Enquire About Courses
            </button>
          </div>
        </div>
      )}
    </>
  );
}
