import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '@/components/ui';

const ChannelList = ({ list, onChangeSelectedChannelUuid }) => {
  if (!list) {
    return null;
  }

  return (
    <div className="w-full flex">
      {list.map(channel => (
        <Button
          extraClassName="px-2 py-1 text-left"
          key={channel.uuid}
          label={`#${channel.name} (${channel.desc})`}
          onClick={() => onChangeSelectedChannelUuid(channel.uuid)}
          styleType="plain"
          size="small"
        />
      ))}
    </div>
  );
};

ChannelList.propTypes = {
  list: PropTypes.array,
  onChangeSelectedChannelUuid: PropTypes.func,
};

export default ChannelList;
