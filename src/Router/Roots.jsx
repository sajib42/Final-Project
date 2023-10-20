import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import AddProduct from "../Page/AddProduct/AddProduct";
import LoginPage from "../Page/Login/LoginPage";
import Registration from "../Page/Login/Registration";
import AddCart from "../Page/AddToCart/AddCart";
import About from "../Page/About/About";
import Blog from "../Page/Blog/Blog";
import Phone from "../Page/All Product/Iphone/Phone";
import Mackbook from "../Page/All Product/Macbook/Mackbook";
import Watch from "../Page/All Product/Watch/Watch";
import Airpod from "../Page/All Product/Airpod/Airpod";
import MacPro from "../Page/All Product/imac/MacPro";
import Consol from "../Page/All Product/Consol/Consol";
import ProductInfo from "../Page/Product_Info/ProductInfo";
import PrivetRout from "./PrivetRout";
import ErrorPage from "../Page/404/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>

            },
            {
                path: "/productAdd",
                element: <PrivetRout><AddProduct></AddProduct></PrivetRout>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>

            },
            {
                path: '/reg',
                element: <Registration></Registration>
            },
            {
                path: '/getcartdata',
                element: <PrivetRout><AddCart></AddCart></PrivetRout>,
                // loader: ({ params }) => fetch(`http://localhost:5000/getcartdata/${params.email}`)
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/phone/:phone",
                element: <Phone></Phone>,
                loader: ({ params }) => fetch(`http://localhost:5000/getproduct2/${params.phone}`)

            },
            {
                path: "/mac/:macbook",
                element: <Mackbook></Mackbook>,
                loader: ({ params }) => fetch(`http://localhost:5000/getproduct2/${params.macbook}`)

            },
            {
                path: "/watch/:watch",
                element: <Watch></Watch>,
                loader: ({ params }) => fetch(`http://localhost:5000/getproduct2/${params.watch}`)
            },
            {
                path: "/airpod/:airpod",
                element: <Airpod></Airpod>,
                loader: ({ params }) => fetch(`http://localhost:5000/getproduct2/${params.airpod}`)
            },
            {
                path: "/console/:console",
                element: <Consol></Consol>,
                loader: ({ params }) => fetch(`http://localhost:5000/getproduct2/${params.console}`)
            },
            {
                path: "/mac/:imac",
                element: <MacPro></MacPro>,
                loader: ({ params }) => fetch(`http://localhost:5000/getproduct2/${params.imac}`)

            },
            {
                path: "/airpod/:airpod",
                element: <Airpod></Airpod>,
                loader: ({ params }) => fetch(`http://localhost:5000/getproduct2/${params.airpod}`)
            },
            {
                path: "/getproduct/:id",
                element: <PrivetRout><ProductInfo></ProductInfo></PrivetRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/getproduct/${params.id}`)

            },
            {
                path: '/404',
                element: <ErrorPage></ErrorPage>
            }


        ]

    }

]);


export default router;