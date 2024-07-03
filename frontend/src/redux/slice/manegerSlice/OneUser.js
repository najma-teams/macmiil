import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Url, errorMsg } from '../../interfaces';




const initialState = {
    data: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMsg: '',
  };



  // async thunk function

export const getoneuserfn = createAsyncThunk(
    'get/user',
    async (id, { rejectWithValue }) => {
      try {
        const res = await axios.get(
          `${Url}/user/getuser/${id}`
        );
  
        return res.data;
      } catch (error) {
        console.log(error)
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
        builder.addCase(getoneuserfn.pending,() =>({
            ...initialState,
            isLoading :true
        }));
        builder.addCase(getoneuserfn.fulfilled,(_,action) =>({
            ...initialState,
            isSuccess :true,
            data:action.payload
        }));
        builder.addCase(getoneuserfn.rejected,(_,action) =>({
            ...initialState,
            isError :true,
            errorMsg:String(action.payload)
        }));
    }
  })