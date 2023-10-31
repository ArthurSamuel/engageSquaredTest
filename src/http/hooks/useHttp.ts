import { AxiosResponse } from "axios";
import * as React from "react";

interface IUseHttp<T> {
  fn(): any;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useHttp = <T>({ fn }: IUseHttp<AxiosResponse<T>>) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<T>();

  React.useEffect(() => {
    const fetchData = async (): Promise<any> => {
      setIsLoading(true);
      const results = await fn();
      setData(results);
      setIsLoading(false);
    };

    fetchData().catch((err) => console.log(err));
  }, []);

  return {
    isLoading,
    data,
  };
};

export default useHttp;
