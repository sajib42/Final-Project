import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

import { useContext } from 'react';
import { userContext } from "../../Firebase/LoginContext";
import axios from "axios";

const ProductInfoPage = ({ product }) => {
    const { user } = useContext(userContext)
    console.log(user);
    const { email } = user;
    const { category, brandName, description, name, photo, price, rating, seller, _id
    } = product

    const handelAddCart = async e => {
        e.preventDefault();
        const cartData = {
            category, brandName, description, name, photo, price, rating, seller, productID: _id, email
        }
        const res = await axios.post(`http://localhost:5000/addtocart`, cartData)
        console.log(res.data.msg);

    }
    return (
        <div>
            <div className="flex justify-between w-full border-4 rounded-lg px-4 mt-20">
                <div className="w-1/2   ">
                    <img className=" max-h-[500px] w-fit mx-auto  object-cover" src={photo} alt="" />
                </div>
                <div className="w-1/2 p-5 space-y-4 " >
                    <div className="space-y-2">
                        <p className="text-6xl font-semibold" >{name}</p>
                        <p className="text-2xl font-medium" >{brandName}</p>
                        <p className="" >{description}</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">{price} BDT</p>
                        <p>Rating: {rating}/5</p>
                    </div>
                    <div >
                        <Link to={`getcartdata/${email}`} ><button onClick={handelAddCart} className="btn">Add to Cart</button></Link>
                    </div>

                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ProductInfoPage;