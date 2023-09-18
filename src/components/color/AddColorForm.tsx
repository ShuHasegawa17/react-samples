import { useInput } from '../../hooks/useInput';
import { useColors } from '../../provider/ColorProvider';

export const AddColorForm = () => {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');
  const { addColor } = useColors();

  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="color title" required />
      <input {...colorProps} type="text" placeholder="color" required />
      <button>ADD</button>
    </form>
  );
};
