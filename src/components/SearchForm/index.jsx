import React from 'react';
import { setFilter } from 'Redux/contactSlice';
import { useSelector, useDispatch } from 'react-redux';
import css from './SearchForm.module.css';

const SearchForm = () => {
    const dispatch = useDispatch()
    const values = useSelector(state=>state.contacts.filter)
      
  return (
    <div className={css.container}>
      <h3>Finde contacts by name</h3>
  <label>
    <input type="text" value={values} onChange={e=> dispatch(setFilter(e.target.value))} />
  </label>
  </div>)
};


export default SearchForm;