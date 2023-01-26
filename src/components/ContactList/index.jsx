import React from 'react';
import Contact from '../Contacts/index';
import css from './ContactList.module.css';

import { useSelector } from 'react-redux';
const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items)
  const filter =useSelector(state=>state.contacts.filter)

    const getVisibleEl = () => {
    
        const normalizedFilter = filter.toLowerCase();
    
        return contacts.filter(e =>
          e.name.toLowerCase().includes(normalizedFilter)
        );
      };
      const visibleEl = getVisibleEl();


  return (
    <div className={css.container}>
    <ul className={css.list}>
      {visibleEl.map(({ uId, name, number }) => {
       
       return (
          
          <Contact
            key={uId}
            name={name}
            number={number}
            id={uId}
            
          />
        );
      })}
      </ul>
      </div>
  );
};


export default ContactList;