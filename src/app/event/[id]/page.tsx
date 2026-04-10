/** @format */

'use client';

import { useParams } from 'next/navigation';
import type { FC, ReactNode } from 'react';
import { EventDetails, type EventDetailType } from '../../../components/EventList';
import { Layout } from '../../../components/Layout';

const defaultId = 'rupc2018';

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
        <tr style={trStyle}>
          <td style={tdStyle}>問題</td>
          <td style={tdStyle}>解説</td>
        </tr>
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

const EventDetail: FC = () => {
  const params = useParams<{ id?: string }>();
  const contestId = typeof params?.id === 'string' ? params.id : defaultId;
  const eventDetail = EventDetails[contestId] ?? EventDetails[defaultId];

  return (
    <Layout
      title={`${eventDetail.title} - RiPPro(立命館大学情報理工学部プロジェクト団体)`}
      description="過去に開催したイベント一覧ページ"
    >
      <div style={sectionStyle}>
        <h2>{eventDetail.title}</h2>
        <PictureElement contestId={contestId || defaultId} link={eventDetail.picture} />
        <EventDateElement date={eventDetail.date} />
        <JudgeSiteElement judgeURL={eventDetail.judge} />
        <EventDetailElement detailURL={eventDetail.detailURL} />
        <PlaceElement place={eventDetail.place} />
        <ProblemSetElement problemSet={eventDetail.problemSet} contestId={contestId || defaultId} />
        <CommentaryElement
          contestId={contestId || defaultId}
          day={eventDetail.day}
          commentary={eventDetail.commentary}
        />
        <IODataElement iodata={eventDetail.iodata} />
        <ScheduleElement schedule={eventDetail.schedule} />
        <WriterElement writer={eventDetail.writer} />
      </div>
    </Layout>
  );
};

export default EventDetail;
