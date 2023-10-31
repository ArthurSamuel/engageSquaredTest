import * as React from "react";
import Pagination from "../../../../../components/pagination/Pagination";
import { useGetAllRoadDisruptions } from "../../services/resolver";
import { Spinner, SpinnerSize } from "@fluentui/react";
import useFilter from "../../hooks/useFilter";
import useGetDataByPage from "../../hooks/useGetDataByPage";
import Card from "../card/Card";
import { IRoad } from "../../services/network.type";

interface IRoadProps {
  search: string;
}

const PER_PAGE = 9;

export default function Road({ search }: IRoadProps) {
  const [page, setPage] = React.useState(1);
  const { data: dataRaw, isLoading } = useGetAllRoadDisruptions();
  const dataRawRoad = dataRaw?.data;
  const { data: dataRoadFiltered } = useFilter<IRoad>({
    collections: dataRawRoad,
    keywords: search,
    key: "location",
  });
  const { data: dataRoad } = useGetDataByPage<IRoad>({
    perPage: PER_PAGE,
    collections: dataRoadFiltered,
    page,
  });

  if (isLoading) {
    return <Spinner size={SpinnerSize.large} />;
  }

  if (!dataRoad) {
    return <div>NOT FOUND</div>;
  }

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10,
        }}
      >
        {dataRoad?.map((item, index) => {
          return (
            <Card
              key={index}
              id={item.id}
              lat={item.geography.coordinates[1]}
              lng={item.geography.coordinates[0]}
              displayName={item.location}
              statusSeverity={item.severity}
              statusSeverityDescription={item.currentUpdate}
            />
          );
        })}
      </div>

      <Pagination
        perPage={PER_PAGE}
        numberOfCollection={dataRoadFiltered.length || 0}
        onChange={(e) => setPage(e)}
      />
    </div>
  );
}
