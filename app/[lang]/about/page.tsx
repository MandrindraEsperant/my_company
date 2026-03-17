import { Language, t } from '@/lib/lang';
import { Lightbulb, Target, Heart, Users } from 'lucide-react';

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = (rawLang === 'en' || rawLang === 'fr' ? rawLang : 'en') as Language;

  const values = t(lang, 'about.values.items');

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#001F3F] to-[#0f0a1f] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t(lang, 'about.title')}
          </h1>
          <p className="text-xl text-gray-300">
            {t(lang, 'nav.about')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {t(lang, 'about.story.heading')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(lang, 'about.story.content')}
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl border border-border bg-card">
              <Target className="w-12 h-12 text-[#001F3F] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {t(lang, 'about.mission.heading')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(lang, 'about.mission.content')}
              </p>
            </div>

            <div className="p-8 rounded-xl border border-border bg-card">
              <Lightbulb className="w-12 h-12 text-[#00D9FF] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {t(lang, 'about.vision.heading')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(lang, 'about.vision.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            {t(lang, 'about.values.heading')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, color: 'text-[#001F3F]', bgColor: 'bg-[#001F3F]/10' },
              { icon: Heart, color: 'text-[#00D9FF]', bgColor: 'bg-[#00D9FF]/10' },
              { icon: Users, color: 'text-[#7B2CBF]', bgColor: 'bg-[#7B2CBF]/10' },
              { icon: Target, color: 'text-[#001F3F]', bgColor: 'bg-[#001F3F]/10' },
            ].map((iconData, index) => {
              const value = Array.isArray(values) ? values[index] : null;
              if (!value) return null;

              const Icon = iconData.icon;
              return (
                <div key={value.title} className="p-6 rounded-lg border border-border bg-card">
                  <div className={`${iconData.bgColor} p-3 rounded-lg w-fit mb-4`}>
                    <Icon className={`w-6 h-6 ${iconData.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Meet Our Team
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Our talented team of developers, architects, and strategists work collaboratively to deliver exceptional results for every project.
          </p>
          
          {/* Placeholder for team members - can be expanded */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center p-6 rounded-lg border border-border bg-card">
                <div className="w-24 h-24 bg-gradient-to-br from-[#001F3F] to-[#00D9FF] rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Team Member</h3>
                <p className="text-muted-foreground text-sm">Professional Role</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
