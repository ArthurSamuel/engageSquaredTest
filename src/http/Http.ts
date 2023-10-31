import axios from "axios";

interface IRequest {
  url: string;
  params?: any;
}

export interface HttpBaseResponse<T> {
  data: T;
  statusCode: number;
  message: string;
  error_message: string;
}

const APP_ID = "21a374c4fc1d41d98754cb485a20f920";
const APP_KEY = "4c808b3961474fbdb122a607b521d138";

export const apiInstance = axios.create({
  timeout: 30000,
  baseURL: "https://api.tfl.gov.uk",
});

const get = <T = any>({ url, params }: IRequest) => {
  let urlTarget = url;
  // Build url to params
  if (params) {
    urlTarget += "?";
    Object.keys(params).forEach((item) => {
      if (params[item]) {
        urlTarget += `${item}=${params[item]}&`;
      }
    });
    urlTarget += `app_id=${APP_ID}&app_key=${APP_KEY}`;
    // remove last &
    //urlTarget = urlTarget.substring(0, urlTarget.length - 1);
  }
  return apiInstance.get<T>(urlTarget);
};

const Http = {
  get,
};

export default Http;
