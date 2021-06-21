import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { addPostError, addPostSuccess, ADD_POST } from '../modules/post';

const postApi = async () => {
  const { data } = await axios.post('/api', { name: '22' });
  return data;
};

function* addPostSaga() {
  try {
    const { data } = yield call(postApi);

    yield put(addPostSuccess());
  } catch (e) {
    yield put(addPostError(e));
  }
}

export default function* postSaga() {
  yield takeEvery(ADD_POST, addPostSaga);
}
