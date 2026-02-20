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
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Facebook">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Instagram">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="X (Twitter)">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="YouTube">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
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
