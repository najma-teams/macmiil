import { PrismaClient } from '@prisma/client'
import { Response } from 'express'
import { customuserRequest } from '../helpers/secure/Jwt'
const prisma = new PrismaClient()

//interface

interface CartItem {
  id: number
  quant: number
  total: number
  price: number
  productId: number
  
}

//addToCart

export const addToCart = async (req: customuserRequest, res: Response) => {
  try {
    
    const userId = req.user?.userId
    const CartItem = req.body

    let userCart = await prisma.cart.findFirst({
      where: {
        userId: userId,
      },
    })
    if (!userCart) {
      userCart = await prisma.cart.create({
        data: {
          userId: +userId!,
        },
      })
    }

console.log('cartItems length:', CartItem.length);


    for (let i = 0; i < CartItem.length; i++) {
      console.log('Loop iteration:', i);

      const findProduct = await prisma.product.findFirst({
        where:{
          id : +CartItem[i].productId
        }
        
      })
      console.log('findProduct')
  
      if(!findProduct){
        return res.status(404).json({
          message : "not found product",
          isSuccess:false
        })
      }

      if(findProduct){
        return res.status(404).json({
          message : "not found product",
          isSuccess:false
        })
      }

    }


console.log("ffff")

    // const createCart = await prisma.cart.create({
    //   data: {
    //     cartItem: {
    //       create: cartItems?.map((item:any) => ({
    //         quant: +item.quant,
    //         productId: { connect: { id: item.productId } },
    //         price: +item.price!,
    //         total: +(item.price * item.quant),
    //       })),
    //     },
    //     total: cartItems.reduce((total: number, item: any) => total + item.price * item.quant, 0),
    //     userId:req.user?.userId !,
    //   },
    // });

   

    

    res.status(200).json({
      IsSuccess: true,
      // result: createCart,
    })
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      IsSuccess: false,
      message:
        ' Failed To Create To Add New Item Your Cart Please Try Again !!',
    })
  }
}

// get all cart

export const getallcart = async (req: customuserRequest, res: Response) => {
  try {
    const userId = req.user?.userId


    const all = await prisma.cart.findFirst({

      where:{
        userId:userId
      },
      include:{
        user:true,
        cartItem:{
          select:{
            id:true,
            quant:true,
            price:true,
            total:true,
            product:{
              select:{
                Name:true,
                image:true
              }
            }
          }
        }
      }
    })


    

    res.json({
      result: all,
      
      isSuccess: true,
    })
  } catch (error) {
    error
  }
}
