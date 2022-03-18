import React from 'react';
import { UserList } from '../../components/UserList';
import { usersmock } from '../../core/constants/usersmock.constant';

export const Users = (): React.ReactElement => {
  return (
    <main className="users">
      <h1 className='users__title'>Список пользователей</h1>
      <UserList users={usersmock}/>
      <div>Найдено {usersmock.length} пользователей</div>
    </main>
  );
};