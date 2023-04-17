import { useQueryClient } from 'react-query';
import { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { useNavigate, useParams } from 'react-router-dom';
import useQueryData from './state/query.hooks';
import { fetcher, useDataUrl, useRecoilQuery } from './state/recoilQuery.hook';
import { queryDataAtom, queryStatusAtom } from './state/query.atom';

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

const QueryPrac = () => {
  const queryClinet = useQueryClient();
  const [list, setList] = useState<any[]>([]);
  const { pageNumber } = useParams();
  const [totalPage, setTotalPage] = useState<any[]>([]);

  const navigate = useNavigate();
  const queryKey = ['data', parseInt(pageNumber as string)];

  const { data, isError, isLoading, isFetching, isSuccess } = useQueryData({
    key: queryKey,
  });

  const { data: datas, status } = useRecoilQuery(
    queryStatusAtom,
    queryDataAtom,
    useDataUrl(pageNumber as string),
    fetcher,
    !pageNumber,
  );

  useEffect(() => {
    data && setList((prev) => [...data.data]);
    console.log('datas');
    console.log(datas);
    console.log(datas);
    console.log(datas);
    console.log(datas);
    console.log(datas);
  }, [data, datas]);

  //   useEffect(() => {
  //     queryClinet.prefetchQuery(['data', parseInt(pageNumber as string) + 1], () =>
  //       fetchData({ pageParam: parseInt(pageNumber as string) + 1 }),
  //     );
  //   }, [pageNumber, queryClinet]);

  useEffect(() => {
    setTotalPage((prev) => {
      return Array.from({ length: data?.totalPage as number });
    });
  }, [data]);

  return (
    <>
      {isSuccess &&
        _.map(list, (item, index) => (
          <div
            className="bg-green-600 text-white mb-3 w-[50%] py-3 rounded-lg "
            key={_.uniqueId()}
          >
            <div className="w-full">
              <span className="font-bold text-left pl-3">{item.id}. </span>
              {item.title}
            </div>
          </div>
        ))}
      <div className="flex">
        {isSuccess &&
          _.map(totalPage, (item, index) => {
            return (
              <div
                className=" cursor-pointer px-1 mx-2 hover:bg-slate-500"
                key={_.uniqueId()}
                onClick={() => {
                  navigate(`/queryprac/${index + 1}`);
                }}
              >
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};

export { QueryPrac };
