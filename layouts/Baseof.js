import config from '@config/config.json';
import Footer from '@partials/Footer';
import Header from '@partials/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Base = ({ title, meta_title, description, image, noindex, canonical, children }) => {
  const { meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{meta_title ? meta_title : title ? title : config.site.title}</title>

        {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

        {noindex && <meta name="robots" content="noindex,nofollow" />}

        <meta name="description" content={description ? description : meta_description} />

        <meta name="author" content={meta_author} />

        <meta
          property="og:title"
          content={meta_title ? meta_title : title ? title : config.site.title}
        />

        <meta property="og:description" content={description ? description : meta_description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${base_url}/${router.asPath.replace('/', '')}`} />

        <meta
          name="twitter:title"
          content={meta_title ? meta_title : title ? title : config.site.title}
        />

        <meta name="twitter:description" content={description ? description : meta_description} />

        <meta property="og:image" content={`${base_url}${image}`} />

        <meta name="twitter:image" content={`${base_url}${image}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Base;
