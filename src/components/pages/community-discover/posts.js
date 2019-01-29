/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import React from 'react';
import { Loading } from '@/components/ui';

const CommunityPosts = ({ getCommunityConversationPostsRequest }) => {
  const { getCommunityConversationPosts, loading, error } = getCommunityConversationPostsRequest;
  if (error) {
    return <p className="text-red">Error occured while fetching posts.</p>;
  }

  if (loading) {
    return <Loading />;
  }

  if (!getCommunityConversationPosts || !getCommunityConversationPosts.length) {
    return <p>No posts found for this community.</p>;
  }

  return (
    <div className="w-full flex flex-wrap">
      {getCommunityConversationPosts.map(post => {
        return (
          <div key={post.uuid} className="border-2 text-center p-4 w-112">
            <p>{post.title}</p>
            <p>Author: {post.authorUuid}</p>
            <p>Viewed {post.viewCount} times</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        );
      })}
    </div>
  );
};

CommunityPosts.propTypes = {
  getCommunityConversationPostsRequest: PropTypes.shape({
    error: PropTypes.bool,
    getCommunityConversationPosts: PropTypes.object,
    loading: PropTypes.bool,
  }),
};

export default CommunityPosts;
