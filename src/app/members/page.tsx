/** @format */
'use client';

import AtCoderGraph from '../../components/atcoder/AtCoderGraph';
import { Layout } from '../../components/PageLayout';

const AtCoderPage = () => {
  return (
    <Layout title="部員向けページ - RiPPro(立命館大学情報理工学部プロジェクト団体)" description="部員向けページ">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        <section className="section-block space-y-4 bg-gradient-to-r from-[#e9fbff] via-white to-[#fff5dc]">
          <p className="section-kicker [font-family:var(--font-mono)]">members only</p>
          <h2>AtCoder進捗どうですか</h2>
          <p>継続して解いた問題数の推移をチェックして、次の目標を立てていきましょう。</p>
        </section>

        <section className="section-block overflow-x-auto">
          <h3 className="mb-4 text-[1.25rem]">Summary</h3>
          <div className="min-w-[720px] rounded-[16px] border border-rippro-dark/15 bg-white/95 px-2 py-4 md:px-4">
            <AtCoderGraph />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AtCoderPage;
