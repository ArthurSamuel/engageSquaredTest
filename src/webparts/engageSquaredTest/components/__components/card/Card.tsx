import * as React from "react";
import {
  DocumentCard,
  DocumentCardDetails,
  DocumentCardType,
} from "@fluentui/react/lib/DocumentCard";
import { Text } from "@fluentui/react/lib/Text";
import Map from "../map/Map";
import styles from "./Card.module.scss";
import DetailCard from "../detailCard/DetailCard";
import StatusText from "../statusText/StatusText";

interface ICard {
  id: string;
  displayName: string;
  statusSeverity: string;
  statusSeverityDescription: string;
  lat: number;
  lng: number;
}

export default function Card({
  id,
  displayName,
  statusSeverity,
  statusSeverityDescription,
  lat,
  lng,
}: ICard) {
  const [showDetail, setShowDetail] = React.useState(false);

  const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  const handleOnClick = () => {
    setShowDetail(true);
  };

  return (
    <DocumentCard type={DocumentCardType.compact} onClick={handleOnClick}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <Map id={id} lat={lat} lng={lng} />
        </div>
        <div className={styles.rightContent}>
          <DocumentCardDetails>
            <Text variant={"medium"} style={{ fontWeight: "bold" }}>
              {truncateString(displayName, 25)}
            </Text>
            <div className={styles.textContainer}>
              <StatusText status={statusSeverity} />
              <Text variant="medium">
                {truncateString(statusSeverityDescription, 35)}
              </Text>
            </div>
          </DocumentCardDetails>
        </div>
      </div>
      <DetailCard
        isOpen={showDetail}
        desc={statusSeverityDescription}
        displayName={displayName}
        lat={lat}
        lng={lng}
        status={statusSeverity}
        onClose={() => setShowDetail(false)}
      />
    </DocumentCard>
  );
}
