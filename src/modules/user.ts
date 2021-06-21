import { AnyAction } from 'redux';
import { UserData } from '../types/user';

export const LOG_IN = 'LOG_IN' as const;
const LOG_IN_SUCCESS = 'LOG_IN_SUCESS' as const;
const LOG_IN_ERROR = 'LOG_IN_ERROR' as const;

export const LOG_OUT = 'LOG_OUT' as const;
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS' as const;
const LOG_OUT_ERROR = 'LOG_OUT_ERROR' as const;

export const SIGN_UP = 'SIGN_UP' as const;
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS' as const;
const SIGN_UP_ERROR = 'SIGN_UP_SUCCESS' as const;

export const FOLLOW = 'FOLLOW' as const;
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS' as const;
const FOLLOW_ERROR = 'FOLLOW_SUCCESS' as const;

export const UN_FOLLOW = 'FOLLOW' as const;
const UN_FOLLOW_SUCCESS = 'UN_FOLLOW_SUCCESS' as const;
const UN_FOLLOW_ERROR = 'UN_FOLLOW_SUCCESS' as const;

export const loginAction = (user: any) => ({ type: LOG_IN, payload: user });
export const loginActionSuccess = (data: any) => ({
  type: LOG_IN_SUCCESS,
  payload: data,
});
export const loginActionError = (e: Error) => ({
  type: LOG_IN_ERROR,
  payload: e,
});

export const logoutAction = () => ({ type: LOG_OUT });
export const logoutActionSuccess = () => ({ type: LOG_OUT_SUCCESS });
export const logoutActionError = () => ({ type: LOG_OUT_ERROR });

const initialState: UserData = {
  isLogin: false,
  loading: false,
  me: null,
  signUpData: {},
  loginData: {},
};

const dummyUser = (data: any) => ({
  ...data,
  nickname: 'yg',
  id: 1,
  posts: [],
  followings: [],
  followers: [],
});

const reducer = (state = initialState, action: AnyAction): UserData => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        loading: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        loading: false,
        me: dummyUser(action.payload),
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        loading: false,
        isLogin: false,
        me: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        loading: true,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: false,
        me: null,
      };
    case LOG_OUT_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
