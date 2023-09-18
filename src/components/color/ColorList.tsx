import { Color, IColor } from './Color';
type IColorListProps = {
  colors: IColor[];
  onRemoveColor: (id: string) => void;
  onRateColor: (id: string, rating: number) => void;
};

export const ColorList = ({
  colors = [],
  onRemoveColor = (id) => id,
  onRateColor = (id, rating) => ({ id, rating }),
}: IColorListProps) => {
  if (!colors.length) return <div>カラーリストはありません。</div>;
  return (
    <div>
      {colors.map((c) => (
        <Color
          key={c.id}
          {...c}
          onRemove={onRemoveColor}
          onRate={onRateColor}
        />
      ))}
    </div>
  );
};
