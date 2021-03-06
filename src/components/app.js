import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '@/containers/pages/home';
import Login from '@/containers/pages/login';
import MemberProfile from '@/containers/pages/member-profile';
import CommunityChat from '@/containers/pages/community-chat';
import CommunityDiscover from '@/containers/pages/community-discover';
import CommunityList from '@/containers/pages/communities';
import CommunitySettings from '@/containers/pages/community-settings';
import CommunityMembers from '@/containers/pages/community-members';
import Error404 from '@/containers/pages/404';
import ResetPassword from '@/components/pages/reset-password';
import SignupBeta from '@/containers/pages/signup-for-beta';
import '@/css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/beta" component={SignupBeta} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/member/profile" component={MemberProfile} />
    <Route exact path="/reset-password" component={ResetPassword} />
    <Route exact path="/communities" component={CommunityList} />
    <Route exact path="/community/:communityUuid" component={CommunityDiscover} />
    <Route exact path="/community/:communityUuid/settings" component={CommunitySettings} />
    <Route exact path="/community/:communityUuid/members" component={CommunityMembers} />
    <Route exact path="/community/:communityUuid/chat" component={CommunityChat} />
    <Route component={Error404} />
  </Switch>
);

export default App;
