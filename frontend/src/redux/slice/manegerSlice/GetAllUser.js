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

  // async Thunk


  export const getallgetmanager = createAsyncThunk(
    'get/alluser', 
    async(_,{rejectWithValue}) =>{
        try {
            const res = await axios.get(`${Url}/user/all`);
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
            return rejectWithValue(error.response?.data.message || errorMsg)
        return rejectWithValue(errorMsg)
        }
    }
  );

    // delete products



  export const GetAllUserSlice = createSlice({
    name:"user",
    reducers:{
        // resetAllProduct :() => initialState,
    },
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getallgetmanager.pending,() =>({
            ...initialState,
            isLoading :true
        }));
        builder.addCase(getallgetmanager.fulfilled,(_,action) =>({
            ...initialState,
            isSuccess :true,
            data:action.payload
        }));
        builder.addCase(getallgetmanager.rejected,(_,action) =>({
            ...initialState,
            isError :true,
            errorMsg:String(action.payload)
        }));
    }
  })