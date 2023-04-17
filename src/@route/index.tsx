import { FC } from 'react';

import { Routes, Route } from 'react-router-dom';
import App from '../App';
import { Board } from '../@containers';
import { Counter } from '../@containers';
import { FormPrac } from '../@containers/Form';
import { TailPrac } from '../@containers/TailPrac';
import { QueryPrac } from '../@containers/QueryPrac';

const RootRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/board" element={<Board />} />
      <Route path="/count" element={<Counter />} />
      <Route path="/formfrac" element={<FormPrac />} />
      <Route path="/tailprac" element={<TailPrac />} />
      {/* 동적 라우팅 추가 */}
      <Route path="/queryprac/:pageNumber" element={<QueryPrac />}></Route>
    </Routes>
  );
};

export { RootRouter };
