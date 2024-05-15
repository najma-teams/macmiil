import  jwt from "jsonwebtoken";
import { Request ,Response, NextFunction } from "express";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


interface userData {
    userId :number,
    name:string,
    user_email:string,
    role:string
}

// generate token

export const generateToken = (user:userData) =>{
    const payload = user
    return jwt.sign(payload, process.env.Secret_Key||'Secret-Key**',{
        expiresIn:'7d',
    });
};


export interface customuserRequest extends Request{
    user?:{
        userId:number;
        name:string;
        user_email:string;
        role :string
    }
}


// //Decoded


export const decodeToken = async (req:customuserRequest,res:Response , next :NextFunction) =>{
    try {

        const token = req.headers.authorization?.startsWith('Bearer') &&
        req.headers.authorization?.split(' ')[1]

        if(!token)
        return res.status(401).json({
            isSuccess : false,
            message: 'Please login to get your token.',
        });

        const decode :{    userId:string; name:string; user_email:string; role :string} |any = jwt.verify(token, process.env.Secret_Key ||'Secret-Key**')

         // first check if the user is already activated and exists

    // const user = await prisma.maneger.findFirst({
    //     where: {
    //       userId: decode.userId,
    //       isActive: true,
    //     },
    //   });
  
    //   if (!user)
    //     return res.status(401).json({
    //       isSuccess: false,
    //       message: 'UN_AUTHORIZED',
    //     });

        // req.user = user;
        req.user = {...decode};
        next()
        
    } catch (error) {
        res.status(400).json(
            {
                isSuccess : false,
                message  : "u don't have Token".toUpperCase()
            }
        ) 
    }
}

// export const authorizer = (...allowedroles:any) => {
//   return (req:Request,res:Response , next :NextFunction) => {
//     const { Role } = req.user;

//     if (allowedRoles.includes(Role)) {
//       return next();
//     }

//     return res.status(403).json({
//       isSuccess: false,
//       message: 'Permission denied',
//     });
//   };
// };