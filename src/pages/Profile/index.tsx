import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { IButton } from '../../components/Button/Button.types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { UserForm } from '../../components/UserForm';
import { getUser } from '../../core/services/users.service';
import { IUserItem } from '../../components/UserItem/UserItem.types';

export const Profile = () => {
  const [user, setUser] = useState({} as IUserItem);
  const [isEditMode, setIsEditMode] = useState(false);

  const history = useHistory();
  const id = history.location.pathname.split('/').pop();

  const bntEdit: IButton = {
    type: 'button',
    color: 'blue',
    btnOnClick: () => setIsEditMode(true),
  };

  async function fetchUser(): Promise<void> {
    const user = await getUser(id);
    setUser(user);
  }

  //console.log(user);
  useEffect(() => {
    void fetchUser();
  }, []);

  return (
    <div className="profile">
      <header className="profile__header">
        <h1 className="profile__title">Профиль пользователя</h1>
        <Button btn={bntEdit}>Редактировать</Button>
      </header>
      <UserForm user={user} isEditMode={isEditMode}/>
    </div>
  );
};
