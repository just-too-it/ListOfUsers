import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PagesLinks } from '../core/constants/pagesLinks.constant';
import { Users } from '../pages/Users';

const AppRouter = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact path={PagesLinks.USERS_PAGE}>
        <Users />
      </Route>

      {<Redirect to={'/'} />}
    </Switch>
  );
};

export default AppRouter;
