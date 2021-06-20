import { AnyAction } from 'redux';
import { PostData } from '../types/post';

const ADD_POST = 'ADD_POST' as const;

export const addPost = {
  type: ADD_POST,
};

const initialState: PostData = {
  mainPosts: [
    {
      id: 1,
      user: {
        id: 1,
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
  id: 2,
  content: '더미데이터',
  user: {
    id: 1,
    nickname: '연구',
  },
  images: [],
  comments: [],
};

const reducer = (
  state = initialState,
  action: AnyAction
): PostData => {
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
