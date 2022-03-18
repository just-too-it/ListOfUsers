import React, { FC } from 'react';
import { IOption } from './Option.types';

export const Option: FC<{ item: IOption }> = (props) => {
  return <div className="option">{props.item.label}</div>;
};
