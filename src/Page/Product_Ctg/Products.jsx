import productImg1 from "./../../assets/ad3.jpg"
import productImg2 from "./../../img/product (2).jpg"
import productImg3 from "./../../img/airpod2.jpg"
import productImg4 from "./../../img/cameraa.jpg"
import laptopImg from "./../../img/mac.jpg"
import phone from "./../../img/phone (1).jpg"

import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className="text-gray-900">
            <h1 className="text-4xl font-semibold md:text-center p-5 mb-10 bg-base-200  max-w-6xl mx-auto dark:bg-gray-700 dark:text-white" >Our Tech <span className="font-bold text-purple-800">Gadget's</span> </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-black dark:text-gray-600  max-w-6xl mx-auto">
                <Link to={`phone/${'iphone'}`} className="col-span-2 md:col-span-1 w-full md:h-96   ">
                    <div className=" w-full md:h-96   " >
                        <p className="absolute text-4xl font-medium px-2 " >I Phone</p>
                        <img className=" object-cover hover:ease-in-out hover:duration-300 hover:transition-transform hover:translate-y-10 duration-300  w-full md:h-96 " src={phone} alt="" />
                    </div>
                </Link>
                <Link to={`mac/${'macbook'}`} className=" col-span-2 md:h-96 hover:text-black ">
                    <div className=" col-span-2 md:h-96  " >
                        <p className="absolute text-4xl font-medium px-2 " >Laptop</p>
                        <img className="hover:ease-in-out hover:transition-transform hover:translate-y-10  w-full object-cover hover:duration-300 duration-300   md:h-96" src={laptopImg} alt="" />
                    </div>
                </Link>
                <Link to={`watch/${'watch'}`} className=" col-span-2 md:h-96 " >
                    <div className=" col-span-2 relative  md:h-96 " >
                        <p className="absolute text-4xl font-medium px-2 " >Smart Watch</p>
                        <img className="hover:ease-in-out hover:transition-transform hover:translate-y-10 w-full object-cover hover:duration-300 duration-300  md:h-96" src={productImg2} alt="" />
                    </div>
                </Link>
                <Link to={`console/${'console'}`} className="col-span-2 md:col-span-1 md:h-96  ">
                    <div className=" md:h-96 w-full " >
                        <p className="absolute text-4xl font-medium px-2 " >Android</p>
                        <img className="z-10 hover:ease-in-out hover:transition-transform hover:translate-y-10 w-full object-cover h-full hover:duration-300 duration-300  md:h-96" src={productImg1} alt="" />
                    </div>
                </Link>
                <Link to={`airpod/${'airpod'}`} className="col-span-2 md:col-span-1  md:h-96 " >
                    <div className=" " >
                        <p className="absolute text-4xl font-medium px-2 " >EarPhone</p>
                        <img className="z-50 hover:ease-in-out hover:transition-transform hover:translate-y-10 w-full object-cover hover:duration-300 duration-300   md:h-96" src={productImg3} alt="" />
                    </div>
                </Link>
                <Link to={`mac/${'imac'}`} className=" col-span-2 ">
                    <div className="col-span-2 " >
                        <p className="absolute text-4xl font-medium px-2 " >Camera</p>
                        <img className="z-50  hover:ease-in-out hover:transition-transform hover:translate-y-10 w-full object-cover hover:duration-300 duration-300   md:h-96" src={productImg4} alt="" />
                    </div>
                </Link>
            </div>
            <h1 className="text-4xl font-semibold md:text-center p-5 mt-10 bg-base-200  max-w-6xl mx-auto dark:bg-gray-700" ></h1>
        </div>
    );
};

export default Products;