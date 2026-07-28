export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  description: string;
}

export interface StoreFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
