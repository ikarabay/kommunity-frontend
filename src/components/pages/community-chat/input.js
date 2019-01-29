import PropTypes from 'prop-types';
import React from 'react';
import { Icon, Input } from '@/components/ui';

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
    const { channelUuid, sendMessage } = this.props;

    if (!message.trim()) {
      return;
    }

    sendMessage({
      variables: {
        channelUuid,
        text: message,
      },
    })
      .then(() => this.setState({ message: '' }))
      // TODO handle error
      .catch(() => {});
  };

  render() {
    const { message } = this.state;
    return (
      <div className="w-full">
        <Input
          setRef={this.inputRef}
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
  channelUuid: PropTypes.string,
  sendMessage: PropTypes.func,
};

export default ChatInput;
