import { useInput } from '../../hooks/useInput';

type Props = {
  onNewColor: (title: string, color: string) => void;
};

export const AddColorForm = ({ onNewColor }: Props) => {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const submit = (e) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
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
