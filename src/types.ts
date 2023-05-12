export type ScoreRecord = {
  id?: number;
  username: string;
  score: number;
};

export type Leaderboard = ScoreRecord[];

export type UserSettings = {
  username: string;
  diff: 'easy' | 'med' | 'hard';
  sfx: number;
  music: number;
  showProto: boolean;
};

export type ApiResponseRecord = {
  createdTime: string;
  fields: ScoreRecord;
  id: string;
};

export type ApiResponse = {
  records: ApiResponseRecord[];
};
