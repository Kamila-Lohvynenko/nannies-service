import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../config/firebase';
import {
  getDocs,
  query,
  collection,
  orderBy,
  startAfter,
  limit,
  where,
  doc,
  getDoc,
} from 'firebase/firestore';
import { INanny } from '../../types/NannyInterface';
import { FetchNanniesParams } from '../../types/FetchNanniesParamsInterface';

interface RejectedValue {
  status: number;
  message: string;
}

const nanniesCollectionRef = collection(db, 'nannies');

export const fetchNannies = createAsyncThunk<
  { data: INanny[]; lastDocId: string | null }, // Return type will store just the last document ID
  FetchNanniesParams, // Parameters for the thunk
  { rejectValue: RejectedValue } // Error handling type
>('nannies/fetchAll', async (params, thunkAPI) => {
  const {
    lastDocId,
    limit: pageSize = 3,
    sortBy = 'name',
    direction = 'asc',
    priceGreaterThan,
    priceLessThan,
  } = params;

  try {
    // Build Firestore query
    let nannyQuery = query(
      nanniesCollectionRef,
      orderBy(sortBy, direction),
      limit(pageSize),
    );

    // Apply price filtering if provided
    if (priceGreaterThan !== undefined) {
      nannyQuery = query(
        nannyQuery,
        where('price_per_hour', '>', priceGreaterThan),
      );
    }
    if (priceLessThan !== undefined) {
      nannyQuery = query(
        nannyQuery,
        where('price_per_hour', '<', priceLessThan),
      );
    }

    // Apply pagination if `lastDocId` is provided
    if (lastDocId) {
      const lastDocRef = doc(db, 'nannies', lastDocId); // Get document reference
      const lastDocSnapshot = await getDoc(lastDocRef); // Fetch the snapshot
      if (lastDocSnapshot.exists()) {
        nannyQuery = query(nannyQuery, startAfter(lastDocSnapshot)); // Use the snapshot
      }
    }

    const snapshot = await getDocs(nannyQuery);

    // Transform data and get the last document
    const nannies = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })) as INanny[];

    const newLastDocId = snapshot.docs[snapshot.docs.length - 1]?.id || null;

    return { data: nannies, lastDocId: newLastDocId };
  } catch (error: any) {
    console.log(error);

    const { status, message } = error;
    return thunkAPI.rejectWithValue({ status, message });
  }
});
