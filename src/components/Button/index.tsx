import React, { FC } from 'react';

import { IButton } from './Button.types';

export const Button: FC<{ btn: IButton }> = (props) => {
  const { color, btnOnClick, value, disabled } = props.btn;
  let classButton = 'button';

  switch (color) {
    case 'blue':
      classButton += ' button_blue';
      break;
    case 'green':
      classButton += ' button_green';
      break;
    case 'transparent':
      classButton += ' button_transparent';
      break;
    default:
      classButton += '';
  }

  return (
    <button className={classButton} type={props.btn.type} value={value} onClick={btnOnClick} disabled = {disabled}>
      {props.children}
    </button>
  );
};


