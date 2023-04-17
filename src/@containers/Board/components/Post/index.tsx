import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAsync } from 'react-use';
import PostComponent from '../../../../@shared/Post';
const Post = () => {
  const [posts, setPosts] = useState([]);

  let url = 'https://jsonplaceholder.typicode.com/posts';

  //useAsync가 반환하는 객체 자체가 state라고 봐야할듯
  const { loading, error, value } = useAsync(async () => {
    const response = await axios.get(url);
    const data = await response.data;
    //return한 값이 state의 value로 들어온다.
    return data;
  }, [url]);

  useEffect(() => {
    console.log(value);
    console.log(posts);
    setPosts(value);
  }, [loading]);

  return (
    <div className="mr-10">
      <span>useAsync를 이용한 Post </span>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {/* {posts &&
                posts.map((el: any, idx: number) => <li key={el.id}>{el.title}</li>)} */}
          {value.map((el: any, idx: number) => (
            <PostComponent
              key={el.id}
              id={el.id}
              userId={el.userId}
              title={el.title}
              body={el.body}
            ></PostComponent>
          ))}
        </>
      )}
    </div>
  );
};

export default Post;
