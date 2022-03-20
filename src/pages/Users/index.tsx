import React, { useState } from 'react';
import { IUserItem } from '../../components/UserItem/UserItem.types';
import { UserList } from '../../components/UserList';
import { usersmock } from '../../core/constants/usersmock.constant';
import { getUsers } from '../../core/services/users.service';

export const Users = (): React.ReactElement => {
  const [users, setUsers] = useState([] as IUserItem[]);

  void getUsers()
  .then((data) => {
    setUsers(data as IUserItem[]);
    return null;
  }); 

  return (
    <main className="users">
      <h1 className='users__title'>Список пользователей</h1>
      <UserList users={users}/>
      <div className='users__search'>Найдено {users.length} пользователей</div>
    </main>
  );
};