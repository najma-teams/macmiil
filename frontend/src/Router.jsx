import { createBrowserRouter,Outlet, useParams } from "react-router-dom";
import Home_page from "./pages/Home_page";
import Header from "./common/Header/Header";
import {useLocation} from 'react-router-dom'
import Footer from "./common/Footer/Footer";
import Produc_page from "./pages/Produc_page";
import Singleproduct from "./components/product/Singleproduct";
import Cart from "./components/cart/Cart";
import Dashrouter from "./components/Dashboard/Dashrouter";
import Maneger from "./pages/Dashboard/Product/Productall";
import Login from "./components/login/Login";
import Productdash from "./pages/Dashboard/Product/Productall";
import CreateProduct from "./pages/Dashboard/Product/CreateProduct";
import UpdateProduct from "./pages/Dashboard/Product/UpdateProduct";
import Remove from "./pages/Dashboard/Product/Remove";
import Alluser from "./pages/Dashboard/User/User";
import CreateUser from "./pages/Dashboard/User/CreateUser";
import UpdateUser from "./pages/Dashboard/User/UpdateUser";



const Router =()=>{
    const {pathname} = useLocation()
    return(
        <div className=" bg-[#f7fafc]">
            <div>
                {/* i love */}
                {/* {pathname !== "/Dashboard" ?(<div> <Header /></div>)  :null  } */}
                <div> <Header /></div>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                {/* <Footer/> */}
                {/* <Footer/> */}
            </div>
        </div>
    )
}

export default Router;

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Router/>,
        children:[
            {
                path:'/',
                element:<Home_page/>
            },
            {
                path:'product',
                element:<Produc_page/>
            },
            {
                path:'shop/:id',
                element:<Singleproduct/>
            },
            {
                path:'cart',
                element:<Cart/>
            },
            
        ]
    },

    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/Dashboard',
        element:<Dashrouter/>,
        children:[
          
         {
            path: 'Product',

            children:[
                {
                    index: true,
                    element: <Productdash/>
                },
                {
                    path:'Createproduct',
                    element: <CreateProduct/>
                },
                {
                    path:'update/:id',
                    element: <UpdateProduct/>,
                    
                },
                {
                    path:'remove/:id',
                    element: <Remove/>,
                    
                },
            ]
        },
        {
            path: 'User',

            children:[
                {
                    index: true,
                    element: <Alluser/>
                },
                {
                    path:'Createuser',
                    element: <CreateUser/>
                },
                {
                    path:'update/:id',
                    element: <UpdateUser/>,
                    
                },
                {
                    path:'remove/:id',
                    element: <Remove/>,
                    
                },
            ]
        }
        ]
    }
])