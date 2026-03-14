import JournalPageContent from '@/components/journal/JournalPageContent';
import { featuredJournalSlug, journalArticles } from '@/data/journal.mjs';

export const metadata = {
  title: 'Coffee Journal, Brewing Guides, and Stories | Double Dose Coffee',
  description:
    'Explore brewing guides, coffee stories, and useful coffee knowledge from Double Dose Coffee, with practical reads for better brews at home.',
};

export default function JournalPage() {
  return <JournalPageContent articles={journalArticles} featuredSlug={featuredJournalSlug} />;
}
