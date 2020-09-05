import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

export default function List({ items, id, render }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item[id]}>{render(item)}</li>
      ))}
    </ul>
  );
}

List.propTypes = {
  render: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
