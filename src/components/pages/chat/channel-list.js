import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import React from 'react';
import { Loading } from '@/components/ui';
import { FETCH_CHANNELS } from '../requests';

const ChannelList = ({ channels }) => {
  return (
    <div className="w-full flex">
      {channels.loading ? (
        <Loading />
      ) : (
        channels.getChannels.map(channel => (
          <div key={channel.uuid} className="px-2 py-1 text-left">
            <span className="text-lightBlueGrey"># </span>
            <span className="text-gunmetal">{channel.name}</span>
          </div>
        ))
      )}
    </div>
  );
};

ChannelList.propTypes = {
  channels: PropTypes.shape({
    getChannels: PropTypes.func,
    loading: PropTypes.boolean,
  }),
};

export default graphql(FETCH_CHANNELS, {
  name: 'channels',
})(ChannelList);
