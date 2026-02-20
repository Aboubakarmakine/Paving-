import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaHeading}>Need paving service?</h2>
          <Link href="/contact" className="btn-outline">Request a quote →</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logoWrap}>
              <Image
                src="/logo.png"
                alt="J & Son Paving LLC"
                width={88}
                height={88}
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.tagline}>Crafting premium driveways and paving solutions across Anne Arundel County, Maryland.</p>
            <div className={styles.socials}>
              {['facebook','instagram','twitter','youtube'].map(s => (
                <a key={s} href="#" className={styles.social} aria-label={s}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>


          {/* Links */}
          <div className={styles.col}>
            <h5 className={styles.colTitle}>Company</h5>
            <Link href="/" className={styles.colLink}>Home</Link>
            <Link href="/about" className={styles.colLink}>About Us</Link>
            <Link href="/contact" className={styles.colLink}>Contact</Link>
          </div>

          <div className={styles.col}>
            <h5 className={styles.colTitle}>Other pages</h5>
            <Link href="/services" className={styles.colLink}>Services</Link>
            <Link href="/projects" className={styles.colLink}>Projects</Link>
            <Link href="/blog" className={styles.colLink}>Blog</Link>
          </div>

          <div className={styles.col}>
            <h5 className={styles.colTitle}>Services</h5>
            <Link href="/services" className={styles.colLink}>Driveway Paving</Link>
            <Link href="/services" className={styles.colLink}>Commercial Parking</Link>
            <Link href="/services" className={styles.colLink}>Sealcoating & Repairs</Link>
            <Link href="/services" className={styles.colLink}>Custom Solutions</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} JosCo Paving LLC. All rights reserved.</p>
          <p>MHIC #150710 — Licensed & Insured</p>
        </div>
      </footer>
    </>
  );
}
