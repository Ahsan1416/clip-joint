import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070709] border-t border-white/10 text-zinc-400 text-sm">
      {/* Top Banner: Sassoon Connection & Accreditation */}
      <div className="border-b border-white/5 py-8 bg-zinc-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold text-xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-serif text-lg font-medium">
                Australia&apos;s Exclusive Sassoon Academy Connection
              </h4>
              <p className="text-xs text-zinc-400">
                Exclusive educator certification to deliver the internationally revered Sassoon ABC cutting methodology.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
              RTO Code: <strong className="text-white">0186</strong>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
              CRICOS: <strong className="text-white">02103K</strong>
            </span>
            <a
              href="https://www.myskills.gov.au/RegisteredTrainers/Details?rtocode=0186"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1 transition-colors"
            >
              Verify on MySkills.gov.au
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & History */}
        <div className="space-y-4">
          <div className="relative w-48 h-12">
            <Image
              src="/images/logo-education-white.png"
              alt="Clip Joint Adelaide"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="text-xs leading-relaxed text-zinc-400">
            For over 50 years, Clip Joint has stood as the benchmark for creative hairdressing, barbering, and salon technical excellence in South Australia.
          </p>
          <div className="pt-2 flex items-center space-x-3 text-xs">
            <a
              href="https://www.instagram.com/clipjointeducation/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-amber-400/20 text-zinc-300 hover:text-amber-300 transition-colors border border-white/10"
              aria-label="Instagram Clip Joint Education"
            >
              Instagram (Academy)
            </a>
            <a
              href="https://www.instagram.com/ClipJointSalons"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-amber-400/20 text-zinc-300 hover:text-amber-300 transition-colors border border-white/10"
              aria-label="Instagram Clip Joint Salons"
            >
              Instagram (Salons)
            </a>
          </div>
        </div>

        {/* Education & RTO Pathways */}
        <div>
          <h5 className="text-white font-medium text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Clip Joint Education
          </h5>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link href="/courses#cert3" className="hover:text-amber-300 transition-colors">
                SHB30416 Cert III in Hairdressing
              </Link>
            </li>
            <li>
              <Link href="/courses#cert2" className="hover:text-amber-300 transition-colors">
                SHB20216 Cert II in Salon Assistant
              </Link>
            </li>
            <li>
              <Link href="/courses#barbering" className="hover:text-amber-300 transition-colors">
                Precision Barbering & Grooming
              </Link>
            </li>
            <li>
              <Link href="/courses#masterclass" className="hover:text-amber-300 transition-colors">
                Sassoon Precision Masterclass Series
              </Link>
            </li>
            <li>
              <Link href="/courses#vetschool" className="hover:text-amber-300 transition-colors">
                VET in Schools (Year 10-12)
              </Link>
            </li>
            <li>
              <Link href="/student-salon" className="hover:text-amber-300 transition-colors">
                Student Training Salon (From $15)
              </Link>
            </li>
          </ul>
        </div>

        {/* Salon Flagships & Booking */}
        <div>
          <h5 className="text-white font-medium text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Clip Joint Salons
          </h5>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link href="/salons#melbourne-st" className="hover:text-amber-300 transition-colors">
                Melbourne Street, North Adelaide
              </Link>
            </li>
            <li>
              <Link href="/salons#burnside" className="hover:text-amber-300 transition-colors">
                Burnside Village Luxury Flagship
              </Link>
            </li>
            <li>
              <Link href="/salons#services" className="hover:text-amber-300 transition-colors">
                Cuts, Styling & Global Colour Menu
              </Link>
            </li>
            <li>
              <Link href="/salons#fashion" className="hover:text-amber-300 transition-colors">
                Adelaide Fashion Week Editorial BTS
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-300 transition-colors">
                Our 50-Year Heritage & Stylists
              </Link>
            </li>
          </ul>
        </div>

        {/* Direct Contacts & Campus Details */}
        <div className="space-y-3">
          <h5 className="text-white font-medium text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Locations & Enquiries
          </h5>

          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-zinc-200 font-medium">Adelaide CBD Campus</p>
                <p className="text-zinc-400">Level 1, 86 Pirie St, Adelaide SA 5000</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:+61882235600" className="hover:text-white transition-colors">
                (08) 8223 5600
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="mailto:academy@clipjoint.com.au" className="hover:text-white transition-colors">
                academy@clipjoint.com.au
              </a>
            </div>

            <div className="pt-2 border-t border-white/5">
              <p className="text-zinc-200 font-medium">North Adelaide Salon</p>
              <p className="text-zinc-400">167 Melbourne St, North Adelaide SA</p>
              <a href="tel:+61882674044" className="text-amber-300 hover:underline">
                (08) 8267 4044
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Indigenous Acknowledgement of Country */}
      <div className="border-t border-white/5 py-6 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-zinc-500 max-w-4xl mx-auto leading-relaxed">
            Clip Joint acknowledges the traditional owners throughout South Australia and pays respect to the custodians of the land on which we live and learn. We respect their spiritual relationship with Country and acknowledge that their cultural and heritage beliefs are still as important to those living today.
          </p>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="border-t border-white/5 py-6 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Clip Joint Education & Clip Joint Salons. All Rights Reserved. RTO 0186 | CRICOS 02103K.
          </p>

          <div className="flex items-center space-x-6 text-zinc-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              Secure Next.js Infrastructure
            </span>
            <Link href="/contact" className="hover:text-white">Privacy & Legals</Link>
            <a href="https://www.myskills.gov.au/RegisteredTrainers/Details?rtocode=0186" target="_blank" rel="noopener noreferrer" className="hover:text-white">MySkills Registry</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

