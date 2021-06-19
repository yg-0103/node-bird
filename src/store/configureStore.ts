import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../modules';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware())
      : composeWithDevTools(applyMiddleware());
  const store = createStore(rootReducer, enhancer);

  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
