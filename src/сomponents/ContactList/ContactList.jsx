import React from 'react';
import PropTypes from 'prop-types';
import { CssForm, CssContactList, ContactItem } from 'сomponents';

export function ContactList({ contact, onDelete }) {
  return (
    <CssContactList.ContactList>
      {contact.map(({ id, name, number }) => {
        return (
          <ContactItem key={id} name={name} number={number}>
            <CssForm.Button
              type="button"
              name="del"
              onClick={e => onDelete(e, id)}
            >
              Delete
            </CssForm.Button>
          </ContactItem>
          // <CssContactList.Contact key={id}>
          //   <CssContactList.Name>{name}:</CssContactList.Name> tel:{' '}
          //   <CssContactList.Number>{number}</CssContactList.Number>
          //   <CssForm.Button
          //     type="button"
          //     name="del"
          //     onClick={e => onDelete(e, id)}
          //   >
          //     Delete
          //   </CssForm.Button>
          // </CssContactList.Contact>
        );
      })}
    </CssContactList.ContactList>
  );
}

ContactList.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};
