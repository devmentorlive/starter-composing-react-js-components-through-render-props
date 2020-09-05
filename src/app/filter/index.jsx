import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "../text-field";

export default function Filter({ render, placeholder }) {
  const [query, setQuery] = useState("");

  return (
    <div>
      <TextField
        value={query}
        onChange={(val) => setQuery(val)}
        placeholder={placeholder}
      />
      {render(query)}
    </div>
  );
}

Filter.propTypes = {
  fn: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};
