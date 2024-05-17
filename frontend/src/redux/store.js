



import {  GetproductSlice } from "./slice/productSlice/getAllProduct"
import {configureStore} from '@reduxjs/toolkit'
import { signUpSlice } from "./slice/user/signup"
import { signInSlice } from "./slice/user/login"
import { GetOneproductSlice } from "./slice/productSlice/Oneproduct"
import { GetAllCartSlice } from "./slice/cart/GetAllCart"
import { createCartslice } from "./slice/cart/createCart"
import { GetAllCatorySlice } from "./slice/Catorey/Catorey"
import { createProductlice } from "./slice/productSlice/CreateProduct"
import { createCategorySlice } from "./slice/Catorey/CreateCategory"








export const store = configureStore({
    reducer:{
   

      // medicine
      getproduct:GetproductSlice.reducer,
      getoneproduct:GetOneproductSlice.reducer,
      createproduct:createProductlice.reducer,


     

    //  user
    signup: signUpSlice.reducer,
    login: signInSlice.reducer,

    // cart

    getAllCart :GetAllCartSlice.reducer,
    createcart:createCartslice.reducer,


    // catory
    getallcatory:GetAllCatorySlice.reducer,
    createCategory:createCategorySlice.reducer

    },


  // devTools: true,

})

 
// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch