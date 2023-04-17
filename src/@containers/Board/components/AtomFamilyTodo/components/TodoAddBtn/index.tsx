import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { todoIdAtom, todoIdsAtom } from '../../state/Todo.Atom';
import React from 'react';
import { useHandlingTodo } from '../../state/Todo.hooks';

const TodoAddBtn = () => {
  const todoId = useRecoilValue(todoIdAtom);

  const { addTodo } = useHandlingTodo(todoId);

  return (
    <button
      className="p-1 text-white bg-green-500 rounded-md hover:scale-110"
      onClick={addTodo}
    >
      할 일 추가
    </button>
  );
};

export default TodoAddBtn;
