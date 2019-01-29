import PropTypes from 'prop-types';
import React from 'react';

import { Loading } from '@/components/ui';

import Header from '@/containers/common/header';
import Input from '@/containers/pages/community-chat/input';
import MessageList from '@/containers/pages/community-chat/message-list';
import { withAuthUser } from '@/containers/hoc/with-auth-user';

import Channels from './community-chat/channel-list';

export class CommunityChat extends React.Component {
  state = {
    selectedChannelUuid: '',
  };

  onChangeSelectedChannelUuid = uuid => this.setState({ selectedChannelUuid: uuid });

  render() {
    const { user, channels } = this.props;

    if (!user) {
      return null;
    }
    if (channels.loading) {
      return <Loading />;
    }
    if (channels.error) {
      return <p>Error occured while getting channels, please try again later</p>;
    }
    if (!channels.getChatChannels.length) {
      return <p>Could not find active channels.</p>;
    }

    let { selectedChannelUuid } = this.state;
    selectedChannelUuid = selectedChannelUuid || channels.getChatChannels[0].uuid;

    // TODO we shouldn't need to pass this
    const username = user.username || user.email;
    return (
      <div className="flex flex-col h-full">
        <div className="bg-gray-gradient">
          <div className="container">
            <Header />
          </div>
        </div>
        <div className="container flex-1 overflow-auto">
          <div className="mx-auto p-2 w-full text-center flex flex-col justify-center">
            <Channels
              onChangeSelectedChannelUuid={this.onChangeSelectedChannelUuid}
              list={channels.getChatChannels}
              selectedChannelUuid={selectedChannelUuid}
            />
            <MessageList
              listRef={this.listRef}
              channelUuid={selectedChannelUuid}
              username={username}
            />
          </div>
        </div>
        <div className="container">
          <Input channelUuid={selectedChannelUuid} username={username} />
        </div>
      </div>
    );
  }
}

CommunityChat.propTypes = {
  channels: PropTypes.object,
  user: PropTypes.object,
};

export default withAuthUser(CommunityChat);
