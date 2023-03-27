import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6421862f86992901b2b5a3ee.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contacts');
  console.log(response.data);
  return response.data;
});

//   try {
//     const response = await axios.get('/contacts');
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.log(error.message);
//   }
