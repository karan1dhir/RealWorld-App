export interface Article {
  articles: Array<Items>;
  articlesCount: Number;
}
export interface Items {
  author: {
    username?: string;
    bio?: string;
    image?: string;
    following?: boolean;
  };
  body?: string;
  created?: string;
  description?: string;
  favorited?: boolean;
  favoritesCount?: number;
  slug?: string;
  tagList?: any[];
  title?: string;
  updatedAt?: string;
}
export interface Tags {
  tags: Array<string>;
}
