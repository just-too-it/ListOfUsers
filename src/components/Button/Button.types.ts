export interface IButton {
    value?: string;
    type: 'button' | 'submit' | 'reset';
    color: 'blue' | 'green' | 'transparent';
    label?: string;
    btnOnClick(event: React.MouseEvent<HTMLElement>): void;
  }