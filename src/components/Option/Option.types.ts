export interface IOption {
  value: string;
  label: string;
  onClick(event: React.MouseEvent<HTMLElement>): void;
}
