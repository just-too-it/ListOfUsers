import React, { FC } from 'react';
import { Button } from '../Button';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { InputFormik } from '../InputFormik';
import { IUserItem } from '../UserItem/UserItem.types';

export const UserForm: FC<{ user: IUserItem; isEditMode: boolean }> = (props) => {
  const initialValues = {
    name: props.user.name,
    userName: props.user.username,
    email: props.user.email,
    street: props.user.address.street,
    city: props.user.address.city,
    zipCode: props.user.address.zipcode,
    phone: props.user.phone,
    website: props.user.website,
    comment: '',
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Обязательно для заполнения'),
    userName: yup.string().required('Обязательно для заполнения'),
    email: yup.string().email('Некорректный E-mail').required('Обязательно для заполнения'),
    street: yup.string().required('Обязательно для заполнения'),
    city: yup.string().required('Обязательно для заполнения'),
    zipCode: yup.string().required('Обязательно для заполнения'),
    phone: yup.string().required('Обязательно для заполнения'),
    website: yup.string().required('Обязательно для заполнения'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      onSubmit={(values, { resetForm, setSubmitting }) => {

        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 400);
      }}
      validationSchema={validationSchema}
    >
      {({ isValid }) => (
        <Form className="form">
          <div className="form__items">
            <InputFormik label="Name" name="name" type="text" isEditMode={props.isEditMode} />
            <InputFormik label="User Name" name="userName" type="text" isEditMode={props.isEditMode} />
            <InputFormik label="E-mail" name="email" type="email" isEditMode={props.isEditMode} />
            <InputFormik label="Street" name="street" type="text" isEditMode={props.isEditMode} />
            <InputFormik label="City" name="city" type="text" isEditMode={props.isEditMode} />
            <InputFormik label="Zip code" name="zipCode" isEditMode={props.isEditMode} />
            <InputFormik label="Phone" name="phone" type="tel" isEditMode={props.isEditMode} />
            <InputFormik label="Website" name="website" type="text" isEditMode={props.isEditMode} />
            <InputFormik
              label="Comment"
              name="comment"
              type="text"
              isEditMode={props.isEditMode}
              required={false}
              style={{ width: '100%', height: '55px' }}
            />
          </div>
          <div className="form__btn">
            <Button
              btn={{
                type: 'submit',
                color: 'green',
                btnOnClick: (f) => f,
                disabled: !props.isEditMode || !isValid,
              }}
            >
              Отправить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
