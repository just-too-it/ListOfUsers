import React, { FC } from 'react';

import { Button } from '../Button';
import { IButton } from '../Button/Button.types';
import { IOption } from './Option.types';

export const Option: FC<{ item: IOption }> = (props) => {
  const btn: IButton = {
    value: props.item.value,
    type: 'button',
    color: 'blue',
    btnOnClick: props.item.onClick,
  };

  return (
    <div className="option">
      <Button btn={btn}>{props.item.label}</Button>
    </div>
  );
};
