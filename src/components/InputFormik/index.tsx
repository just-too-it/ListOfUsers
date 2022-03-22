import { Field, ErrorMessage } from 'formik';
import React from 'react';

export const InputFormik = (props): React.ReactElement => {
  const { label, name, isEditMode, ...rest } = props;

  return (
    <div className="field">
      <label htmlFor={name} className="field__label">
        {label}
      </label>
      <Field name={name} className="field__input" disabled={!isEditMode} required {...rest}/>
    </div>
  );
};

