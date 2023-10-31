import { useEffect, useState } from "react";

const useFilter = <T>({
  collections,
  keywords,
  key,
}: {
  key: string;
  keywords: string;
  collections?: any[];
}) => {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    const results = collections?.filter(
      (item) => item[key].toLowerCase().indexOf(keywords.toLowerCase()) !== -1
    );
    setData(results || []);
  }, [collections, keywords]);

  return {
    data,
  };
};

export default useFilter;
