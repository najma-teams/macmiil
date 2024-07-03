import { Url } from '@/redux/interfaces';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMsg: '',
  data: {},
};

// register user fn
export const UpdateUserFn = createAsyncThunk(
  'user/update',
  async (data, { rejectWithValue,getState }) => {
    try {
      const {login}=getState()
   
      const res = await axios.put(
        `${Url}/user/update`,
        data,
        {headers:{
          Authorization:`Bearer ${login.data?.token}`
        }}
      );

      if (res.data) {
        return res.data;
      }
    } catch (error) {
      console.log(error)
      return rejectWithValue(
        error.response?.data?.message || 'Something went wrongs.'
      );
    }
  }
);

export const UpdateUserSlice = createSlice({
  name: 'update user slice',
  reducers: {  },
  extraReducers(builder) {
    builder.addCase(UpdateUserFn.pending, () => ({
      ...initialState,
      isLoading: true,
    }));

    // fulfilled
    builder.addCase(UpdateUserFn.fulfilled, (_, action) => ({
      ...initialState,
      isSuccess: true,
      data: action.payload,
    }));

    // rejected

    builder.addCase(UpdateUserFn.rejected, (_, action) => ({
      ...initialState,
      isError: true,
      errorMsg: action.payload,
    }));
  },
  initialState,
});

