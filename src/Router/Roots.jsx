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
                element: <AddProduct></AddProduct>
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
                path: '/cart',
                element: <AddCart></AddCart>
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

            }

        ]

    }

]);


export default router;