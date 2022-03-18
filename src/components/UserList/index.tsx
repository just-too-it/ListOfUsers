import React, { FC } from 'react';
import { IUserItem } from '../UserItem/UserItem.types';
import { UserItem } from '../UserItem';

export const UserList: FC<{ users: IUserItem[] }> = (props) => {
  return (
    <ul className="userList">
      {props.users.map((user) => (
        <li key={user.id}>
          <UserItem user={user} />
        </li>
      ))}
    </ul>
  );
};