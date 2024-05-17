import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/Jwt";
const prisma = new PrismaClient();

//interface

export const createCateory = async(req:customuserRequest,res:Response)=>{
    try {
        const {Name,image, cato} = req.body
     
        // if(!req.user?.role){
        //     return res.json({
        //         message : "Uh don't allowed!!!!!",
        //         isSuccess : false
        //     })
        // }
        if(!cato){
            return res.json({
                message : "please set type_category",
                isSuccess : false
            })
        }
        //checktype
        const checktype = await prisma.category.findFirst({
            where :{
                cato
            }
        })
        if(checktype){
            return res.json({
                message : "type is already used",
                isSuccess : false
            })
        }
        //newcate
        const newcate = await prisma.category.create({
            data :{
                cato,
                userId : req.user?.userId!
            }
        })
        res.json({
            isSuccess : true,
            result : {...newcate}
        })
    } catch (error) {
        console.log(error)
        res.json({
            message : "something wrong",
            isSuccess : false
        })
    }

}

// get all
export const getall = async (req: Request, res: Response) => {
    try {
      const all = await prisma.category.findMany({
        where: {
          isDelete: false,
        },
      
      });
      res.json({
        result: [...all],
        isSuccess: true,
      });
    } catch (error) {
      res.json({
        message: "something is wrong",
        isSuccess: false,
      });
    }
  };