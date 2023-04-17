import React, { ForwardedRef, forwardRef, useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { todoAtom, todoIdsAtom } from '../../state/Todo.Atom';
import { useHandlingTodo } from '../../state/Todo.hooks';

const TodoItem = ({ id, index }: { id: number; index: number }) => {
  const { writeTodo, successTodo, deleteTodo } = useHandlingTodo(id);

  const todo = useRecoilValue(todoAtom({ id, title: '' }));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex">
      <li className="list-none ">{index}. </li>
      <input ref={inputRef} value={todo.title} onChange={writeTodo}></input>
      <input type="checkbox" defaultChecked={todo.isDone} onClick={successTodo}></input>
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </div>
  );
};

export default React.memo(TodoItem);
