import Http, { HttpBaseResponse } from "../../../../http/Http";
import { ICorridors, IRoad } from "./network.type";

export const getAllRoadDisruptions = async () => {
  const results = await Http.get<HttpBaseResponse<IRoad[]>>({
    url: "/Road/All/Disruption?stripContent=false",
  });
  return results;
};

export const getAllCorridors = async () => {
  const results = await Http.get<HttpBaseResponse<ICorridors[]>>({
    url: "/Road",
  });
  return results;
};
