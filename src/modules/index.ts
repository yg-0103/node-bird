import { combineReducers, AnyAction } from 'redux';
import userReducer from './user';
import postReducer from './post';
import { HYDRATE } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  index: (state: any = {}, action: AnyAction) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user: userReducer,
  post: postReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
