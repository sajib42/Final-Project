import productImg1 from "./../../assets/ad3.jpg"
import productImg2 from "./../../img/product (2).jpg"
import productImg3 from "./../../assets/ext/come.jpg"
import productImg4 from "./../../img/cameraa.jpg"
import laptopImg from "./../../img/mac.jpg"
import phone from "./../../img/phone (1).jpg"

import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className="text-gray-900">
            <h1 className=" rounded-lg text-4xl font-semibold md:text-center p-5 mb-10 bg-base-200  max-w-6xl mx-auto dark:bg-gray-700 dark:text-white" > Tech <span className="font-bold text-purple-600">Gadget's</span> </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-black dark:text-gray-600  max-w-6xl mx-auto">
                <Link to={`phone/${'iphone'}`} className="col-span-2 md:col-span-1 w-full md:h-96   ">
                    <div className=" w-full md:h-96   " >
                        <p className="absolute text-4xl font-medium px-2 pt-1 " >I Phone</p>
                        <img className=" object-cover hover:ease-in-out hover:duration-300 hover:transition-transform hover:translate-y-10 duration-300  w-full md:h-96 rounded-lg " src={phone} alt="" />
                    </div>
                </Link>
                <Link to={`mac/${'Laptop'}`} className=" col-span-2 md:h-96 hover:text-black ">
                    <div className=" col-span-2 md:h-96   " >
                        <p className="absolute text-4xl font-medium px-2 pt-1 " >Laptop</p>
                        <img className="hover:ease-in-out hover:transition-transform hover:translate-y-10  w-full object-cover hover:duration-300 duration-300   md:h-96 rounded-lg " src={laptopImg} alt="" />
                    </div>
                </Link>
                <Link to={`watch/${'Smart watch'}`} className=" col-span-2 md:h-96 " >
                    <div className=" col-span-2 relative  md:h-96 " >
                        <p className="absolute text-4xl font-medium px-2 pt-1 " >Smart Watch</p>
                        <img className="hover:ease-in-out hover:transition-transform hover:translate-y-10 w-full object-cover hover:duration-300 duration-300  md:h-96 rounded-lg" src={productImg2} alt="" />
                    </div>
                </Link>
                <Link to={`console/${'Android'}`} className="col-span-2 md:col-span-1 md:h-96  ">
                    <div className=" md:h-96 w-full " >
                        <p className="absolute text-4xl font-medium px-2 pt-1" >Android</p>
                        <img className="z-10 hover:ease-in-out hover:transition-transform hover:translate-y-10 w-full object-cover h-full hover:duration-300 duration-300  md:h-96 rounded-lg" src={productImg1} alt="" />
                    </div>
                </Link>
                <Link to={`airpod/${'EarPhone'}`} className="col-span-2 md:col-span-1  md:h-96 " >
                    <div className=" " >
                        <p className="absolute text-2xl font-medium px-2 text-purple-400 pt-1 " >Up Coming Product</p>
                        <img className="z-50 hover:ease-in-out hover:transition-transform hover:translate-y-10 w-full object-cover hover:duration-300 duration-300   md:h-96 rounded-lg" src={productImg3} alt="" />
                    </div>
                </Link>
                {/* imac */}
                <Link to={`mac/${'Camera'}`} className=" col-span-2 ">
                    <div className="col-span-2 " >
                        <p className="absolute text-4xl font-medium px-2 pt-1 " >Camera</p>
                        <img className="z-50  hover:ease-in-out hover:transition-transform hover:translate-y-10 w-full object-cover hover:duration-300 duration-300   md:h-96 rounded-lg" src={productImg4} alt="" />
                    </div>
                </Link>
            </div>
            <h1 className="text-4xl rounded-lg font-semibold md:text-center p-5 mt-10 bg-base-200  max-w-6xl mx-auto dark:bg-gray-700" ></h1>
        </div>
    );
};

export default Products;