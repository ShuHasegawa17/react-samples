import { useEffect, useState } from 'react';

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(`check: ${checked.toString()}`);
  });
  return (
    <>
      <input
        type="checkbox"
        value={checked.toString()}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? 'checked' : 'not checked'}
    </>
  );
};
