import React, { Component } from "react";
import { Box } from "./Box";

import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter"

export class App extends Component {

  state = {
    contacts: [],
    filter: "",
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id!==contactId),
    }))
}

    formSubmitHandler = data => {  
    this.state.contacts.map(contact=> contact.name.toLowerCase()).includes(data.name.toLowerCase())? (alert(`${data.name} is already in contacts`)) : (this.setState((prevState) => { return { contacts: [...prevState.contacts, ...[data]] } }))
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }

  getVisibleContacts = () => {

    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
   
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),);
  };


  render() {
    const contacts = this.state.contacts;
    const filter = this.state.filter;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Box>
        <Form onSubmitData={this.formSubmitHandler} />
        {contacts.length > 0 && <div>
          
          <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
          <Filter value={filter} onChange={ this.changeFilter} />
        </div>}
      </Box>
    )
  } 
};
