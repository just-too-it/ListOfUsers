import React, { FC } from 'react';
import { IOption } from '../Option/Option.types';
import { Option } from '../Option';

export const OptionList: FC<{ items: IOption[] }> = (props) => {
  return (
    <ul className="options">
      {props.items.map((item) => (
        <li key={item.value}>
          <Option item={item} />
        </li>
      ))}
    </ul>
  );
};
