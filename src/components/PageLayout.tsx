import NextHead from 'next/head';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';

type PageLayoutProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
};

const defaultDescription =
  '立命館大学情報理工学部プロジェクト団体 競技プログラミング部門「RiPPro」です。ACM-ICPC (プログラミングの学生世界大会) などの大会で入賞することを目的として活動しています。';
const defaultTitle = 'RiPPro - 立命館大学情報理工学部プロジェクト団体';

const navItems = [
  { href: '/', label: 'トップ' },
  { href: '/welcome', label: '新歓情報' },
  { href: '/event', label: '解説' },
  { href: '/contact', label: 'お問い合わせ' },
  { href: '/links', label: 'リンク' },
  { href: '/members', label: '部員向け' }
];

type SiteMetaProps = {
  title: string | undefined;
  description: string | undefined;
};

const SiteMeta: FC<SiteMetaProps> = ({ title, description }) => (
  <NextHead>
    <title>{title ?? defaultTitle}</title>
    <meta name="description" content={description ?? defaultDescription} />
    <link rel="icon" href="/favicon.ico" />
    <meta name="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:image" content="https://avatars.githubusercontent.com/u/7278547?s=200&amp;v=4" />
  </NextHead>
);

const SiteNavigator: FC = () => (
  <nav className="flex flex-wrap items-center justify-start gap-2 md:justify-end">
    {navItems.map((item, index) => (
      <Link
        key={item.href}
        href={item.href}
        className="group rounded-full border border-rippro-dark/20 bg-white/80 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-rippro-dark no-underline transition duration-300 hover:-translate-y-0.5 hover:border-rippro-dark hover:bg-rippro-light-accent/35"
      >
        <span className="opacity-50">0{index + 1}</span> <span className="ml-1">{item.label}</span>
      </Link>
    ))}
  </nav>
);

const SiteHeader: FC = () => (
  <header className="relative overflow-hidden rounded-b-[28px] border-b border-rippro-dark/15 bg-gradient-to-r from-white via-[#fff8df] to-[#e8fbfd] px-4 pb-6 pt-5 md:px-8 md:pb-8 md:pt-7">
    <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-rippro-light-accent/25 blur-3xl" />
    <div className="pointer-events-none absolute -right-20 top-10 h-44 w-44 rounded-full bg-rippro-brand/20 blur-3xl" />
    <div className="relative flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <Link href="/" className="max-w-max no-underline">
        <img className="w-[220px] md:w-[260px]" src="/rippro-rogo.png" alt="RiPPro" />
        <p className="mt-2 [font-family:var(--font-mono)] text-xs uppercase tracking-[0.22em] text-rippro-dark/75">
          ritsumeikan programming project
        </p>
      </Link>
      <SiteNavigator />
    </div>
  </header>
);

const SiteFooter: FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-rippro-dark/10 bg-[#f9fbff] px-4 py-6 md:px-8">
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-rippro-brand via-rippro-light-accent to-rippro-dark-accent" />
      <p className="[font-family:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-rippro-dark/70">
        Copyright (C) 2005-{year} RiPPro All rights reserved.
      </p>
    </footer>
  );
};

export const Layout: FC<PageLayoutProps> = ({ children, title, description }) => (
  <>
    <SiteMeta title={title} description={description} />
    <div className="site-shell">
      <div className="site-card">
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
      </div>
    </div>
  </>
);
