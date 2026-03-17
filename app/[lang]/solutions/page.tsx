import { Language, t } from '@/lib/lang';
import { Check } from 'lucide-react';

export default async function SolutionsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'en' || rawLang === 'fr' ? rawLang : 'en') as Language;

  const solutions = [
    {
      id: 'development',
      heading: t(lang, 'solutions.development.heading'),
      intro: t(lang, 'solutions.development.intro'),
      services: t(lang, 'solutions.development.services'),
      color: 'from-[#001F3F] to-[#00D9FF]',
    },
    {
      id: 'cloud',
      heading: t(lang, 'solutions.cloud.heading'),
      intro: t(lang, 'solutions.cloud.intro'),
      services: t(lang, 'solutions.cloud.services'),
      color: 'from-[#00D9FF] to-[#7B2CBF]',
    },
    {
      id: 'marketing',
      heading: t(lang, 'solutions.marketing.heading'),
      intro: t(lang, 'solutions.marketing.intro'),
      services: t(lang, 'solutions.marketing.services'),
      color: 'from-[#7B2CBF] to-[#001F3F]',
    },
  ];

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001F3F] to-[#0f0a1f] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t(lang, 'solutions.title')}
          </h1>
          <p className="text-xl text-gray-300">
            {t(lang, 'solutions.subtitle')}
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={solution.id} id={solution.id} className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="space-y-6">
                      <div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${solution.color} text-white text-sm font-medium mb-4`}>
                          {solution.heading}
                        </div>
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                          {solution.heading}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                          {solution.intro}
                        </p>
                      </div>

                      {/* Services List */}
                      <div className="space-y-3">
                        {Array.isArray(solution.services) && solution.services.map((service: string) => (
                          <div key={service} className="flex gap-3 items-start">
                            <Check className="w-5 h-5 text-[#00D9FF] flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className={`h-96 rounded-xl bg-gradient-to-br ${solution.color} opacity-80 flex items-center justify-center`}>
                      <div className="text-white text-center">
                        <div className="text-6xl mb-4">
                          {index === 0 ? '💻' : index === 1 ? '☁️' : '📊'}
                        </div>
                        <p className="text-lg font-medium">{solution.heading}</p>
                      </div>
                    </div>
                  </div>
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
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground">
            Contact us today to discuss which solutions are right for your business.
          </p>
          <a
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#001F3F] via-[#00D9FF] to-[#7B2CBF] text-white rounded-lg hover:shadow-lg transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
