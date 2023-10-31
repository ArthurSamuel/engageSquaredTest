import * as React from "react";
import { Text } from "@fluentui/react/lib/Text";

interface IPagination {
  numberOfCollection: number;
  perPage: number;
  onChange(page: number): void;
}

export default function Pagination({
  numberOfCollection,
  onChange,
  perPage,
}: IPagination) {
  const [active, setActive] = React.useState(0);
  const callbackNumberOfUnit = React.useCallback(() => {
    return Math.round(numberOfCollection / perPage);
  }, [numberOfCollection]);

  const handleOnClick = (page: number) => {
    setActive(page);
    onChange(page + 1);
  };

  const renderPagination = () => {
    const items = [];

    for (let i = 0; i < callbackNumberOfUnit(); i++) {
      items.push(
        <Text
          onClick={() => handleOnClick(i)}
          style={{ cursor: "pointer", color: i === active ? "blue" : "black" }}
          variant="xLarge"
        >
          {i + 1}
        </Text>
      );
    }

    return items;
  };

  return (
    <div style={{ width: "100%", marginTop: 15 }}>
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        {renderPagination()}
      </div>
    </div>
  );
}
