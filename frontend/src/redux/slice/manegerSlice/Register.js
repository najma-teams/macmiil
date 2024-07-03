import { createAsyncThunk, createSlice } from 
'@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Url, errorMsg } from '../../interfaces';





const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMsg: '',
    data: {} ,
  };



  export const createUserFn = createAsyncThunk("user/new", async (data,{rejectWithValue}) =>{
    try {
        const res = await axios.post(`${Url}/user/register`,data)
        localStorage.setItem("userData",JSON.stringify(res.data))
        // console.log(res)
        return res.data

    } catch (error) {
        if(error instanceof AxiosError){
            return rejectWithValue(error.response?.data?.message || errorMsg)
        }
        // return rejectWithValue(errorMsg)
    }
  })


  export const createUserSlice = createSlice({
    name:"user",
    reducers:{
        reset : () => initialState
    },
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(createUserFn.pending,()=>({
            ...initialState,
            isLoading:true
        }))
        builder.addCase(createUserFn.fulfilled,(_,action)=>({
            ...initialState,
            isSuccess:true,
            data : action.payload 

        }))
        builder.addCase(createUserFn.rejected,(_,action)=>({
            ...initialState,
            isError:true,
            errorMsg :action.payload
        }))
    }
})

export const {reset} = createUserSlice.actions