
import React, { FC } from 'react';
import { IUserItem } from './UserItem.types';
import { Button } from '../Button';
import { IButton } from '../Button/Button.types';

export const UserItem: FC<{ user: IUserItem }> = (props) => {
  const btn: IButton = {
    color: 'transparent',
    type: 'button',
    btnOnClick: ()=>{console.log('click see more')}
  }
  return (
      <article className='user'>
        <div className='user__options'>
          <div><span className='user__option'>ФИО:</span>{props.user.name}</div>
          <div><span className='user__option'>город:</span>{props.user.address.city}</div>
          <div><span className='user__option'>компания:</span>{props.user.company.name}</div>
        </div>
        <div className="user__btn">
          <Button btn={btn}>Подробнее</Button>
        </div>
      </article>

  )
};
