import * as React from "react";
import { useGetAllCorridors } from "../../services/resolver";
import { Spinner, SpinnerSize } from "@fluentui/react";
import Card from "../card/Card";
import Pagination from "../../../../../components/pagination/Pagination";
import useFilter from "../../hooks/useFilter";
import { ICorridors } from "../../services/network.type";
import useGetDataByPage from "../../hooks/useGetDataByPage";

interface ICorridorsProps {
  search: string;
}

const PER_PAGE = 10;

export default function Corridors({ search }: ICorridorsProps) {
  const [page, setPage] = React.useState(1);
  const { data: dataRaw, isLoading } = useGetAllCorridors();
  const dataRawCorridors = dataRaw?.data;
  const { data: dataCorridorsFiltered } = useFilter<ICorridors>({
    collections: dataRawCorridors,
    keywords: search,
    key: "displayName",
  });
  const { data: dataCorridors } = useGetDataByPage<ICorridors>({
    collections: dataCorridorsFiltered,
    page,
  });
  const toLatLng = (bounds: string) => {
    const latLng = JSON.parse(bounds)[0];
    return {
      lat: latLng[1],
      lng: latLng[0],
    };
  };

  if (isLoading) {
    return <Spinner size={SpinnerSize.large} />;
  }

  if (dataCorridors.length <= 0) {
    return <div>NOT FOUND</div>;
  }

  return (
    <div>
      {dataCorridors?.map((item, index) => {
        const latLng = toLatLng(item.bounds);
        return (
          <Card
            key={index}
            id={item.id}
            lat={latLng.lat}
            lng={latLng.lng}
            displayName={item.displayName}
            statusSeverity={item.statusSeverity}
            statusSeverityDescription={item.statusSeverityDescription}
          />
        );
      })}
      <Pagination
        perPage={PER_PAGE}
        numberOfCollection={dataCorridorsFiltered?.length || 0}
        onChange={(e) => setPage(e)}
      />
    </div>
  );
}
