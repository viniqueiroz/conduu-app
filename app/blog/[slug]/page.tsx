import { notFound } from 'next/navigation';
import Image from 'next/image';
import { posts } from '../../../lib/posts';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

// Generate static pages for each post
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const urlParams = await params;
  const post = await getPostBySlug(urlParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-indigo mb-6 font-display">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm">
              <Image
                src={post.authorImageUrl}
                alt={`Foto de ${post.authorName}`}
                className="rounded-full"
                width={40}
                height={40}
              />
              <div>
                <p className="font-semibold text-slate-800">{post.authorName}</p>
                <p className="text-slate-500">{post.publishedAt}</p>
              </div>
            </div>
          </header>

          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.imageUrl}
              alt={`Imagem do post ${post.title}`}
              className="object-cover"
              fill
              priority
            />
          </div>

          <article
            className="prose lg:prose-xl max-w-none mx-auto text-slate-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}