'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const services = [
  {
    title: 'Driveway Paving',
    desc: 'New installs or full replacements. We handle the base prep, grading, and compaction right — that\'s why our driveways last.',
    icon: '🛣️',
    img: '/service-driveway.jpg',
  },
  {
    title: 'Parking Lots',
    desc: 'We\'ve paved lots for churches, HOAs, strip malls, and warehouses. Full install, patching, or just striping — we do it all.',
    icon: '🏢',
    img: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600&q=80',
  },
  {
    title: 'Sealcoating & Repairs',
    desc: 'Cracks turn into potholes fast. Seal it now and save yourself a full repave later. We\'re quick and we don\'t cut corners.',
    icon: '🔧',
    img: '/service-sealcoating.jpg',
  },
  {
    title: 'Concrete Work',
    desc: 'Sidewalks, curbs, aprons, steps. We work with concrete too — same crew, same standard of work.',
    icon: '🏗️',
    img: '/service-concrete.jpg',
  },
];

const testimonials = [
  {
    name: 'Marcus J.',
    location: 'Glen Burnie, MD',
    platform: 'Google',
    quote: 'Called on a Monday, they came out Tuesday to look at it, had a quote by end of day. Work was done by Thursday. Driveway looks great and they cleaned up everything. Would definitely call them again.',
    rating: 5,
    avatar: 'M',
  },
  {
    name: 'Denise W.',
    location: 'Pasadena, MD',
    platform: 'Google',
    quote: 'My driveway had been cracked for years. Finally just called them and it was way more affordable than I expected. They sealed it, filled the cracks, and it\'s held up through the whole winter. Happy I didn\'t wait any longer.',
    rating: 5,
    avatar: 'D',
  },
  {
    name: 'Robert H.',
    location: 'Annapolis, MD',
    platform: 'Google',
    quote: 'We needed our church parking lot redone. They gave us a fair price and finished it in two days. Very professional, crew was respectful, no mess left behind. Highly recommend for commercial too.',
    rating: 5,
    avatar: 'R',
  },
];

const faqs = [
  {
    q: 'How long does a new driveway take?',
    a: 'Most driveways we do in a day, sometimes two if it\'s a bigger job or we need to haul out the old asphalt. You\'ll want to stay off it for at least 24 hours after, and give it about 30 days to fully cure.',
  },
  {
    q: 'Is the estimate really free?',
    a: 'Yes, completely. No charge, no pressure. We come out, take a look, and give you a written number. If you don\'t want to move forward, no hard feelings.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We\'re based in Anne Arundel County and go all over Maryland. We also do jobs in parts of Virginia and DC. Call us and we\'ll tell you if we can get to you.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. MHIC #150710, fully insured. We\'ll send you the certificate before we start if you need it.',
  },
  {
    q: 'How do I know if I need a full repave or just sealcoating?',
    a: 'If your driveway has small cracks and fading color, sealcoating usually handles it. If you\'ve got big cracks, low spots, or chunks missing — that\'s when a repave makes more sense. We\'ll tell you honestly when we come out.',
  },
];

