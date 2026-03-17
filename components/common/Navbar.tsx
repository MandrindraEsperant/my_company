'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Language, t } from '@/lib/lang';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar({ lang }: { lang: Language }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isLinkActive = (href: string) => {
    const normalizedPathname = pathname.replace(`/${lang}`, '') || '/';
    const normalizedHref = href.replace(`/${lang}`, '') || '/';
    return normalizedPathname === normalizedHref;
  };

  const navLinks = [
    { href: `/${lang}`, label: t(lang, 'nav.home') },
    { href: `/${lang}/solutions`, label: t(lang, 'nav.solutions') },
    { href: `/${lang}/products`, label: t(lang, 'nav.products') },
    { href: `/${lang}/portfolio`, label: t(lang, 'nav.portfolio') },
    { href: `/${lang}/about`, label: t(lang, 'nav.about') },
    { href: `/${lang}/contact`, label: t(lang, 'nav.contact') },
  ];

  const otherLang = lang === 'en' ? 'fr' : 'en';
  const otherLangLabel = lang === 'en' ? 'FR' : 'EN';

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link
            href={`/${lang}`}
            className="flex items-center gap-2 font-bold transition-transform hover:scale-[1.02] active:scale-95"
          >
            <img
              src="/logo/apple-icon.png"
              alt="Clysys"
              className="w-10 h-10 object-contain" 
            />
            <span className="text-slate-900 dark:text-white">CLYSYS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all relative pb-2 ${
                    active ? 'text-blue-600' : 'text-foreground/70 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                  {active && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              href={`/${otherLang}${typeof window !== 'undefined' ? window.location.pathname.replace(`/${lang}`, '') : ''}`}
              className="text-sm font-medium px-3 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {otherLangLabel}
            </Link>

            {/* CTA Button Desktop */}
            <Button
              asChild
              className="hidden sm:inline-flex bg-gradient-to-br from-blue-600 to-indigo-700 text-white hover:opacity-90 shadow-md hover:shadow-indigo-500/20 transition-all"
            >
              <Link href={`/${lang}/contact`}>
                {t(lang, 'nav.quote')}
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2 py-4">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 text-base font-medium rounded-xl transition-all ${
                      active
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 border-l-4 border-blue-600'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-900 text-foreground/70'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="px-4 mt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md"
                >
                  <Link href={`/${lang}/contact`}>
                    {t(lang, 'nav.quote')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}