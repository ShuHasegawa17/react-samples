import { useEffect, useState } from 'react';

export const Phrase = () => {
  const [val, setVal] = useState('');
  const [phrase, setPhrase] = useState('expamle');

  const createPhrase = () => {
    setPhrase(val);
    setVal('');
  };

  useEffect(() => {
    console.log('再レンダリング時実行');
  });

  useEffect(() => {
    console.log('初期化時');
    return () => console.log('アンマウント時');
  }, []);

  useEffect(() => {
    console.log(`val変更時: ${val}`);
  }, [val]);

  useEffect(() => {
    console.log(`saved phrase: ${phrase}`);
  }, [phrase]);

  return (
    <>
      <div>
        <label>Phrase:</label>
        <input
          type="text"
          value={val}
          placeholder={phrase}
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={createPhrase}>send</button>
      </div>
    </>
  );
};
