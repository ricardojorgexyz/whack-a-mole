export type ScoreRecord = {
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
