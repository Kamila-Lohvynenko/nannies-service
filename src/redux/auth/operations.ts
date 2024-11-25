// authOperations.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from '../../config/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { INanny } from '../../types/NannyInterface';

interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  favorites: INanny[];
}

// Register user with email and password

export const registerUser = createAsyncThunk(
  'auth/register',
  async (
    {
      email,
      password,
      name,
    }: { email: string; password: string; name: string },
    thunkAPI,
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: name });

      // Create a document in Firestore for the user
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        name,
        favorites: [],
      });

      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Login user with email and password
export const loginUser = createAsyncThunk(
  'auth/login',
  async (
    { email, password }: { email: string; password: string },
    thunkAPI,
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      console.log('user login', user);

      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Logout user
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await signOut(auth);
      console.log('User logged out successfully');
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// fetch current user

export const fetchCurrentUser = createAsyncThunk<AuthUser, void>(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    try {
      return new Promise<AuthUser>((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
          auth,
          async (user) => {
            unsubscribe(); // Stop listening once we get the user

            if (user) {
              try {
                // Fetch user data from Firestore
                const userDocRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userDocRef);

                const favorites = userDoc.exists()
                  ? userDoc.data()?.favorites || []
                  : [];

                resolve({
                  uid: user.uid,
                  email: user.email,
                  displayName: user.displayName,
                  favorites,
                });
              } catch (firestoreError: any) {
                reject(`Failed to fetch user data: ${firestoreError.message}`);
              }
            } else {
              reject('No user is logged in');
            }
          },
          reject,
        );
      });
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// Add a nanny to favorites
export const addFavoriteNanny = createAsyncThunk(
  'auth/addFavoriteNanny',
  async ({ userId, nanny }: { userId: string; nanny: INanny }, thunkAPI) => {
    try {
      const userDocRef = doc(db, 'users', userId);

      await updateDoc(userDocRef, {
        favorites: arrayUnion(nanny),
      });

      return nanny;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// remove nanny from favorites

export const removeFavoriteNanny = createAsyncThunk(
  'auth/removeFavoriteNanny',
  async ({ userId, nanny }: { userId: string; nanny: INanny }, thunkAPI) => {
    try {
      const userDocRef = doc(db, 'users', userId);

      await updateDoc(userDocRef, {
        favorites: arrayRemove(nanny),
      });

      return nanny;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
