import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Sidebar } from './components/Sidebar';
import { IUserItem } from './components/UserItem/UserItem.types';
import { usersContext } from './core/Context';
import { getUsers } from './core/services/users.service';
import AppRouter from './routes';

export const App: FC = (): React.ReactElement => {
  const [users, setUsers] = useState([] as IUserItem[]);

  useEffect(() => {
    void getUsers().then((data) => {
      setUsers(data as IUserItem[]);
      return null;
    });
  }, []);

  return (
    <usersContext.Provider value={[users, setUsers]}>
      <BrowserRouter>
        <Sidebar />
        <AppRouter />
      </BrowserRouter>
    </usersContext.Provider>
  );
};
