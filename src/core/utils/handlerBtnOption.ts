import { usersmock } from '../constants/usersmock.constant';

export const handlerBtnOption = (event: React.MouseEvent<HTMLElement>) => {
  const target = event.target as any;

  let sort1, sort2;
  if (target.value === 'city') {
    sort1 = 'address';
    sort2 = 'city';
  } else {
    sort1 = 'company';
    sort2 = 'name';
  }

  //const c = [...usersmock].sort((a, b) => a[sort].localeCompare(b[sort]));
  //console.log(c);

  usersmock.sort(function (a, b) {
    return a[sort1][sort2].localeCompare(b[sort1][sort2]);
  });
  console.log(usersmock);
};
