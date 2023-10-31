import * as React from "react";
import { IDropdownOption } from "@fluentui/react";
import Filter, { optionsType } from "./__components/filter/Filter";
import Road from "./__components/road/Road";
import Corridors from "./__components/corridors/Corridors";
import styles from "./EngageSquaredTest.module.scss";

export default function EngageSquaredTest() {
  const [type, setType] = React.useState<IDropdownOption>(optionsType[0]);
  const [search, setSearch] = React.useState("");

  return (
    <div className={styles.container}>
      <div style={{ marginBottom: 20 }}>
        <Filter
          onChangeType={(e) => setType(e)}
          onSearch={(e) => setSearch(e)}
        />
      </div>
      <div>
        {type.key === "road" ? (
          <Road search={search} />
        ) : (
          <Corridors search={search} />
        )}
      </div>
    </div>
  );
}
