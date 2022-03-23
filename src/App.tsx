import React, { FC, useCallback, useEffect, useState } from 'react';

import { BrowserRouter, useHistory } from 'react-router-dom';

import { Loader } from './components/Loader';

import { Sidebar } from './components/Sidebar';
import { IUserItem } from './components/UserItem/UserItem.types';
import { usersContext, userProfileContext } from './core/Context';
import { getUser, getUsers } from './core/services/users.service';
import AppRouter from './routes';

export const App: FC = (): React.ReactElement => {
  const [users, setUsers] = useState([] as IUserItem[]);
  const [userProfile, setUserProfile] = useState({} as IUserItem);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUsers(): Promise<void> {
    setIsLoading(true);
    const users = await getUsers();
    setUsers(users);
    setIsLoading(false);
  }

  useEffect(() => {
    void fetchUsers();
  }, []);

  return (
    <usersContext.Provider value={[users, setUsers]}>
      <userProfileContext.Provider value={[userProfile, setUserProfile]}>
        <BrowserRouter>
          <Sidebar />
          {isLoading ? <Loader /> : <AppRouter />}
        </BrowserRouter>
      </userProfileContext.Provider>
    </usersContext.Provider>
  );
};
