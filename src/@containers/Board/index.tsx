import Todo from './components/AtomFamilyTodo';
import { AtomPost } from './components/AtomPost';
import Post from './components/Post';
import { SelectorPost } from './components/SelectorPost';

const Board = () => {
  return (
    <>
      <div className="flex ">
        <Post />
        <AtomPost />
        <SelectorPost />
        <Todo />
      </div>
    </>
  );
};

export { Board };
