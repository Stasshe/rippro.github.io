/** @format */

import type { FC, ReactNode } from 'react';
import type { RawEventData } from '@/types/event';
import { eventDataMap } from '@/lib/generatedEventData';
import { Layout } from '../../../components/Layout';

const defaultId = 'rupc2018';

// Schedule data for specific events
const tableStyle = {
  borderCollapse: 'collapse' as const,
  width: '100%'
};

const trStyle = {
  border: '1px solid black'
};

const tdStyle = {
  border: '1px solid black',
  padding: '8px'
};

const thStyle = {
  border: '1px solid black',
  padding: '8px',
  fontWeight: 'bold'
};

const rupc2015Schedule = (
  <table style={tableStyle}>
    <thead>
      <tr style={trStyle}>
        <th style={thStyle}>Day</th>
        <th style={thStyle}>Time</th>
        <th style={thStyle}></th>
      </tr>
    </thead>
    <tbody>
      <tr style={trStyle}>
        <th style={thStyle} rowSpan={5}>
          Day 1
        </th>
        <td style={tdStyle}>13:00 - 14:00</td>
        <td style={tdStyle}>集合，開会，自己紹介など</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>14:00 - 14:30</td>
        <td style={tdStyle}>チーム編成</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>14:30 - 17:30</td>
        <td style={tdStyle}>模擬コンテスト1 (3時間セット)</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>17:30 - 18:30</td>
        <td style={tdStyle}>問題解説</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>19:00 -</td>
        <td style={tdStyle}>懇親会</td>
      </tr>
      <tr style={trStyle}>
        <th style={thStyle} rowSpan={4}>
          Day 2
        </th>
        <td style={tdStyle}>10:00 - 11:00</td>
        <td style={tdStyle}>集合・チーム編成</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>11:00 - 16:00</td>
        <td style={tdStyle}>模擬コンテスト2 (5時間セット)</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>16:00 - 17:00</td>
        <td style={tdStyle}>問題解説</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>19:00 -</td>
        <td style={tdStyle}>懇親会</td>
      </tr>
      <tr style={trStyle}>
        <th style={thStyle} rowSpan={3}>
          Day 3
        </th>
        <td style={tdStyle}>09:00 - 10:00</td>
        <td style={tdStyle}>集合・チーム編成</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>10:00 - 13:00</td>
        <td style={tdStyle}>模擬コンテスト3 (3時間セット)</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>13:00 -</td>
        <td style={tdStyle}>問題解説</td>
      </tr>
    </tbody>
  </table>
);

const rupc2013Schedule = (
  <table style={tableStyle}>
    <thead>
      <tr style={trStyle}>
        <th style={thStyle}>Day</th>
        <th style={thStyle}>Time</th>
        <th style={thStyle}></th>
      </tr>
    </thead>
    <tbody>
      <tr style={trStyle}>
        <th style={thStyle} rowSpan={5}>
          Day 1
        </th>
        <td style={tdStyle}>13:00 - 14:00</td>
        <td style={tdStyle}>集合，開会，自己紹介など</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>14:00 - 14:30</td>
        <td style={tdStyle}>チーム編成</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>14:30 - 17:30</td>
        <td style={tdStyle}>模擬コンテスト1 (3時間セット)</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>17:30 - 18:30</td>
        <td style={tdStyle}>問題解説</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>19:00 -</td>
        <td style={tdStyle}>懇親会</td>
      </tr>
      <tr style={trStyle}>
        <th style={thStyle} rowSpan={3}>
          Day 2
        </th>
        <td style={tdStyle}>10:00 - 11:00</td>
        <td style={tdStyle}>集合・チーム編成</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>11:00 - 16:00</td>
        <td style={tdStyle}>模擬コンテスト2 (5時間セット)</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>16:00 - 17:00</td>
        <td style={tdStyle}>問題解説</td>
      </tr>
      <tr style={trStyle}>
        <th style={thStyle} rowSpan={3}>
          Day 3
        </th>
        <td style={tdStyle}>09:00 - 10:00</td>
        <td style={tdStyle}>集合・チーム編成</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>10:00 - 13:00</td>
        <td style={tdStyle}>模擬コンテスト3 (3時間セット)</td>
      </tr>
      <tr style={trStyle}>
        <td style={tdStyle}>14:00 - 15:00</td>
        <td style={tdStyle}>問題解説</td>
      </tr>
    </tbody>
  </table>
);

const rupc2011IOData = (
  <a href="dataset.zip" download>
    データセット
  </a>
);

const extension = (filename: string) => {
  const parts = filename.split('.');
  return parts[parts.length - 1];
};

type IODataProps = {
  iodata?: ReactNode | null | undefined;
};
const IODataElement: FC<IODataProps> = (Props: IODataProps) => {
  if (Props.iodata) {
    return (
      <>
        <h3>問題文・入出力データ</h3>
        {Props.iodata}
      </>
    );
  } else {
    return <></>;
  }
};

type PlaceProps = {
  place?: string | null | undefined;
};
const PlaceElement: FC<PlaceProps> = (Props: PlaceProps) => {
  if (Props.place) {
    return (
      <>
        <h3>会場</h3>
        <p>{Props.place}</p>
      </>
    );
  } else {
    return <></>;
  }
};

type PictureProps = {
  link?: string | null | undefined;
  contestId?: string | null | undefined;
};
const PictureElement: FC<PictureProps> = (Props: PictureProps) => {
  if (Props.link) {
    return (
      <div style={{ textAlign: 'center' }}>
        <img src={`/static/contestData/${Props.contestId}/${Props.link}`} alt={`Contest ${Props.contestId} picture`} />
      </div>
    );
  } else {
    return <></>;
  }
};

