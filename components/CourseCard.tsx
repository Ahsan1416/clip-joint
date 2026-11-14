import React from 'react';
import Image from 'next/image';
import { Award, CheckCircle, Clock, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export interface CourseData {
  id: string;
  title: string;
  code?: string;
  category: string;
  duration: string;
  studyMode: string;
  image: string;
  description: string;
  highlights: string[];
  intakes: string;
  badge?: string;
}

interface CourseCardProps {
  course: CourseData;
  onSelect: (courseTitle: string) => void;
}

export default function CourseCard({ course, onSelect }: CourseCardProps) {
  return (
    <div className="group rounded-2xl bg-[#121216] border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-amber-950/20">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-zinc-900">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/30" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {course.code && (
            <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-mono font-bold text-amber-300 border border-amber-400/30">
              {course.code}
            </span>
          )}
          {course.badge && (
            <span className="px-2.5 py-1 rounded-md bg-amber-400 text-black text-[11px] font-bold uppercase tracking-wider">
              {course.badge}
            </span>
          )}
        </div>

        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-zinc-300">
          <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur px-2.5 py-1 rounded-md border border-white/10">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur px-2.5 py-1 rounded-md border border-white/10">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            {course.studyMode}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400/90">
            {course.category}
          </span>
          <h3 className="text-xl font-serif text-white font-semibold group-hover:text-amber-300 transition-colors">
            {course.title}
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            {course.description}
          </p>

          <div className="pt-2 border-t border-white/5 space-y-1.5">
            {course.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase text-zinc-500 font-semibold block">Intakes</span>
            <span className="text-xs font-medium text-white">{course.intakes}</span>
          </div>

          <button
            onClick={() => onSelect(course.title)}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-black text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5"
          >
            Enquire Now
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

