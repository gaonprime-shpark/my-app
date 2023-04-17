import { FC } from 'react';
import { isRecoilValue, useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { counterAtom } from '../../state';
import { counterSelector } from '../../state/counter.selector';

const CounterViewer: FC = () => {
  const count = useRecoilValue(counterAtom);
  const countLoadable = isRecoilValue(counterSelector);
  const countSel = useRecoilValue(counterSelector);

  return (
    <>
      <div>
        <div>atom Count : {count}</div>
        <div>atom isRecoilValue : {`${countLoadable}`}</div>
        <div>selector Count : {countSel}</div>
      </div>
    </>
  );
};

export default CounterViewer;
