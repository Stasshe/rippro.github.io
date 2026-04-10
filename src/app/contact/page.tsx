'use client';

import type { FC } from 'react';
import { Layout } from '../../components/PageLayout';
import Twitter from '../../components/Twitter';

const Contact: FC = () => {
  return (
    <Layout
      title="お問い合わせ - RiPPro(立命館大学情報理工学部プロジェクト団体)"
      description="RiPProへのコンタクトページ"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="section-block space-y-6">
          <p className="section-kicker [font-family:var(--font-mono)]">contact</p>
          <h2>お問い合わせ</h2>

          <div className="space-y-4">
            <h3 className="text-[1.3rem]">連絡先</h3>
            <p>
              入部希望者または質問等がある方は，名前・学部学科・回生を明記の上，下記のメールアドレスにメールをしていただくか，下記のRiPProのTwitter公式アカウントにDMしてください．
            </p>
            <p>※Twitterの方が対応が早いため，Twitterでの連絡をおすすめします．</p>
            <dl className="rounded-[16px] border border-rippro-dark/15 bg-white/85 p-4 [font-family:var(--font-mono)] text-sm">
              <dd>Mail: ripprotarou[@]gmail.com</dd>
              <dd>
                Twitter:{' '}
                <a href="https://twitter.com/pj_rippro" target="_blank" rel="noopener noreferrer">
                  @PJ_RiPPro
                </a>
              </dd>
            </dl>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-[16px] border border-rippro-dark/15 bg-gradient-to-br from-white to-[#ebfbff] p-5">
              <h3 className="mb-2 text-[1.1rem]">活動場所</h3>
              <p>OIC H棟5階 H501教室</p>
            </article>
            <article className="rounded-[16px] border border-rippro-dark/15 bg-gradient-to-br from-white to-[#fff5db] p-5">
              <h3 className="mb-2 text-[1.1rem]">活動時間</h3>
              <p>週1回 18:00〜</p>
              <p className="mt-1 text-sm">（部員の授業スケジュールの兼ね合いで毎学期始めに曜日を決定しています）</p>
            </article>
          </div>
        </section>

        <section className="section-block">
          <Twitter />
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
