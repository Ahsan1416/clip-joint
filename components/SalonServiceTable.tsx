'use client';

import React, { useState } from 'react';
import { Scissors, Sparkles, Check, ArrowRight } from 'lucide-react';

interface SalonService {
  name: string;
  description: string;
  price: string;
  category: 'cutting' | 'colour' | 'rituals' | 'training';
}

const services: SalonService[] = [
  // Flagship Salon Cutting
  { name: 'Ladies Precision Cut & Finish', description: 'Bespoke consultation, shampoo ritual, precision cut using Sassoon geometry & blowdry style', price: 'From $115', category: 'cutting' },
  { name: 'Mens Precision Cut & Grooming', description: 'Tailored clipper and shear sculpting, neck clean, scalp massage & finish', price: 'From $75', category: 'cutting' },
  { name: 'Signature Blowdry & Thermal Styling', description: 'Luxury cleanse, condition, and sleek bounce or relaxed editorial wave', price: 'From $65', category: 'cutting' },
  { name: 'Formal & Editorial Event Upstyle', description: 'Curated gala, bridal or fashion runway hair architecture', price: 'From $130', category: 'cutting' },

  // Colour Artistry
  { name: 'Global Tint / Regrowth Touch-up', description: 'Seamless colour matching, high-shine grey coverage or dimensional gloss', price: 'From $110', category: 'colour' },
  { name: 'Half Head Foils / Lived-in Balayage', description: 'Micro-weave foils or freehand painted contour ribbons with toner', price: 'From $165', category: 'colour' },
  { name: 'Full Head Multi-Dimensional Foils', description: 'Complete head precision foils for maximum blonde clarity or brunette richness', price: 'From $220', category: 'colour' },
  { name: 'Gloss Toner & Bond Protection', description: 'Post-lightening tonal refinement and acidic cuticle sealing shine', price: 'From $60', category: 'colour' },

  // Rituals
  { name: 'Keratin Smoothing Complex', description: 'Formaldehyde-free smoothing ritual eliminating frizz and cutting blowdry time', price: 'From $290', category: 'rituals' },
  { name: 'Custom Bond & Moisture Mask', description: 'Targeted deep cortex therapy tailored to your hair structure and needs', price: 'From $40', category: 'rituals' },

  // Training Salon (Real CJE pricing!)
  { name: 'Student Salon: Cut & Blowdry', description: 'Completed by academy students under direct master educator supervision', price: '$25', category: 'training' },
  { name: 'Student Salon: Mens / Barbering Cut', description: 'Fades, tapers, classic scissor work supervised by educators', price: '$15 - $20', category: 'training' },
  { name: 'Student Salon: Full Head Colour', description: 'All-over tint or grey balance using premium salon formulations', price: '$65 - $80', category: 'training' },
  { name: 'Student Salon: Foils & Highlights', description: 'Quarter to full head student foils with educator oversight', price: '$75 - $140', category: 'training' },
];

interface SalonServiceTableProps {
  onBookService?: (serviceName: string) => void;
}

export default function SalonServiceTable({ onBookService }: SalonServiceTableProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cutting' | 'colour' | 'rituals' | 'training'>('all');

  const filtered = activeCategory === 'all'
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 justify-center">
        {[
          { key: 'all', label: 'All Services' },
          { key: 'cutting', label: 'Precision Cutting & Styling' },
          { key: 'colour', label: 'Colour & Balayage' },
          { key: 'rituals', label: 'Treatments & Keratin' },
          { key: 'training', label: 'Student Salon (Budget-Friendly $15-$25)' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveCategory(tab.key as any)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              activeCategory === tab.key
                ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/20'
                : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-xl border transition-all duration-300 flex items-start justify-between gap-4 ${
              item.category === 'training'
                ? 'bg-amber-950/20 border-amber-400/30'
                : 'bg-[#121216] border-white/10 hover:border-amber-400/40'
            }`}
          >
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <h4 className="text-white font-medium text-sm">{item.name}</h4>
                {item.category === 'training' && (
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    Student Clinic
                  </span>
                )}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
            </div>

            <div className="text-right shrink-0 flex flex-col items-end justify-between h-full space-y-2">
              <span className="text-base font-serif font-bold text-amber-300 font-mono">
                {item.price}
              </span>
              <button
                onClick={() => onBookService ? onBookService(item.name) : null}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-black text-white text-[11px] font-semibold uppercase tracking-wider transition-colors flex items-center gap-1"
              >
                Book
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-zinc-500 italic">
        * Prices may vary based on hair length, density, and customized stylist level (Graduate, Senior, or Creative Director).
      </p>
    </div>
  );
}

