type ReviewAlias = {
  comment: string;
  rating: number;
  reviewer: string;
};

export interface INanny {
  about: string;
  avatar_url: string;
  birthday: Date;
  characters: string[];
  education: string;
  experience: string;
  id: string;
  kids_age: string;
  location: string;
  name: string;
  price_per_hour: number;
  rating: number;
  reviews: ReviewAlias[];
}
