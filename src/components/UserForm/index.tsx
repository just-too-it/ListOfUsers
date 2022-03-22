import React, { FC, useEffect } from 'react';
import { Button } from '../Button';
import { IButton } from '../Button/Button.types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { InputFormik } from '../InputFormik';
import { IUserItem } from '../UserItem/UserItem.types';
import { idText, isConstructorDeclaration } from 'typescript';

export const UserForm: FC<{ user: IUserItem, isEditMode: boolean }> = (props) => {
  const initialValues = {
    name: '',
    userName: '',
    email: '',
    street: '',
    city: '',
    zipCode: '',
    phone: '',
    website: '',
    comment: '',
  };


  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
      }}

    >
      {({ isSubmitting }) => (
        <Form className = "form">
          <div className = "form__items">
            <InputFormik label="Name" name="name" type="text" isEditMode={props.isEditMode} />
            <InputFormik label="User Name" name="userName" type="text" isEditMode={props.isEditMode} />
            <InputFormik label="E-mail" name="email" type="email" isEditMode={props.isEditMode} />
            <InputFormik label="Street" name="street" type="text" isEditMode={props.isEditMode} />
            <InputFormik label="City" name="city" type="text" isEditMode={props.isEditMode} />
            <InputFormik label="Zip code" name="zipCode" isEditMode={props.isEditMode} />
            <InputFormik label="Phone" name="phone" type="tel" isEditMode={props.isEditMode} />
            <InputFormik label="Website" name="website" type="text" isEditMode={props.isEditMode} />
            <InputFormik label="Comment" name="comment" type="text" isEditMode={props.isEditMode} required={false} style={{width: '100%', height: '55px'}}/>
          </div>
          <div className='form__btn'>
            <Button
              btn={{
                type: 'submit',
                color: 'green',
                btnOnClick: (f) => f,
                disabled: isSubmitting
              }}
            >Отправить</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
