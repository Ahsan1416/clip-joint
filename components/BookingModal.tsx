'use client';

import React, { useState } from 'react';
import { X, Calendar, GraduationCap, Scissors, CheckCircle2, Phone, Mail, Clock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'education' | 'salon';
}

export default function BookingModal({ isOpen, onClose, defaultType = 'education' }: BookingModalProps) {
  const [mode, setMode] = useState<'education' | 'salon'>(defaultType);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'SHB30416 - Certificate III in Hairdressing',
    intake: 'Next Available Intake (2026)',
    location: 'Melbourne Street (North Adelaide)',
    service: 'Precision Cut & Blowdry',
    date: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-[#121216] border border-amber-400/30 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              {mode === 'education' ? <GraduationCap className="w-5 h-5" /> : <Scissors className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-serif text-white font-semibold">
                {mode === 'education' ? 'Academy Course Consultation' : 'Book Salon Appointment'}
              </h3>
              <p className="text-xs text-zinc-400">
                {mode === 'education'
                  ? 'Speak with an official Clip Joint Education course advisor (RTO 0186)'
                  : 'Reserve your appointment at Melbourne St, Burnside Village or Student Salon'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Switcher Tabs */}
        {!submitted && (
          <div className="grid grid-cols-2 p-1.5 bg-black/40 border-b border-white/10 text-xs font-semibold uppercase tracking-wider">
            <button
              type="button"
              onClick={() => setMode('education')}
              className={`py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 ${
                mode === 'education'
                  ? 'bg-amber-400 text-black shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Education / Courses (RTO)
            </button>
            <button
              type="button"
              onClick={() => setMode('salon')}
              className={`py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 ${
                mode === 'salon'
                  ? 'bg-amber-400 text-black shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Scissors className="w-4 h-4" />
              Salon Appointment
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif text-white">Thank You, {formData.name || 'Creative'}!</h4>
              <p className="text-sm text-zinc-300 max-w-sm mx-auto">
                Your {mode === 'education' ? 'course consultation request' : 'booking enquiry'} has been received. Our Adelaide team will contact you within 24 business hours.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-sm mx-auto text-xs text-zinc-400 text-left space-y-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <strong>Academy Direct:</strong> (08) 8223 5600
                </p>
                <p className="flex items-center gap-2">
                  <Scissors className="w-3.5 h-3.5 text-amber-400" />
                  <strong>Salon Direct:</strong> (08) 8267 4044
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <strong>Email:</strong> academy@clipjoint.com.au
                </p>
              </div>

              <button
                onClick={resetForm}
                className="mt-4 px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs uppercase font-bold tracking-wider transition-colors"
              >
                Close & Continue
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jessica Taylor"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-zinc-300 font-medium mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0412 345 678"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com.au"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              {mode === 'education' ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Interested Course</label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                      >
                        <option>SHB30416 - Certificate III in Hairdressing</option>
                        <option>SHB20216 - Certificate II in Salon Assistant</option>
                        <option>Barbering & Precision Grooming</option>
                        <option>Sassoon ABC Precision Cutting Masterclass</option>
                        <option>VET in Schools High School Program</option>
                        <option>School Holiday Workshops for Teens</option>
                        <option>International Student Program (CRICOS 02103K)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Target Intake</label>
                      <select
                        value={formData.intake}
                        onChange={(e) => setFormData({ ...formData, intake: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                      >
                        <option>Next Available Intake (2026)</option>
                        <option>Mid-Year Intake</option>
                        <option>High School VET Selection</option>
                        <option>Just Requesting Information</option>
                      </select>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Salon Location</label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                      >
                        <option>Melbourne Street (North Adelaide)</option>
                        <option>Burnside Village (Glenside)</option>
                        <option>Student Training Salon (Adelaide CBD - From $15)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-zinc-300 font-medium mb-1">Service Type</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white focus:outline-none focus:border-amber-400"
                      >
                        <option>Precision Cut & Blowdry</option>
                        <option>Global Colour / Tint</option>
                        <option>Foils / Balayage / Highlights</option>
                        <option>Mens Grooming / Precision Barbering</option>
                        <option>Keratin Smoothing / Luxury Treatment</option>
                        <option>Complimentary Consultation</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-zinc-300 font-medium mb-1">Questions / Specific Requests</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any questions or requirements..."
                  className="w-full px-3.5 py-2 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-semibold uppercase tracking-wider text-xs shadow-lg shadow-amber-400/20 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  {mode === 'education' ? 'Submit Course Enquiry' : 'Confirm Booking Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

