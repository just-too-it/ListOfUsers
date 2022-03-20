import React, { FC } from 'react';
import { IUserItem } from '../UserItem/UserItem.types';
import { UserItem } from '../UserItem';

export const UserList: FC<{ users: IUserItem[] | null }> = (props) => {
  return (
    <ul className="userList">
      {props.users.length > 0
        ? props.users.map((user) => (
            <li key={user.id}>
              <UserItem user={user} />
            </li>
          ))
        : null}
    </ul>
  );
};
