import React, { useContext, useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { IButton } from '../../components/Button/Button.types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { UserForm } from '../../components/UserForm';
import { getUser } from '../../core/services/users.service';
import { IUserItem } from '../../components/UserItem/UserItem.types';
import { userProfileContext } from '../../core/Context';

export const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userProfile, setUserProfile] = useContext(userProfileContext);

  const bntEdit: IButton = {
    type: 'button',
    color: 'blue',
    btnOnClick: () => setIsEditMode(true),
  };

  return (
    <div className="profile">
      <header className="profile__header">
        <h1 className="profile__title">Профиль пользователя</h1>
        <Button btn={bntEdit}>Редактировать</Button>
      </header>
      <UserForm user={userProfile} isEditMode={isEditMode} />
    </div>
  );
};
