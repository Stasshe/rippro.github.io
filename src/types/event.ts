export type ProblemSetType = {
  college: string;
  link: string;
};

export type CommentaryType = {
  title: string;
  link: string;
};

export type RawEventData = {
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
