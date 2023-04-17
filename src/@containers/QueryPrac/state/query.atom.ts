import { QueryStatus } from 'react-query';
import { atom } from 'recoil';

const queryDataAtom = atom({
  key: 'dataAtom',
  default: null,
});

const queryStatusAtom = atom<QueryStatus>({
  key: 'dataStatusAtom',
  default: 'idle',
});

export { queryDataAtom, queryStatusAtom };
