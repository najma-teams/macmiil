// const express = required('express')
import express from 'express'
import userRouter from './routes/UserRouter'
import cateRouter from './routes/CategoryRoute'
import proRouter from './routes/productRouter'
import cartRouter from './routes/CartRouter'
import cors from 'cors';


const app = express();


const port = 5000
app.use(express.json())

// let app receive json data
app.use(
    cors({
      origin: 'http://localhost:5173',
    })
  );


//midpoints
//user midpoint
app.use('/api/user',userRouter)
//category midpoint
app.use('/api/cate',cateRouter)

//subcategory


//product

app.use('/api/pro',proRouter)

//cart

app.use('/api/cart',cartRouter)


app.listen(port, ()=> console.log(`server start On ${port}`))



