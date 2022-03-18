
import React, { FC } from 'react';
import { IUserItem } from './UserItem.types';

export const UserItem: FC<{ user: IUserItem }> = (props) => {
  return (
      <article className='user'>
          <div><span className='user__option'>ФИО:</span>{props.user.name}</div>
          <div><span className='user__option'>город:</span>{props.user.address.city}</div>
          <div><span className='user__option'>компания:</span>{props.user.company.name}<button className='user__button' type="button">Подробнее</button></div>
      </article>

  )
};
