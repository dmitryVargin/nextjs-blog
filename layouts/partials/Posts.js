import dateFormat from '@lib/utils/dateFormat';
import Image from 'next/image';
import Link from 'next/link';

const Posts = ({ posts }) => {
  return (
    <div className={`row space-y-16 mb-16`}>
      {posts.map((post, i) => (
        <div key={i} className={'col-12 sm:col-6'}>
          <div className="container relative min-h-[500px]">
            {post.frontmatter.image && (
              <Image
                className="rounded-lg"
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                fill
              />
            )}
          </div>
          <ul className="mt-4 mb-4 flex flex-wrap items-center space-x-3 text-text">
            <li>{dateFormat(post.frontmatter.date)}</li>
          </ul>
          <h3 className="mb-2">
            <Link href={`/${post.slug}`} className="block hover:text-primary">
              {post.frontmatter.title}
            </Link>
          </h3>
          <p className="text-text">{post.content && post.content.slice(0, 200)}...</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
