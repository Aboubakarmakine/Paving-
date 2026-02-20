'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo — badge only, name is inside the badge */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="J & Son Paving LLC"
            width={80}
            height={80}
            className={styles.logoImg}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.navLink} ${pathname === l.href ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className={styles.cta}>
          <a href="tel:4438751714" className={styles.phone}>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            (443) 875-1714
          </a>
          <Link href="/contact" className="btn-primary">Contact us</Link>
        </div>

        {/* Mobile hamburger */}
        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={open ? styles.burgerOpen : ''}></span>
          <span className={open ? styles.burgerOpen : ''}></span>
          <span className={open ? styles.burgerOpen : ''}></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        {links.map(l => (
          <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="btn-primary" onClick={() => setOpen(false)} style={{margin:'8px 24px 24px'}}>
          Contact us
        </Link>
      </div>
    </header>
  );
}
