import React, { FC } from 'react';
import { Button } from '../Button';
import { IButton } from '../Button/Button.types';
import { IOption } from './Option.types';

export const Option: FC<{ item: IOption }> = (props) => {
  const btn: IButton = {
    type: 'button',
    color: 'blue',
    btnOnClick: () => {
      console.log('sort by ..');
    },
  };
  return (
    <div className="option">
      <Button btn={btn}>{props.item.label}</Button>
    </div>
  );
};
