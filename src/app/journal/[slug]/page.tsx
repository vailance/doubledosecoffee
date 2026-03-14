import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import JournalArticlePage from '@/components/journal/JournalArticlePage';
import { getJournalArticleBySlug, journalArticles } from '@/data/journal.mjs';

type Props = {
  params: Promise<{ slug: string }>;
};

type JournalArticle = (typeof journalArticles)[number];

export async function generateStaticParams() {
  return journalArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getJournalArticleBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found | Double Dose Coffee' };
  }

  return {
    title: article.seoTitle,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      images: [
        {
          url: article.image,
          alt: article.imageAlt,
        },
      ],
    },
  };
}

export default async function JournalArticleRoute({ params }: Props) {
  const { slug } = await params;
  const article = getJournalArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = article.relatedSlugs
    .map((relatedSlug) => getJournalArticleBySlug(relatedSlug))
    .filter((related): related is JournalArticle => Boolean(related));

  return <JournalArticlePage article={article} relatedArticles={relatedArticles} />;
}
