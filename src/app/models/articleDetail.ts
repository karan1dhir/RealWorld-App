export interface ArticleDetails {
  article: {
    title: string;
    slug: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    tagList: Array<any>;
    description: string;
    author: {
      username: string;
      bio: string;
      image: string;
      following: boolean;
    };
    favorited: boolean;
    favoritesCount: Number;
  };
}
