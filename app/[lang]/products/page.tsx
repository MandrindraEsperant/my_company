import { Language, t } from '@/lib/lang';
import { Star } from 'lucide-react';

export default async function ProductsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'en' || rawLang === 'fr' ? rawLang : 'en') as Language;

  const products = [
    {
      id: 1,
      name: lang === 'en' ? 'Carpooling Platform' : 'Plateforme de Covoiturage',
      description: lang === 'en' 
        ? 'Connect users for shared rides with real-time tracking and secure payments.'
        : 'Connectez les utilisateurs pour des trajets partagés avec suivi en temps réel.',
      price: '$299/month',
      features: [
        { en: 'Real-time GPS tracking', fr: 'Suivi GPS en temps réel' },
        { en: 'Integrated payment system', fr: 'Système de paiement intégré' },
        { en: 'Driver verification', fr: 'Vérification du conducteur' },
        { en: '24/7 support', fr: 'Support 24/7' },
      ],
    },
    {
      id: 2,
      name: lang === 'en' ? 'Business Management System' : 'Système de Gestion Entreprise',
      description: lang === 'en'
        ? 'Streamline operations with integrated project, inventory, and employee management.'
        : 'Rationalisez les opérations avec gestion intégrée des projets et stocks.',
      price: '$499/month',
      features: [
        { en: 'Project management', fr: 'Gestion de projets' },
        { en: 'Inventory tracking', fr: 'Suivi des stocks' },
        { en: 'Employee management', fr: 'Gestion des employés' },
        { en: 'Analytics dashboard', fr: 'Tableau de bord analytique' },
      ],
    },
    {
      id: 3,
      name: lang === 'en' ? 'Real Estate Platform' : 'Plateforme Immobilière',
      description: lang === 'en'
        ? 'Showcase properties with virtual tours, automated matching, and CRM integration.'
        : 'Présentez les propriétés avec visites virtuelles et intégration CRM.',
      price: '$399/month',
      features: [
        { en: 'Virtual property tours', fr: 'Visites virtuelles de propriétés' },
        { en: 'Lead management', fr: 'Gestion des prospects' },
        { en: 'Automated matching', fr: 'Correspondance automatique' },
        { en: 'Document management', fr: 'Gestion des documents' },
      ],
    },
    {
      id: 4,
      name: lang === 'en' ? 'Import/Export Management' : 'Gestion Import/Export',
      description: lang === 'en'
        ? 'Manage international trade with customs documentation, shipment tracking, and compliance.'
        : 'Gérez le commerce international avec documentation et suivi d\'expédition.',
      price: '$599/month',
      features: [
        { en: 'Customs documentation', fr: 'Documentation douanière' },
        { en: 'Shipment tracking', fr: 'Suivi d\'expédition' },
        { en: 'Compliance checking', fr: 'Vérification de conformité' },
        { en: 'Multi-currency support', fr: 'Support multi-devises' },
      ],
    },
  ];

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001F3F] to-[#0f0a1f] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t(lang, 'products.title')}
          </h1>
          <p className="text-xl text-gray-300">
            {t(lang, 'products.subtitle')}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Product Header */}
                <div className="h-40 bg-gradient-to-br from-[#001F3F] via-[#00D9FF] to-[#7B2CBF] opacity-80 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">
                      {product.id === 1 ? '🚗' : product.id === 2 ? '📊' : product.id === 3 ? '🏠' : '📦'}
                    </div>
                    <h3 className="font-semibold">{product.name}</h3>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6 space-y-4">
                  {/* Description */}
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="py-4 border-t border-b border-border">
                    <div className="text-2xl font-bold text-foreground">
                      {product.price}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {lang === 'en' ? 'Billed monthly' : 'Facturé mensuellement'}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature[lang]} className="flex gap-2 text-sm">
                        <Star size={16} className="text-[#00D9FF] flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature[lang]}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#001F3F] via-[#00D9FF] to-[#7B2CBF] text-white text-sm font-medium hover:shadow-lg transition-all">
                    {lang === 'en' ? 'View Demo' : 'Voir la Démo'}
                  </button>
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
            {lang === 'en' ? 'Need a Custom Solution?' : 'Besoin d\'une solution personnalisée?'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {lang === 'en'
              ? 'Our expert team can build a tailored SaaS product for your specific needs.'
              : 'Notre équipe experte peut construire un produit SaaS adapté à vos besoins spécifiques.'}
          </p>
          <a
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#001F3F] via-[#00D9FF] to-[#7B2CBF] text-white rounded-lg hover:shadow-lg transition-all"
          >
            {lang === 'en' ? 'Get in Touch' : 'Nous Contacter'}
          </a>
        </div>
      </section>
    </main>
  );
}
