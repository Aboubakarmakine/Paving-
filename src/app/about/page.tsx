import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — J & Son Paving LLC',
  description: 'Learn about J & Son Paving LLC — 20+ years of professional asphalt paving experience serving Anne Arundel County and greater Maryland.',
};

const team = [
  { name: 'Jose Hernandez', role: 'Founder & CEO', avatar: 'J' },
  { name: 'Henry Hernandez', role: 'Operations Manager', avatar: 'H' },
  { name: 'Salvador Hernandez', role: 'Lead Foreman', avatar: 'S' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <Image
          src="/enhanced_93600268.png"
          alt="About J & Son Paving LLC"
          fill priority
          className={styles.heroBg}
          unoptimized
        />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroEyebrow}>Our Story</span>
          <h1 className={styles.heroTitle}>About Us</h1>
          <p className={styles.heroSub}>
            Two decades of trust, craftsmanship, and dedication to every square foot of asphalt we lay across Maryland.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className={styles.story}>
        <div className={`container ${styles.storyInner}`}>
          <div className={styles.storyImg}>
            <Image
              src="/enhanced_recent_1.png"
              alt="Our paving work"
              fill
              className={styles.storyPhoto}
              unoptimized
            />
          </div>
          <div className={styles.storyText}>
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="section-title">A family-owned paving company built on trust</h2>
            <p className="section-subtitle" style={{marginTop: 16}}>
              J & Son Paving LLC was founded on a simple belief: every property deserves a driveway or surface that's not only functional, but beautiful. What started as a father-and-son operation has grown into one of Anne Arundel County's most trusted paving contractors.
            </p>
            <p style={{fontSize: 16, color: '#6b7280', lineHeight: 1.7, marginTop: 12}}>
              With over 20 years of hands-on experience and more than 3,000 completed projects, we've earned a reputation for precision, professionalism, and staying true to our word. We serve residential and commercial clients throughout Maryland, Virginia, and Washington D.C.
            </p>
            <div className={styles.licenseBox}>
              <div className={styles.licenseIcon}>🏆</div>
              <div>
                <strong>MHIC Licensed #150710</strong>
                <p>Maryland Home Improvement Contractor — Fully Bonded & Insured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          {[
            { n: '20+', l: 'Years in Business' },
            { n: '3,000+', l: 'Projects Completed' },
            { n: '3', l: 'States Served' },
            { n: '4.9★', l: 'Customer Rating' },
          ].map(s => (
            <div key={s.l} className={styles.statCard}>
              <strong>{s.n}</strong>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">Our Values</span>
            <h2 className="section-title">Why clients choose us</h2>
            <p className="section-subtitle">We don't just pave surfaces — we build lasting relationships built on integrity and results.</p>
          </div>
          <div className={styles.valueGrid}>
            {[
              { icon: '🎯', title: 'Precision Craftsmanship', desc: 'Every project is completed with exacting standards — from grading and base prep to final compaction and clean-up.' },
              { icon: '🤝', title: 'Transparent Process', desc: 'We walk you through every step, provide detailed estimates, and never hit you with surprise costs.' },
              { icon: '⏱️', title: 'On Time, Every Time', desc: 'We respect your schedule and property. Projects are completed on deadline, with minimal disruption.' },
              { icon: '🛡️', title: 'Fully Licensed & Insured', desc: 'Your peace of mind is our priority. We carry comprehensive liability insurance and are MHIC licensed.' },
              { icon: '🌿', title: 'Environmentally Conscious', desc: 'We use sustainable practices and recycled asphalt materials wherever possible to reduce our footprint.' },
              { icon: '⭐', title: 'Quality Guaranteed', desc: 'We stand behind every project we complete. If you\'re not satisfied, we make it right — period.' },
            ].map(v => (
              <div key={v.title} className={`card ${styles.valueCard}`}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h4 className={styles.valueTitle}>{v.title}</h4>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.team}>
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">Meet the Team</span>
            <h2 className="section-title">The people behind the work</h2>
          </div>
          <div className={styles.teamGrid}>
            {team.map(m => (
              <div key={m.name} className={`card ${styles.teamCard}`}>
                <div className={styles.teamAvatar}>{m.avatar}</div>
                <strong className={styles.teamName}>{m.name}</strong>
                <span className={styles.teamRole}>{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
