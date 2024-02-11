import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from '@uidotdev/usehooks';
import dynamic from 'next/dynamic';

// type Posts = {
//     postId:number;
//     comments: {
//        author:string;
//        comment:string
//        }[]
// }[]

const CommentForm = () => {
  const router = useRouter();
  const currentPostId = router.asPath.at(-1);
  const [comment, setComment] = useState('');

  const [posts, savePosts] = useLocalStorage('posts', []);
  const currentPostComments = posts.find((post) => post.postId === currentPostId)?.comments;

  const handleSubmit = (e) => {
    e.preventDefault();

    savePosts((prevPosts) => {
      const currentComment = { author: 'anonymous', comment: comment };

      if (prevPosts.length === 0) {
        return [{ postId: currentPostId, comments: [currentComment] }];
      }

      const postsCommentsExist = prevPosts.find((post) => post.postId === currentPostId);
      if (postsCommentsExist) {
        return prevPosts.map((post) => {
          if (post.postId === currentPostId) {
            let updatedPost;
            updatedPost = { ...post };
            updatedPost.comments.push(currentComment);
            return updatedPost;
          }
          return post;
        });
      } else {
        return [...prevPosts, { postId: currentPostId, comments: [currentComment] }];
      }
    });
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col">
      <h3 className="h3 mb-8">Оставить комментарий</h3>
      <textarea
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        className="form-textarea block mb-8 w-2/4"
      />
      <button type="submit" className="btn btn-primary block">
        Отправить
      </button>
      {currentPostComments?.map((comment, i) => {
        return (
          <div className="text-left mt-4 w-full" key={i}>
            <p className="mb-2">
              <b>{comment.author}</b>
            </p>
            <p>{comment.comment}</p>
            <hr />
          </div>
        );
      })}
    </form>
  );
};

export default dynamic(() => Promise.resolve(CommentForm), {
  ssr: false,
});
