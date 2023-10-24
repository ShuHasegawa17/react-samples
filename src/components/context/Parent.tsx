import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Child } from './Child';

type ISampleValue = {
  title: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

// 1
export const SampleContext = createContext<ISampleValue>({
  title: '',
  value: 0,
  setValue: () => {},
});

export function Parent() {
  const [value, setValue] = useState(0);
  const providValue = {
    title: 'context provider',
    value,
    setValue,
  };

  return (
    // 2
    <SampleContext.Provider value={providValue}>
      parent component: {providValue.value}
      <Child />
    </SampleContext.Provider>
  );
}
