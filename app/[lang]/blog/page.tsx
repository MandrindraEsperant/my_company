import Link from 'next/link';
import { Language, t } from '@/lib/lang';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const runtime = 'edge';
export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'en' || rawLang === 'fr' ? rawLang : 'en') as Language;

  const blogPosts = [
    {
      id: 1,
      title: lang === 'en' 
        ? 'The Future of Cloud Computing' 
        : 'L\'Avenir de l\'Informatique en Nuage',
      excerpt: lang === 'en'
        ? 'Explore emerging trends in cloud computing and how they impact businesses.'
        : 'Explorez les tendances émergentes de l\'informatique en nuage.',
      author: 'Sarah Chen',
      date: '2024-03-11',
      category: 'Cloud',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: lang === 'en'
        ? 'Building Scalable APIs'
        : 'Construire des APIs Évolutives',
      excerpt: lang === 'en'
        ? 'Best practices for designing and building APIs that scale with your business.'
        : 'Meilleures pratiques pour concevoir des APIs évolutives.',
      author: 'John Developer',
      date: '2024-03-09',
      category: 'Development',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: lang === 'en'
        ? 'Digital Marketing Strategies for 2024'
        : 'Stratégies de Marketing Digital pour 2024',
      excerpt: lang === 'en'
        ? 'Discover effective digital marketing strategies to boost your online presence.'
        : 'Découvrez les stratégies de marketing digital efficaces.',
      author: 'Emma Marketing',
      date: '2024-03-07',
      category: 'Marketing',
      readTime: '6 min read',
    },
  ];

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001F3F] to-[#0f0a1f] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t(lang, 'nav.blog')}
          </h1>
          <p className="text-xl text-gray-300">
            {lang === 'en'
              ? 'Insights and articles from our team'
              : 'Insights et articles de notre équipe'}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </span>
                      <span className="px-2 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <Link
                      href={`/${lang}/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium group/link"
                    >
                      {lang === 'en' ? 'Read Article' : 'Lire l\'Article'}
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Side Info */}
                  <div className="text-right text-xs text-muted-foreground whitespace-nowrap">
                    {post.readTime}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="px-6 py-2 rounded-lg border border-border text-foreground hover:bg-card transition-colors">
              {lang === 'en' ? 'Load More Articles' : 'Charger Plus d\'Articles'}
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            {lang === 'en' ? 'Stay Updated' : 'Restez Informé'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {lang === 'en'
              ? 'Subscribe to our newsletter for the latest insights and updates.'
              : 'Abonnez-vous à notre newsletter pour les dernières actualités.'}
          </p>
          <form className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder={lang === 'en' ? 'your@email.com' : 'votre@email.com'}
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#001F3F] via-[#00D9FF] to-[#7B2CBF] text-white hover:shadow-lg transition-all"
            >
              {lang === 'en' ? 'Subscribe' : 'S\'Abonner'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
