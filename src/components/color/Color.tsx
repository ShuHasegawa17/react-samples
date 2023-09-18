import { StarRating } from '../stars/StarRating';
import { FaTrash } from 'react-icons/fa';

export type IColor = {
  id: string;
  title: string;
  color: string;
  rating: number;
};

export type IColorProps = {
  onRemove: (id: string) => void;
  onRate: (id: string, rating: number) => void;
} & IColor;

export const Color = ({
  id,
  title,
  color,
  rating,
  onRemove = (id) => id,
  onRate = (id, rating) => ({ id, rating }),
}: IColorProps) => {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  );
};
