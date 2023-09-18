import { Color } from './Color';
import { useColors } from '../../provider/ColorProvider';

export const ColorList = () => {
  const { colors } = useColors();
  if (!colors.length) return <div>カラーリストはありません。</div>;
  return (
    <div>
      {colors.map((c) => (
        <Color key={c.id} {...c} />
      ))}
    </div>
  );
};
