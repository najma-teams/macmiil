import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Url, errorMsg } from '../../interfaces';


interface users{
    id: number,
    FullName: string,
    Email: string,
    Password: number,
    role: string
    createdAt: Date
}

const initialState = {
    data: {}as users,
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMsg: '',
  };



  // async thunk function

export const getonemaneger = createAsyncThunk(
    'get/post',
    async (data:users, { rejectWithValue }) => {
      try {
        const res = await axios.get(
          `${Url}/maneger/getone/${data.id}`
        );
  
        return res.data;
      } catch (error) {
        if (error instanceof AxiosError)
        return rejectWithValue(error.response?.data.message || errorMsg)
    return rejectWithValue(errorMsg)
    }
    }
  );






  export const GetOneUserSlice = createSlice({
    name:"getone user",
    reducers:{},
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getonemaneger.pending,() =>({
            ...initialState,
            isLoading :true
        }));
        builder.addCase(getonemaneger.fulfilled,(_,action) =>({
            ...initialState,
            isSuccess :true,
            data:action.payload
        }));
        builder.addCase(getonemaneger.rejected,(_,action) =>({
            ...initialState,
            isError :true,
            errorMsg:String(action.payload)
        }));
    }
  })