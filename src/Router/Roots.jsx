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
import UpdatePage from "../Page/update/UpdatePage";
import AdminDash from "../layout/admin/AdminDash";
import BuyPage from "../Page/AddToCart/BuyPage";
import PaymentPage from "../Page/AddToCart/PaymentPage";
import BkashPay from "../Page/AddToCart/BkashPay";
import CardPayment from "../Page/AddToCart/CardPayment";
import DeliveryPage from "../Page/Delivery/DeliveryPage";
import NagadPay from "../Page/AddToCart/NagadPay";
import url from "../url";
import CashOnDelivery from "../Page/AddToCart/CashOnDelivery";
import AdminDashPage from "../Page/Admin/Dashboard/AdminDashPage";
import AdminReviews from "../Page/Admin/AdminReviews/AdminReviews";
import OrderPage from "../Page/Admin/OrderPage";



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
                loader: ({ params }) => fetch(`${url}/getcartdata/${params.email}`)
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
                loader: ({ params }) => fetch(`${url}/getproduct2/${params.phone}`)

            },
            {
                path: "/mac/:id",
                element: <Mackbook></Mackbook>,
                loader: ({ params }) => fetch(`${url}/getproduct2/${params.id}`)

            },
            {
                path: "/watch/:watch",
                element: <Watch></Watch>,
                loader: ({ params }) => fetch(`${url}/getproduct2/${params.watch}`)
            },
            {
                path: "/airpod/:airpod",
                element: <Airpod></Airpod>,
                loader: ({ params }) => fetch(`${url}/getproduct2/${params.airpod}`)
            },
            {
                path: "/console/:console",
                element: <Consol></Consol>,
                loader: ({ params }) => fetch(`${url}/getproduct2/${params.console}`)
            },
            {
                path: "/mac/:imac",
                element: <MacPro></MacPro>,
                loader: ({ params }) => fetch(`${url}/getproduct2/${params.imac}`)

            },
            {
                path: "/airpod/:airpod",
                element: <Airpod></Airpod>,
                loader: ({ params }) => fetch(`${url}/getproduct2/${params.airpod}`)
            },
            {
                path: "/getproduct/:id",
                element: <PrivetRout><ProductInfo></ProductInfo></PrivetRout>,
                loader: ({ params }) => fetch(`${url}/getproduct/${params.id}`)

            },
            {
                path: "/update/:id",
                element: <UpdatePage></UpdatePage>,
                loader: ({ params }) => fetch(`${url}/getproduct/${params.id}`)
            },
            {
                path: '/buy_now/:id',
                element: <BuyPage />
            },
            {
                path: '/payment/:id',
                element: <PaymentPage />
            },
            {
                path: '/bkash',
                element: <BkashPay />
            },
            {
                path: '/card_pay',
                element: <CardPayment />
            },
            {
                path: '/cash_pay',
                element: <CashOnDelivery />
            },
            {
                path: '/404',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/delivery',
                element: <DeliveryPage />
            },
            {
                path: '/nagad',
                element: <NagadPay />
            }


        ]



    },
    {
        path: '/admin',
        element: <PrivetRout> <AdminDash /> </PrivetRout>,
        children: [
            {
                path: 'admin_dash_page',
                element: <AdminDashPage />
            },
            {
                path: 'admin_reviews',
                element: <AdminReviews />
            },
            {
                path: 'order_page',
                element: <OrderPage />
            }
        ]
    }

]);


export default router;