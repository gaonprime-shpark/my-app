import React from 'react';

interface BtnInterface {
  OnClick: any;
  text: string;
}

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

export default React.memo(Btn);
