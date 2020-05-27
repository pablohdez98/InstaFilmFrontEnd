import {Review} from '../comment/review';

export interface Film {
  id: number;
  title: string;
  releaseYear: number;
  director: string;
  cast: string;
  genre: string;
  image_path: string;
  synopsis: string;
  trailer: string;
  duration: number;
  comments: Review[];
  createdAt: Date;
  updatedAt: Date;
}
