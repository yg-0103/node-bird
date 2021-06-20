
export interface PostData {
  mainPosts: MainPost[];
  imagePath: any[];
  postAdded: boolean;
}

export interface MainPost {
  id:       number;
  user:     MainPostUser;
  content:  string;
  images:   Image[];
  comments: Comment[];
}

export interface Comment {
  user:    CommentUser;
  content: string;
}

export interface CommentUser {
  nickname: string;
}

export interface Image {
  src: string;
}

export interface MainPostUser {
  id:       number;
  nickname: string;
}
