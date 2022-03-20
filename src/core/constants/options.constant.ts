import { IOption } from '../../components/Option/Option.types';
import { handlerBtnOption } from '../utils/handlerBtnOption';

export const options: IOption[] = [
  {
    value: 'city',
    label: 'по городу',
    onClick: handlerBtnOption,
  },
  {
    value: 'company',
    label: 'по компании',
    onClick: handlerBtnOption,
  },
];
