import { AnyAction } from 'redux';
import { PostData } from '../types/post';
import shortId from 'shortid'

export const ADD_POST = 'ADD_POST' as const;
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS' as const;
const ADD_POST_ERROR = 'ADD_POST_ERROR' as const;

export const addPost = (data: any) => ({
  type: ADD_POST,
  payload: data,
});
export const addPostSuccess = (data: any) => ({ type: ADD_POST_SUCCESS, payload: data });
export const addPostError = (e: Error) => ({
  type: ADD_POST_ERROR,
  payload: e,
});

const initialState: PostData = {
  loading: false,
  error: null,
  mainPosts: [
    {
      id: shortId.generate(),
      user: {
        id: shortId.generate(),
        nickname: 'yg',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      images: [
        {
          src:
            'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726',
        },
        {
          src:
            'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726',
        },
        {
          src:
            'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=20180726',
        },
      ],
      comments: [
        {
          user: {
            nickname: 'sr',
          },
          content: 'srsrrsrsr',
        },
        {
          user: {
            nickname: 'ed',
          },
          content: 'ededed',
        },
      ],
    },
  ],
  imagePath: [],
  postAdded: false,
};

const dummyPost = {
  id: shortId.generate(),
  content: '더미데이터',
  user: {
    id: shortId.generate(),
    nickname: '연구',
  },
  images: [],
  comments: [],
};

const reducer = (state = initialState, action: AnyAction): PostData => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
