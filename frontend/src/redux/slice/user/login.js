import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { API } from '../../../utils/axios';
import { Url, errorMsg } from '../../interfaces';


const userInfo = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : {};

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  errorMsg: false,
  data: userInfo,
};

// sign in

export const signInFn = createAsyncThunk(
  'users/signin',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${Url}/user/login`, data);

      if (res.data) {
        const { user } = res.data;
        localStorage.setItem('user', JSON.stringify(user));
      }

      return res.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || 'Something went wrong.'
      );
    }
  }
);

// slice

export const signInSlice = createSlice({
  name: 'Sign in slice',
  reducers: {
    logOut: (state) => {
      state.data = {};
    },
  },
  initialState,
  extraReducers(builder) {
    // pending

    builder.addCase(signInFn.pending, () => ({
      ...initialState,
      isLoading: true,
    }));

    // fulfilled

    builder.addCase(signInFn.fulfilled, (_, action) => ({
      ...initialState,
      isSuccess: true,
      data: action.payload,
    }));

    // rejected

    builder.addCase(signInFn.rejected, (_, action) => ({
      ...initialState,
      isError: true,
      errorMsg: action.payload,
    }));
  },
});

export const { logOut } = signInSlice.actions;