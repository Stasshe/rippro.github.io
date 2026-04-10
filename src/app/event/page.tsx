import Link from 'next/link';
import { getEventSummaries } from '@/lib/eventMdx';
import { Layout } from '../../components/PageLayout';

const Event = () => {
  const events = getEventSummaries();

  return (
    <Layout
      title="解説 - RiPPro(立命館大学情報理工学部プロジェクト団体)"
      description="過去に開催したイベント一覧ページ"
    >
      <div className="event-page">
        <section className="section-block space-y-4 bg-gradient-to-r from-[#e9fbff] via-white to-[#fff4d8]">
          <p className="section-kicker [font-family:var(--font-mono)]">archive</p>
          <h2>過去イベント解説</h2>
          <p>RiPPro が開催してきた合宿・コンテストの解説記事です。</p>
        </section>

        <section className="event-list">
          {events.map((event) => {
            return (
              <article className="event-card" key={event.id}>
                <h2>{event.title} 解説</h2>
                <p className="event-summary">{event.detail}</p>
                <div className="event-detail-link">
                  <Link
                    href={`/event/${event.id}`}
                    className="inline-flex rounded-full border border-rippro-dark/20 bg-white px-4 py-2 [font-family:var(--font-mono)] text-xs uppercase tracking-[0.15em] no-underline transition hover:bg-rippro-brand/20"
                  >
                    詳細はこちら
                  </Link>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </Layout>
  );
};

export default Event;
