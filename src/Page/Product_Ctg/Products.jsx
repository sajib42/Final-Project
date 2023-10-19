import productImg1 from "./../../img/product (1).jpg"
import productImg2 from "./../../img/product (2).jpg"
import productImg3 from "./../../img/product (3).jpg"
import productImg4 from "./../../img/product (4).jpg"
import laptopImg from "./../../img/laptop (1).jpg"
import phone from "./../../img/phone.jpg"

import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3  gap-4 max-w-6xl mx-auto">
                <Link to={`phone/${'iphone'}`} className="border-2 col-span-2 md:col-span-1 w-full md:h-96 ">
                    <div className="border-2 w-full md:h-96   " >
                        <p className="absolute text-4xl font-medium " >I Phone</p>
                        <img className=" object-cover md:h-96 " src={phone} alt="" />
                    </div>
                </Link>
                <Link to={`mac/${'macbook'}`} className="border-2 col-span-2 md:h-96 ">
                    <div className="border-2 col-span-2 md:h-96  " >
                        <p className="absolute" >MacBook</p>
                        <img className=" w-full object-cover   md:h-96" src={laptopImg} alt="" />
                    </div>
                </Link>
                <Link to={`watch/${'watch'}`} className="border-2 col-span-2 md:h-96 " >
                    <div className="border-2 col-span-2 relative  md:h-96 " >
                        <p className="absolute" >Apple watch</p>
                        <img className=" w-full object-cover   md:h-96" src={productImg2} alt="" />
                    </div>
                </Link>
                <Link to={`console/${'console'}`} className="border-2 md:h-96  ">4
                    <div className="md:h-96 w-full " >
                        <img className=" w-full object-cover h-full   md:h-96" src={productImg1} alt="" />
                    </div>
                </Link>
                <Link to={`airpod/${'airpod'}`} className="border-2 " >
                    <div className="border-2 " >5
                        <img className=" w-full object-cover   md:h-96" src={productImg3} alt="" />
                    </div>
                </Link>
                <Link to={`mac/${'imac'}`} className="border-2 col-span-2 "> imac
                    <div className="border-2 col-span-2 " >6
                        <img className=" w-full object-cover   md:h-96" src={productImg4} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Products;