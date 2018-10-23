export interface UserComments {
  comments: Array<UserComment>;
}
export interface UserComment {
  id: Number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}