type ScheduleProps = {
  schedule?: ReactNode | null | undefined;
};
const ScheduleElement: FC<ScheduleProps> = (Props: ScheduleProps) => {
  if (Props.schedule) {
    return (
      <>
        <h3>合宿内容</h3>
        {Props.schedule}
      </>
    );
  } else {
    return <></>;
  }
};

type EventDetailProps = {
  detailURL?: string | null | undefined;
};
const EventDetailElement: FC<EventDetailProps> = (Props: EventDetailProps) => {
  if (Props.detailURL) {
    return (
      <>
        <h3>イベント概要</h3>
        <a href={Props.detailURL}>{Props.detailURL}</a>
      </>
    );
  } else {
    return <></>;
  }
};

type JudgeSiteProps = {
  judgeURL?: string | null | undefined;
};
const JudgeSiteElement: FC<JudgeSiteProps> = (Props: JudgeSiteProps) => {
  if (Props.judgeURL) {
    return (
      <>
        <h3>ジャッジシステム</h3>
        <a href={Props.judgeURL}>{Props.judgeURL}</a>
      </>
    );
  } else {
    return <></>;
  }
};

type EventDateProps = {
  date: { begin: string; end?: string | null | undefined };
};
const EventDateElement: FC<EventDateProps> = (Props: EventDateProps) => {
  return (
    <>
      <h3>開催日時</h3>
      {Props.date.begin}
      {Props.date.end ? ` - ${Props.date.end}` : ''}
    </>
  );
};

type WriterProps = {
  writer?: string[] | null | undefined;
};
const WriterElement: FC<WriterProps> = (Props: WriterProps) => {
  if (Props.writer) {
    return (
      <>
        <h3>問題作成・ジャッジ</h3>
        <ul>
          {Props.writer.map((writer: string) => {
            return (
              <li key={writer}>
                <a href={`https://twitter.com/${writer}`}>{`@${writer}`}</a>
              </li>
            );
          })}
        </ul>
      </>
    );
  } else {
    return <></>;
  }
};

type CommentaryProps = {
  contestId: string;
  day: 'Day 1' | 'Day 2' | 'Day 3' | undefined;
  commentary: { title: string; link: string }[];
};
const CommentaryElement: FC<CommentaryProps> = (Props: CommentaryProps) => {
  return (
    <>
      <h3>{Props.day + ' ' || ''}解説</h3>
      <table style={tableStyle}>
        <thead>
          <tr style={trStyle}>
            <td style={tdStyle}>問題</td>
            <td style={tdStyle}>解説</td>
          </tr>
        </thead>
        <tbody>
          {Props.commentary.map((commentary) => {
            return (
              <tr style={trStyle} key={commentary.title}>
                <td style={tdStyle}>{commentary.title}</td>
                <td style={tdStyle}>
                  <a href={`/static/contestData/${Props.contestId}/${commentary.link}`}>{extension(commentary.link)}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

type ProblemSetProps = {
  problemSet: { college: string; link: string }[];
  contestId: string;
};
const ProblemSetElement: FC<ProblemSetProps> = (Props: ProblemSetProps) => {
  return (
    <>
      <h3>問題セット</h3>
      <ul>
        {Props.problemSet.map((college) => {
          return (
            <li key={college.college}>
              {college.link ? <a href={college.link}>{college.college}</a> : <>{college.college}</>}
            </li>
          );
        })}
      </ul>
    </>
  );
};

const sectionStyle = {
  marginLeft: '8px',
  padding: '2px',
  fontSize: '11pt'
};

type PageProps = {
  params: { id: string };
};

const EventDetail: FC<PageProps> = ({ params }) => {
  const contestId = params.id;
  const rawEventDetail: RawEventData | undefined = eventDataMap[contestId] ?? eventDataMap[defaultId];

  if (!rawEventDetail) {
    return (
      <Layout title="イベントが見つかりません - RiPPro(立命館大学情報理工学部プロジェクト団体)">
        <div style={sectionStyle}>
          <h2>イベントが見つかりません</h2>
        </div>
      </Layout>
    );
  }

  // Enrich event data with schedule and iodata
  const iodata = rawEventDetail.hasIOData && rawEventDetail.id === 'rupc2011' ? rupc2011IOData : undefined;
  const schedule =
    rawEventDetail.hasSchedule && rawEventDetail.id === 'rupc2015'
      ? rupc2015Schedule
      : rawEventDetail.hasSchedule && rawEventDetail.id === 'rupc2013'
        ? rupc2013Schedule
        : undefined;

  return (
    <Layout
      title={`${rawEventDetail.title} - RiPPro(立命館大学情報理工学部プロジェクト団体)`}
      description="過去に開催したイベント一覧ページ"
    >
      <div style={sectionStyle}>
        <h2>{rawEventDetail.title}</h2>
        <PictureElement contestId={contestId || defaultId} link={rawEventDetail.picture} />
        <EventDateElement date={rawEventDetail.date} />
        <JudgeSiteElement judgeURL={rawEventDetail.judge} />
        <EventDetailElement detailURL={rawEventDetail.detailURL} />
        <PlaceElement place={rawEventDetail.place} />
        <ProblemSetElement problemSet={rawEventDetail.problemSet} contestId={contestId || defaultId} />
        <CommentaryElement
          contestId={contestId || defaultId}
          day={rawEventDetail.day}
          commentary={rawEventDetail.commentary}
        />
        <IODataElement iodata={iodata} />
        <ScheduleElement schedule={schedule} />
        <WriterElement writer={rawEventDetail.writer} />
      </div>
    </Layout>
  );
};

export async function generateStaticParams() {
  return Object.keys(eventDataMap).map((id) => ({
    id
  }));
}

export default EventDetail;
