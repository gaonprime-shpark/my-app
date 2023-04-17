import React, { FC } from 'react';
import { PostInterface } from './post.interface';

//타입 FC 제네릭에 인터페이스를 사용하여 props 타입 추론 가능
const Post: FC<PostInterface> = ({ userId, id, title, body }) => {
  return (
    <>
      <div className="w-[200px] mb-3 rounded shadow-md bg-slate-200">
        <span>{userId}</span>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default React.memo(Post);
