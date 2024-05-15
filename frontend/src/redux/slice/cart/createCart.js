import { createAsyncThunk, createSlice } from 
'@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Url, errorMsg } from '../../interfaces';





const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMsg: '',
    data: [] ,
  };



  export const CreateCartFn = createAsyncThunk("cart/create", 
  async (data,{rejectWithValue,getState}) =>{
    try {

        // const token = getState().auth.result.token;
        const {login} = getState()

        const res = await axios.post(`${Url}/cart/add`,
        {
            price:data.price,
            quant:data.quant,
            id:data.id
        }
        ,{
            headers: {
                Authorization: `Bearer ${login.data?.token}`
              },
        })
        localStorage.setItem("userData",JSON.stringify(res.data))
        console.log(res)
        return res.data

    } catch (error) {
        console.log(error)
        if(error instanceof AxiosError){
            return rejectWithValue(error.response?.data.message || errorMsg)
        }
        return rejectWithValue(errorMsg)
    }
  })


  export const createCartslice = createSlice({
    name:"booking",
    reducers:{
        reset : () => initialState
    },
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(CreateCartFn.pending,()=>({
            ...initialState,
            isLoading:true
        }))
        builder.addCase(CreateCartFn.fulfilled,(_,action)=>({
            ...initialState,
            isSuccess:true,
            data : action.payload 

        }))
        builder.addCase(CreateCartFn.rejected,(_,action)=>({
            ...initialState,
            isError:true,
            errorMsg : String(action.payload)
        }))
    }
})

export const {reset} = createCartslice.actions