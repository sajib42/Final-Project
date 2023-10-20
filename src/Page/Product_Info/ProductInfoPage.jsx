import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { FaCartPlus, FaStar } from 'react-icons/fa';

import { useContext } from 'react';
import { userContext } from "../../Firebase/LoginContext";
import axios from "axios";
import swal from 'sweetalert';

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
        const res = await axios.post(`https://z-gear-server-ba2aj8qvn-zarjij-hasans-projects.vercel.app/addtocart`, cartData)
        console.log(res.data.msg);
        if (res.data.msg) {
            swal("successfully!", "Your Product added", "success");
        }

    }
    return (
        <div className=" shadow-2xl card-bordered">
            <div className=" py-4 flex flex-col md:flex-row justify-between w-full  rounded-lg px-4 mt-20">
                <div className="md:w-1/2   ">
                    <img className=" max-h-[500px] w-fit mx-auto  object-cover" src={photo} alt="" />
                </div>
                <div className=" md:w-1/2 p-5 space-y-4 shadow-2xl card-bordered rounded-lg " >
                    <div className="space-y-2">
                        <p className="md:text-6xl font-semibold" >{name}</p>
                        <p className="text-2xl font-medium" >{brandName}</p>
                        <p className="" >{description}</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-green-700">{price}  BDT</p>
                        <p>Rating: <FaStar></FaStar> {rating}/5</p>
                    </div>
                    <div >
                        <Link to={`getcartdata/${email}`} ><button onClick={handelAddCart} className="btn btn-success"><FaCartPlus></FaCartPlus> Add to Cart</button></Link>
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