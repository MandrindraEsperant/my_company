import { Language, t } from '@/lib/lang';
import ContactForm from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'en' || rawLang === 'fr' ? rawLang : 'en') as Language;

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001F3F] to-[#0f0a1f] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t(lang, 'contact.title')}
          </h1>
          <p className="text-xl text-gray-300">
            {t(lang, 'contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4 p-6 rounded-lg border border-border bg-card">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#001F3F]/20">
                    <Mail className="w-6 h-6 text-[#001F3F]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {t(lang, 'contact.form.email')}
                  </h3>
                  <a
                    href={`mailto:${t(lang, 'contact.info.email')}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(lang, 'contact.info.email')}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 p-6 rounded-lg border border-border bg-card">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#00D9FF]/20">
                    <Phone className="w-6 h-6 text-[#00D9FF]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {t(lang, 'nav.quote')}
                  </h3>
                  <a
                    href={`tel:${t(lang, 'contact.info.phone')}`}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {t(lang, 'contact.info.phone')}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 p-6 rounded-lg border border-border bg-card">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#7B2CBF]/20">
                    <MapPin className="w-6 h-6 text-[#7B2CBF]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Address
                  </h3>
                  <p className="text-muted-foreground">
                    {t(lang, 'contact.info.address')}
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-6 rounded-lg border border-border bg-gradient-to-br from-[#001F3F]/10 to-[#00D9FF]/10">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Quick Response:</span> We typically respond within 24 hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-lg border border-border bg-card">
                <ContactForm lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '1. Initial Consultation', desc: 'We\'ll discuss your project goals and requirements.' },
              { title: '2. Proposal', desc: 'We\'ll provide a detailed proposal tailored to your needs.' },
              { title: '3. Partnership', desc: 'Let\'s work together to achieve your digital transformation.' },
            ].map((step) => (
              <div key={step.title} className="text-center">
                <h3 className="font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
