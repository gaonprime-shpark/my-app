import { useRecoilState } from 'recoil';
import { PostsAtom } from '../../state/Posts.Atom';
import axios from 'axios';
import { useQuery } from 'react-query';
import PostComponent from '../../../../@shared/Post';

const AtomPost = () => {
  const [post, setPost] = useRecoilState(PostsAtom);
  let url = 'https://jsonplaceholder.typicode.com/posts';

  const { isLoading, error, data, isFetching } = useQuery('posts', () =>
    axios.get(url).then((res) => {
      console.log('useQuery로 불러온 data를 atom에');
      setPost(res.data);
      return res.data;
    }),
  );

  return (
    <div className="mr-10 ">
      <span>useQuery + Atom Post</span>

      {isLoading === false &&
        post.map((el: any, idx: number) => (
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

export { AtomPost };
