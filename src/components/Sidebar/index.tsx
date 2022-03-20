import React from 'react';

import { options } from '../../core/constants/options.constant';
import { OptionList } from '../OptionList';

export const Sidebar = (): React.ReactElement => {

  return (
    <section className="sidebar">
      <h2 className="sidebar__title">Сортировка</h2>
      <OptionList items={options} />
    </section>
  );
};
