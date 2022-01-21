import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GLobalStyle';
import { ContactForm, Filter, ContactList, CssApp } from 'сomponents';
import * as LocalApi from 'utilities';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = LocalApi.load('contacts');
    contacts && this.setState({ contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.contacts);
    // console.log(this.state.contacts);
    if (prevState.contacts !== this.state.contacts) {
      // console.log('пишем в локал');
      LocalApi.save('contacts', this.state.contacts);
    }
  }

  formSubmitHandler = data => {
    return new Promise((resolve, reject) => {
      if (
        this.state.contacts.some(({ name }) =>
          name.toLowerCase().includes(data.name.toLowerCase())
        )
      ) {
        alert(`${data.name} is already in contacts.`);
        reject('Error! Error passed to reject function');
      }

      this.setState(({ contacts }) => {
        return {
          contacts: [
            ...contacts,
            {
              id: nanoid(),
              name: data.name,
              number: data.number,
            },
          ],
        };
      });
      resolve('Ok');
    });
  };

  deleteContact = (e, delId) => {
    // console.log(delId);

    // setTimeout(() => {
    //   console.log(e.target);
    // }, 1000);

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts.filter(({ id }) => id !== delId)],
      };
    });
  };

  handleChangeFiltrContacts = evt => {
    this.setState({ filter: evt.currentTarget.value }, () => {
      // console.log(this.state.filter);
    });
  };

  getFilteringContacts = () => {
    const normolizeFiltr = this.state.filter.toLowerCase();
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(normolizeFiltr)
    );
  };

  render() {
    return (
      <CssApp.Contener>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          handleChangeFiltrContacts={this.handleChangeFiltrContacts}
        />
        <ContactList
          contact={this.getFilteringContacts()}
          onDelete={this.deleteContact}
        />
      </CssApp.Contener>
    );
  }
}
