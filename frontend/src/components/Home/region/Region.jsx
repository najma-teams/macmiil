import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Region = () => {
    const region =[
        {
            img:"/public/images/AE.png",
            region:"Arabic Emirates",
            title:"shopname.ae"
        },
        {
            img:"/public/images/AU.png",
            region:"Australia",
            title:"shopname.ae"
        },
        {
            img:"/public/images/AU.png",
            region:"United States",
            title:"shopname.ae"
        },
        {
            img:"/public/images/AU.png",
            region:"Denmark",
            title:"denmark.com.dk"
        },
        {
            img:"/public/images/FR.png",
            region:"France",
            title:"shopname.com.fr"
        },
        {
            img:"/public/images/AE.png",
            region:"Arabic Emirates",
            title:"shopname.ae"
        },
        {
            img:"/public/images/CN.png",
            region:"China",
            title:"shopname.ae"
        },
        {
            img:"/public/images/GB.png",
            region:"Great Britain",
            title:"shopname.co.uk"
        },
    ]
  return (
    <div className=' mt-5 w-[94%] mx-auto' >
    <Box> <Typography sx={{fontSize:"24px", fontWeight:"bold ", mb:2}}>Suppliers by region</Typography> </Box>
    <Box sx={{ display: 'grid',
    gap: 1,
    gridTemplateColumns: 'repeat(4, 1fr)', }} >
            {
                region.map((item,i) =>{
                   return(
                    <Box sx={{ display:"flex", gap:4, alignItems:"center",  }}>
                    <img className=' w-[40px] h-[40px]'  src={item.img} alt="" />
                    <Box >
                        <Typography  >{item.region}</Typography> 
                        <Typography sx={{ fontSize:"14px",color:"#C9D1DA"}} >{item.title}</Typography> 
                    </Box>
                </Box>
                   )
                })
            }
        </Box>
    </div >
  )
}

export default Region