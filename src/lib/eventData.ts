/** @format */
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

type ProblemSetType = {
  college: string;
  link: string;
};

type CommentaryType = {
  title: string;
  link: string;
};

type RawEventData = {
  id: string;
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
  place: string;
  hasSchedule?: boolean;
  hasIOData?: boolean;
};

export function loadEventDataFromDisk(): RawEventData[] {
  const eventsDir = join(process.cwd(), 'src', 'data', 'events');

  try {
    const files = readdirSync(eventsDir).filter(file => file.endsWith('.json'));

    return files.map(file => {
      const filePath = join(eventsDir, file);
      const content = readFileSync(filePath, 'utf-8');
      return JSON.parse(content) as RawEventData;
    });
  } catch (error) {
    console.error('Failed to load event data from disk:', error);
    return [];
  }
}

export const eventDataList = loadEventDataFromDisk();

export const eventDataMap = eventDataList.reduce(
  (acc, data) => {
    acc[data.id] = data;
    return acc;
  },
  {} as Record<string, RawEventData>
);
