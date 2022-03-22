export interface IButton {
  value?: string;
  type: 'button' | 'submit' | 'reset';
  color: 'blue' | 'green' | 'transparent';
  disabled?: boolean;
  btnOnClick(event: React.MouseEvent<HTMLElement>): void;
}
