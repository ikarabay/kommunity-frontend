// TODO consider using dayjs instead
import _debounce from 'lodash.debounce';
import _get from 'lodash.get';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Loading } from '@/components/ui';
import { SUBSCRIBE_MESSAGE_SENT } from '@/api/apollo-requests';

const TIMESTAMP_FORMAT = 'MM/DD/YYYY h:mm';

class MessageList extends React.Component {
  state = {
    channelUuid: null,
    scrollHeight: 0,
    unsubscribe: null,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { channelUuid, messages } = nextProps;

    if (!messages.loading) {
      // Check for existing subscription
      if (prevState.unsubscribe) {
        // Only unsubscribe/update state if subscription variable has changed
        if (prevState.channelUuid === channelUuid) {
          return null;
        }
        prevState.unsubscribe();
      }

      return {
        channelUuid,
        unsubscribe: messages.subscribeToMore({
          document: SUBSCRIBE_MESSAGE_SENT,
          updateQuery: (prev, { subscriptionData }) => {
            const oldMessagesClone = JSON.parse(
              JSON.stringify(prev.getChatMessagesForChannel.messages),
            );
            if (!subscriptionData.data) {
              return prev;
            }
            const newMessage = subscriptionData.data.messageSent;
            oldMessagesClone.push(newMessage);
            return Object.assign({}, prev, {
              getChatMessagesForChannel: {
                ...prev.getChatMessagesForChannel,
                messages: oldMessagesClone,
              },
            });
          },
          variables: {
            channelUuid,
          },
        }),
      };
    }

    return null;
  }

  listRef = React.createRef();

  componentDidMount() {
    this.listRef.current.addEventListener('scroll', this.onListScroll);
  }

  componentDidUpdate(prevProps) {
    const { scrollHeight } = this.state;
    const prevMessagesCount = _get(prevProps, 'messages.getChatMessagesForChannel.messages.length');
    const nextMessagesCount = _get(
      this.props,
      'messages.getChatMessagesForChannel.messages.length',
    );
    // initial fetch
    if (prevMessagesCount === undefined && nextMessagesCount) {
      this.scrollToBottom();
    }

    // new message, while user is reading the latest messages
    else if (prevMessagesCount < nextMessagesCount) {
      if (this.listRef.current.scrollTop < 20) {
        this.listRef.current.scrollTo(0, this.listRef.current.scrollHeight - scrollHeight);
      } else {
        this.scrollToBottom();
      }
    }
  }

  onListScroll = _debounce(e => {
    const {
      messages: { getChatMessagesForChannel },
    } = this.props;
    if (e.target.scrollTop < 10 && getChatMessagesForChannel.nextCursor) {
      const { channelUuid, messages } = this.props;
      messages.fetchMore({
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }
          this.setState({
            scrollHeight: this.listRef.current.scrollHeight,
          });
          return Object.assign({}, prev, {
            getChatMessagesForChannel: {
              ...prev.getChatMessagesForChannel,
              messages: [
                ...fetchMoreResult.getChatMessagesForChannel.messages,
                ...prev.getChatMessagesForChannel.messages,
              ],
              nextCursor: fetchMoreResult.getChatMessagesForChannel.nextCursor,
            },
          });
        },
        variables: {
          channelUuid,
          cursor: messages.getChatMessagesForChannel.nextCursor,
        },
      });
    }
  }, 400);

  scrollToBottom = () => {
    this.listRef.current.scrollTo(0, 99999);
  };

  render() {
    const { messages } = this.props;
    return (
      <div ref={this.listRef} className="w-full flex">
        <div className="flex-1 text-left">
          {messages.loading ? (
            <Loading />
          ) : (
            messages.getChatMessagesForChannel.messages
              .sort((a, b) => parseInt(a.ts, 10) - parseInt(b.ts, 10))
              .map(m => (
                <div key={m.uuid} className="group py-2">
                  <div className="flex text-lightBlueGrey group">
                    <div className="flex-1">
                      {m.sender.firstName} {m.sender.lastName}
                    </div>
                    <div className="text-xs invisible group-hover:visible">
                      {moment(m.createdAt, moment.defaultFormat).format(TIMESTAMP_FORMAT)}
                    </div>
                  </div>
                  <div>{m.text}</div>
                </div>
              ))
          )}
        </div>
      </div>
    );
  }
}

MessageList.propTypes = {
  channelUuid: PropTypes.string,
  messages: PropTypes.shape({
    getChatMessagesForChannel: PropTypes.func,
    subscribeToMore: PropTypes.func,
  }),
};

export default MessageList;
