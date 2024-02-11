import NotFound from '@layouts/404';
import Base from '@layouts/Baseof';
import PostSingle from '@layouts/PostSingle';
import { getSinglePageJson } from '@lib/contentParser';

const RegularPages = ({ data, is404 }) => {
  if (is404) {
    return (
      <Base>
        <NotFound />
      </Base>
    );
  }

  const { title, description, image, noindex, canonical, layout } = data.frontmatter;
  const { content } = data;
  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      image={image}
      noindex={noindex}
      canonical={canonical}>
      <PostSingle post={data} />
    </Base>
  );
};
export default RegularPages;

export const getServerSideProps = async ({ params }) => {
  const { regular } = params;
  const posts = getSinglePageJson(`json/posts`);

  const currentPageData = posts.find((post) => post.slug === regular);

  return {
    props: {
      data: currentPageData || null,
      is404: !currentPageData,
    },
  };
};
