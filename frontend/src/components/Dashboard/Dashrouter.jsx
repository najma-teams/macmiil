import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Sidebar from "../Dashboard/sidebar/Sidebar"
// import DashHeader from "../../../components/utils/DashHeader"
import { useSelector } from "react-redux"
// import { RootState } from "../../../redux/store"
import { useEffect } from "react"
// import { Navbar } from "../../../components/header/Navbar"

const Dashrouter = () => {
  const {pathname} = useLocation()

  const userinfo = useSelector((state)=>state.userInfo)
  const navigate = useNavigate()

  // useEffect(()=>{
  //   if(userinfo?.Role !=="ADMIN"){
  //     navigate('/Doctordashboard')
  //   }
  // },[])

  return (
    <div className="   flex  ">
      <div className=" h-screen ">
        <Sidebar/>
      </div>
   
     
      <div className="  h-screen  bg-[#f1f4f9] w-[100%]  ">
      <Outlet/>
      </div>
    </div>
  )
}

export default Dashrouter