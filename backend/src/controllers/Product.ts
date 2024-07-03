import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/Jwt";
import { proupdateSchema } from "../helpers/Schema";
import cloudinary from "../helpers/Cloudinary";
const prisma = new PrismaClient();

//interface

interface productINter {
  price: number;
  qty: number;
  stock: number;
  image: string;
  Name: string;
  catId:number
}



export const create = async (req: customuserRequest, res: Response) => {
  try {
    const { Name, price, catId,qty } = req.body;
    if (req.user?.role !== 'ADMIN') {
      return res.json({
        message: "Uh don't allowed!!!!!",
        isSuccess: false,
      });
    }
    if(!Name || !price  ||!catId  ) 
        return res.status(400).json({
            isSuccess :false,
            message:'VALIDATION_ERROR'
    });


    const cate = await prisma.category.findFirst({
      where: {
        catId: +req.body.catId,
      },
    });
    if (!cate) {
      return res.status(405).json({
        message: "Cat Not Found",
        isSuccess: false,
      });
    }

    const file  = req.file

    const cloudimage = await cloudinary.uploader.upload(file?.path!)
   
    //newcate
    const newcate = await prisma.product.create({
      data: {
        // Name:req.body.Name,
        Name,
        qty:+qty,
        price:+price,
        image:cloudimage.secure_url,
        catId: +catId,
        userId:+req.user?.userId!,

      },
     
    });
    res.json({
      isSuccess: true,
      result: { ...newcate },
    });
  } catch (error) {
    console.log(error)
    res.json({
      message: "something wrong",
      isSuccess: false,
    });
  }
};

// get all
export const getall = async (req: Request, res: Response) => {
  try {
    const all = await prisma.product.findMany({
      where: {
        isDelete: false,
      },
      include:{
        category:{
          select:{
            cato:true
          }
        }
      }
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

//getone

export const getone = async (req: Request, res: Response) => {
  try {
    //checkId
    const checkId = await prisma.product.findFirst({
      where: {
        id: +req.params.id,
        isDelete: false,
      },
      include:{
        category:{
          select:{
            cato:true
          }
        }
      }
    });
    if (!checkId) {
      return res.json({
        message: "Product is not axist",
        isSuccess: false,
      });
    }
    res.json({
      result: { ...checkId },
      isSuccess: true,
    });
  } catch (error) {
    res.json({
      message: "something is wrong",
      isSuccess: false,
    });
  }
};

//==============
//updating prodcut
//===============

export const updatePro = async (req: Request, res: Response) => {
  try {
 

    const { image, Name, price, catId,qty,id } = req.body;

    const checkId = await prisma.product.findFirst({
      where: {
        id: +id,
        isDelete: false,
      },
      
    });
    
    if (!checkId) {
      return res.json({
        message: "Product is Not axist",
        isSuccess: false,
      });
    }

    //updated
    const file  = req.file

    const cloudimage = await cloudinary.uploader.upload(file?.path!)

    const updated = await prisma.product.update({
      where: {
        id: +req.body.id,
      },
      data: {
        // Name:req.body.Name,
        Name,
        qty:+qty,
        price:+price,
        image:cloudimage.secure_url,
        catId: +catId,

      },
    });
    res.json({
      result: { ...updated },
      isSuccess: true,
    });
  } catch (error) {
    console.log(error)
    res.json({
      message: "something is wrong",
      isSuccess: false,
    });
  }
};

//soft delete

export const softdell = async (req: Request, res: Response) => {
  try {
    const checkId = await prisma.product.findFirst({
      where: {
        id: +req.params.id,
        isDelete: false,
      },
    });
    if (!checkId) {
      return res.json({
        message: "Product is Not axist",
        isSuccess: false,
      });
    }
    const softed = await prisma.product.update({
      where: {
        id: +req.params.id,
      },
      data: {
        isDelete: true,
      },
    });
    res.json({
      result: { ...softed },
      isSuccess: true,
    });
  } catch (error) {
    res.json({
      message: "not success to make soft dell",
      isSuccess: false,
    });
  }
};

//restore Product

export const restore = async (req: Request, res: Response) => {
  try {
    const checkId = await prisma.product.findFirst({
      where: {
        id: +req.params.id,
        isDelete: true,
      },
    });
    if (!checkId) {
      return res.json({
        message: "Product is Not axist",
        isSuccess: false,
      });
    }
    const restore = await prisma.product.update({
      where: {
        id: +req.params.id,
      },
      data: {
        isDelete: false,
      },
    });
    res.json({
      result: { ...restore },
      isSuccess: true,
    });
  } catch (error) {
    res.json({
      message: "not success to make soft dell",
      isSuccess: false,
    });
  }
};

// get al

export const getallsoft = async (req: Request, res: Response) => {
  try {
    const all = await prisma.product.findMany({
      where: {
        isDelete: true,
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
