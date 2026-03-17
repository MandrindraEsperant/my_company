import Link from 'next/link';
import { Language, t } from '@/lib/lang';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface ProjectDetails {
  id: string;
  name: { en: string; fr: string };
  category: string;
  description: { en: string; fr: string };
  challenge: { en: string; fr: string };
  solution: { en: string; fr: string };
  results: { en: string[]; fr: string[] };
  tech: string[];
  timeline: { en: string; fr: string };
  team: { en: string; fr: string };
}

const projects: Record<string, ProjectDetails> = {
  'real-estate': {
    id: 'real-estate',
    name: { en: 'Modern Real Estate Platform', fr: 'Plateforme Immobilière Moderne' },
    category: 'Web Development',
    description: {
      en: 'A comprehensive real estate marketplace platform featuring virtual tours, advanced property search, and integrated CRM for agents.',
      fr: 'Une plateforme de marché immobilier complète avec visites virtuelles et intégration CRM.',
    },
    challenge: {
      en: 'The client needed a platform that could handle high traffic, provide immersive property experiences, and integrate with existing agent tools.',
      fr: 'Le client avait besoin d\'une plateforme gérant le trafic élevé avec expériences immersives.',
    },
    solution: {
      en: 'We built a Next.js-based platform with real-time search, virtual tour integration using Three.js, and a custom CRM system.',
      fr: 'Nous avons construit une plateforme basée sur Next.js avec recherche en temps réel et visites virtuelles.',
    },
    results: {
      en: [
        '300% increase in property inquiries',
        '50% reduction in response time',
        '10,000+ monthly active users',
        '99.9% uptime',
      ],
      fr: [
        'Augmentation de 300% des demandes de propriétés',
        'Réduction de 50% du temps de réponse',
        '10 000+ utilisateurs actifs mensuels',
        'Disponibilité de 99,9%',
      ],
    },
    tech: ['Next.js', 'React', 'Three.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    timeline: { en: '6 months', fr: '6 mois' },
    team: { en: '8 developers, 2 designers', fr: '8 développeurs, 2 designers' },
  },
  'logistics': {
    id: 'logistics',
    name: { en: 'Logistics Management System', fr: 'Système de Gestion Logistique' },
    category: 'Backend Development',
    description: {
      en: 'Enterprise logistics platform with real-time tracking, route optimization, and comprehensive analytics.',
      fr: 'Plateforme logistique d\'entreprise avec suivi en temps réel et optimisation d\'itinéraire.',
    },
    challenge: {
      en: 'Managing complex logistics operations across multiple locations with real-time visibility was a major challenge.',
      fr: 'Gérer les opérations logistiques complexes avec visibilité en temps réel était un défi majeur.',
    },
    solution: {
      en: 'We developed a microservices architecture using Node.js, real-time tracking with WebSockets, and AI-powered route optimization.',
      fr: 'Nous avons développé une architecture microservices avec suivi en temps réel et optimisation d\'itinéraire IA.',
    },
    results: {
      en: [
        '35% improvement in delivery times',
        'Real-time visibility across 500+ shipments',
        '$2M annual cost savings',
        'API supports 100K+ requests/day',
      ],
      fr: [
        'Amélioration de 35% des délais de livraison',
        'Visibilité en temps réel sur 500+ expéditions',
        'Économies annuelles de 2M$',
        'L\'API supporte 100K+ demandes/jour',
      ],
    },
    tech: ['Node.js', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes'],
    timeline: { en: '9 months', fr: '9 mois' },
    team: { en: '12 developers, 1 architect', fr: '12 développeurs, 1 architecte' },
  },
  'fitness': {
    id: 'fitness',
    name: { en: 'Fitness Tracking App', fr: 'Application de Suivi Fitness' },
    category: 'Mobile Development',
    description: {
      en: 'Cross-platform mobile app for workout tracking, nutrition planning, and social fitness community features.',
      fr: 'Application mobile multiplateforme avec suivi d\'entraînement et plans de nutrition.',
    },
    challenge: {
      en: 'Creating an engaging mobile experience with offline functionality and seamless cloud sync.',
      fr: 'Créer une expérience mobile engageante avec synchronisation cloud transparente.',
    },
    solution: {
      en: 'We used React Native and Firebase for real-time sync, integrated wearable devices, and built a vibrant social community.',
      fr: 'Nous avons utilisé React Native et Firebase avec intégration d\'appareils portables.',
    },
    results: {
      en: [
        '100K+ downloads in first month',
        '4.8/5 star rating on app stores',
        '50K+ monthly active users',
        '3.2M workouts tracked',
      ],
      fr: [
        '100K+ téléchargements le premier mois',
        'Note de 4,8/5 sur les app stores',
        '50K+ utilisateurs actifs mensuels',
        '3,2M d\'entraînements suivis',
      ],
    },
    tech: ['React Native', 'Firebase', 'Node.js', 'Expo', 'Redux', 'TypeScript'],
    timeline: { en: '5 months', fr: '5 mois' },
    team: { en: '6 developers, 1 UI designer', fr: '6 développeurs, 1 designer UI' },
  },
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ lang: string; project: string }>;
}) {
  const { lang: rawLang, project } = await params;
  const lang = (rawLang === 'en' || rawLang === 'fr' ? rawLang : 'en') as Language;

  const projectData = projects[project];

  if (!projectData) {
    return (
      <main className="bg-background min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-foreground">Project not found</h1>
          <Link
            href={`/${lang}/portfolio`}
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#001F3F] to-[#0f0a1f] text-white py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${lang}/portfolio`}
            className="inline-flex items-center gap-2 mb-6 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            {lang === 'en' ? 'Back to Portfolio' : 'Retour au Portfolio'}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {projectData.name[lang]}
          </h1>
          <p className="text-xl text-gray-300">
            {projectData.description[lang]}
          </p>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Challenge */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {lang === 'en' ? 'The Challenge' : 'Le Défi'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {projectData.challenge[lang]}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {lang === 'en' ? 'Our Solution' : 'Notre Solution'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {projectData.solution[lang]}
            </p>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {lang === 'en' ? 'Results' : 'Résultats'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectData.results[lang].map((result) => (
                <div
                  key={result}
                  className="p-4 rounded-lg bg-card border border-border flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#00D9FF] mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {lang === 'en' ? 'Technologies Used' : 'Technologies Utilisées'}
            </h2>
            <div className="flex flex-wrap gap-3">
              {projectData.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#001F3F] via-[#00D9FF] to-[#7B2CBF] text-white text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-lg bg-card border border-border">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                {lang === 'en' ? 'Timeline' : 'Chronologie'}
              </h3>
              <p className="text-muted-foreground">{projectData.timeline[lang]}</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                {lang === 'en' ? 'Team' : 'Équipe'}
              </h3>
              <p className="text-muted-foreground">{projectData.team[lang]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            {lang === 'en' ? 'Ready to Start Your Project?' : 'Prêt à Démarrer Votre Projet?'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {lang === 'en'
              ? 'Let\'s create something amazing together. Contact us today!'
              : 'Créons quelque chose d\'incroyable ensemble. Contactez-nous!'}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#001F3F] via-[#00D9FF] to-[#7B2CBF] text-white rounded-lg hover:shadow-lg transition-all"
          >
            {lang === 'en' ? 'Get in Touch' : 'Nous Contacter'}
            <ExternalLink size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
