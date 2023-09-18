/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useState } from 'react';
import colorData from '../data/color-data.json';
import { v4 } from 'uuid';

const ColorContext = createContext({
  colors: colorData,

  addColor: (_title: string, _color: string) => {},
  rateColor: (_id: string, _rating: number) => {},
  removeColor: (_id: string) => {},
});

export const useColors = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const addColor = (title: string, color: string) => {
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

  const rateColor = (id: string, rating: number) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  const removeColor = (id: string) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  const [colors, setColors] = useState(colorData);
  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
};
