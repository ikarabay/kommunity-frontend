import gql from 'graphql-tag';

export const SUBSCRIBE_TO_MAIL_LIST = gql`
  mutation subscribeToMailList($email: String!, $listId: String!) {
    subscribeToMailList(email: $email, listId: $listId)
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

export const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export const RESET_PASSWORD = gql`
  mutation resetPassword($newPassword: String!, $token: String!) {
    resetPassword(newPassword: $newPassword, token: $token)
  }
`;

export const SEARCH_USERS = gql`
  query searchUsers($query: String!) {
    searchUsers(query: $query) {
      email
      username
      avatarUploadUuid
      firstName
      lastName
    }
  }
`;

export const SEARCH_COMMUNITIES = gql`
  query searchCommunities($query: String!) {
    searchCommunities(query: $query) {
      name
      tagline
    }
  }
`;

export const FETCH_COMMUNITY_MOST_ACTIVE_USERS = gql`
  query getCommunityMostActiveMembers($communityUuid: ID!) {
    getCommunityMostActiveMembers(communityUuid: $communityUuid) {
      firstName
      lastName
      uuid
      avatarUploadUuid
      lastSeenAt
      location
      CommunityUser {
        reputation
      }
    }
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

export const FETCH_POPULAR_COMMUNITIES = gql`
  {
    popularCommunities {
      uuid
      name
      tagline
      desc
      location
      userCount
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

export const FETCH_COMMUNITY_EVENTS = gql`
  query getCommunityEvents($communityUuid: ID!, $limit: Int) {
    getCommunityEvents(communityUuid: $communityUuid, limit: $limit) {
      uuid
      imageUuid
      title
      content
      timeStart
      timeEnd
      timezone
      location
      venueName
      address1
      address2
      city
      state
      zip
      country
      latitude
      longitude
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
