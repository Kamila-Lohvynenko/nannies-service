export interface IReview {
  comment: string;
  rating: number;
  reviewer: string;
}

export interface INanny {
  id: string;
  about: string;
  avatar_url: string;
  birthday: string;
  characters: string[];
  education: string;
  experience: string;
  kids_age: string;
  location: string;
  name: string;
  price_per_hour: number;
  rating: number;
  reviews: IReview[];
}
