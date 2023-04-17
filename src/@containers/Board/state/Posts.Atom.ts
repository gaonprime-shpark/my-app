import { atom, selector } from 'recoil';
import { PostInterface } from '../../../@shared/Post/post.interface';
import axios from 'axios';

let url = 'https://jsonplaceholder.typicode.com/posts';

export const PostsAtom = atom<PostInterface[]>({
  key: 'postsAtom',
  default: [],
});

export const lengthAtom = atom<number>({
  key: 'lengthAtom',
  default: 0,
});

//원하는 body의 length를 인자로받아 셀렉터를 생성?

export const filteredLengthPostsAtom = selector({
  key: 'filteredLengthPostsAtom',
  get: ({ get }) => {
    const length = get(lengthAtom);
    const posts = get(PostsAtom);
    const lengthFiltered = posts.filter((item) => item.title.length >= length);
    const lengthFilteredCount = lengthFiltered.length;
    return { lengthFiltered, lengthFilteredCount };
  },
});

//비동기 셀렉터
export const asyncPosts = selector({
  key: 'asyncPosts',
  get: async () => {
    const res = await axios.get(url);
    const length = res.data.length;
    return { data: res.data, length };
  },
});
