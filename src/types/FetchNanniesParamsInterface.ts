export interface FetchNanniesParams {
  lastDocId?: string | null;
  limit?: number;
  sortBy?: string;
  direction?: 'asc' | 'desc';
  priceGreaterThan?: number;
  priceLessThan?: number;
  ratingGreaterThan?: number;
  ratingLessThan?: number;
}
