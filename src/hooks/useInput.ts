import { useState } from 'react';

export type IUseInput = [
  {
    value: string;
    onChange: (e) => void;
  },
  () => void
];

export const useInput = (initialValue: string): IUseInput => {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
};
