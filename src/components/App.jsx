import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid';

import { ContactForm } from "./ContactForm/ContactForm";
// import { Contacts } from "./ContactList/ContactList";


export const App = () => {
const [contacts, setContacts] = useState([]);

 const formSubmitHandler = data => {
    console.log(data);
    const normalizedName = data.name.toLowerCase();
    contacts.find(contact => contact.name.toLowerCase() === normalizedName) ? 
      alert(`${data.name} is already in contacts `) :
      setContacts(contacts => [...contacts, {id: nanoid(), name: data.name, number: data.number}]
  
  )
}


  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
<ContactForm onSubmit={formSubmitHandler}/>
{/* <Contacts/> */}
    </div>
  );
};
