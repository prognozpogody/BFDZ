export interface CardListProps {
  products: CardProducts[];
}

export interface CardProducts {
  name: string;
  _id: string;
  description: string;
  pictures: string;
  price: number;
  author: object;
  available: boolean;
  created_at: string;
  discount: number;
  isPublished: boolean;
  likes: string[];
  reviews: object;
  stock: number;
  tags: string[];
  updated_at: string;
  wight: string;
  __v: number;
  isCheck: boolean;
  count: number;
  id: string;
}

export interface CardType {
  isCheck: boolean;
  count: number;
  id: string;
}

export interface favorites {
  id: string;
}