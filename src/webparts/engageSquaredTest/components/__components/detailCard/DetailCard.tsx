import { Modal } from "@fluentui/react";
import * as React from "react";
import styles from "./DetailCard.module.scss";
import { Text } from "@fluentui/react/lib/Text";
import Map from "../map/Map";
import StatusText from "../statusText/StatusText";
import { PrimaryButton } from "@fluentui/react/lib/Button";

interface IDetailCard {
  isOpen: boolean;
  lat: number;
  lng: number;
  displayName: string;
  status: string;
  desc: string;
  onClose(): void;
}

export default function DetailCard({
  isOpen,
  onClose,
  lat,
  lng,
  status,
  displayName,
  desc,
}: IDetailCard) {
  const handleOpenMap = () => {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`);
  };

  return (
    <Modal isOpen={isOpen} onDismiss={onClose}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <Map id={`detail-map`} lat={lat} lng={lng} />
        </div>
        <div className={styles.RightContent}>
          <Text variant={"large"} style={{ fontWeight: "bold" }}>
            {displayName}
          </Text>
          <StatusText status={status} />
          <div style={{ maxWidth: 300 }}>
            <Text variant="medium">{desc}</Text>
          </div>
          <div>
            <PrimaryButton onClick={handleOpenMap}>Check on Map</PrimaryButton>
          </div>
        </div>
      </div>
    </Modal>
  );
}
