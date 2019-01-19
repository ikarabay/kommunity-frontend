// TODO consider using dayjs instead
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import React from 'react';
import { Icon, Input } from '@/components/ui';
import { SEND_MESSAGE } from '../requests';

class ChatInput extends React.Component {
  state = {
    message: '',
  };

  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.addEventListener('keyup', event => {
      event.preventDefault();
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        this.sendMessage();
      }
    });
  }

  sendMessage = () => {
    const { message } = this.state;
    const { channelUUID, sendMessage, username } = this.props;
    if (!message.trim()) {
      return;
    }
    sendMessage({
      variables: {
        channelUUID,
        sender: username,
        text: message,
      },
    })
      .then(() => this.setState({ message: '' }))
      // TODO handle error
      .catch(() => {});
  };

  setInputRef = node => {
    this.inputRef = node;
  };

  render() {
    const { message } = this.state;
    return (
      <div className="w-full">
        <Input
          htmlRef={this.inputRef}
          onChange={e => this.setState({ message: e.target.value })}
          extraClassName="w-full block"
          name="message-input"
          value={message}
          placeholder=""
          iconRight={
            <Icon name="Send" className="text-primary cursor-pointer" onClick={this.sendMessage} />
          }
          extraWrapperClassName="my-4"
        />
      </div>
    );
  }
}

ChatInput.propTypes = {
  channelUUID: PropTypes.string,
  sendMessage: PropTypes.func,
  username: PropTypes.string,
};

export default graphql(SEND_MESSAGE, {
  name: 'sendMessage',
})(ChatInput);
