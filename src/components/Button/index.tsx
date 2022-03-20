import React, { FC } from 'react';

import { IButton } from './Button.types';

export const Button: FC<{ btn: IButton }> = (props) => {
  const { color, btnOnClick, value } = props.btn;
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

/*   return (
    <button className={classButton} type={props.btn.type} onClick={btnOnClick}>
      {props.children}
    </button>
  ); */


/*   return (
    <button className={classButton} type={props.btn.type} value={value} id={value} onClick={(event)=>console.log(event.target)}>
      {props.children}
    </button>
  ); */

/*   const handler = (event: React.MouseEvent<HTMLElement>)=>{
    const a = event.target as any;
    console.log(a.value)
  } */

  return (
    <button className={classButton} type={props.btn.type} value={value} onClick={btnOnClick}>
      {props.children}
    </button>
  );
};

/* const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    cars.map(car => {
        car.title = event.target.value
        return (
            console.log(car.title)
        )
    })
} */

/* onClick={(event: React.MouseEvent<HTMLElement>) => {
    makeMove(ownMark, (event.target as any).index)
   }} */

   /* (event: React.MouseEventHandler<HTMLButtonElement>) */