import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import type { Metadata } from 'next';

const posts: Record<string, {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  img: string;
  body: { heading?: string; text: string }[];
}> = {
  'when-to-sealcoat-driveway': {
    slug: 'when-to-sealcoat-driveway',
    title: 'When Should You Sealcoat Your Driveway?',
    excerpt: "Sealcoating is one of the most cost-effective ways to extend your asphalt's life. But timing matters. Here's when to do it — and what happens if you wait too long.",
    date: 'Feb 10, 2026',
    category: 'Sealcoating',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=1200&q=85',
    body: [
      { text: "Sealcoating is like sunscreen for your driveway. Once asphalt is laid and cured, it starts to oxidize — the sun dries out the oils in the mix, causing it to shrink, crack, and fade. Sealcoating slows all of that down significantly." },
      { heading: 'The right timing', text: "New asphalt should cure for at least 6–12 months before first sealcoat. After that, plan on sealing every 2–3 years depending on traffic, sun exposure, and how well you maintain it. Maryland summers are tough on asphalt — UV and heat accelerate oxidation fast." },
      { heading: "Signs it's time", text: "If your driveway has gone gray (instead of black), has minor surface cracks, or feels brittle underfoot, it's time. You don't want to wait until cracks are wide enough to let water in — that's when freeze-thaw cycles turn small cracks into big potholes." },
      { heading: "What happens if you wait?", text: "Water gets into the cracks, freezes in winter, expands, and breaks the asphalt from the inside. What started as a $300 sealcoat job turns into a $3,000 patching or repaving job. We see it every spring — driveways that could've been saved for a couple hundred dollars." },
      { heading: 'What we recommend', text: "Sealcoat in late spring or early fall when temperatures are consistently above 55°F. Avoid sealing right before heavy rain — sealant needs 24–48 hours to cure. If you're not sure whether your driveway needs it, give us a call. We'll take a look and give you an honest answer — no pressure." },
    ],
  },
  'new-driveway-vs-resurface': {
    slug: 'new-driveway-vs-resurface',
    title: 'New Asphalt vs. Resurfacing: Which Do You Need?',
    excerpt: "Not every damaged driveway needs a full replacement. Learn the key differences between a new installation and resurfacing — and how to choose what's right for your property.",
    date: 'Jan 28, 2026',
    category: 'Driveways',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
    body: [
      { text: "One of the most common questions we get is whether a driveway needs full replacement or if resurfacing will do the job. The honest answer depends on the condition of what's already there." },
      { heading: 'Resurfacing (overlay)', text: "Resurfacing means we grind down or pave over the existing asphalt with a fresh layer — usually 1.5 to 2 inches thick. It works well if the base is still solid. If your driveway has surface cracks, minor potholes, or is just rough and faded, resurfacing is usually the right call. It's faster and costs significantly less than a full tear-out." },
      { heading: 'Full replacement', text: "If the base layer (the gravel/stone foundation under the asphalt) has failed, resurfacing is a temporary fix at best. Signs of base failure include large alligator cracking (that web-like pattern), areas that sink or flex when you drive over them, and drainage problems that don't go away." },
      { heading: 'How we assess it', text: "We'll probe the existing asphalt, check for soft spots, and look at drainage patterns before recommending anything. We'd rather give you an honest assessment upfront than do a resurfacing job that fails in two years." },
      { heading: 'The cost difference', text: "Resurfacing typically runs 40–60% less than a full replacement. For most driveways in decent structural shape, it's the smart, cost-effective option. For driveways with serious base issues, replacement is the only real fix — and doing it right saves you money long-term." },
    ],
  },
  'commercial-parking-lot-maintenance': {
    slug: 'commercial-parking-lot-maintenance',
    title: 'Commercial Parking Lot Maintenance: A Complete Guide',
    excerpt: "Your parking lot is the first impression customers get. Cracked, faded asphalt says the wrong thing. Here's a year-round maintenance plan to keep it looking professional.",
    date: 'Jan 15, 2026',
    category: 'Commercial',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1200&q=85',
    body: [
      { text: "A well-maintained parking lot tells your customers they're in good hands before they even walk through the door. A cracked, faded lot with faded striping does the opposite — it makes your business look run-down, even if everything inside is top-notch." },
      { heading: 'Spring (March–May)', text: "Post-winter inspection is critical. Maryland winters are rough — salt, plowing, and freeze-thaw cycles do major damage. Walk the lot and note any new cracks, heaves, or pothole formation. Address them before they spread." },
      { heading: 'Summer (June–August)', text: "Peak paving season. This is the best time to schedule crack filling, sealcoating, and any patching. Temps above 70°F help materials cure properly. Restriping faded lines also improves safety and ADA compliance." },
      { heading: 'Fall (September–November)', text: "Prep for winter. Fill any open cracks before water gets in and freezes. Clean drains and catch basins. Make sure your lot is in solid shape before the first frost — repairs in below-freezing temps are harder and less effective." },
      { heading: 'Winter (December–February)', text: "Monitor and protect. Use sand instead of salt where possible — salt accelerates asphalt degradation. If plowing, set the blade slightly above the asphalt surface to avoid gouging. Report new damage as you see it so you can address it in spring." },
      { heading: 'Striping and ADA compliance', text: "Beyond maintenance, fresh striping keeps your lot organized and legally compliant. ADA-compliant spaces and signage aren't optional — violations carry real fines. We handle full restriping as part of our commercial services." },
    ],
  },
  'crack-filling-vs-patching': {
    slug: 'crack-filling-vs-patching',
    title: "Crack Filling vs. Patching: What's the Difference?",
    excerpt: "Cracks left untreated become potholes. Potholes become expensive repairs. Understanding the difference between crack filling and patching can save you thousands over time.",
    date: 'Jan 5, 2026',
    category: 'Repairs',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85',
    body: [
      { text: "Asphalt repairs aren't one-size-fits-all. The right fix depends on what type of damage you have. Getting it wrong means spending money on a repair that doesn't last." },
      { heading: 'Crack filling', text: "Crack filling uses a hot-pour rubberized compound to seal cracks that are between ¼ inch and 1 inch wide. It's designed for cracks that are still structurally sound — meaning the asphalt on both sides is stable. The sealant keeps water out, which is the main goal. It's fast, affordable, and very effective when done at the right stage." },
      { heading: 'Patching', text: "Patching is for areas where the asphalt has actually broken down — potholes, alligator cracking, or sections where the base has failed. We remove the damaged material, repair the base if needed, and compact fresh asphalt back in. Done right, a patch blends in and holds up for years." },
      { heading: 'Which one do you need?', text: "If you have linear cracks (straight or slightly wandering lines) with solid asphalt on both sides — crack filling. If you have a pothole, a sunken area, or crumbling/loose asphalt — patching. If you have alligator cracking across a large area, the base is likely failing and you may need more extensive work." },
      { heading: 'Don\'t wait', text: "Both repairs get more expensive the longer you wait. A $150 crack fill job today can prevent a $1,500 patch job next spring. If you're not sure what you're dealing with, take a photo and send it to us — we can usually tell right away." },
    ],
  },
  'maryland-winter-asphalt': {
    slug: 'maryland-winter-asphalt',
    title: 'How Maryland Winters Affect Your Asphalt (And What to Do)',
    excerpt: "Freeze-thaw cycles, salt, and plowing all take a toll on asphalt. Here's how the Maryland winter affects your pavement — and how to protect your investment before spring.",
    date: 'Dec 20, 2025',
    category: 'Maintenance',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85',
    body: [
      { text: "Maryland sits in a tough spot climatically. We get enough winter to cause serious freeze-thaw damage but rarely enough to keep crews off the roads, which means asphalt takes a beating from both weather and heavy salt/plow use." },
      { heading: 'Freeze-thaw cycles', text: "Water finds its way into small cracks in the asphalt. When temperatures drop below freezing, that water expands — up to 9% in volume. That expansion widens cracks from the inside. Repeat this dozens of times over a Maryland winter and those hairline cracks become full potholes by March." },
      { heading: 'Road salt damage', text: "Salt lowers the freezing point of water, which is why it's used for de-icing. But it also penetrates asphalt and attacks the binding agents. Over time, salt causes asphalt to become brittle and more susceptible to cracking. It's a trade-off, but minimizing salt use where possible — especially on private driveways — extends asphalt life." },
      { heading: 'Plow damage', text: "A plow blade set too low will gouge the asphalt surface, especially at turns, inclines, and areas with slight heaves. If you hire a plow service, ask them to keep the blade slightly elevated or use rubber blade attachments on asphalt surfaces." },
      { heading: 'What to do before winter', text: "The best protection is going into winter with sealed, crack-free asphalt. Fill any open cracks in the fall — even small ones. A proper fall sealcoat is ideal if it's been 2+ years since the last one. Think of it as weatherproofing your driveway before the season hits." },
      { heading: 'What to do in spring', text: "Walk your driveway or lot after the last freeze. Note potholes, new cracks, and any areas where the surface has heaved or sunk. Spring is the best time to address winter damage before heat and UV make things worse." },
    ],
  },
  'how-long-does-asphalt-last': {
    slug: 'how-long-does-asphalt-last',
    title: 'How Long Does Asphalt Last? (And How to Make It Last Longer)',
    excerpt: "Well-installed asphalt can last 20–30 years with proper maintenance. Here's what affects your pavement's lifespan and the most important things you can do to extend it.",
    date: 'Dec 8, 2025',
    category: 'Education',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85',
    body: [
      { text: "The answer you'll get from most contractors is 20–30 years. The honest answer is: it depends entirely on how it was installed, how it's maintained, and what climate it's exposed to. We've seen 10-year-old driveways that look like they're 30, and 20-year-old driveways that are still in great shape." },
      { heading: 'Installation quality', text: "The single biggest factor is the base. Asphalt is only as good as what's underneath it. A proper base — compacted stone gravel at the right depth — is what gives asphalt its structural strength. Skip that, and no amount of maintenance will save you. Always ask a contractor what base preparation they include." },
      { heading: 'Climate and sun exposure', text: "UV rays break down the binding agents in asphalt, causing it to oxidize and become brittle. South-facing driveways with full sun exposure age faster. In Maryland, we also deal with significant temperature swings — hot summers and freezing winters both stress pavement." },
      { heading: 'Traffic load', text: "A residential driveway with regular cars lasts much longer than one used by heavy trucks or construction equipment. The thicker the asphalt and the stronger the base, the more load it can handle. If you're regularly parking heavy vehicles, plan for a thicker installation." },
      { heading: 'The maintenance factor', text: "This is the one you control. Driveways that are sealcoated every 2–3 years, have cracks filled promptly, and are repaired before small issues become large ones routinely last 25+ years. Driveways that are ignored tend to need full replacement in 12–15 years." },
      { heading: 'Simple things that help', text: "Keep tree roots away from the edges. Fix drainage issues so water doesn't pool on the surface. Avoid sharp turns from heavy vehicles. Clean oil spills promptly — petroleum products dissolve asphalt binders. None of this is complicated, but it adds years to your pavement." },
    ],
  },
};

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts[params.slug];
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} — J & Son Paving LLC`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }));
}

export default function BlogPost({ params }: Props) {
  const post = posts[params.slug];
  if (!post) notFound();

  const related = Object.values(posts).filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <Image
          src={post.img}
          alt={post.title}
          fill priority unoptimized
          className={styles.heroBg}
        />
        <div className={`container ${styles.heroContent}`}>
          <Link href="/blog" className={styles.backLink}>← Back to Blog</Link>
          <span className={styles.heroCategory}>{post.category}</span>
          <h1 className={styles.heroTitle}>{post.title}</h1>
          <div className={styles.heroMeta}>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className={styles.article}>
        <div className={`container ${styles.articleInner}`}>
          <p className={styles.lead}>{post.excerpt}</p>
          {post.body.map((block, i) => (
            <div key={i}>
              {block.heading && <h2 className={styles.bodyHeading}>{block.heading}</h2>}
              <p className={styles.bodyText}>{block.text}</p>
            </div>
          ))}

          {/* CTA Card */}
          <div className={styles.ctaCard}>
            <div>
              <h3>Ready to get started?</h3>
              <p>Free estimates — same-day response. Call or fill out the form online.</p>
            </div>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className="btn-primary">Get a Free Estimate</Link>
              <a href="tel:4438751714" className={styles.ctaPhone}>📞 (443) 875-1714</a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className={styles.related}>
        <div className="container">
          <h2 className={styles.relatedTitle}>Related Articles</h2>
          <div className={styles.relatedGrid}>
            {related.map(r => (
              <Link href={`/blog/${r.slug}`} key={r.slug} className={styles.relatedCard}>
                <div className={styles.relatedImg}>
                  <Image src={r.img} alt={r.title} fill className={styles.relatedPhoto} unoptimized />
                  <span className={styles.relatedCategory}>{r.category}</span>
                </div>
                <div className={styles.relatedBody}>
                  <div className={styles.relatedMeta}>{r.date} · {r.readTime}</div>
                  <h3 className={styles.relatedHeading}>{r.title}</h3>
                  <span className={styles.readMore}>Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
