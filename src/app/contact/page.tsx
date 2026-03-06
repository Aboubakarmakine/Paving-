'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import type { Metadata } from 'next';

// Note: Metadata not exported from 'use client' — handled via layout
// Contact page

const faqs = [
  { q: 'How long does a free estimate take?', a: 'We\'ll visit your site and deliver a written estimate within 24 hours — usually same day.' },
  { q: 'What areas do you serve?', a: 'Anne Arundel County, all of Maryland, Northern Virginia, and Washington D.C.' },
  { q: 'Do you pave in winter?', a: 'We pave year-round when temperatures permit. We\'ll let you know if weather requires rescheduling.' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/jandsonpavingllc@yahoo.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "New Estimate Request (Contact Page)",
          name: form.name,
          phone: form.phone,
          email: form.email || "Not provided",
          address: form.address || "Not provided",
          service: form.service || "Not specified",
          message: form.message || "Not provided",
        })
      });
      if (res.ok) {
        setSent(true);
      } else {
        alert("There was an issue sending your request. Please call us directly at (443) 875-1714.");
      }
    } catch (err) {
      alert("Connection error. Please call us directly at (443) 875-1714.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80"
          alt="Contact J & Son Paving LLC"
          fill priority unoptimized
          className={styles.heroBg}
        />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroEyebrow}>Free Estimates • Same-Day Response</span>
          <h1 className={styles.heroTitle}>Get a Free Estimate</h1>
          <p className={styles.heroSub}>
            Call, text, or fill out the form. We serve all of Maryland — fast, fair, and professional.
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:4438751714" className="btn-primary">📞 Call (443) 875-1714</a>
            <a href="sms:4438751714" className="btn-outline">💬 Text Us</a>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className={styles.contactSection}>
        <div className={`container ${styles.contactGrid}`}>

          {/* Info cards */}
          <div className={styles.infoCol}>
            <h2 className={styles.infoTitle}>Reach us directly</h2>

            {[
              {
                icon: '📞',
                label: 'Phone — Click to Call',
                value: '(443) 875-1714',
                href: 'tel:4438751714',
              },
              {
                icon: '💬',
                label: 'Text Message',
                value: 'Text us anytime',
                href: 'sms:4438751714',
              },
              {
                icon: '✉️',
                label: 'Email',
                value: 'jandsonpavingllc@yahoo.com',
                href: 'mailto:jandsonpavingllc@yahoo.com',
              },
              {
                icon: '📍',
                label: 'Service Area',
                value: 'Anne Arundel County & all of Maryland',
                href: null,
              },
              {
                icon: '🕐',
                label: 'Hours',
                value: 'Mon – Sat: 7am – 6pm',
                href: null,
              },
            ].map(c => (
              <div key={c.label} className={styles.infoCard}>
                <div className={styles.infoIcon}>{c.icon}</div>
                <div>
                  <p className={styles.infoLabel}>{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className={styles.infoValue}>{c.value}</a>
                  ) : (
                    <p className={styles.infoValue}>{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className={styles.licBadge}>
              <span>🏆</span>
              <span><strong>MHIC Licensed #150710</strong> — Fully Bonded & Insured</span>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h3>Request a Free Estimate</h3>
              <p>We respond same-day, usually within the hour.</p>
            </div>
            {sent ? (
              <div className={styles.formSent}>
                <div className={styles.sentIcon}>✅</div>
                <h4>Request Received!</h4>
                <p>We'll be in touch shortly. For immediate help, call <a href="tel:4438751714">(443) 875-1714</a>.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={styles.form}
              >
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Full Name *</label>
                    <input required type="text" placeholder="John Smith"
                      value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Phone *</label>
                    <input required type="tel" placeholder="(443) 000-0000"
                      value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>Email Address</label>
                  <input type="email" placeholder="you@email.com"
                    value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} />
                </div>
                <div className={styles.formGroup}>
                  <label>Property Address</label>
                  <input type="text" placeholder="123 Main St, Annapolis, MD"
                    value={form.address} onChange={e => setForm(p => ({...p, address: e.target.value}))} />
                </div>
                <div className={styles.formGroup}>
                  <label>Service Needed</label>
                  <select value={form.service} onChange={e => setForm(p => ({...p, service: e.target.value}))}>
                    <option value="">Select a service…</option>
                    <option>Driveway Paving (New Installation)</option>
                    <option>Driveway Repaving / Resurfacing</option>
                    <option>Commercial Parking Lot</option>
                    <option>Sealcoating</option>
                    <option>Crack Filling / Repairs</option>
                    <option>Concrete Work</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Project Details</label>
                  <textarea rows={4} placeholder="Describe your project — size, current condition, anything else we should know…"
                    value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} />
                </div>
                <button type="submit" className={styles.formBtn} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending Request...' : 'Send Request for Free Estimate →'}
                </button>
                <p className={styles.formNote}>
                  Or call us directly: <a href="tel:4438751714" className={styles.formPhone}>(443) 875-1714</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className="container" style={{maxWidth: 720}}>
          <div className="section-header-center">
            <span className="section-eyebrow">Questions</span>
            <h2 className="section-title">Common questions</h2>
          </div>
          {faqs.map((f, i) => (
            <div key={i} className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ''}`}>
              <button className={styles.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{f.q}</span>
                <svg className={styles.faqChevron} width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div className={styles.faqA}><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
