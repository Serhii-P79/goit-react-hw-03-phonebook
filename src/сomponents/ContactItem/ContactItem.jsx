import React from 'react';
import PropTypes from 'prop-types';
import { CssContactList } from 'сomponents';

export function ContactItem({ name, number, children }) {
  // console.log(children);
  return (
    <CssContactList.Contact>
      <CssContactList.Name>{name}:</CssContactList.Name> tel:
      <CssContactList.Number>{number}</CssContactList.Number>
      {children}
    </CssContactList.Contact>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.object,
};
