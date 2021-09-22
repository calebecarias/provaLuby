import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import User from '../pages/User';
import Repositories from '../pages/Repositories';
import Followers from '../pages/Followers';
import Route from './Route';
import Following from '../pages/Following';
import UserFollower from '../pages/UserFollower';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/user" component={User} isPrivate />
    <Route path="/repos" component={Repositories} isPrivate />
    <Route path="/followers" component={Followers} isPrivate />
    <Route path="/following" component={Following} isPrivate />
    <Route path="/userFollower" component={UserFollower} isPrivate />
  </Switch>
);

export default Routes;
