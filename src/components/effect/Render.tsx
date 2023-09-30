import { useCallback, useEffect, useMemo } from 'react';
import { useAnyKeyToRender } from '../../hooks/useAnyKeyToRender';
import { useMousePosition } from '../../hooks/useMousePosition';

export const Render = ({ childeren = '' }) => {
  useAnyKeyToRender();
  // useMemo
  //const words = childeren.split(' ');

  const words = useMemo(() => childeren.split(' '), [childeren]);

  useEffect(() => {
    console.log('fresh render');
  }, [words]);

  const fn = useCallback(() => {
    console.log('function!');
  }, []);

  useEffect(() => {
    console.log('rendaring');
    fn();
  }, [fn]);

  const [x, y] = useMousePosition();

  return (
    <>
      <h1>{words}</h1>
      <span>{words.length} - words</span>;<span>{`x:${x},y:${y}`}</span>
    </>
  );
};
