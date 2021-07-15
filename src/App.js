import { Component } from 'react';
import {
  Container,
  Title,
  SectionTitle,
} from './components/Container/Container.styled.jsx';
import Form from './components/Form/Form.jsx';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
  };

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <Form
          onSubmit={this.handleSubmit}
          text="Add contact"
          onChange={this.handleChange}
        />
        <SectionTitle>Contacts</SectionTitle>
      </Container>
    );
  }
}
