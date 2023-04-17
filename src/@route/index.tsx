import { FC } from 'react';

import { Routes, Route } from 'react-router-dom';
import App from '../App';
import { Board } from '../@containers';
import { Counter } from '../@containers';
import { FormPrac } from '../@containers/Form';

const RootRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/board" element={<Board />} />
      <Route path="/count" element={<Counter />} />
      <Route path="/formfrac" element={<FormPrac />} />
    </Routes>
  );
};

export { RootRouter };
