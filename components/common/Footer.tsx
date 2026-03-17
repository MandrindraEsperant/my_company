import Link from 'next/link';
import { Language, t } from '@/lib/lang';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer({ lang }: { lang: Language }) {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t(lang, 'footer.quickLinks'),
      links: [
        { label: t(lang, 'nav.home'), href: `/${lang}` },
        { label: t(lang, 'nav.solutions'), href: `/${lang}/solutions` },
        { label: t(lang, 'nav.portfolio'), href: `/${lang}/portfolio` },
        { label: t(lang, 'nav.about'), href: `/${lang}/about` },
      ],
    },
    {
      title: t(lang, 'footer.services'),
      links: [
        { label: t(lang, 'services.pillar1.title'), href: `/${lang}/solutions#development` },
        { label: t(lang, 'services.pillar2.title'), href: `/${lang}/solutions#cloud` },
        { label: t(lang, 'services.pillar3.title'), href: `/${lang}/solutions#marketing` },
      ],
    },
    {
      title: t(lang, 'footer.company'),
      links: [
        { label: t(lang, 'nav.about'), href: `/${lang}/about` },
        { label: t(lang, 'nav.contact'), href: `/${lang}/contact` },
        { label: t(lang, 'nav.blog'), href: `/${lang}/blog` },
      ],
    },
  ];

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-[#001F3F] via-[#00D9FF] to-[#7B2CBF] rounded-lg"></div>
              <span className="font-bold text-lg bg-gradient-to-r from-[#001F3F] via-[#00D9FF] to-[#7B2CBF] bg-clip-text text-transparent">CLYSYS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t(lang, 'footer.about')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-border pt-8 mb-8">
          <h3 className="font-semibold mb-4">{t(lang, 'contact.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">{t(lang, 'contact.form.email')}</p>
                <a href={`mailto:${t(lang, 'contact.info.email')}`} className="text-sm font-medium hover:text-primary transition-colors">
                  {t(lang, 'contact.info.email')}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-secondary" />
              <div>
                <p className="text-xs text-muted-foreground">{t(lang, 'nav.quote')}</p>
                <a href={`tel:${t(lang, 'contact.info.phone')}`} className="text-sm font-medium hover:text-secondary transition-colors">
                  {t(lang, 'contact.info.phone')}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">{t(lang, 'contact.form.subject')}</p>
                <p className="text-sm font-medium">
                  {t(lang, 'contact.info.address')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t(lang, 'footer.copyright').replace('2024', currentYear.toString())}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t(lang, 'footer.legal')}
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
