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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              <h3>Book a Free Estimate</h3>
              <p>Pick a time that works for you. It's quick and easy!</p>
            </div>
            <iframe 
              src="https://calendly.com/jnsonpaving-info/30min" 
              width="100%" 
              height="700" 
              frameBorder="0" 
              style={{ borderRadius: '12px', border: '1px solid #e5e7eb', marginTop: '24px' }}
            ></iframe>
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
