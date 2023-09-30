import { useEffect, useReducer } from 'react';

export const CheckboxReducer = () => {
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  const toggle = () => {
    setChecked();
  };

  useEffect(() => {
    console.log(`check: ${checked.toString()}`);
  });
  return (
    <>
      <input type="checkbox" value={checked.toString()} onChange={toggle} />
      {checked ? 'checked' : 'not checked'}
    </>
  );
};
