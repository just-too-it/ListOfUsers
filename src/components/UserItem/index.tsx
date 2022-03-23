import React, { FC, useContext } from 'react';
import { IUserItem } from './UserItem.types';
import { Button } from '../Button';
import { IButton } from '../Button/Button.types';
import { useHistory } from 'react-router-dom';
import { PagesLinks } from '../../core/constants/pagesLinks.constant';
import { getUser } from '../../core/services/users.service';
import { userProfileContext } from '../../core/Context';

export const UserItem: FC<{ user: IUserItem }> = (props) => {
  const router = useHistory();
  const [userProfile, setUserProfile] = useContext(userProfileContext);

  const btn: IButton = {
    color: 'transparent',
    type: 'button',
    btnOnClick: () => {
      router.push(`${PagesLinks.PROFILE_PAGE}/${props.user.id}`);
      setUserProfile(props.user as IUserItem);
    },
  };

  return (
    <article className="user">
      <div className="user__options">
        <div>
          <span className="user__option">ФИО:</span>
          {props.user.name}
        </div>
        <div>
          <span className="user__option">город:</span>
          {props.user.address.city}
        </div>
        <div>
          <span className="user__option">компания:</span>
          {props.user.company.name}
        </div>
      </div>
      <div className="user__btn">
        <Button btn={btn}>Подробнее</Button>
      </div>
    </article>
  );
};
