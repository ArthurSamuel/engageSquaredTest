import { useEffect, useState } from "react";

const useGetDataByPage = <T>({
  collections,
  page,
}: {
  page: number;
  collections: any[];
}) => {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const max = 10 * page;
    const min = Math.abs(max - 10);
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
