export interface IButton {
    type: 'button' | 'submit' | 'reset';
    color: 'blue' | 'green' | 'transparent';
    btnOnClick(): void;
  }