'use client';

import type { FC } from 'react';
import { Layout } from '../../components/PageLayout';
import { type LinksType, type SectionType, sections } from '../../components/Links';

const LinkSection: FC<SectionType> = (props: SectionType) => {
  return (
    <article className="rounded-[18px] border border-rippro-dark/15 bg-white/85 p-5 md:p-6">
      <h3 className="mb-4 text-[1.35rem]">{props.title}</h3>
      <ul className="space-y-2">
        {props.contents.map((linkItem: LinksType) => {
          return (
            <li key={linkItem.title}>
              <a
                href={linkItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rippro-dark no-underline hover:underline"
              >
                {linkItem.title}
              </a>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

const Links: FC = () => {
  return (
    <Layout
      title="リンク - RiPPro(立命館大学情報理工学部プロジェクト団体)"
      description="他サイトへのリンクを記載したページ"
    >
      <div className="mx-auto w-full max-w-5xl space-y-6">
        <section className="section-block space-y-4 bg-gradient-to-r from-white to-[#e8fbfd]">
          <p className="section-kicker [font-family:var(--font-mono)]">connections</p>
          <h2>リンク</h2>
          <p>競技プログラミングや情報理工の学びにつながるサイトをまとめています。</p>
        </section>
        <section className="grid gap-4 md:grid-cols-2">
          {sections.map((section: SectionType) => {
            return <LinkSection {...section} key={section.title} />;
          })}
        </section>
      </div>
    </Layout>
  );
};

export default Links;
