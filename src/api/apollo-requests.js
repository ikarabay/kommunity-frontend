import gql from 'graphql-tag';

export const SUBSCRIBE_TO_MAIL_LIST = gql`
  mutation subscribeToMailList($email: String!) {
    subscribeToMailList(email: $email)
  }
`;

export const SIGNUP = gql`
  mutation signup($email: String!, $password: String!, $captchaResponse: String!) {
    signup(email: $email, password: $password, captchaResponse: $captchaResponse)
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export const FETCH_USER_DATA = gql`
  query getLoggedInUserDetails {
    getLoggedInUserDetails {
      uuid
      email
      username
      firstName
      lastName
      userAttributes
      location
      avatarUploadUuid
      lastSeenAt
    }
  }
`;

export const FETCH_COMMUNITY_MEMBERS = gql`
  query getCommunityMembers($uuid: ID!) {
    getCommunityMembers(uuid: $uuid) {
      name
      users {
        uuid
        firstName
        lastName
        CommunityUser {
          role
          status
        }
      }
    }
  }
`;

export const CHANGE_ROLE = gql`
  mutation changeRole($userUuid: String!, $role: String!) {
    changeRole(userUuid: $userUuid, role: $role) {
      userUuid
      role
    }
  }
`;

export const CHANGE_STATUS = gql`
  mutation changeStatus($userUuid: String!, $status: String!) {
    changeStatus(userUuid: $userUuid, status: $status) {
      userUuid
      status
    }
  }
`;

export const FETCH_MESSAGES = gql`
  query messages($channelUUID: String!, $cursor: Int) {
    getMessagesForChannel(channelUUID: $channelUUID, cursor: $cursor) {
      nextCursor
      messages {
        channelUuid
        uuid
        sender {
          uuid
          firstName
          lastName
          username
        }
        text
        createdAt
      }
    }
  }
`;

// TODO pass community uuid
export const FETCH_CHANNELS = gql`
  query channels($communityUUID: String!) {
    getChannels(communityUUID: $communityUUID) {
      uuid
      name
      desc
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($channelUUID: String!, $senderUUID: String!, $text: String!) {
    sendMessage(channelUUID: $channelUUID, senderUUID: $senderUUID, text: $text) {
      uuid
      sender {
        uuid
        firstName
        lastName
        username
      }
      text
      createdAt
    }
  }
`;

export const SUBSCRIBE_MESSAGE_SENT = gql`
  subscription messageSent($channelUUID: String!) {
    messageSent(channelUUID: $channelUUID) {
      channelUuid
      uuid
      sender {
        uuid
        firstName
        lastName
        username
      }
      text
      createdAt
    }
  }
`;
