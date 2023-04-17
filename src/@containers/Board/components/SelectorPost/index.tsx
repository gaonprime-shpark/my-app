import { useRecoilState, useRecoilValue } from 'recoil';
import { asyncPosts, filteredLengthPostsAtom, lengthAtom } from '../../state/Posts.Atom';
import PostComponent from '../../../../@shared/Post';
import { useEffect } from 'react';

const SelectorPost = () => {
  const [length, setLength] = useRecoilState(lengthAtom);
  const { lengthFiltered, lengthFilteredCount } = useRecoilValue(filteredLengthPostsAtom);
  const asyncPost = useRecoilValue(asyncPosts);

  useEffect(() => {
    console.log('asyncPost');
    console.log(asyncPost.length);
    console.log(asyncPost.data);
  }, []);

  return (
    <div>
      <span>Selector를 이용한 AtomPost 필터링 </span>
      <div>글 갯수 : {lengthFilteredCount}</div>
      <div>
        제목 길이 :
        <input
          className="bg-green-200"
          defaultValue={length}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLength(Number(e.currentTarget.value));
          }}
        ></input>
      </div>
      {lengthFiltered.map((el, idx: number) => (
        <PostComponent
          key={el.id}
          id={el.id}
          userId={el.userId}
          title={el.title}
          body={el.body}
        ></PostComponent>
      ))}
    </div>
  );
};

export { SelectorPost };