const serviceAreas = [
  'Anne Arundel County','Annapolis','Glen Burnie','Pasadena',
  'Severna Park','Arnold','Odenton','Millersville','Crownsville',
  'Hanover','Linthicum','Baltimore City','Howard County','Prince George\'s County',
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <Image
          src="/services-hero.jpg"
          alt="Fresh asphalt driveway paving"
          fill priority
          className={styles.heroBg}
          unoptimized
        />
        <div className={`container ${styles.heroContent}`}>
          {/* Left */}
          <div className={styles.heroLeft}>
            <div className={styles.ratingBadge}>
              <span className={styles.starsInline}>★★★★★</span>
              <span>Top-rated paving in Anne Arundel County</span>
            </div>

            <h1 className={styles.heroTitle}>
              Your driveway,<br />
              done right —<br />
              <span className={styles.heroAccent}>the first time.</span>
            </h1>

            <p className={styles.heroSub}>
              Family-owned paving out of Anne Arundel County. We do driveways, parking lots, sealcoating, and concrete work across all of Maryland. No middlemen, no subcontractors — just us.
            </p>

            <ul className={styles.heroBullets}>
              <li>✓ Free estimates, written quote same day</li>
              <li>✓ We prep the base properly — that's where most companies cut corners</li>
              <li>✓ Residential & commercial — driveways to full parking lots</li>
            </ul>

            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn-primary">Get a Free Estimate →</Link>
              <a href="tel:4438751714" className={styles.callBtn}>
                <span className={styles.callIcon}>📞</span>
                Call (443) 875-1714
              </a>
              <a href="sms:4438751714" className={styles.textBtn}>
                💬 Text Us
              </a>
            </div>

            <div className={styles.locationBadge}>
              <div className={styles.locationIcon}>📍</div>
              <div>
                <strong>Anne Arundel County, MD</strong>
                <span>Serving MD, Northern VA & DC</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className={styles.heroForm}>
            <div className={styles.formHeader}>
              <h3>Get a Free Quote</h3>
              <p>We usually respond within the hour</p>
            </div>
            {sent ? (
              <div className={styles.formSent}>
                <span>✅</span>
                <p>Got it! We'll be in touch shortly.<br/>Or call us now: <a href="tel:4438751714">(443) 875-1714</a></p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className={styles.form}>
                <input type="text" placeholder="Your name" value={form.name}
                  onChange={e => setForm(p => ({...p, name: e.target.value}))} />
                <input type="tel" placeholder="Phone number" value={form.phone}
                  onChange={e => setForm(p => ({...p, phone: e.target.value}))} />
                <input type="email" placeholder="Email (optional)" value={form.email}
                  onChange={e => setForm(p => ({...p, email: e.target.value}))} />
                <textarea placeholder="Tell us about your project — driveway, parking lot, repairs, etc." rows={3} value={form.message}
                  onChange={e => setForm(p => ({...p, message: e.target.value}))} />
                <button type="submit" className={styles.formBtn}>
                  Send Request
                </button>
                <a href="tel:4438751714" className={styles.formCall}>
                  Or just call: (443) 875-1714
                </a>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className={styles.trustBar}>
        <div className={`container ${styles.trustInner}`}>
          {[
            { n: '15+', l: 'Years paving in Maryland' },
            { n: '600+', l: 'Jobs completed' },
            { n: 'MHIC', l: '#150710 Licensed' },
            { n: '4.9★', l: 'Average Google rating' },
          ].map(s => (
            <div key={s.l} className={styles.trustStat}>
              <strong>{s.n}</strong>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.services} id="services">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">What we do</span>
            <h2 className="section-title">Our services</h2>
            <p className="section-subtitle">
              Driveways, parking lots, sealcoating, repairs, and concrete — all across Anne Arundel County and Maryland.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map(s => (
              <Link href="/services" key={s.title} className={`card ${styles.serviceCard}`}>
                <div className={styles.serviceImg}>
                  <Image src={s.img} alt={s.title} fill className={styles.servicePhoto} unoptimized />
                  <div className={styles.serviceOverlay} />
                  <div className={styles.serviceLabel}>
                    <span>{s.title}</span>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
                <div className={styles.serviceBody}>
                  <p>{s.desc}</p>
                  <span className={styles.serviceLearn}>Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:40}}>
            <Link href="/services" className="btn-outline-dark">View all services</Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.howItWorks}>
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">How it works</span>
            <h2 className="section-title">Simple from start to finish</h2>
          </div>
          <div className={styles.stepsGrid}>
            {[
              { step: '1', icon: '📞', title: 'Call or text us', desc: 'Reach out by phone, text, or the form on this page. We\'ll set up a time to come take a look — usually within a day or two.' },
              { step: '2', icon: '📋', title: 'We come out and quote it', desc: 'We visit, look at the job, and give you a written price. No vague ranges — a real number. Most estimates take less than 30 minutes.' },
              { step: '3', icon: '✅', title: 'We get it done', desc: 'We show up when we said we would. Do the job right. Clean up when we\'re done. That\'s it.' },
            ].map(s => (
              <div key={s.step} className={styles.stepCard}>
                <div className={styles.stepNum}>{s.step}</div>
                <div className={styles.stepIcon}>{s.icon}</div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:40}}>
            <Link href="/contact" className="btn-primary">Let's talk about your project →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.phoneBanner}>
        <Image
          src="/service-concrete.jpg"
          alt="Paving crew at work"
          fill
          className={styles.phoneBannerBg}
          unoptimized
        />
        <div className={styles.phoneBannerOverlay} />
        <div className={`container ${styles.phoneBannerInner}`}>
          <p className={styles.phoneBannerText}>Mon – Sat, 7am – 6pm. <strong>Give us a call anytime during business hours.</strong></p>
          <div className={styles.phoneBannerActions}>
            <a href="tel:4438751714" className={styles.phoneChip}>
              <div className={styles.phoneIconBox}>📞</div>
              <div>
                <strong>(443) 875-1714</strong>
                <span>Call for a free estimate</span>
              </div>
            </a>
            <a href="mailto:jandsonpavingllc@yahoo.com" className={styles.emailChip}>
              <span className={styles.emailIcon}>✉</span> jandsonpavingllc@yahoo.com
            </a>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className={styles.projects} id="projects">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">Our work</span>
            <h2 className="section-title">Recent projects</h2>
            <p className="section-subtitle">
              Over 600 jobs done across Maryland. Here's a sample of what we've been up to.
            </p>
          </div>
          <div className={styles.gallery}>
            {[
              '/proj-driveway-residential.jpg',
              '/proj-parking-lot.jpg',
              '/proj-sealcoating.jpg',
              '/proj-paving-crew.jpg',
              '/proj-crack-repair.jpg',
              '/proj-concrete.jpg',
            ].map((src, i) => (
              <div key={i} className={`card ${styles.galleryItem} ${i === 1 ? styles.galleryTall : ''}`}>
                <Image src={src} alt={`Project ${i+1}`} fill className={styles.galleryPhoto} unoptimized />
                <div className={styles.galleryHover}>View project</div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:40}}>
            <Link href="/projects" className="btn-outline-dark">See all projects</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={styles.testimonials} id="reviews">
        <div className="container">
          <div className={styles.testimonialHeader}>
            <div>
              <span className="section-eyebrow">Reviews</span>
              <h2 className="section-title">What customers say</h2>
            </div>
            <div className={styles.ratingBig}>
              <span className={styles.ratingScore}>4.9</span>
              <div>
                <div className={styles.starsRow}>★★★★★</div>
                <small>Google rating</small>
              </div>
            </div>
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={`card ${styles.testimonialCard}`}>
                <div className={styles.testimonialTop}>
                  <div className={styles.testimonialAvatar}>{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <p className={styles.testimonialPlatform}>{t.location} · {t.platform}</p>
                  </div>
                </div>
                <p className={styles.testimonialQuote}>"{t.quote}"</p>
                <div className={styles.starsRow}>{'★'.repeat(t.rating)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faq}>
        <div className={`container ${styles.faqInner}`}>
          <div className={styles.faqLeft}>
            <Image
              src="/service-sealcoating.jpg"
              alt="Asphalt paving crew"
              fill
              className={styles.faqPhoto}
              unoptimized
            />
            <div className={styles.faqBadge}>
              <span>Free estimates — same day response</span>
            </div>
          </div>
          <div className={styles.faqRight}>
            <span className="section-eyebrow">FAQ</span>
            <h2 className="section-title" style={{marginBottom:32}}>Questions we hear a lot</h2>
            <div className={styles.faqList}>
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
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section className={styles.serviceArea}>
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">Where we work</span>
            <h2 className="section-title">We cover all of Maryland</h2>
            <p className="section-subtitle">Based in Anne Arundel County. We travel — don't hesitate to call even if you're not on this list.</p>
          </div>
          <div className={styles.areaGrid}>
            {serviceAreas.map(a => (
              <div key={a} className={styles.areaChip}>
                <span>📍</span> {a}
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:48}}>
            <p style={{color:'#6b7280', marginBottom:16, fontSize:15}}>Not on the list? <strong>Call and ask</strong> — we may still be able to to get out to you.</p>
            <a href="tel:4438751714" className="btn-primary">Call (443) 875-1714</a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.finalCta}>
        <div className={`container ${styles.finalCtaInner}`}>
          <div>
            <h2 className={styles.finalCtaTitle}>Ready to get it done?</h2>
            <p className={styles.finalCtaSub}>Call, text, or fill out the form. We'll get back to you same day with a free, no-pressure estimate.</p>
          </div>
          <div className={styles.finalCtaBtns}>
            <Link href="/contact" className="btn-primary">Get a Free Estimate →</Link>
            <a href="tel:4438751714" className="btn-outline">📞 (443) 875-1714</a>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── STICKY MOBILE BAR ── */}
      <div className={styles.mobileBar}>
        <a href="tel:4438751714" className={styles.mobileBarBtn}>
          <span>📞</span> Call
        </a>
        <Link href="/contact" className={`${styles.mobileBarBtn} ${styles.mobileBarPrimary}`}>
          <span>✏️</span> Free Quote
        </Link>
        <a href="sms:4438751714" className={styles.mobileBarBtn}>
          <span>💬</span> Text
        </a>
      </div>
    </>
  );
}
