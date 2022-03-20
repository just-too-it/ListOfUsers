import React, { FC, useEffect, useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Loader } from './components/Loader';

import { Sidebar } from './components/Sidebar';
import { IUserItem } from './components/UserItem/UserItem.types';
import { usersContext } from './core/Context';
import { getUsers } from './core/services/users.service';
import AppRouter from './routes';

export const App: FC = (): React.ReactElement => {
  const [users, setUsers] = useState([] as IUserItem[]);
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
      <BrowserRouter>
        <Sidebar />
        {isLoading ? <Loader /> : <AppRouter />}
      </BrowserRouter>
    </usersContext.Provider>
  );
};
