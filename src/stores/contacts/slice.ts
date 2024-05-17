import {createSlice} from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contactList: [],
    contactDetail: {},
  },
  reducers: {
    setContactList: (state, action) => {
      state.contactList = action.payload;
    },
    setContactDetail: (state, action) => {
      state.contactDetail = action.payload;
    },
  },
});

export const {setContactDetail, setContactList} = contactSlice.actions;
export default contactSlice.reducer;
