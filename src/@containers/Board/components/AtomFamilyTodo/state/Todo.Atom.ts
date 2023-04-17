import { atom, atomFamily } from 'recoil';
import { Todo } from './Todo.interface';

const todoIdAtom = atom<number>({
  key: 'todoIdAtom',
  default: 1,
});

const todoIdsAtom = atom<number[]>({ key: 'todoIdsAtom', default: [] });

const todoAtom = atomFamily<Todo, { title: string; id: number }>({
  key: 'todoAtom',
  default: (param) => {
    return {
      id: param.id,
      title: param.title,
      isDone: false,
    };
  },
});

export { todoAtom, todoIdAtom, todoIdsAtom };
