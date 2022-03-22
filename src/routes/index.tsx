import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PagesLinks } from '../core/constants/pagesLinks.constant';
import { Profile} from '../pages/Profile';
import { Users } from '../pages/Users';

const AppRouter = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact path={PagesLinks.USERS_PAGE}>
        <Users />
      </Route>
      <Route exact path={`${PagesLinks.PROFILE_PAGE}/:id`}>
        <Profile />
      </Route>
      {<Redirect to={'/'} />}
    </Switch>
  );
};

export default AppRouter;
