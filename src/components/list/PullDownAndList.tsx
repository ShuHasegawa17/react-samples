import { useRef, useState } from 'react';
import listData from '../../data/list-data.json';
import React from 'react';

export const PullDownAndList = () => {
  const data = listData;
  const animalList = ['dog', 'lion', 'cat', 'human'];
  const sexList = ['men', 'women', 'other'];

  const [form, setForm] = useState({
    feedId: data[0].id,
    note: '',
    comment: '',
    animal: ['dog', 'cat'],
    sex: 'men',
    agreement: true,
    files: [],
  });

  // ファイル入力は非制御コンポーネント
  const file = useRef<any>(null);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleListForm = (e) => {
    const data = [] as string[];
    const opts = e.target.options;
    for (const opt of opts) {
      if (opt.selected) {
        data.push(opt.value);
      }
    }
    setForm({
      ...form,
      [e.target.name]: data,
    });
  };

  const handleMultiForm = (e) => {
    const list = [...form.animal];
    if (e.target.checked) {
      list.push(e.target.value);
    } else {
      list.splice(list.indexOf(e.target.value));
    }
    setForm({
      ...form,
      [e.target.name]: list,
    });
  };

  const handleFormCheck = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleFileForm = (e) => {
    const filename = [] as string[];
    const fs = file.current.files;
    for (const f of fs) {
      filename.push(f.name);
    }
    console.log(filename);
    setForm({
      ...form,
      [e.target.name]: filename,
    });
  };
  const send = () => {
    console.log(form);
    console.log(file?.current?.files);
  };

  const fillerList = () => data.filter((d) => d.id === +form.feedId)[0].list;

  return (
    <div>
      <form>
        リスト：
        <select name="feedId" id="feedId" onChange={handleForm}>
          {data.map((v) => (
            <option key={v.id} value={v.id}>
              {v.name}
            </option>
          ))}
        </select>
        <div>
          メモ：
          <input
            type="text"
            name="note"
            value={form.note}
            onChange={handleForm}
          />
        </div>
        <div>
          <label htmlFor="comment">コメント：</label>
          <textarea
            name="comment"
            id="comment"
            cols={30}
            rows={10}
            value={form.comment}
            onChange={handleForm}
          ></textarea>
        </div>
        <div>
          <label htmlFor="animal">動物：</label>
          <select
            name="animal"
            id="animal"
            value={form.animal}
            size={4}
            multiple={true}
            onChange={handleListForm}
          >
            {animalList.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </div>
        <div>
          <fieldset>
            <legend>動物2 : </legend>
            {animalList.map((animal) => (
              <React.Fragment key={animal}>
                <label htmlFor={`animal_${animal}`}>{animal}</label>
                <input
                  type="checkbox"
                  name="animal"
                  id={`animal_${animal}`}
                  value={animal}
                  checked={form.animal.includes(animal)}
                  onChange={handleMultiForm}
                />
              </React.Fragment>
            ))}
          </fieldset>
        </div>
        <div>
          {/* グループ化のタグ 「fieldset」「legend」*/}
          <fieldset>
            <legend>性別：</legend>
            {sexList.map((sex) => (
              <React.Fragment key={sex}>
                <label htmlFor={`s_${sex}`}>{sex}</label>
                <input
                  type="radio"
                  name="sex"
                  id={`s_${sex}`}
                  value={sex}
                  checked={form.sex === sex}
                  onChange={handleForm}
                />
              </React.Fragment>
            ))}
          </fieldset>
        </div>
        <div>
          <label htmlFor="agreement">同意：</label>
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            checked={form.agreement}
            onChange={handleFormCheck}
          />
        </div>
        <div>
          <input
            type="file"
            name="files"
            ref={file}
            multiple
            onChange={handleFileForm}
          />
        </div>
        <button type="button" onClick={send}>
          送信
        </button>
      </form>

      {fillerList().map((l) => (
        <li key={l.name}>
          {l.name} : {l.memo} : {form.note} : {form.comment} : {form.animal} :{' '}
          {form.sex} : {form.agreement ? '同意' : '反対'} : {form.files}
        </li>
      ))}
    </div>
  );
};
