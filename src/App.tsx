import { useState } from 'react';
import { ColorList } from './components/color/ColorList';
import colorData from './data/color-data.json';
import { AddColorForm } from './components/color/AddColorForm';
import { v4 } from 'uuid';

function App() {
  const [colors, setColors] = useState(colorData);

  const add = (title: string, color: string) => {
    const newColor = [
      ...colors,
      {
        id: v4() as string,
        rating: 0,
        title,
        color,
      },
    ];
    setColors(newColor);
  };

  const setRate = (id: string, rating: number) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  const remove = (id: string) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  return (
    <>
      <AddColorForm onNewColor={add} />
      <ColorList colors={colors} onRateColor={setRate} onRemoveColor={remove} />
    </>
  );
}

export default App;
