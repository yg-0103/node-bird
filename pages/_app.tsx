import 'antd/dist/antd.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import wrapper from '../src/store/configureStore';
import withReduxSaga from 'next-redux-saga';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Node Bird</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(withReduxSaga(App));
