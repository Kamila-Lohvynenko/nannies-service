import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';

const nanniesCollectionRef = collection(db, 'nannies');

export const fetchNannies = createAsyncThunk(
  'nannies/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await getDocs(nanniesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return filteredData;
    } catch (error: any) {
      const { status, message } = error;

      return thunkAPI.rejectWithValue({ status, message });
    }
  },
);
