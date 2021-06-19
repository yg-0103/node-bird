import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';

const LOG_IN = 'LOG_IN' as const;
const LOG_OUT = 'LOG_OUT' as const;

export const loginAction = (data: any) => ({ type: LOG_IN, payload: data });
export const logoutAction = () => ({ type: LOG_OUT });

const initialState = {
  isLogin: false,
  user: null,
  signUpData: {},
  loginData: {},
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case LOG_IN:
      return {
        ...state,
        isLogin: true,
        user: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogin: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
