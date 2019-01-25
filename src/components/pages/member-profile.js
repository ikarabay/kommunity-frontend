import React from 'react';
import CommunityCard from '@/components/common/cards/community-card';
import UserCard from '@/components/common/cards/user-card';
import Header from '@/components/common/header';
import Footer from '@/containers/common/footer';

const style = {
  container: {
    marginLeft: '200px',
    marginRight: '200px',
  },
  middle: {
    display: 'flex',
    height: '1500px',
  },
  topImage: {
    height: '150px',
  },
  userCommunities: {
    display: ' flex',
    flexWrap: 'wrap',
    height: '100%',
    width: '76%',
  },
  userInfo: {
    height: '100%',
    width: '34%',
  },
};

const MemberProfile = () => {
  return (
    <div style={style.container}>
      <Header />
      <div style={style.topImage}>big img</div>
      <div style={style.middle}>
        <div style={style.userInfo}>
          <UserCard />
        </div>
        <div style={style.userCommunities}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
            <CommunityCard value={item} key={idx.toString()} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MemberProfile;
