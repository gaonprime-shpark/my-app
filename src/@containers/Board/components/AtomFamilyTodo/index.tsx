import { useRecoilValue } from 'recoil';
import { todoIdsAtom } from './state';
import TodoItem from './components/TodoItem';
import TodoAddBtn from './components/TodoAddBtn';
import React from 'react';

const Todo = () => {
  const todoIds = useRecoilValue(todoIdsAtom);

  return (
    <div>
      <div>AtomFamily TodoList</div>
      <TodoAddBtn />

      {todoIds.map((el, idx) => {
        return <TodoItem key={el} id={el} index={idx}></TodoItem>;
      })}
    </div>
  );
};

export default React.memo(Todo);
