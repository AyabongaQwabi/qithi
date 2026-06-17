import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ScrollReveal from '@/components/ScrollReveal';
import BlogCard from '@/components/BlogCard';
import SchemaOrg, { orgSchema, breadcrumbSchema } from '@/components/SchemaOrg';
import { posts, getPost } from '@/lib/posts';

const BASE = 'https://qithi.co.za';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — AmaQithi Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: `${BASE}/logo.png`, width: 1024, height: 1024, alt: 'AmaQithi' }],
    },
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
  };
}

const categoryColors: Record<string, string> = {
  'Language & Identity': '#E8A857',
  'History': '#C4622D',
  'Research': '#9E8C7A',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <SchemaOrg schemas={[orgSchema, breadcrumbSchema([
        { name: 'Blog', url: '/blog' },
        { name: post.title, url: `/blog/${post.slug}` },
      ])]} />
      <Nav />
      <main style={{ background: '#1A0F0A', minHeight: '100vh' }}>

        {/* Hero */}
        <section
          style={{
            position: 'relative',
            background: 'radial-gradient(ellipse at 20% 80%, #3D2010 0%, #2C1810 50%, #1A0F0A 100%)',
            paddingTop: '120px',
            paddingBottom: '64px',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/bg_rectangular.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
              opacity: 0.05,
              pointerEvents: 'none',
            }}
          />
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
            <div
              className="hero-enter"
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}
            >
              <span style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: categoryColors[post.category] ?? '#C4622D',
              }}>
                {post.category}
              </span>
              <span style={{ color: 'rgba(196,98,45,0.3)', fontSize: '0.6rem' }}>·</span>
              <span style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.68rem',
                color: '#6B5A4E',
              }}>
                {formatDate(post.date)}
              </span>
            </div>
            <h1
              className="hero-enter-delay"
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                fontWeight: 600,
                color: '#E8A857',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                marginBottom: '24px',
              }}
            >
              {post.title}
            </h1>
            <p
              className="hero-enter-delay-2"
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                fontStyle: 'italic',
                color: '#D4A96A',
                lineHeight: 1.65,
              }}
            >
              {post.excerpt}
            </p>
          </div>
        </section>

        <div style={{ background: '#1A0F0A', paddingTop: '8px' }}>
          <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]} />
        </div>

        <div className="section-rule" />

        {/* Body */}
        <ScrollReveal>
          <article style={{ padding: '64px 0 80px' }}>
            <div
              className="reveal"
              style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '1.05rem',
                  color: '#D4A96A',
                  lineHeight: 1.9,
                }}
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            </div>
          </article>
        </ScrollReveal>

        <div className="section-rule" />

        {/* More posts */}
        {otherPosts.length > 0 && (
          <ScrollReveal>
            <section style={{ padding: '64px 0 80px', background: '#2C1810' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                <p style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.68rem',
                  fontWeight: 500,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C4622D',
                  marginBottom: '32px',
                }}>
                  More from the archive
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
                  {otherPosts.map((p, i) => (
                    <BlogCard
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      category={p.category}
                      categoryColor={categoryColors[p.category] ?? '#C4622D'}
                      date={formatDate(p.date)}
                      title={p.title}
                      excerpt={p.excerpt}
                      delayClass={`delay-${i + 1}`}
                      variant="compact"
                    />
                  ))}
                </div>
                <div style={{ marginTop: '40px' }}>
                  <Link
                    href="/blog"
                    style={{
                      fontFamily: 'var(--font-body), Inter, sans-serif',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#C4622D',
                      textDecoration: 'none',
                      borderBottom: '1px solid #C4622D',
                      paddingBottom: '2px',
                    }}
                  >
                    ← All posts
                  </Link>
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}

      </main>
      <Footer />
    </>
  );
}
