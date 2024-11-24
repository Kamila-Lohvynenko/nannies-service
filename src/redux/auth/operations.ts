// authOperations.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, db } from '../../config/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
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
      console.log(error);

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
      console.error('Error logging out:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// fetch current user

export const fetchCurrentUser = createAsyncThunk<AuthUser, void>(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    try {
      return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
          auth,
          (user) => {
            unsubscribe(); // Stop listening once we get the user
            if (user) {
              resolve({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
              });
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
