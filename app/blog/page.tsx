import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ScrollReveal from '@/components/ScrollReveal';
import BlogCard from '@/components/BlogCard';
import SchemaOrg, { orgSchema, breadcrumbSchema } from '@/components/SchemaOrg';
import { posts } from '@/lib/posts';

const BASE = 'https://qithi.co.za';

export const metadata: Metadata = {
  title: 'Blog — AmaQithi Dispatches | History, Research & Identity',
  description:
    'Writing from the AmaQithi research archive — history, language, genealogy, and the ongoing investigation into the San-Thembu heritage of the Eastern Cape.',
  openGraph: {
    title: 'AmaQithi Blog — Dispatches from the Archive',
    description: 'History, language, genealogy, and the ongoing investigation into the San-Thembu heritage of the Eastern Cape.',
    url: `${BASE}/blog`,
    images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: 'AmaQithi' }],
    type: 'website',
  },
  alternates: { canonical: `${BASE}/blog` },
};

const categoryColors: Record<string, string> = {
  'Language & Identity': '#E8A857',
  'History': '#C4622D',
  'Research': '#9E8C7A',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogIndex() {
  return (
    <>
      <SchemaOrg schemas={[orgSchema, breadcrumbSchema([{ name: 'Blog', url: '/blog' }])]} />
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>

        {/* Hero */}
        <section
          style={{
            position: 'relative',
            background: 'radial-gradient(ellipse at 20% 80%, #3D2010 0%, #2C1810 50%, #1A0F0A 100%)',
            paddingTop: '120px',
            paddingBottom: '72px',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/bg-square.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.05,
              pointerEvents: 'none',
            }}
          />
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
            <p
              className="hero-enter"
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#C4622D',
                marginBottom: '20px',
              }}
            >
              Dispatches from the archive
            </p>
            <h1
              className="hero-enter-delay"
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 600,
                color: '#E8A857',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                marginBottom: '24px',
              }}
            >
              The Blog.
            </h1>
            <p
              className="hero-enter-delay-2"
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: 'clamp(1rem, 2vw, 1.35rem)',
                fontStyle: 'italic',
                color: '#D4A96A',
                maxWidth: '560px',
                lineHeight: 1.65,
              }}
            >
              History, language, genealogy — the ongoing investigation into the San-Thembu heritage of the Eastern Cape.
            </p>
          </div>
        </section>

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'Blog' }]} />
        </div>

        {/* Posts */}
        <ScrollReveal>
          <section style={{ padding: '72px 0 96px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {posts.map((post, i) => (
                  <BlogCard
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    category={post.category}
                    categoryColor={categoryColors[post.category] ?? '#C4622D'}
                    date={formatDate(post.date)}
                    title={post.title}
                    excerpt={post.excerpt}
                    delayClass={`delay-${Math.min(i + 1, 5)}`}
                    author={post.author}
                  />
                ))}
              </div>

              <div style={{
                marginTop: '64px',
                paddingTop: '40px',
                borderTop: '1px solid rgba(196,98,45,0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                <p style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  fontStyle: 'italic',
                  color: '#9E8C7A',
                  lineHeight: 1.6,
                  maxWidth: '480px',
                  margin: 0,
                }}>
                  If you know something about this history and want to write about it, get in touch.
                </p>
                <a
                  href="https://wa.me/27629473445"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-body), Inter, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#C4622D',
                    textDecoration: 'none',
                    borderBottom: '1px solid #C4622D',
                    paddingBottom: '2px',
                    width: 'fit-content',
                  }}
                >
                  WhatsApp Ayabonga
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

      </main>
      <Footer />
    </>
  );
}
