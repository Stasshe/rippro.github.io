import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Playfair_Display, Space_Mono } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'RiPPro(立命館大学情報理工学部プロジェクト団体)',
  description:
    '立命館大学情報理工学部プロジェクト団体 RiPPro (Ritsumeikan Programming Project) は、ACM-ICPC (プログラミングの学生世界大会) などの大会で入賞することを目的として結成されました。'
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ja">
      <body className={`${playfair.variable} ${spaceMono.variable}`}>{children}</body>
    </html>
  );
}
