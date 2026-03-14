import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

type JournalArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  readTime: string;
  image: string;
  imageAlt: string;
  relatedSlugs: string[];
  sections: ArticleSection[];
};

type Props = {
  article: JournalArticle;
  relatedArticles: JournalArticle[];
};

function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat('en-MY', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export default function JournalArticlePage({ article, relatedArticles }: Props) {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Double Dose Coffee',
    },
    image: [article.image],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="border-b border-stone-200 bg-stone-100 py-5">
        <div className="container mx-auto px-6">
          <Link
            href="/journal"
            className="inline-flex cursor-pointer items-center gap-2 text-xs uppercase tracking-widest text-stone-500 transition-colors duration-200 hover:text-stone-900"
          >
            <ArrowLeft size={14} />
            Back to Journal
          </Link>
        </div>
      </section>

      <article className="bg-stone-50">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">{article.category}</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-stone-900 md:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
              {article.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-[0.22em] text-stone-500">
              <span>{formatDisplayDate(article.publishedAt)}</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] bg-stone-900">
            <Image
              src={article.image}
              alt={article.imageAlt}
              width={1600}
              height={960}
              priority
              className="aspect-[16/9] w-full object-cover"
              sizes="100vw"
            />
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-[0.2fr_0.8fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-[1.5rem] border border-stone-200 bg-white p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">In this article</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-600">
                  {article.sections.map((section) => (
                    <li key={section.heading}>{section.heading}</li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="space-y-12">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-3xl font-bold text-stone-900">{section.heading}</h2>
                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-stone-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Keep reading</p>
            <h2 className="mt-4 text-4xl font-bold text-stone-900">Related Journal reads</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/journal/${related.slug}`}
                  className="group rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6 transition-colors duration-300 hover:border-stone-300"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-accent">{related.category}</p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-stone-900">
                    {related.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600">{related.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-stone-900 transition-colors duration-300 group-hover:text-accent">
                    Read next
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
