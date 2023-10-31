import { useEffect, useState } from "react";

const useGetDataByPage = <T>({
  collections,
  page,
  perPage,
}: {
  page: number;
  collections: any[];
  perPage: number;
}) => {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const max = perPage * page;
    const min = Math.abs(max - perPage);
    const results = collections?.filter(
      (_, index) => index >= min && index < max
    );
    setData(results);
  }, [collections, page]);

  return {
    data,
  };
};

export default useGetDataByPage;
