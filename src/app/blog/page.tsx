import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — J & Son Paving LLC',
  description: 'Asphalt paving tips, sealcoating guides, and project insights from the J & Son Paving LLC team serving Anne Arundel County, Maryland.',
};

const posts = [
  {
    slug: 'when-to-sealcoat-driveway',
    title: 'When Should You Sealcoat Your Driveway?',
    excerpt: 'Sealcoating is one of the most cost-effective ways to extend your asphalt\'s life. But timing matters. Here\'s when to do it — and what happens if you wait too long.',
    date: 'Feb 10, 2026',
    category: 'Sealcoating',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600&q=80',
  },
  {
    slug: 'new-driveway-vs-resurface',
    title: 'New Asphalt vs. Resurfacing: Which Do You Need?',
    excerpt: 'Not every damaged driveway needs a full replacement. Learn the key differences between a new installation and resurfacing — and how to choose what\'s right for your property.',
    date: 'Jan 28, 2026',
    category: 'Driveways',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    slug: 'commercial-parking-lot-maintenance',
    title: 'Commercial Parking Lot Maintenance: A Complete Guide',
    excerpt: 'Your parking lot is the first impression customers get. Cracked, faded asphalt says the wrong thing. Here\'s a year-round maintenance plan to keep it looking professional.',
    date: 'Jan 15, 2026',
    category: 'Commercial',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600&q=80',
  },
  {
    slug: 'crack-filling-vs-patching',
    title: 'Crack Filling vs. Patching: What\'s the Difference?',
    excerpt: 'Cracks left untreated become potholes. Potholes become expensive repairs. Understanding the difference between crack filling and patching can save you thousands over time.',
    date: 'Jan 5, 2026',
    category: 'Repairs',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
  },
  {
    slug: 'maryland-winter-asphalt',
    title: 'How Maryland Winters Affect Your Asphalt (And What to Do)',
    excerpt: 'Freeze-thaw cycles, salt, and plowing all take a toll on asphalt. Here\'s how the Maryland winter affects your pavement — and how to protect your investment before spring.',
    date: 'Dec 20, 2025',
    category: 'Maintenance',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
  },
  {
    slug: 'how-long-does-asphalt-last',
    title: 'How Long Does Asphalt Last? (And How to Make It Last Longer)',
    excerpt: 'Well-installed asphalt can last 20–30 years with proper maintenance. Here\'s what affects your pavement\'s lifespan and the most important things you can do to extend it.',
    date: 'Dec 8, 2025',
    category: 'Education',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
  },
];

const categories = ['All', 'Driveways', 'Sealcoating', 'Commercial', 'Repairs', 'Maintenance', 'Education'];

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85"
          alt="Paving tips and guides"
          fill priority unoptimized
          className={styles.heroBg}
        />
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroEyebrow}>Knowledge Center</span>
          <h1 className={styles.heroTitle}>Paving Tips & Guides</h1>
          <p className={styles.heroSub}>
            Expert advice from our team — helping Maryland homeowners and property managers get the most out of their asphalt and concrete.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className={styles.featured}>
        <div className="container">
          <span className="section-eyebrow">Featured Article</span>
          <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
            <div className={styles.featuredImg}>
              <Image src={featured.img} alt={featured.title} fill className={styles.featuredPhoto} unoptimized />
              <span className={styles.featuredCategory}>{featured.category}</span>
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.postMeta}>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
              <span className={styles.readMore}>Read Article →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts grid */}
      <section className={styles.posts}>
        <div className="container">
          <div className={styles.postsHeader}>
            <h2 className="section-title">All articles</h2>
          </div>
          <div className={styles.postsGrid}>
            {rest.map(post => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className={`card ${styles.postCard}`}>
                <div className={styles.postImg}>
                  <Image src={post.img} alt={post.title} fill className={styles.postPhoto} unoptimized />
                  <span className={styles.postCategory}>{post.category}</span>
                </div>
                <div className={styles.postBody}>
                  <div className={styles.postMeta}>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <span className={styles.readMore}>Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className="section-title">Ready to get your project started?</h2>
            <p className="section-subtitle">Free estimates — same-day response. Call or fill out the form.</p>
          </div>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <Link href="/contact" className="btn-primary">Get a Free Estimate</Link>
            <a href="tel:4438751714" className="btn-outline-dark">📞 (443) 875-1714</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
