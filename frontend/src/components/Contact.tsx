'use client';
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ui/ScrollReveal';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface SubmitStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
  fieldErrors?: { field: string; message: string }[];
}

export function Contact() {
  const { t } = useLanguage();

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    service: 'Pilih Layanan',
    message: '',
  });

  const [status, setStatus] = useState<SubmitStatus>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: '' });

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: data.message });
        setForm({ name: '', email: '', service: 'Bimbingan Skripsi', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Gagal mengirim pesan.',
          fieldErrors: data.errors,
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Tidak dapat terhubung ke server. Periksa koneksi Anda.',
      });
    }
  };

  const getFieldError = (field: string) => {
    return status.fieldErrors?.find((e) => e.field === field)?.message;
  };

  return (
    <section id="kontak" className="px-4 md:px-16 py-20 bg-[var(--color-bg-light)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row neo-border neo-shadow overflow-visible bg-white relative">
          {/* Float decoration */}
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[var(--color-lavender)] neo-border neo-shadow z-20 rotate-45 hidden lg:block"></div>

          {/* Left: Form */}
          <div className="w-full lg:w-3/5 p-8 md:p-16 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-[var(--color-border)]">
            <ScrollReveal>
              <h2 className="font-display text-5xl font-black uppercase mb-4 rotate-[-1deg] inline-block bg-[var(--color-primary)] px-4 py-2 neo-border">
                Mulai Konsultasi
              </h2>
              <p className="font-body text-lg text-[var(--color-text-dark)] opacity-70 mb-10 font-bold italic">
                Ceritakan kebutuhan project Anda, kami siap membantu dengan solusi terbaik.
              </p>
            </ScrollReveal>

            {/* Success / Error banner */}
            {status.type === 'success' && (
              <div className="mb-8 p-4 bg-[var(--color-mint)] border-[4px] border-[var(--color-border)] font-display font-black text-[var(--color-text-dark)]">
                ✅ {status.message}
              </div>
            )}
            {status.type === 'error' && !status.fieldErrors && (
              <div className="mb-8 p-4 bg-[var(--color-accent)] border-[4px] border-[var(--color-border)] font-display font-black text-white">
                ❌ {status.message}
              </div>
            )}

            <ScrollReveal delay={100}>
              <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                {/* Name + Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="font-display font-black uppercase block mb-2 text-[var(--color-text-dark)]">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-white border-[4px] border-[var(--color-border)] p-4 font-body font-bold focus:bg-[var(--color-mint)] focus:outline-none transition-colors"
                      placeholder="John Doe"
                      required
                    />
                    {getFieldError('name') && (
                      <p className="mt-1 text-sm font-bold text-red-600">{getFieldError('name')}</p>
                    )}
                  </div>
                  <div>
                    <label className="font-display font-black uppercase block mb-2 text-[var(--color-text-dark)]">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-white border-[4px] border-[var(--color-border)] p-4 font-body font-bold focus:bg-[var(--color-accent)] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                    {getFieldError('email') && (
                      <p className="mt-1 text-sm font-bold text-red-600">{getFieldError('email')}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="font-display font-black uppercase block mb-2 text-[var(--color-text-dark)]">Kategori Layanan</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white border-[4px] border-[var(--color-border)] p-4 font-body font-bold focus:bg-[var(--color-lavender)] focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option>Website & Mobile App</option>
                    <option>IoT Solutions</option>
                    <option>Bimbingan Skripsi & Tugas Akhir</option>
                    <option>Jurnal & Paper</option>
                    <option>Artificial Intelligence</option>
                    <option>Design & Editing</option>
                    <option>Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="font-display font-black uppercase block mb-2 text-[var(--color-text-dark)]">Detail Pesan</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-white border-[4px] border-[var(--color-border)] p-4 font-body font-bold focus:bg-[var(--color-primary)] focus:outline-none transition-colors resize-none"
                    placeholder="Deskripsikan project Anda..."
                    required
                  ></textarea>
                  {getFieldError('message') && (
                    <p className="mt-1 text-sm font-bold text-red-600">{getFieldError('message')}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className={`bg-[var(--color-text-dark)] text-white border-[4px] border-[var(--color-border)] px-12 py-6 font-display font-black uppercase text-xl neo-shadow hover:neo-shadow-hover active:neo-shadow-active transition-all self-start rotate-1 ${
                    status.type === 'loading' ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  {status.type === 'loading' ? 'Mengirim...' : 'Kirim Sekarang'}
                </button>
              </form>
            </ScrollReveal>
          </div>

          {/* Right: Info */}
          <div className="w-full lg:w-2/5 bg-[var(--color-text-dark)] p-8 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 0)', backgroundSize: '24px 24px' }}></div>

            <ScrollReveal delay={150} className="relative z-10">
              <h3 className="font-display text-4xl font-black uppercase mb-16 text-[var(--color-primary)]">Langsung Saja!</h3>

              <div className="flex flex-col gap-12">
                <div className="flex items-start gap-8">
                  <div className="bg-[var(--color-mint)] border-[4px] border-white p-4 text-[var(--color-text-dark)] -rotate-6 shrink-0">
                    <span className="material-symbols-outlined text-4xl block" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                  <div>
                    <h4 className="font-display font-black uppercase mb-2 text-xl">Lokasi Kantor</h4>
                    <p className="font-body font-bold opacity-80 leading-relaxed">Surabaya, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start gap-8">
                  <div className="bg-[var(--color-accent)] border-[4px] border-white p-4 text-[var(--color-text-dark)] rotate-6 shrink-0">
                    <span className="material-symbols-outlined text-4xl block" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                  </div>
                  <div>
                    <h4 className="font-display font-black uppercase mb-2 text-xl">Email Kami</h4>
                    <p className="font-body font-bold opacity-80">jawab.innn@gmail.com</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250} className="relative z-10 mt-16">
              <a
                href="https://wa.me/6285198143231"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full bg-[#25D366] text-white border-[4px] border-white px-8 py-6 font-display font-black uppercase text-center shadow-[6px_6px_0px_0px_#FFFFFF] hover:translate-y-2 hover:shadow-[2px_2px_0px_0px_#FFFFFF] transition-all items-center justify-center gap-6 text-xl"
              >
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                WhatsApp Kami
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
