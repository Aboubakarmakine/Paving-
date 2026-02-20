import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services — J & Son Paving LLC | Driveway, Parking Lots & Sealcoating',
  description: 'Driveway paving, commercial parking lots, sealcoating, crack filling, and concrete work. Serving Anne Arundel County and all of Maryland.',
};

const services = [
  {
    title: 'Driveway Paving',
    desc: 'Whether you need a brand-new driveway or want to replace an old one, we handle the whole job — grading, base prep, compaction, and clean edges. Most driveways we knock out in a day.',
    features: ['New installs & full replacements', 'Proper base prep & compaction', 'Clean edging and drainage grading', 'Residential & commercial driveways'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
    color: '#f9fafb',
  },
  {
    title: 'Parking Lots',
    desc: 'We\'ve paved parking lots for churches, strip malls, HOAs, schools, and warehouses across Maryland. Full installs, overlays, patching, or just striping — we do it all and we do it clean.',
    features: ['Full installs & resurfacing', 'Line striping & re-striping', 'Speed bumps & concrete curbing', 'ADA accessibility layouts'],
    img: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=85',
    color: '#fff',
  },
  {
    title: 'Sealcoating & Repairs',
    desc: 'Got cracks? Don\'t wait until they\'re potholes. Sealcoating now saves you money on a full repave later. We fill the cracks, seal the surface, and it\'s usually done in one visit.',
    features: ['Crack filling & pothole repair', 'Professional sealcoating', 'UV & moisture protection', 'Maintenance plans available'],
    img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=800&q=85',
    color: '#f9fafb',
  },
  {
    title: 'Concrete Work',
    desc: 'Same crew, same standard. We pour concrete sidewalks, aprons, curbs, and steps. If your project needs both asphalt and concrete, we handle it all in one job.',
    features: ['Sidewalks & walkways', 'Driveway aprons & transitions', 'Curbing & edging', 'Steps & stoops'],
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=85',
    color: '#fff',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85"
          alt="Paving services Maryland"
          fill
          priority
          className={styles.heroBg}
          unoptimized
        />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroEyebrow}>What we do</span>
          <h1 className={styles.heroTitle}>Our Services</h1>
          <p className={styles.heroSub}>
            Driveways, parking lots, sealcoating, repairs, and concrete — done right, throughout all of Maryland.
          </p>
          <Link href="/contact" className="btn-primary">Get a Free Estimate →</Link>
        </div>
      </section>

      {/* Services list */}
      <section className={styles.servicesList}>
        <div className="container">
          {services.map((s, i) => (
            <div key={s.title} className={`${styles.serviceRow} ${i % 2 === 1 ? styles.serviceRowReverse : ''}`}>
              <div className={styles.serviceImgWrap}>
                <Image src={s.img} alt={s.title} fill className={styles.serviceImg} unoptimized />
              </div>
              <div className={styles.serviceText} style={{background: s.color}}>
                <span className="section-eyebrow">Service 0{i+1}</span>
                <h2 className="section-title">{s.title}</h2>
                <p className="section-subtitle">{s.desc}</p>
                <ul className={styles.featureList}>
                  {s.features.map(f => (
                    <li key={f}>
                      <span className={styles.featureCheck}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary">Get a Quote →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section className={styles.trustBar}>
        <div className={`container ${styles.trustInner}`}>
          {[
            { icon: '🏆', text: 'MHIC Licensed #150710' },
            { icon: '🛡️', text: 'Fully insured & bonded' },
            { icon: '⭐', text: '4.9-star Google rating' },
            { icon: '📅', text: 'Free estimates — no pressure' },
          ].map(t => (
            <div key={t.text} className={styles.trustItem}>
              <span className={styles.trustIcon}>{t.icon}</span>
              <span>{t.text}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
