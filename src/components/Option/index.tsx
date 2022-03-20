import React, { FC, useContext } from 'react';

import { usersContext } from '../../core/Context';
import { Button } from '../Button';
import { IButton } from '../Button/Button.types';
import { IOption } from './Option.types';

export const Option: FC<{ item: IOption }> = (props) => {
  const [users, setUsers] = useContext(usersContext);

  const sorting = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as any;
    let sort1, sort2;
    if (target.value === 'city') {
      sort1 = 'address';
      sort2 = 'city';
    } else {
      sort1 = 'company';
      sort2 = 'name';
    }

    setUsers(
      [...users].sort(function (a, b) {
        return a[sort1][sort2].localeCompare(b[sort1][sort2]);
      })
    );
  };

  const btn: IButton = {
    value: props.item.value,
    type: 'button',
    color: 'blue',
    btnOnClick: sorting,
  };

  return (
    <div className="option">
      <Button btn={btn}>{props.item.label}</Button>
    </div>
  );
};
