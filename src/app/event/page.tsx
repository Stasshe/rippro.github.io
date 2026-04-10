'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { Events, type EventType } from '../../components/EventList';
import { Layout } from '../../components/Layout';

const sectionStyle = {
  marginLeft: '8px',
  padding: '2px',
  fontSize: '11pt'
};

const detailStyle = {
  textAlign: 'right' as const,
  margin: '8px 16px'
};

const Event: FC = () => {
  return (
    <Layout
      title="解説 - RiPPro(立命館大学情報理工学部プロジェクト団体)"
      description="過去に開催したイベント一覧ページ"
    >
      {Events.map((event: EventType) => {
        return (
          <div style={sectionStyle} key={event.id}>
            <h2>
              {event.title} {event.date ? event.date + ' ' : ''}解説
            </h2>
            {event.detail}
            <div style={detailStyle}>
              <Link href={`/event/${event.id}`}>詳細はこちら</Link>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Event;
