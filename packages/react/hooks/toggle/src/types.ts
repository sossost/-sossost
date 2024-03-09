export type ToggleProps = {
  isSelected?: boolean;
};

export interface UseToggleReturn {
  readonly isSelected: boolean;
  setSelect(isSelected: boolean): void;
  toggle(): void;
}
