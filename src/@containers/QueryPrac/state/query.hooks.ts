import { useQuery, QueryFunctionContext } from 'react-query';
import { fetchData } from './query.controller';

// const usePageList = ({queryKey,pageParam}:{queryKey:string[],pageParam:number}) => {

//     const { data, isError, isLoading, isFetching, isSuccess } = useQuery(
//         ['data', 1],
//         ({ pageParam = 1 }: QueryFunctionContext) => {
//           console.log(pageParam);

//           return fetchData({ pageParam });
//         },
//         {
//           getNextPageParam: (lastPage) => {
//             console.log('lastPage');
//             console.log(lastPage);
//             return lastPage.nextPageParam;
//           },
//           keepPreviousData: true,
//         },
//       );

//     return {}
// }

// export {usePageList}

const useQueryData = ({ key }: { key: any[] }) => {
  return useQuery(
    key,
    ({ pageParam = key[1] }: QueryFunctionContext) => {
      return fetchData({ pageParam });
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.nextPageParam;
      },
      keepPreviousData: true,
    },
  );
};

export default useQueryData;


