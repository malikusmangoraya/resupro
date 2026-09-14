import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Sparkles, Wand2, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div
            className="absolute inset-0 -z-10"
            style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}
          />
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="section-eyebrow">CAREER PLATFORM</span>
              <h1
                className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6"
                style={{ color: '#1e3a5f' }}
              >
                AI Resume & CV Builder for Career Success
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                Create interview-winning resumes in minutes with AI-powered writing, professional
                templates, and one-click export to PDF.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/services" className="btn-outline">
                  View Services
                </Link>
              </div>
              <ul className="mt-8 space-y-3 max-w-sm">
                <li className="flex items-center gap-3">
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white"
                    style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                  >
                    <FileText className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    Enterprise-grade security and compliance
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white"
                    style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                  >
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    Global support across time zones, 24/7
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white"
                    style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                  >
                    <Wand2 className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    Seamless integrations with your stack
                  </span>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block relative hero-3d-scene">
              <div className="hero-3d-card">
              <img
                src="assets/portraits/hero.jpg"
                alt="ResuPro product overview"
                className="w-full h-96 lg:h-105 rounded-2xl object-cover shadow-2xl"
                loading="eager"
              />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-700">
                  Trusted by 50,000+ businesses worldwide
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-eyebrow">What We Offer</span>
              <h2 className="section-heading">Why Choose ResuPro?</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group rounded-xl border border-slate-100 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                  >
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1e3a5f' }}>
                    AI Writing Assistant
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Smart sentence suggestions tuned for every job description
                  </p>
                </div>
                <div className="relative mt-5 overflow-hidden rounded-lg" style={{ height: 120 }}>
                  <img
                    src="assets/portraits/desk.jpg"
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 flex items-end p-3"
                    style={{ background: 'linear-gradient(to top, rgba(2,6,23,.4), transparent)' }}
                  />
                </div>
              </div>
              <div className="group rounded-xl border border-slate-100 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                  >
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1e3a5f' }}>
                    ATS-Friendly Templates
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Applicant tracking system optimised layouts recruiters love
                  </p>
                </div>
                <div className="relative mt-5 overflow-hidden rounded-lg" style={{ height: 120 }}>
                  <img
                    src="assets/portraits/office.jpg"
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 flex items-end p-3"
                    style={{ background: 'linear-gradient(to top, rgba(2,6,23,.4), transparent)' }}
                  />
                </div>
              </div>
              <div className="group rounded-xl border border-slate-100 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                  >
                    <Wand2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1e3a5f' }}>
                    One-Click Export
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Pixel-perfect PDF and DOCX exports in any language
                  </p>
                </div>
                <div className="relative mt-5 overflow-hidden rounded-lg" style={{ height: 120 }}>
                  <img
                    src="assets/portraits/workspace.jpg"
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 flex items-end p-3"
                    style={{ background: 'linear-gradient(to top, rgba(2,6,23,.4), transparent)' }}
                  />
                </div>
              </div>
              <div className="group rounded-xl border border-slate-100 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}
                  >
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1e3a5f' }}>
                    Career Analytics
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Track views, downloads, and interview success rates
                  </p>
                </div>
                <div className="relative mt-5 overflow-hidden rounded-lg" style={{ height: 120 }}>
                  <img
                    src="assets/portraits/dashboard.jpg"
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 flex items-end p-3"
                    style={{ background: 'linear-gradient(to top, rgba(2,6,23,.4), transparent)' }}
                  />
                </div>
              </div>
            </div>
            <img
              src="assets/portraits/desk.jpg"
              alt="ResuPro features"
              className="w-full h-52 object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </section>

        <section className="py-16 px-6" style={{ backgroundColor: '#f8fafc' }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div
                className="text-3xl sm:text-4xl font-extrabold mb-1"
                style={{ color: '#2563eb' }}
              >
                {'500K+'}
              </div>
              <div className="text-sm text-slate-500">Resumes Built</div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl sm:text-4xl font-extrabold mb-1"
                style={{ color: '#2563eb' }}
              >
                {'4.9/5'}
              </div>
              <div className="text-sm text-slate-500">User Rating</div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl sm:text-4xl font-extrabold mb-1"
                style={{ color: '#2563eb' }}
              >
                {'200+'}
              </div>
              <div className="text-sm text-slate-500">Templates</div>
            </div>
            <div className="text-center">
              <div
                className="text-3xl sm:text-4xl font-extrabold mb-1"
                style={{ color: '#2563eb' }}
              >
                {'2.3x'}
              </div>
              <div className="text-sm text-slate-500">More Interviews</div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="assets/portraits/building.jpg"
                alt="ResuPro platform showcase"
                className="w-full rounded-2xl object-cover shadow-xl"
                style={{ maxHeight: 420 }}
                loading="lazy"
              />
            </div>
            <div>
              <span className="section-eyebrow">Platform Preview</span>
              <h2 className="section-heading mb-4">Built for the modern Success</h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Every detail is engineered for performance, scalability, and a flawless user
                experience — from first click to everyday operations.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div
            className="max-w-3xl mx-auto text-center rounded-2xl p-12"
            style={{ background: 'linear-gradient(135deg, #1e3a5f, #2563eb)' }}
          >
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/70 mb-8">
              Join thousands of professionals choosing ResuPro as their growth platform.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold transition-all hover:shadow-xl"
              style={{ color: '#2563eb' }}
            >
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
