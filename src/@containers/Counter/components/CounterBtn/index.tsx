import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { counterAtom } from '../../state';
import { counterSelector } from '../../state/counter.selector';
import axios from 'axios';
import { useState } from 'react';
import Btn from '../../../../@shared/Btn';

const CounterBtn = () => {
  const [count, setCount] = useRecoilState(counterAtom);
  const countLoadalbe = useRecoilValueLoadable(counterAtom);
  //셀렉터에 set 함수를 추가하면 state로 사용가능
  const [countSel, setCountSel] = useRecoilState(counterSelector);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  const plusCount = () => {
    setCount((prev) => prev + 5);
  };

  const testApi = async () =>
    await axios.post('http://localhost:3333/api/test', { name }).then((res) => {
      console.log(res);
    });

  const findApi = async () =>
    await axios.get('http://localhost:3333/api/find').then((res) => {
      console.log(res);
    });

  const bookSave = async () => {
    await axios
      .post('http://localhost:3333/api/bookSave', { name, title })
      .then((res) => {
        console.log(res);
      });
  };

  const populateApi = async () =>
    await axios.post('http://localhost:3333/api/populate', { name }).then((res) => {
      console.log(res);
    });

  return (
    <div className="flex flex-col">
      <Btn OnClick={plusCount} text="증가"></Btn>
      <div>
        이름 :{' '}
        <input
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        ></input>
      </div>

      <div>
        제목:
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        ></input>
      </div>

      <Btn OnClick={testApi} text={'도큐멘트 name 저장하기'}></Btn>
      <Btn OnClick={findApi} text="컬렉션 가져오기"></Btn>
      <Btn OnClick={bookSave} text="Book 저장하기"></Btn>
      <Btn OnClick={populateApi} text="저자의 Book 가져오기"></Btn>
      <button
        onClick={() => {
          setCountSel(500);
        }}
      >
        countSelector 증가
      </button>
    </div>
  );
};

export { CounterBtn };
