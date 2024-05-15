import React from 'react'
import Outdoor from '../catogeyfitnes/Catogeyfitness'
import { Box, Container, Typography, useTheme } from '@mui/material'


const Hero = () => {

    const detals = [
        {
            img:"/public/images/image1.png",
            title:"Smart watches",
            price:"-25%"
        },
        {
            img:"/public/images/image2.png",
            title:"Laptops",
            price:"-15%"
        },
        {
            img:"/public/images/image3.png",
            title:"GoPro cameras",
            price:"-40%"
        },
        {
            img:"/public/images/image4.png",
            title:"Headphones",
            price:"-25%"
        },
        {
            img:"/public/images/image5.png",
            title:"Canon camreras",
            price:"-25%"
        }
        
    ]
    const theme = useTheme()

  return (
    <Container sx={{  mt: 6, color: theme.palette.mode === "dark"? "#000" : "#000"}} >


        {/* deals */}
        {/*  grid grid-flow-col-dense bg-[#fbfbfa] border border-spacing-4 rounded-lg' */}

        <Box sx={{ display:"flex ", bgcolor:"#fbfbfa", border:" 1px solid #e8e8e8"}} 

        >
{/*  p-5 border border-spacing-4' */}
            <Box  sx={{ p:3}}>
                <h1 className=' font-bold text-2xl'>Deals and offers</h1>
                <h3 className=' text-[18px] text-gray-600'>Hygiene equipments</h3>
                {/*  grid grid-cols-4 capitalize' */}
                <Box sx={{ display:"flex", gap:0.5, }} >
                    <Box className=' w-[50px] h-[50px] bg-[#606060] rounded-lg text-white   text-[10px] mt-6  text-center'>
                        <Box>
                        <Typography>04</Typography>
                        <Typography>Days</Typography>
                        </Box>
                    </Box>
                    <Box className=' w-[50px] h-[50px] bg-[#606060] rounded-lg text-white  font-semibold text-[10px] mt-6  text-center'>
                        <Box >
                        <Typography>13</Typography>
                        <Typography>hrs</Typography>
                        </Box>
                    </Box>
                    <Box className=' w-[50px] h-[50px] bg-[#606060] rounded-lg text-white   text-[10px] mt-6  text-center '>
                        <Box >
                        <Typography>34</Typography>
                        <Typography>min</Typography>
                        </Box>
                    </Box>
                    <Box className='w-[50px] h-[50px] bg-[#606060] rounded-lg text-white  font-semibold text-[10px] mt-6  text-center'>
                        <Box >
                        <Typography>56</Typography>
                        <Typography>sec</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box className=' grid grid-cols-5 '>
                {
                    detals.map((index,ink) =>{
                        //  border border-spacing-4 p-6 items-center text-center w-full'
                        return <Box sx={{ border:"1px solid #e8e8e8" ,p:4 , alignItems:"center", textAlign:"center", width:"100%"}} >
                            <img className=' w-[90px] h-[100px] m-auto' src={index.img} alt="" />
                            {/*  text-[12px] mt-8  ' */}
                            <Typography sx={{fontSize:16 }} >{index.title}</Typography>
                            <Typography className=' text-center ml-6 bg-[#ffe3e3] text-[#f1495c] rounded-full w-[50%]'>{index.price}</Typography>

                        </Box>
                    })
                }
            </Box>
        </Box>

        {/* link */}
    </Container>
  )
}

export default Hero