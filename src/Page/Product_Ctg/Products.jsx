import productImg1 from "./../../img/consol (5).jpg"
import productImg2 from "./../../img/product (2).jpg"
import productImg3 from "./../../img/airpod2.jpg"
import productImg4 from "./../../img/imac3.jpg"
import laptopImg from "./../../img/mac.jpg"
import phone from "./../../img/phone (1).jpg"

import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10   max-w-6xl mx-auto">
                <Link to={`phone/${'iphone'}`} className="col-span-2 md:col-span-1 w-full md:h-96 ">
                    <div className=" w-full md:h-96   " >
                        <p className="absolute text-4xl font-medium px-2 " >I Phone</p>
                        <img className=" object-cover hover:ease-in-out hover:transition-transform hover:translate-y-10  w-full md:h-96 " src={phone} alt="" />
                    </div>
                </Link>
                <Link to={`mac/${'macbook'}`} className=" col-span-2 md:h-96 ">
                    <div className=" col-span-2 md:h-96  " >
                        <p className="absolute text-4xl font-medium px-2 " >Macbook</p>
                        <img className="hover:ease-in-out hover:transition-transform hover:translate-y-10  w-full object-cover   md:h-96" src={laptopImg} alt="" />
                    </div>
                </Link>
                <Link to={`watch/${'watch'}`} className=" col-span-2 md:h-96 " >
                    <div className=" col-span-2 relative  md:h-96 " >
                        <p className="absolute text-4xl font-medium px-2 " >I Watch</p>
                        <img className="hover:ease-in-out hover:transition-transform hover:translate-y-10 w-full object-cover   md:h-96" src={productImg2} alt="" />
                    </div>
                </Link>
                <Link to={`console/${'console'}`} className="col-span-2 md:col-span-1 md:h-96  ">
                    <div className=" md:h-96 w-full " >
                        <p className="absolute text-4xl font-medium px-2 " >console</p>
                        <img className="z-10 hover:ease-in-out hover:transition-transform hover:translate-y-10 w-full object-cover h-full   md:h-96" src={productImg1} alt="" />
                    </div>
                </Link>
                <Link to={`airpod/${'airpod'}`} className="col-span-2 md:col-span-1  md:h-96 " >
                    <div className=" " >
                        <p className="absolute text-4xl font-medium px-2 " >Airpod</p>
                        <img className="z-50 hover:ease-in-out hover:transition-transform hover:translate-y-10 w-full object-cover   md:h-96" src={productImg3} alt="" />
                    </div>
                </Link>
                <Link to={`mac/${'imac'}`} className=" col-span-2 ">
                    <div className="col-span-2 " >
                        <p className="absolute text-4xl font-medium px-2 " >IMac Pro</p>
                        <img className="z-50  hover:ease-in-out hover:transition-transform hover:translate-y-10 w-full object-cover   md:h-96" src={productImg4} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Products;