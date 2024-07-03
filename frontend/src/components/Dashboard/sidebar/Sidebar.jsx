import React,{useState} from 'react'
import {BiSolidDashboard} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import { RiUserStarLine} from 'react-icons/ri'
import {FaMoneyCheckAlt,FaRegAddressBook,FaBookMedical, FaPrescriptionBottleAlt } from 'react-icons/fa'
import {AiOutlineShoppingCart,AiOutlineUserAdd,AiOutlineMenuUnfold} from 'react-icons/ai'
import {MdOutlineAttachMoney, MdPayments} from 'react-icons/md'
import {BiMoneyWithdraw} from 'react-icons/bi'
import {CiMoneyCheck1} from 'react-icons/ci'
import {MdOutlineProductionQuantityLimits,MdAccountBalanceWallet,MdOutlineCategory} from 'react-icons/md'
import {LiaMoneyCheckAltSolid} from 'react-icons/lia'
import {TbCategory2} from 'react-icons/tb'
import { NavLink,Link } from 'react-router-dom'
import { HiMenuAlt2, HiMenuAlt3 } from 'react-icons/hi'
import { FaBarsStaggered } from "react-icons/fa6";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { GiMedicines } from 'react-icons/gi'

const Sidebar = () => {

 const menu = [
    {name:"Dashboard",Link:'Maindashboard',icon:BiSolidDashboard},
    {name:"Product",Link:'Product',icon:AiOutlineUserAdd},
    {name:"User",Link:'User',icon:FiUsers},
  ]
  // const [anchorEl, setAnchorEl] = (null);
  // const openn = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open,setOpen] = useState(true)


  return (
    <div className={`  text-black shadow-xl flex flex-col bg-[#ffffff] h-[140vh]   ${open ? " w-full " : "w-[20%] "}  duration-700  w-full h-screen  items-center justify-start webkitScroll`}>
      <div className='  flex items-center gap-4 mt-5 '>
       {open ? ( <h1 className='    font-bold text-2xl py-7 '> Macmiil  Market</h1>):""}
       {open ? ( <span onClick={()=> setOpen(!open)} className=' duration-1000 text-2xl  hover:font-bold cursor-pointer '> <AiOutlineMenuUnfold/> </span>):<span onClick={()=> setOpen(!open)} className=' duration-1000 text-2xl  hover:font-bold cursor-pointer '> <AiOutlineMenuUnfold/> </span>}
      </div>
      <div className={` ${open ? "mobileSidebar":"responSidebar"} duration-500 w-full h-screen flex flex-col items-start ml-8   ${open ? "":"mt-6"} `}>
       {menu?.map((menu,i)=>(
        <NavLink key={i} className={`w-full ${menu?.margin && "mt-2"}`} to={menu?.Link}>
          
        <div className="btnHover w-[100%] ">
           <button className='flex items-center gap-2 h-[6vh] text-center  '> 

             <span> {React.createElement(menu?.icon)} </span>  

            {open ? ( <h4 className=''> {menu?.name} </h4>):""}
            
           </button>
         </div>
        </NavLink>
       ))}


      
      </div>
    </div>
  )
}

export default Sidebar
