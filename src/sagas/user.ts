import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';
import {
  LOG_IN,
  loginAction,
  loginActionError,
  loginActionSuccess,
  logoutActionSuccess,
  logoutActionError,
  LOG_OUT,
} from '../modules/user';

const loginApi = async () => {
  const { data } = await axios.get('api');
  return data;
};

function* loginSaga(action: ReturnType<typeof loginAction>) {
  try {
    yield put(loginActionSuccess(action.payload));
  } catch (e) {
    yield put(loginActionError(e));
  }
}

function* logoutSaga() {
  try {
    yield put(logoutActionSuccess());
  } catch {
    yield put(logoutActionError());
  }
}

export default function* userSaga() {
  yield takeEvery(LOG_IN, loginSaga);
  yield takeEvery(LOG_OUT, logoutSaga);
}
