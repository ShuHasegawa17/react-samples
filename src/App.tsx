import { createContext } from 'react';
import { ColorList } from './components/color/ColorList';
import colorData from './data/color-data.json';
import { AddColorForm } from './components/color/AddColorForm';
import { ColorProvider } from './provider/ColorProvider';

export const ColorContext = createContext({ colors: colorData });

function App() {
  return (
    <>
      <ColorProvider>
        <AddColorForm />
        <ColorList />
      </ColorProvider>
    </>
  );
}

export default App;
