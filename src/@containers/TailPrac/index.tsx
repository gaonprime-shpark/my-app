import { useState } from 'react';
import TextInput from '../../@shared/Input/TextInput';
import _ from 'lodash';
import Btn from '../../@shared/Btn';

const TailPrac = () => {
  const [arr, setArr] = useState<number[]>([]);

  return (
    <>
      <Btn
        text="arr 추가"
        OnClick={() => {
          setArr((prev) => prev.concat(prev.length + 1));
        }}
      ></Btn>
      <div className="w-full h-[100vh] border bg-slate-100 ">
        <div className="flex p-3  bg-yellow-100  flex-wrap">
          {_.map(arr, (item, index) => (
            <div key={_.uniqueId()} className=" w-[200px] h-[50px] bg-red-300 ">
              {item}
            </div>
          ))}
        </div>
        <TextInput
          onChange={(e) => {
            return e;
          }}
          className="w-[50%]"
        ></TextInput>
      </div>
    </>
  );
};
export { TailPrac };
