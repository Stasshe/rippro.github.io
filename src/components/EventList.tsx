/** @format */
"use client";

import type { CSSProperties, ReactNode } from 'react';
import { eventDataMap } from '@/lib/eventData';

const tableStyle: CSSProperties = {
  borderCollapse: 'collapse',
  width: '100%'
};

const trStyle: CSSProperties = {
  border: '1px solid black'
};

const tdStyle: CSSProperties = {
  border: '1px solid black',
  padding: '8px'
};

const thStyle: CSSProperties = {
  border: '1px solid black',
  padding: '8px',
  fontWeight: 'bold'
};

// Schedule component for events that have them
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

type ProblemSetType = {
  college: string;
  link: string;
};

type CommentaryType = {
  title: string;
  link: string;
};

type OtherContentType = {
  title: string;
  content: ReactNode;
};

export type EventDetailType = {
  title: string;
  day?: 'Day 1' | 'Day 2' | 'Day 3';
  date: {
    begin: string;
    end?: string;
  };
  detailURL?: string;
  problemSet: ProblemSetType[];
  commentary: CommentaryType[];
  writer?: string[];
  picture?: string;
  judge: string;
  iodata?: ReactNode;
  schedule?: ReactNode;
  place: string;
  otherContent?: OtherContentType[];
};

type EventDetailsType = Record<string, EventDetailType>;

const enrichEventData = (data: (typeof eventDataMap)[string]): EventDetailType => {
  const enriched: EventDetailType = { ...data };

  if (data.hasSchedule) {
    if (data.id === 'rupc2015') {
      enriched.schedule = rupc2015Schedule;
    } else if (data.id === 'rupc2013') {
      enriched.schedule = rupc2013Schedule;
    }
  }

  if (data.hasIOData && data.id === 'rupc2011') {
    enriched.iodata = rupc2011IOData;
  }

  return enriched;
};

export const EventDetails: EventDetailsType = Object.entries(eventDataMap).reduce(
  (acc, [id, data]) => {
    acc[id] = enrichEventData(data);
    return acc;
  },
  {} as EventDetailsType
);

export type EventType = {
  title: string;
  detail: string;
  date?: 'Day 1' | 'Day 2' | 'Day 3';
  id: string;
};

export const Events: EventType[] = Object.entries(EventDetails).map(([id, event]) => {
  const date = event.date?.begin && event.date?.end ? `${event.date.begin} - ${event.date.end}` : event.date?.begin;
  const detail = event.place.includes('立命')
    ? `${event.place} にて ${date} 合宿を開催しました．`
    : `${event.place} にて ${date} 合宿に参加しました．`;
  return {
    title: event.title,
    detail: detail,
    ...(event.day ? { date: event.day } : {}),
    id: id
  };
});
