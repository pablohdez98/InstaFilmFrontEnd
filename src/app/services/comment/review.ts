export interface Review {
  id: number;
  content: string;
  userId: number;
  seriesId: number;
  createdAt: Date;
  updatedAt: Date;
}
