import React from "react";
import { useState, useEffect, useRef } from "react";
import { nanoid } from 'nanoid';
import styled from "styled-components";

import { ContactForm } from "./ContactForm/ContactForm";
import { Contacts } from "./ContactList/ContactList";
import { ContactSearch } from "./ContactSearch/ContactSearch";

const Container = styled.div`
  width: 500px;
  text-align: left;
  margin: auto;
  padding: 24px;
  `

const Tittle = styled.h1`
font-size: 32px;
font-weight: 700;
`



export default function App() {
const [contacts, setContacts] = useState([]);
const [filter, setFilter] = useState('');
const isFirstRender = useRef(true);

useEffect(() => {
  const contacts = JSON.parse(window.localStorage.getItem('contacts'));
  if(isFirstRender.current && contacts) {
    setContacts(contacts);
    isFirstRender.current = false;
  }
}, []);


useEffect(() => {
  window.localStorage.setItem("contacts", JSON.stringify(contacts))
}, [contacts]);

const formSubmitHandler = data => {
   
    const normalizedName = data.name.toLowerCase();
    contacts.find(contact => contact.name.toLowerCase() === normalizedName) ? 
      alert(`${data.name} is already in contacts `) :
      setContacts(contacts => [...contacts, {id: nanoid(), name: data.name, number: data.number}]
  
  )
}
const onInputChange = (event) =>{
  setFilter(event.target.value)
}

const deleteHandler = (contactID) => {
  setContacts(contacts => contacts.filter(contact => contact.id !== contactID)
  )
}

  return (
   
      <Container>
        <Tittle>Phonebook</Tittle>
         <ContactForm onSubmit={formSubmitHandler}/>
          <ContactSearch onInputHandler={onInputChange}/>
           <Tittle>Contacts</Tittle>
            <Contacts contactsArr={contacts} filter={filter} deleteHandler={deleteHandler}  />
      </Container>

    
  );
};
