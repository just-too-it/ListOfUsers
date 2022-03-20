import React, { useContext } from 'react';
import { UserList } from '../../components/UserList';
import { usersContext } from '../../core/Context';

export const Users = (): React.ReactElement => {
  const [users, setUsers] = useContext(usersContext);

  return (
    <main className="users">
      <h1 className="users__title">Список пользователей</h1>
      <UserList users={users} />
      <div className="users__search">Найдено {users.length} пользователей</div>
    </main>
  );
};
