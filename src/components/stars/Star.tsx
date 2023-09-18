import { FaStar } from 'react-icons/fa';

export const Star = ({ selectd = false, onSelect = (f) => f }) => (
  <FaStar
    style={{ cursor: 'pointer' }}
    color={selectd ? 'red' : 'gray'}
    onClick={onSelect}
  />
);
