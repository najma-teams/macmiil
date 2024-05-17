import {PrismaClient} from '@prisma/client'
import { Request,Response } from 'express';
import  bcryp from 'bcryptjs'
import { customuserRequest, generateToken } from '../helpers/secure/Jwt';
const prisma = new PrismaClient();


// interface
interface registerInterface {
    name : string
    user_email : string
    password : string
}

interface userlogin {
   user_email : string
   password : string
}

//register

export const register = async(req:Request,res:Response)=>{
 
  try {
    
    const {user_email,name,password} = req.body as registerInterface
   
    if(!name ||!password ||!user_email){
        return res.json({
            isSuccess : false,
            message : "Please provide info"
        })
    }

  
    //  check emial
     
          const user = await prisma.user.findFirst({
             where:{
               user_email
             }
          })
        
          if(user){
             return res.json({
                 isSuccess : false,
                 message : "Email is Already Taking"
             })
          }
      // create data
     // find where
     // update data where

     const hashpass = bcryp.hashSync(password)

     const newuser = await prisma.user.create({
       data :{
        user_email,
        password : hashpass ,
        name,
        role :  user_email === "muhaabdi@gmail.com" ? "ADMIN" : "USER"
       }
     })

     res.json({
        isSuccess : true,
        result : {...newuser}
     })
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}


//login


export const login = async(req:Request,res:Response)=>{

   try {
      
      const {password,user_email} = req.body as userlogin

      if(!password||!user_email){
         return res.json({
            isSuccess : false,
            message : "please provide info"
         })
      }
     
      //check email user

      const users = await prisma.user.findFirst({
         where:{
            user_email
         }
      })
     
     if(!users){
      return res.json({
         message : "something went wrong",
         isSuccess : false
      })
     }

    const dehashpass = bcryp.compareSync(password, users.password)

    if(!dehashpass){
      return res.json({
         message : "something went wrong",
         isSuccess : false
      })
    }
     const user = {
      userId : users.id,
      name : users.name,
      email : users.user_email,
      createAt : users.createdAt,
      role : users.role,
      token : generateToken({
         userId : users.id,
         name : users.name,
         user_email : users.user_email,
         role : users.role,

      })
     }

     res.json({
      isSuccess : true,
      user 
     })

   } catch (error) {
      res.json(error)
   }

}

//update use


export const updateuser = async(req:customuserRequest,res:Response)=>{
   try {
 
      if(!req.user?.role){
      return res.json({
         message : "Uh u not Allowed!!!!!!",
         isSuccess : false
      })
      }


      const {userId} = req.params
      const {name} = req.body

      const updated = await prisma.user.update({
         where :{
            id :parseInt(userId)
         },
          data:{
            // name
          }
      })
       res.json({
         result:{...updated},
         isSuccess : true
       })

   } catch (error) {
      res.json({
         message : "error",
         isSuccess : false
      })
   }
}

//make admin role

export const changeRole = async(req:customuserRequest,res:Response)=>{
   try {
      
      // const {id} = req.params


      if(req.user?.role !== "ADMIN"){
         return res.json({
            message : "not Allowed",
            isSuccess :false
         })
      }

      const checkid = await prisma.user.findFirst({
         where :{
            id : +req.params.id
         }
      })

      if(!checkid){
         return res.json({
            message : "user is not axist",
            isSuccess :false
         })
      }
      
      //change role

      const change = await prisma.user.update({
         where :{
            id : +req.params.id
         },
         data :{
            role : req.body.role.toUpperCase()
         }
      })
     
      res.json({
         result : {...change},
         isSuccess : true
      })


   } catch (error) {
      console.log(error)
      res.json({
         message : "something wrong",
         isSuccess : false
      })
   }
}


export const getall = async(req:Request,res:Response)=>{
   try {
      const get = await prisma.user.findMany()
      res.json({
         result : {...get},
         isSuccess : true
      })
   } catch (error) {
      res.json({
         message : "something is wrong",
         isSuccess: false
      })
   }
}

