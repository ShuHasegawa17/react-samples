import { useState } from 'react';
import { Star } from './Star';

export const StarRating = ({ style = {}, totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{ padding: '5px', ...style }}>
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          selectd={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
    </div>
  );
};
