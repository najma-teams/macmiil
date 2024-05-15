import { Box, Container, Typography } from '@mui/material'
import React from 'react'


const Service = () => {
    const serv =[
        {
            img:"/public/images/service1.png",
            title:"Source from Industry Hubs"
        },
        {
            img:"/public/images/service2.png",
            title:"Customize Your Products"
        },
        {
            img:"/public/images/service3.png",
            title:"Fast, reliable shipping by ocean or air"
        },
        {
            img:"/public/images/service4.png",
            title:"Product monitoring and inspection"
        },
    ]
  return (
    <div className=' w-[94%] mx-auto' >
        <Box> <Typography sx={{fontSize:"24px", fontWeight:"bold ", mb:2}}>Our extra services</Typography> </Box>
        <Box sx={{ display:"flex", gap:4, }} >
            {
                serv.map((item,i) =>{
                   return(
                    <Box sx={{ boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",width:"100%",}}>
                    <img className=' w-[100%] ' src={item.img} alt="" />
                    <Box sx={{mt:2}}><Typography sx={{fontSize:"16px",ml:2, fontWeight:"bold", width:"68%",mb:2  }} >{item.title}</Typography> </Box>
                </Box>
                   )
                })
            }
        </Box>
    </div>
  )
}

export default Service