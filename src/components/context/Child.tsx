import { useContext } from 'react';
import { SampleContext } from './Parent';

export function Child() {
  return (
    <>
      <div>child component</div>
      <GrandChild />
    </>
  );
}

export function GrandChild() {
  // 3
  const { title, value, setValue } = useContext(SampleContext);
  return (
    <>
      grand child component: {title}
      <div>
        <input
          type="text"
          value={value}
          onChange={(element) => setValue(+element.target.value)}
        />
      </div>
    </>
  );
}
