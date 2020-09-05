import React from "react";
import ListItem from "./list-item";
import "./styles.css";

import Filter from "./filter";
import List from "./list";

import screencasts from "../data/screencasts.json";

export default function App() {
  function filterScreencasts(query, screencasts) {
    return screencasts.filter(
      (screencast) =>
        screencast.title.toLowerCase().indexOf(query.toLowerCase()) >
        -1
    );
  }
  return (
    <div>
      <Filter
        placeholder='Type to filter the screencasts'
        render={(query) => (
          <List
            items={filterScreencasts(query, screencasts)}
            render={(screencast) => (
              <ListItem screencast={screencast} />
            )}
          />
        )}
      />
    </div>
  );
}
