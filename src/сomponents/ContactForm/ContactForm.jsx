import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CssForm } from './ContactForm.styled';

export class ContactForm extends Component {
  static defaultProps = {
    initName: '',
    initNumber: '',
  };

  state = {
    name: this.props.initName,
    number: this.props.initNumber,
  };

  handleChange = e => {
    const name = e.currentTarget.name;
    this.setState({ [name]: e.currentTarget.value });
  };

  addContact = e => {
    e.preventDefault();
    this.props
      .onSubmit(this.state)
      .then(() => {
        //  console.log(rrr);
        this.reset();
      })
      .catch(error => {
        console.log(error);
      });
  };

  reset = () => {
    this.setState({
      name: this.props.initName,
      number: this.props.initNumber,
    });
  };

  render() {
    const { number, name } = this.state;
    return (
      <CssForm.Form onSubmit={this.addContact}>
        <CssForm.Label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={this.handleChange}
            required
          />
        </CssForm.Label>
        <CssForm.Label>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={this.handleChange}
            required
          />
        </CssForm.Label>
        <CssForm.Button type="submit" name="add">
          Add contact
        </CssForm.Button>
      </CssForm.Form>
    );
  }
}

ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };
