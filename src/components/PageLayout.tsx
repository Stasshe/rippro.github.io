import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
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
  <Stack spacing={1} direction="row">
    <Link href="/">
      <Button variant="text" className="text-lg!">
        トップ
      </Button>
    </Link>
    <Link href="/welcome">
      <Button variant="text" className="text-lg! font-bold!">
        新歓情報
      </Button>
    </Link>
    <Link href="/event">
      <Button variant="text" className="text-lg!">
        解説
      </Button>
    </Link>
    <Link href="/contact">
      <Button variant="text" className="text-lg!">
        お問い合わせ
      </Button>
    </Link>
    <Link href="/links">
      <Button variant="text" className="text-lg!">
        リンク
      </Button>
    </Link>
    <Link href="/members">
      <Button variant="text" className="text-lg!">
        部員向け
      </Button>
    </Link>
  </Stack>
);

const SiteHeader: FC = () => (
  <div className="mx-4 my-4 flex justify-between border-b-2 border-[#700] py-0.5">
    <Link href="/" className="no-underline visited:no-underline hover:text-black hover:underline">
      <img className="mx-1.25 mb-1.25 mt-2.5 w-50 align-middle" src="/rippro-rogo.png" alt="rippro-rogo" />
    </Link>
    <SiteNavigator />
  </div>
);

const SiteFooter: FC = () => {
  const year = new Date().getFullYear();
  return (
    <div className="clear-both bg-[#004599] p-0.5 text-center text-[10px] text-white">
      Copyright (C) 2005-{year} RiPPro All rights reserved.
    </div>
  );
};

export const Layout: FC<PageLayoutProps> = ({ children, title, description }) => (
  <div>
    <SiteMeta title={title} description={description} />
    <div className="mx-auto my-1 w-200 rounded-2.5 bg-white shadow-[0_10px_25px_0_rgba(0,0,0,0.5)]">
      <SiteHeader />
      <div className="m-2">{children}</div>
      <SiteFooter />
    </div>
  </div>
);
