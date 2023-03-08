import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';


const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 500px;
  text-align: center;
  /* margin: auto; */
  padding: 24px;
   border: 1px solid black; 
  

button {
 width: 120px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  border-radius: 4px;
  border-color: #716f6f;
}
 

label {
    width: 100%;
text-align: left;
   margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 20px;}


input {
font-size: 14px;
  margin-bottom: 15px;} `


export const ContactForm = ({onSubmit}) => {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
   
    
const handleChange = event => {
  const { name, value } = event.target;
switch(name) {
   
    case 'name': setName(value);
    break;
    case 'number': setNumber(value);
    break;
    default: return;
}

    };
  const handleSubmit = evt => {
    
    evt.preventDefault();
  onSubmit({ name, number});
  setName('');
  setNumber('');
    
  };
  
 

    const ContactInputId = nanoid();
    const NumberInputId = nanoid();
    
    
        return (

            
            <FormWrapper onSubmit={handleSubmit}>
  <label htmlFor={ContactInputId}>Name</label>
      <input
      id={ContactInputId}      
      type="text"
      name="name"
      value={name}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={handleChange}
          />
  <label htmlFor={ NumberInputId }>Number</label>        
          <input
            id={NumberInputId}
  type="tel"
            name="number"
            value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
/>
  <button type='submit'>Add contact</button>
          
        </FormWrapper>
        )
    }


