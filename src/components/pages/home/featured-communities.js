import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Link, Loading, Paragraph, Title } from '@/components/ui';

const avatarUrl = require('@/components/ui/test-avatar').default;

const FeaturedCommunities = ({ popularCommunitiesRequest }) => {
  const { popularCommunities, error, loading } = popularCommunitiesRequest;

  // TODO style error message
  if (error) {
    return <div className="text-center">Sorry, we couldnt fetch popular communities.</div>;
  }

  if (loading) {
    return (
      <div className="text-center my-3">
        <Loading />
      </div>
    );
  }

  return (
    <div className="text-center">
      <Title type="h5" extraClassName="font-bold mb-14">
        Featured Communities
      </Title>
      <div className="flex flex-wrap justify-between">
        {popularCommunities.map(({ uuid, name, desc }) => (
          <div key={uuid} className="w-3/12 px-4">
            <Link to={`/community/${uuid}`}>
              <Card applyPadding={false} shadow="md">
                <div className="bg-paleGrey pt-4">
                  <div
                    className="bg-cover inline-block w-20 h-20 overflow-hidden rounded-4 border-white border-8"
                    style={{
                      backgroundImage: `url(${avatarUrl})`,
                      transform: 'translateY(24px)',
                    }}
                  />
                </div>
                <div className="pt-12 pb-6 px-6">
                  <span className="text-dark font-bold">{name}</span>
                  <Paragraph extraClassName="mb-6">{desc}</Paragraph>
                  <Button label="Join" styleType="outline" size="small" />
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/communities" extraClassName="block mt-10">
        Discover all communities
      </Link>
    </div>
  );
};

FeaturedCommunities.propTypes = {
  popularCommunitiesRequest: PropTypes.object,
};

export default FeaturedCommunities;
