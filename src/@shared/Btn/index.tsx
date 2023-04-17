import React from 'react';
import { BtnInterface } from './Btn.interface';

const Btn = ({ OnClick, text }: BtnInterface) => {
  return (
    <button
      className="p-4 m-2 text-white bg-green-600 rounded-md hover:bg-green-950"
      onClick={OnClick}
    >
      {text}
    </button>
  );
};

//test 브랜치에 병합하기
//git rebase master
const BtnTest = ({ OnClick, text }: BtnInterface) => {
  return (
    <button
      className="p-4 m-2 text-white bg-green-600 rounded-md hover:bg-green-950"
      onClick={OnClick}
    >
      {text}
    </button>
  );
};

const BtnPrac = ({ OnClick, text }: BtnInterface) => {
  return (
    <button
      className="p-4 m-2 text-white bg-green-600 rounded-md hover:bg-green-950"
      onClick={OnClick}
    >
      {text}
    </button>
  );
};

export default React.memo(Btn);
