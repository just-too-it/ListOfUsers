export interface IButton {
  value?: string;
  type: 'button' | 'submit' | 'reset';
  color: 'blue' | 'green' | 'transparent';
  btnOnClick(event: React.MouseEvent<HTMLElement>): void;
}
