import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { INanny } from '../../types/NannyInterface';

interface RejectedValue {
  status: number;
  message: string;
}

const nanniesCollectionRef = collection(db, 'nannies');

export const fetchNannies = createAsyncThunk<
  INanny[],
  void,
  { rejectValue: RejectedValue }
>('nannies/fetchAll', async (_, thunkAPI) => {
  try {
    const data = await getDocs(nanniesCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData as INanny[];
  } catch (error: any) {
    const { status, message } = error;

    return thunkAPI.rejectWithValue({ status, message });
  }
});
