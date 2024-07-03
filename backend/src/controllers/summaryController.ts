import { Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export const registerSummary = async (req: Request, res: Response): Promise<Response> => {
  try {
    const topProducts = await getTopProductsByDate();
    return res.json({
      issuccess: true,
      message: 'SUCCESS',
      data: topProducts,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      issuccess: false,
      message: 'FAILED_TO_REGISTER_SUMMARY',
    });
  }
};

async function getTopProductsByDate(startDate?: Date, endDate?: Date) {
  const today = new Date();
  const defaultStartDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const defaultEndDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const topProducts = await prisma.product.findMany({
    where: {
      cartItem: {
        some: {
          createdAt: {
            gte: startDate || defaultStartDate,
            lt: endDate || defaultEndDate,
          },
        },
      },
    },
   
    include: {
      cartItem: true,
    },
  });

  const productsWithCount = topProducts.map((product) => ({
    ...product,
    cartItem: {
      ...product.cartItem,
      count: product.cartItem.reduce(
        (totalQuantity, item) => totalQuantity + item.quant,
        0
      ),
      
    },
    
  }));

  const sortedProducts = productsWithCount.sort((a, b) => b.cartItem.count - a.cartItem.count);
  const topTenProducts = sortedProducts.slice(0, 10);

  return topTenProducts;
}
// export const getSummary = async(req,res)=>{
//     try {
//         const summary = await prisma.summary.findMany()
//         res.json({
//             issuccess:true,
//             message:'SUCCESS',
//             summary
//         })
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({
//             issuccess:false,
//             message:'SERVER _ERROR'
//         }) 
//     }
// }
// export const getSpecificSummary = async(req,res)=>{
//     try {
//         const {startDate ,endDate} =req.body;

//         const formatStartDate = format(new Date(startDate) ,'yyyy-MM-dd');
//         const formatEndDate = format(new Date(endDate) ,'yyyy-MM-dd');

//         const summary = await prisma.summary.findMany(
//             {
//             where:{
//                 date:{
//                     gte:new Date(formatStartDate),
//                     lte:new Date(formatEndDate)
//                 }
//             }
//         }
//         )
//         res.json({
//             issuccess:true,
//             message:'SUCCESS',
//             summary
//         })
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({
//             issuccess:false,
//             message:'SERVER _ERROR'
//         }) 
//     }
// }









