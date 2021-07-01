import { createWrapper } from 'next-redux-wrapper';
import rootReducer from '../modules';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware()

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware:  [sagaMiddleware]
  })
  
  sagaMiddleware.run(rootSaga)
  return store;
};


const wrapper = createWrapper(createStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
