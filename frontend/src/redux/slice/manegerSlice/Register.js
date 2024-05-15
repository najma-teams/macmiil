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



  export const manegerfn = createAsyncThunk("maneger/new", async (data,{rejectWithValue}) =>{
    try {
        const res = await axios.post(`${Url}/maneger/create`,data)
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


  export const manegerSlice = createSlice({
    name:"maneger",
    reducers:{
        reset : () => initialState
    },
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(manegerfn.pending,()=>({
            ...initialState,
            isLoading:true
        }))
        builder.addCase(manegerfn.fulfilled,(_,action)=>({
            ...initialState,
            isSuccess:true,
            data : action.payload 

        }))
        builder.addCase(manegerfn.rejected,(_,action)=>({
            ...initialState,
            isError:true,
            errorMsg : String(action.payload)
        }))
    }
})

export const {reset} = manegerSlice.actions