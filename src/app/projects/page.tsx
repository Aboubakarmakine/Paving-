import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work — J & Son Paving LLC | Project Gallery',
  description: 'Browse completed paving projects by J & Son Paving LLC — residential driveways, commercial parking lots, sealcoating, and concrete work across Anne Arundel County, Maryland.',
};

const projects = [
  {
    src: '/enhanced_IMG_2588.png',
    label: 'Residential Driveway — Annapolis, MD',
    category: 'Driveway',
    detail: 'Full removal & new asphalt install',
  },
  {
    src: '/enhanced_IMG_1032.png',
    label: 'Commercial Parking Lot — Glen Burnie, MD',
    category: 'Commercial',
    detail: 'Full pave with line striping',
  },
  {
    src: '/recent-2.png',
    label: 'Private Driveway — Arnold, MD',
    category: 'Driveway',
    detail: 'New install, long curved driveway',
  },
  {
    src: '/enhanced_IMG_2629.png',
    label: 'Sealcoating — Pasadena, MD',
    category: 'Sealcoating',
    detail: 'Full sealcoat + crack filling',
  },
  {
    src: '/enhanced_IMG_1509.png',
    label: 'Crack Repair — Crownsville, MD',
    category: 'Repairs',
    detail: 'Pothole & crack fill, same-day service',
  },
  {
    src: '/recent-3.png',
    label: 'Office Parking Lot — Hanover, MD',
    category: 'Commercial',
    detail: 'Fresh overlay with new striping',
  },
  {
    src: '/enhanced_recent_1.png',
    label: 'Street Paving — Severna Park, MD',
    category: 'Asphalt',
    detail: 'Full-depth asphalt installation',
  },
  {
    src: '/enhanced_93600268.png',
    label: 'Concrete Apron — Millersville, MD',
    category: 'Concrete',
    detail: 'Driveway apron & sidewalk pour',
  },
  {
    src: '/70836155096__B0CD074C-AECD-40B6-B3F4-81FC9A36BDB2.jpeg',
    label: 'New Driveway — Odenton, MD',
    category: 'Driveway',
    detail: 'Complete install, same-week turnaround',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <Image
          src="/enhanced_IMG_1032.png"
          alt="Commercial parking lot paving Maryland"
          fill priority
          className={styles.heroBg}
          unoptimized
        />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroEyebrow}>Our work</span>
          <h1 className={styles.heroTitle}>Project Gallery</h1>
          <p className={styles.heroSub}>
            Over 600 completed jobs across Maryland — driveways, parking lots, sealcoating, and concrete. Here&apos;s a look at what we do.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className={styles.statsRow}>
        <div className={`container ${styles.statsInner}`}>
          {[
            { n: '600+', l: 'Jobs completed' },
            { n: '15+', l: 'Years in Maryland' },
            { n: 'MHIC', l: '#150710 Licensed' },
            { n: '4.9★', l: 'Google rating' },
          ].map(s => (
            <div key={s.l} className={styles.stat}>
              <strong>{s.n}</strong>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <section className={styles.gallery}>
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">Project gallery</span>
            <h2 className="section-title">Recent work</h2>
            <p className="section-subtitle">
              Every project is different. Hover any photo for details.
            </p>
          </div>
          <div className={styles.grid}>
            {projects.map((p, i) => (
              <div key={i} className={`${styles.gridItem} ${i === 0 || i === 5 ? styles.gridWide : ''}`}>
                <Image src={p.src} alt={p.label} fill className={styles.gridPhoto} />
                <div className={styles.gridHover}>
                  <span className={styles.gridCategory}>{p.category}</span>
                  <span className={styles.gridLabel}>{p.label}</span>
                  <span className={styles.gridDetail}>{p.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className="section-title">Want results like these?</h2>
            <p className="section-subtitle">Call or fill out the form and we&apos;ll come out, take a look, and give you a written estimate — no pressure.</p>
          </div>
          <Link href="/contact" className="btn-primary">Get a Free Estimate →</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
