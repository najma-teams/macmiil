import { PrismaClient } from "@prisma/client";
import {Response, json } from "express";
import { customuserRequest } from "../helpers/secure/Jwt";
const prisma =new PrismaClient();

export const CraerteOrders =async (req:customuserRequest, res:Response)=>{
  try {
        const {ID} =req.params
         
    const FINCarts =await prisma.cart.findFirst({
      where:{
        id:ID
      },
      include:{
        cartItem:{
          select:{
            product:true
          }
        }
      }
    })
 

    if(!FINCarts){
      return res.json({status:Error, Message:"Cart dosn't Found"})
    }
    const Total = FINCarts.cartItem.reduce((prev, current)=> prev+parseInt(current.product.price.toString()),0)


      const CreateOrder =await prisma.order.create({
        data:{
          items: JSON.stringify(FINCarts.cartItem!),
          totalPrice: Total,
          cartId: FINCarts?.id!,
          userId:+req.user?.userId!
        }
      })

    
      await prisma.cart.delete({
        where:{
          id:FINCarts.id,
        }
      })


      res.json({status:"Success", Message:"Ordering", Result:{...CreateOrder}})

  } catch (error) {
    console.log(Error)
    res.json({status:Error, Message:"U failed To create Ordering"})
  }
}




export const Getallorders =async (Req:customuserRequest, res:Response)=>{
  try {
    const Allorders =await prisma.order.findMany()

    res.json({status:"Success", Result:[...Allorders]})
  } catch (error) {
    console.log(error)
  }
}

