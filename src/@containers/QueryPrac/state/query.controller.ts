import axios from 'axios';

const fetchData = async ({
  pageParam = 1,
}: {
  pageParam: number;
}): Promise<{
  data: any;
  pageParam: number;
  nextPageParam: number;
  totalLength: number;
  totalPage: number;
}> => {
  return await axios
    .get(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}`)
    .then((res) => {
      return {
        data: res.data,
        pageParam,
        nextPageParam: pageParam + 1,
        totalLength: 100,
        totalPage: 10,
      };
    });
};

export { fetchData };
