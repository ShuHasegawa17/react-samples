import { createContext } from 'react';
import { ColorList } from './components/color/ColorList';
import colorData from './data/color-data.json';
import { AddColorForm } from './components/color/AddColorForm';
import { ColorProvider } from './provider/ColorProvider';
import { Checkbox } from './components/effect/Checkbox';
import { Phrase } from './components/effect/Phrase';
import { Render } from './components/effect/Render';
import { CheckboxReducer } from './components/reducer/CheckboxReducer';
import { Numbers } from './components/reducer/Numbers';
import { UserReducer } from './components/reducer/User';
import { Parent } from './components/context/Parent';

export const ColorContext = createContext({ colors: colorData });

function App() {
  return (
    <>
      <Parent></Parent>
      {/* states */}
      <ColorProvider>
        <AddColorForm />
        <ColorList />
      </ColorProvider>
      {/* effects */}
      <Checkbox />
      <Phrase />
      <Render childeren="aa bb cc" />
      <div>
        <CheckboxReducer />
      </div>
      <div>
        <Numbers />
      </div>
      <UserReducer />
    </>
  );
}

export default App;
