import Base from '@layouts/Baseof';
import { getSinglePageJson } from '@lib/contentParser';
import Posts from '@partials/Posts';

const PostWrap = ({ posts }) => {
  return (
    <Base>
      <section className="section">
        <div className="container">
          <Posts posts={posts} />
        </div>
      </section>
    </Base>
  );
};

export default PostWrap;

export const getServerSideProps = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const posts = getSinglePageJson('json/posts');

  return {
    props: {
      posts,
      currentPage: currentPage,
    },
  };
};
