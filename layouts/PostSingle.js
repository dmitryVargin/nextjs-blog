import dateFormat from '@lib/utils/dateFormat';
import Image from 'next/image';
import CommentForm from '@layouts/CommentForm';

const PostSingle = ({ post }) => {
  const { frontmatter, content } = post;
  let { title, date, image } = frontmatter;

  return (
    <>
      <section className="section">
        <div className="container">
          <article className="text-center">
            <h1 className="h2">{title}</h1>
            <ul className="mt-4 mb-8 flex flex-wrap items-center justify-center space-x-3 text-text">
              <li>{dateFormat(date)}</li>
            </ul>
            <div className="container relative min-h-[500px]">
              {image && <Image src={image} fill alt={title} className="rounded-lg" />}
            </div>
            <div className="content mb-16 mt-16 text-left text-text">{content}</div>
          </article>
          <CommentForm />
        </div>
      </section>
    </>
  );
};

export default PostSingle;
