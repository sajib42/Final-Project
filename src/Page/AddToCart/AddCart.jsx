import { useLoaderData } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import { useContext } from 'react';
import { userContext } from "../../Firebase/LoginContext";
import { data } from "autoprefixer";
import CartDataCard from "./CartDataCard";
import Footer from "../Footer/Footer";


const AddCart = () => {
    const { user } = useContext(userContext)
    const { email } = user
    const [cart, setCart] = useState([]);
    // const data = useLoaderData()
    useEffect(() => {
        fetch(`http://localhost:5000/getcartdata/${email}`)
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    // console.log(cart);
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="grid  gap-4 grid-cols-1 md:grid-cols-2 p-10">
                {
                    cart.map(e => <CartDataCard key={e._id} data={e}  ></CartDataCard>)
                }
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AddCart;