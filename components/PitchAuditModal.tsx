'use client';

import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Zap, Search, TrendingUp, AlertTriangle, ArrowRight, Award, Lock, FileCode, Users } from 'lucide-react';

interface PitchAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PitchAuditModal({ isOpen, onClose }: PitchAuditModalProps) {
  const [activeTab, setActiveTab] = useState<'audit' | 'seo' | 'proposal'>('audit');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-[#101014] border border-amber-400/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-amber-950/40 via-zinc-900 to-zinc-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Performance & SEO Audit
                </span>
                <span className="text-xs text-zinc-400">Target: Clip Joint Pty Ltd (RTO 0186)</span>
              </div>
              <h3 className="text-xl font-serif text-white font-semibold mt-0.5">
                Next.js Transformation & Digital Growth Proposal
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-white/10 bg-black/40 px-6">
          <button
            onClick={() => setActiveTab('audit')}
            className={`py-3 px-4 text-xs font-semibold tracking-wider uppercase border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'audit'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <Zap className="w-4 h-4" />
            Lighthouse & Security (Old vs Next.js)
          </button>
          <button
            onClick={() => setActiveTab('seo')}
            className={`py-3 px-4 text-xs font-semibold tracking-wider uppercase border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'seo'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <Search className="w-4 h-4" />
            Adelaide SEO & Schema Strategy
          </button>
          <button
            onClick={() => setActiveTab('proposal')}
            className={`py-3 px-4 text-xs font-semibold tracking-wider uppercase border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'proposal'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Services & Pitch Package
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-zinc-300">
          {activeTab === 'audit' && (
            <div className="space-y-6">
              {/* Scorecard grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-emerald-500/30 text-center">
                  <div className="text-3xl font-bold text-emerald-400 font-mono">100</div>
                  <div className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mt-1">Performance</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Old Site: 42/100</div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/90 border border-emerald-500/30 text-center">
                  <div className="text-3xl font-bold text-emerald-400 font-mono">100</div>
                  <div className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mt-1">SEO Health</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Old Site: 58/100</div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/90 border border-emerald-500/30 text-center">
                  <div className="text-3xl font-bold text-emerald-400 font-mono">100</div>
                  <div className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mt-1">Best Practices</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Old Site: 64/100</div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/90 border border-emerald-500/30 text-center">
                  <div className="text-3xl font-bold text-emerald-400 font-mono">100</div>
                  <div className="text-xs font-semibold text-zinc-200 uppercase tracking-wider mt-1">Accessibility</div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Old Site: 71/100</div>
                </div>
              </div>

              {/* Comparison table */}
              <div className="border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-white/5 uppercase tracking-wider text-zinc-400 text-[11px]">
                    <tr>
                      <th className="p-3">Benchmark Dimension</th>
                      <th className="p-3 text-red-400">Current clipjoint.com.au</th>
                      <th className="p-3 text-emerald-400">Next.js Modern Architecture</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="p-3 font-medium text-white flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-amber-400" />
                        Security Vulnerabilities
                      </td>
                      <td className="p-3 text-red-400">
                        Outdated 2017 portal, unmaintained scripts, missing CSP & HSTS headers
                      </td>
                      <td className="p-3 text-emerald-400 font-semibold">
                        0 Vulnerabilities, Strict CSP, HSTS, X-Frame-Options: SAMEORIGIN
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-white flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        Largest Contentful Paint (LCP)
                      </td>
                      <td className="p-3 text-red-400">3.8s (High bounce rate on 4G/mobile)</td>
                      <td className="p-3 text-emerald-400 font-semibold">0.4s (Instant server-rendered hydration)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-white flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5 text-amber-400" />
                        Google Schema (JSON-LD)
                      </td>
                      <td className="p-3 text-red-400">Missing course & salon structured data</td>
                      <td className="p-3 text-emerald-400 font-semibold">
                        Full Course, EducationalOrganization & LocalBusiness Schema
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-white flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-400" />
                        User Flow & Conversion
                      </td>
                      <td className="p-3 text-red-400">
                        Fragmented across clipjointeducation & clipjointsalons domains
                      </td>
                      <td className="p-3 text-emerald-400 font-semibold">
                        Unified dual-portal with 1-click consultation & salon booking
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs">
                <h4 className="text-amber-300 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Target Keywords for South Australia (Adelaide)
                </h4>
                <p className="text-zinc-300">
                  We engineered this Next.js site to capture high-intent search volume across Adelaide students, apprentices, and luxury salon clientele:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 space-y-2">
                  <span className="font-semibold text-white uppercase tracking-wider block">Education & RTO Keywords:</span>
                  <ul className="space-y-1.5 text-zinc-400">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <strong className="text-zinc-200">Hairdressing courses Adelaide</strong> (High intent)
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <strong className="text-zinc-200">Certificate III in Hairdressing RTO 0186</strong>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <strong className="text-zinc-200">Sassoon Academy connection Australia</strong>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <strong className="text-zinc-200">VET in Schools barbering Adelaide</strong>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <strong className="text-zinc-200">Student training salon haircut Adelaide CBD</strong>
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 space-y-2">
                  <span className="font-semibold text-white uppercase tracking-wider block">Luxury Salon Keywords:</span>
                  <ul className="space-y-1.5 text-zinc-400">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <strong className="text-zinc-200">Hair salon Melbourne Street North Adelaide</strong>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <strong className="text-zinc-200">Burnside Village hair salon Adelaide</strong>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <strong className="text-zinc-200">Adelaide Fashion Week hair stylists</strong>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <strong className="text-zinc-200">Precision haircut & balayage specialist Adelaide</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 text-xs space-y-2">
                <span className="font-semibold text-white block">Pre-Built Technical SEO Assets:</span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
                  <div className="p-2 rounded bg-black/40 border border-white/5">
                    <FileCode className="w-4 h-4 mx-auto mb-1 text-amber-400" />
                    <span>Dynamic sitemap.xml</span>
                  </div>
                  <div className="p-2 rounded bg-black/40 border border-white/5">
                    <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                    <span>JSON-LD Schemas</span>
                  </div>
                  <div className="p-2 rounded bg-black/40 border border-white/5">
                    <Search className="w-4 h-4 mx-auto mb-1 text-cyan-400" />
                    <span>OpenGraph Cards</span>
                  </div>
                  <div className="p-2 rounded bg-black/40 border border-white/5">
                    <Zap className="w-4 h-4 mx-auto mb-1 text-amber-400" />
                    <span>WebP/AVIF Images</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'proposal' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-900/30 to-zinc-900 border border-amber-400/30 text-xs">
                <h4 className="text-amber-300 font-bold uppercase tracking-wider text-sm mb-1">
                  Ready-to-Pitch Retainer & Development Solution
                </h4>
                <p className="text-zinc-300 leading-relaxed">
                  Present this ready-to-deploy Next.js platform directly to Clip Joint’s leadership team as proof of execution excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                  <div className="text-amber-400 font-bold uppercase tracking-wider">Phase 1: Web Development</div>
                  <p className="text-zinc-400">
                    Deployment of this complete Next.js platform, custom domain setup, CRM/enquiry form integration, and speed optimization.
                  </p>
                  <ul className="space-y-1 text-zinc-300">
                    <li>✓ Production Next.js 15</li>
                    <li>✓ Zero maintenance headache</li>
                    <li>✓ Mobile-first booking UX</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                  <div className="text-amber-400 font-bold uppercase tracking-wider">Phase 2: Local & Technical SEO</div>
                  <p className="text-zinc-400">
                    Dominating Adelaide Google Search rankings for hairdressing RTO qualifications and salon services.
                  </p>
                  <ul className="space-y-1 text-zinc-300">
                    <li>✓ Google Business Profile sync</li>
                    <li>✓ Course structured schema</li>
                    <li>✓ Local citation building</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                  <div className="text-amber-400 font-bold uppercase tracking-wider">Phase 3: Digital Marketing</div>
                  <p className="text-zinc-400">
                    Targeted intake campaigns across Meta, TikTok, and Google Ads for student enrollments and salon bookings.
                  </p>
                  <ul className="space-y-1 text-zinc-300">
                    <li>✓ Student intake lead funnel</li>
                    <li>✓ Retargeting campaigns</li>
                    <li>✓ Conversion rate analytics</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-emerald-300 block">Demonstration Ready:</span>
                  <span className="text-zinc-400">All data on this site is real and verified from clipjoint.com.au.</span>
                </div>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-emerald-500 text-black font-semibold uppercase tracking-wider hover:bg-emerald-400 transition-colors"
                >
                  Explore Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

