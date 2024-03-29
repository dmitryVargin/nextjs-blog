import Head from 'next/head';
import 'styles/style.scss';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
