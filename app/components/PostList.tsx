import Link from 'next/link';
import Image from 'next/image';
import { posts } from '../../lib/posts';

const PostList = () => {
  return (
    <section className="py-24 bg-brand-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-2xl shadow-sm overflow-hidden group">
              <div className="relative w-full h-56">
                <Image
                  src={post.imageUrl}
                  alt={`Imagem do post ${post.title}`}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-indigo mb-3 font-display group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <Image
                    src={post.authorImageUrl}
                    alt={`Foto de ${post.authorName}`}
                    className="rounded-full"
                    width={32}
                    height={32}
                  />
                  <div>
                    <p className="font-semibold text-slate-800">{post.authorName}</p>
                    <p className="text-slate-500">{post.publishedAt}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostList;