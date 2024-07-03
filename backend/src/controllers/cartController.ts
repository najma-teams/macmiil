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
    const {CartItem} = req.body

    const total =  CartItem?.reduce((total: number, item: any) => total + item.price * item.quant, 0)

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



    for (let i = 0; i < CartItem?.length; i++) {

   

      const findProduct = await prisma.product.findFirst({
        where:{
          id : +CartItem[i].productId
        }
        
      })
  
      if(!findProduct){
        return res.status(404).json({
          message : 'The Item not found product',
          isSuccess:false
        })
      }


    }



    const createCart = await prisma.cart.create({
      data: {
        cartItem: {
          create: CartItem?.map((item:any) => ({
            quant: +item.quant,
            product: { connect: { id: item.productId } },
            price: +item.price!,
            total: +(item.price * item.quant),
          })),
        },
        total:total,
        userId:req.user?.userId!,
      },
      include:{
        cartItem:{
          select:{
            id:true,
            quant:true,
            price:true,
            productId:true
          }
        }
      }
    });

   

    

    res.status(200).json({
      IsSuccess: true,
      result: createCart,
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


    const all = await prisma.cart.findMany({

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