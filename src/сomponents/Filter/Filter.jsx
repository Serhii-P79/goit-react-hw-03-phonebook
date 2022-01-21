import React from 'react';
import PropTypes from 'prop-types';
import { CssForm } from 'сomponents';

export function Filter({ value, handleChangeFiltrContacts }) {
  return (
    <div>
      <CssForm.Label>
        <span>Find contacts by name</span>
        <input
          type="text"
          value={value}
          onChange={handleChangeFiltrContacts}
        ></input>
      </CssForm.Label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeFiltrContacts: PropTypes.func.isRequired,
};
