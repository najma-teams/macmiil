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

export const getoneproductfn = createAsyncThunk(
    'get/post',
    async (id, { rejectWithValue }) => {
      try {
        const res = await axios.get(
          `${Url}/pro/one/${id}`
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






  export const GetOneproductSlice = createSlice({
    name:"getone user",
    reducers:{},
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getoneproductfn.pending,() =>({
            ...initialState,
            isLoading :true
        }));
        builder.addCase(getoneproductfn.fulfilled,(_,action) =>({
            ...initialState,
            isSuccess :true,
            data:action.payload
        }));
        builder.addCase(getoneproductfn.rejected,(_,action) =>({
            ...initialState,
            isError :true,
            errorMsg:String(action.payload)
        }));
    }
  })