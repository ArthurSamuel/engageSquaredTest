import * as React from "react";
import { Text } from "@fluentui/react/lib/Text";

export default function StatusText({ status }: { status: string }) {
  const setStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "serious":
        return "red";
      case "good":
        return "green";
      case "moderate":
        return "orange";
      case "minimal":
        return "green";
    }
  };

  return (
    <Text
      variant="mediumPlus"
      style={{
        fontWeight: "bold",
        color: setStatusColor(status),
      }}
    >
      {status}
    </Text>
  );
}
