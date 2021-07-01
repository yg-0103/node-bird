import { put, takeEvery } from 'redux-saga/effects';
import { addPost, addPostError, addPostSuccess, ADD_POST } from '../modules/post';

function* addPostSaga(action: ReturnType<typeof addPost>) {
  try {
    yield put(addPostSuccess(action.payload));
  } catch (e) {
    yield put(addPostError(e));
  }
}

export default function* postSaga() {
  yield takeEvery(ADD_POST, addPostSaga);
}
