import { getAllEventsFromMdx, getEventById } from '@/lib/eventMdx';
import { Layout } from '../../../components/Layout';

const sectionStyle = {
  marginLeft: '8px',
  padding: '2px',
  fontSize: '11pt'
};

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const EventDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const event = getEventById(id);

  if (!event) {
    return (
      <Layout title="イベントが見つかりません - RiPPro(立命館大学情報理工学部プロジェクト団体)">
        <div style={sectionStyle}>
          <h2>イベントが見つかりません</h2>
        </div>
      </Layout>
    );
  }

  const dateText = event.date.end ? `${event.date.begin} - ${event.date.end}` : event.date.begin;

  return (
    <Layout
      title={`${event.title} - RiPPro(立命館大学情報理工学部プロジェクト団体)`}
      description="過去に開催したイベント詳細ページ"
    >
      <div style={sectionStyle}>
        <h2>{event.title}</h2>
        <p>{dateText}</p>
        <div dangerouslySetInnerHTML={{ __html: event.contentHtml }} />
      </div>
    </Layout>
  );
};

export async function generateStaticParams() {
  return getAllEventsFromMdx().map((event) => ({
    id: event.id
  }));
}

export default EventDetailPage;
