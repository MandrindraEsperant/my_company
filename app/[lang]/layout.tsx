import { Metadata } from 'next';
import { getLang, SUPPORTED_LANGS } from '@/lib/lang';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';

export async function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({
    lang,
  }));
}

export const metadata: Metadata = {
  title: 'CLYSYS CODEX - Digital Excellence',
  description: 'Software Development, Cloud Infrastructure & Digital Marketing Solutions',
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = getLang(rawLang);

  return (
    <div lang={lang} className="flex flex-col min-h-screen">
      <Navbar lang={lang} />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer lang={lang} />
    </div>
  );
}
