import { useState } from 'react';
import { ColorList } from './components/color/ColorList';
import colorData from './data/color-data.json';
import { AddColorForm } from './components/color/AddColorForm';
import { v4 } from 'uuid';

function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => {
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
        }}
      />
      <ColorList
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
        onRemoveColor={(id) => {
          const newColor = colors.filter((color) => color.id !== id);
          setColors(newColor);
        }}
      />
    </>
  );
}

export default App;
