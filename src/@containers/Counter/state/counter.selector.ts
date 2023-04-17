import { DefaultValue, selector } from 'recoil';
import { counterAtom } from './counter.atom';

export const counterSelector = selector<number>({
  key: 'counterSelector',
  get: ({ get }) => get(counterAtom) * 5,
  set: ({ get, set, reset }, newValue) => {
    const prev = get(counterAtom);
    set(counterAtom, newValue instanceof DefaultValue ? newValue : newValue + prev);

    // reset(counterAtom);
  },
});
