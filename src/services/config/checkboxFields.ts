export interface CheckboxField {
  id: string;
  label: string;
  checked?: boolean;
}
export const checkboxFields = [
  { id: 'portrait', label: 'Portrait', checked: true },
  { id: 'stillLife', label: 'Still Life', checked: true },
  { id: 'landscape', label: 'Landscape', checked: true },
];
