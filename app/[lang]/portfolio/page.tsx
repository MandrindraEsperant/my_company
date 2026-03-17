import Link from 'next/link';
import { Language, t } from '@/lib/lang';
import { ExternalLink } from 'lucide-react';

export default async function PortfolioPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'en' || rawLang === 'fr' ? rawLang : 'en') as Language;

  const projects = [
    {
      id: 'real-estate',
      name: lang === 'en' ? 'Modern Real Estate Platform' : 'Plateforme Immobilière Moderne',
      category: 'Web',
      description: lang === 'en'
        ? 'Full-featured real estate marketplace with virtual tours, advanced search, and CRM integration.'
        : 'Place de marché immobilière complète avec visites virtuelles et intégration CRM.',
      tech: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'from-[#001F3F] to-[#00D9FF]',
    },
    {
      id: 'logistics',
      name: lang === 'en' ? 'Logistics Management System' : 'Système de Gestion Logistique',
      category: 'Backend',
      description: lang === 'en'
        ? 'Enterprise logistics platform with real-time tracking, route optimization, and analytics.'
        : 'Plateforme logistique d\'entreprise avec suivi en temps réel et optimisation d\'itinéraire.',
      tech: ['Node.js', 'PostgreSQL', 'AWS', 'Redis', 'Docker'],
      color: 'from-[#00D9FF] to-[#7B2CBF]',
    },
    {
      id: 'fitness',
      name: lang === 'en' ? 'Fitness Tracking App' : 'Application de Suivi Fitness',
      category: 'Mobile',
      description: lang === 'en'
        ? 'Cross-platform mobile app for workout tracking, nutrition plans, and social features.'
        : 'Application mobile multiplateforme de suivi d\'entraînement et plans de nutrition.',
      tech: ['React Native', 'Firebase', 'Node.js', 'Expo'],
      color: 'from-[#7B2CBF] to-[#001F3F]',
    },
    {
      id: 'ecommerce',
      name: lang === 'en' ? 'E-Commerce Platform' : 'Plateforme E-Commerce',
      category: 'Web',
      description: lang === 'en'
        ? 'High-performance e-commerce solution with inventory management and payment processing.'
        : 'Solution e-commerce haute performance avec gestion d\'inventaire et paiements.',
      tech: ['Next.js', 'Shopify API', 'TypeScript', 'Tailwind CSS'],
      color: 'from-[#001F3F] to-[#00D9FF]',
    },
    {
      id: 'saas-analytics',
      name: lang === 'en' ? 'Analytics SaaS' : 'SaaS Analytique',
      category: 'Backend',
      description: lang === 'en'
        ? 'Data visualization and analytics platform for business intelligence.'
        : 'Plateforme de visualisation de données et d\'analyse commerciale.',
      tech: ['React', 'Python', 'PostgreSQL', 'Chart.js', 'AWS'],
      color: 'from-[#00D9FF] to-[#7B2CBF]',
    },
    {
      id: 'learning-platform',
      name: lang === 'en' ? 'Online Learning Platform' : 'Plateforme d\'Apprentissage',
      category: 'Web',
      description: lang === 'en'
        ? 'Educational platform with video streaming, progress tracking, and certification.'
        : 'Plateforme éducative avec streaming vidéo et suivi de progression.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Mux', 'Stripe'],
      color: 'from-[#7B2CBF] to-[#001F3F]',
    },
  ];

  const categories = ['All', 'Web', 'Mobile', 'Backend'];

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001F3F] to-[#0f0a1f] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t(lang, 'portfolio.title')}
          </h1>
          <p className="text-xl text-gray-300">
            {lang === 'en'
              ? 'Explore our latest work and case studies'
              : 'Explorez nos derniers projets et études de cas'}
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-[#001F3F] via-[#00D9FF] to-[#7B2CBF] text-white'
                    : 'bg-card border border-border text-foreground hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Project Image */}
                <div className={`h-48 bg-gradient-to-br ${project.color} opacity-80 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="text-4xl mb-2">
                      {project.id === 'real-estate' && '🏠'}
                      {project.id === 'logistics' && '📦'}
                      {project.id === 'fitness' && '💪'}
                      {project.id === 'ecommerce' && '🛍️'}
                      {project.id === 'saas-analytics' && '📊'}
                      {project.id === 'learning-platform' && '📚'}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded bg-foreground/5 text-foreground text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <Link
                    href={`/${lang}/portfolio/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all group/link"
                  >
                    {lang === 'en' ? 'View Case Study' : 'Voir l\'Étude de Cas'}
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            {lang === 'en' ? 'Impressed by Our Work?' : 'Impressionné par notre travail?'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {lang === 'en'
              ? 'Let\'s discuss your next project and create something amazing together.'
              : 'Discutons de votre prochain projet et créons quelque chose d\'incroyable ensemble.'}
          </p>
          <a
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#001F3F] via-[#00D9FF] to-[#7B2CBF] text-white rounded-lg hover:shadow-lg transition-all"
          >
            {lang === 'en' ? 'Start Your Project' : 'Démarrez Votre Projet'}
          </a>
        </div>
      </section>
    </main>
  );
}
