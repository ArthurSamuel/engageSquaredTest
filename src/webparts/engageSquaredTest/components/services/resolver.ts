import { HttpBaseResponse } from "../../../../http/Http";
import useHttp from "../../../../http/hooks/useHttp";
import { getAllCorridors, getAllRoadDisruptions } from "./services";
import { ICorridors, IRoad } from "./network.type";

export const useGetAllRoadDisruptions = () => {
  return useHttp<HttpBaseResponse<IRoad[]>>({
    fn: async () => await getAllRoadDisruptions(),
  });
};

export const useGetAllCorridors = () => {
  return useHttp<HttpBaseResponse<ICorridors[]>>({
    fn: async () => await getAllCorridors(),
  });
};
