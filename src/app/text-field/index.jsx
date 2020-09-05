import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function TextField({
  placeholder = "",
  type = "text",
  value = "",
  errors = [],
  name,
  onChange,
}) {
  const [_value, _setValue] = useState(value);

  useEffect(() => {
    _setValue(value);
  }, [value]);

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className='__dml_text-field'
        value={_value}
        onChange={(e) => {
          _setValue(e.target.value);
          if (onChange && typeof onChange === "function")
            onChange(e.target.value, e);
        }}
      />
      {errors.length > 0 ? (
        <div className='error'>{errors[0]}</div>
      ) : null}
    </div>
  );
}

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf("text", "password", "email", "number"),
  value: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  onChange: PropTypes.func,
};
