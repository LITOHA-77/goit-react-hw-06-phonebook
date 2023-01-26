import {createSlice} from '@reduxjs/toolkit'

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: (state, { payload:item }) => {
      state.items=[...state.items,item]
    },

    removeContact: (state, { payload}) => {
      state.items = state.items.filter(({ uId }) => uId !== payload);
    },

    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});



export const { addContact, removeContact, setFilter } = contactsSlice.actions;