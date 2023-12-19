export interface TweetType {
  id: number;
  text: string;
  authorHandler: string;
  authorID: number;
  likes: number;
  views: number;
  media: string;
  name: string;
}

export interface UserType {
  name: string;
  email:string;
  image:string;
}