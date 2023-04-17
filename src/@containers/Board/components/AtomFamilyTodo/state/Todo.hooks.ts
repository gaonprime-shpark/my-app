import { useRecoilState, useSetRecoilState } from 'recoil';
import { todoAtom, todoIdAtom, todoIdsAtom } from './Todo.Atom';

const useHandlingTodo = (id: number) => {
  const setTodo = useSetRecoilState(todoAtom({ id, title: '' }));
  const setTodoIdsAtom = useSetRecoilState(todoIdsAtom);
  const [todoId, setTodoId] = useRecoilState(todoIdAtom);

  const addTodo = () => {
    setTodoIdsAtom((prev) => {
      return [...prev, todoId];
    });
    setTodoId((curr) => {
      return curr + 1;
    });
  };

  const writeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev) => {
      return { ...prev, title: e.currentTarget.value };
    });
  };

  const successTodo = () => {
    setTodo((prev) => {
      return { ...prev, isDone: !prev.isDone };
    });
  };

  const deleteTodo = (id: number) => {
    setTodoIdsAtom((prev) => {
      return prev.filter((el) => el !== id);
    });
  };

  return { addTodo, writeTodo, successTodo, deleteTodo };
};

export { useHandlingTodo };
