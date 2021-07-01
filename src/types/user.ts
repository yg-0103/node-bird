export interface UserData {
  loading: boolean;
  isLogin: boolean;
  me: Me | null;
  signUpData: any;
  loginData: any;
}

export interface Me {
  id: number;
  password: string;
  nickname: string;
  posts: MePost[]
  followers: Follower[]
  followings: Following[]
}

export interface MePost {
  id: number
}

export interface Follower {
  id: number
}

export interface Following {
  id: number
}