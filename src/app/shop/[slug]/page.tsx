import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { products, getProductBySlug } from '@/data/products';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | Double Dose Coffee`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-5 bg-stone-100 border-b border-stone-200">
        <div className="container mx-auto px-6">
          <Link href="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors duration-200 cursor-pointer">
            <ArrowLeft size={14} />
            Back to Shop
          </Link>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Product Image */}
            <div className="relative aspect-[4/5] rounded overflow-hidden bg-stone-200">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                {product.roastType} Roast
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-5">
                {product.name}
              </h1>
              <p className="text-stone-500 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Tasting Notes */}
              <div className="mb-10">
                <h2 className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-4">
                  Tasting Notes
                </h2>
                <div className="flex flex-wrap gap-2">
                  {product.notes.map((note) => (
                    <span
                      key={note}
                      className="text-sm bg-white border border-stone-200 text-stone-700 px-4 py-2 rounded"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-10">
                <h2 className="text-xs uppercase tracking-[0.3em] text-stone-400 mb-4">
                  Pricing
                </h2>
                <div className="flex gap-4">
                  <div className="border border-stone-200 rounded px-8 py-5 text-center bg-white">
                    <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">250g</p>
                    <p className="text-2xl font-serif font-bold text-stone-900">RM{product.pricing.size250g}</p>
                  </div>
                  <div className="border border-stone-200 rounded px-8 py-5 text-center bg-white">
                    <p className="text-xs uppercase tracking-wider text-stone-400 mb-1">500g</p>
                    <p className="text-2xl font-serif font-bold text-stone-900">RM{product.pricing.size500g}</p>
                  </div>
                </div>
              </div>

              {/* Origin */}
              <div className="border-t border-stone-200 pt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                  Origin: <span className="text-stone-900 font-medium">{product.origin}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
