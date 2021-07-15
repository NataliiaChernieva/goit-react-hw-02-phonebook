import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Container,
  Title,
  SectionTitle,
} from './components/Container/Container.styled.jsx';
import Form from './components/Form/Form.jsx';
import ContactList from './components/ContactList/ContactList.jsx';

export default class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandle = ({ name, number }) => {
    const contact = { name, number, id: uuidv4() };

    this.state.contacts.find(savedContact => savedContact.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
    console.log(this.state);
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <Form handleSubmit={this.formSubmitHandle} />
        <SectionTitle>Contacts</SectionTitle>
        <ContactList
          contacts={this.state.contacts}
          handleDeleteContact={this.handleDelete}
        />
      </Container>
    );
  }
}
