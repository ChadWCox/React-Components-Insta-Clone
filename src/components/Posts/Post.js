import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { posts, likePost } = props;

  return (
    <div className='post-border'>
      <PostHeader 
        username={posts.username}
        thumbnailUrl={posts.thumbnailUrl}
        />
      <div className={'post-image-wrapper'}>
        <img className={'post-image'}
          alt=''
          src={posts.imageUrl}
          />
      </div>
      
      {/* Is LikeSection getting all the props it needs to work correctly? Needs numberOfLikes={}*/}
      <LikeSection likePost={() => likePost(posts.id)} numberOfLikes={posts.likes}  />
      {/* Comments also wants its props! Needs Comments={}*/}
      <Comments 
        postId={posts.imageUrl}
        comments={posts.comments}
        timeStamp={posts.timeStamp} 
        />
    </div>
  );
};

export default Post;
