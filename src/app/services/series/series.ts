import {Review} from '../comment/review';

export interface Series {
  id: number;
  title: string;
  synopsis: string;
  seasons: number;
  episodes: number;
  trailer: string;
  director: string;
  cast: string;
  genre: string;
  releaseYear: number;
  image_path?: string;
  comments: Review[];
  createdAt: Date;
  updatedAt: Date;
}
