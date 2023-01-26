import {useState} from 'react';

import { nanoid } from 'nanoid';
import { useDispatch,useSelector} from 'react-redux';
import { addContact } from 'Redux/contactSlice';
import css from './ContactForm.module.css';
const Form=() =>{
  const [number,setNumber]=useState('')
  const [name,setName]=useState('')
 const dispatch = useDispatch()
  const arrayContact = useSelector(state => state.contacts.items)
    const handleChange = event => {
      
      
      const { name, value } = event.target;
      
      switch (name) {
        case 'name':
          setName(value);
          break;
  
        case 'number':
          setNumber(value);
          break;
  
        default:
          return;
      }
    };
  
  const handleSubmit = e => {
    e.preventDefault();
    const uId = nanoid(7);
    const eventNameValue = e.target[0].value;
    const filterName = arrayContact.find(
      e => e.name === eventNameValue
    );

    
     filterName? alert(`${eventNameValue} is already in Contacts`)
      : dispatch(addContact({ uId, name,number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('')
  };
  
    return (<div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        
          <h3>Name</h3>
          <label>
          <input
            
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
           </label>
          <h3>Number</h3>
           <label>
          <input
            
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            />
            </label>

          <button type="submit" className={css.button}>
            Add contact
          </button>
        
      </form></div>
    );
  }


export default Form;