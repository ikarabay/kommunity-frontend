import gql from 'graphql-tag';

export const FETCH_MESSAGES = gql`
  query messages($channelUUID: String!, $cursor: Int) {
    getMessagesForChannel(channelUUID: $channelUUID, cursor: $cursor) {
      nextCursor
      messages {
        channelUUID
        uuid
        sender
        text
        ts
      }
    }
  }
`;

// TODO pass community uuid
export const FETCH_CHANNELS = gql`
  query channels {
    getChannels {
      uuid
      name
      desc
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($channelUUID: String, $sender: String, $text: String) {
    sendMessage(channelUUID: $channelUUID, sender: $sender, text: $text) {
      uuid
      sender
      text
      ts
    }
  }
`;

export const SUBSCRIBE_MESSAGE_SENT = gql`
  subscription messageSent($channelUUID: String!) {
    messageSent(channelUUID: $channelUUID) {
      channelUUID
      uuid
      sender
      text
      ts
    }
  }
`;
