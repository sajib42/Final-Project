import { Link, useLocation } from "react-router-dom";

import React, { useState } from 'react';


const BuyPage = () => {
    const location = useLocation();
    const { currentProduct } = location.state;
    console.log(currentProduct);
    const { category, brandName, description, name, photo, price, rating, seller, _id
    } = currentProduct;

    const [value, setValue] = useState(parseInt(price));
    const [unit, setUnit] = useState(1);

    const handleClick = () => {
        setValue(prevValue => prevValue + parseInt(price));
        setUnit(prv => prv + 1);
    };


    return (
        <div className="flex items-center justify-center min-h-screen">

            {/* cart section */}
            <section className=" ">
                <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-50 text-gray-800">
                    <h2 className="text-xl font-semibold">Your cart</h2>
                    <ul className="flex flex-col divide-y divide-gray-300">
                        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                            <div className="flex w-full space-x-2 sm:space-x-4">
                                <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={photo} alt="Polaroid camera" />
                                <div className="flex flex-col justify-between w-full pb-4">
                                    <div className="flex justify-between w-full pb-2 space-x-2">
                                        <div className="space-y-1">
                                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{name}</h3>
                                            <p className="text-sm text-gray-600 badge ">{brandName}</p>
                                            <p className="text-sm text-gray-600 badge badge-outline ml-2 ">{category}</p>
                                            <p className="text-sm text-gray-600 pt-4">{description}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-semibold">{price} BDT</p>


                                            {/* <p className="text-sm line-through text-gray-400">75.50€</p> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </li>

                    </ul>
                    <div className="space-y-1 text-right">
                        <p>Price: {value}</p>
                        <p>Unit : {unit} X</p>
                        <button className="btn btn-outline btn-sm" onClick={handleClick}>Increase by  x 1 </button>
                    </div>
                    <div className="space-y-1 text-right">
                        <p>Total amount:
                            <span className="font-semibold">  {value} BDT</span>
                        </p>
                        <p className="text-sm text-gray-600">Not including taxes and shipping costs</p>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <Link to={'/'}>
                            <button type="button" className="px-6 py-2 border rounded-md border-violet-600">Back
                                <span className="sr-only sm:not-sr-only">to shop</span>
                            </button>
                        </Link>
                        <Link state={{ selectedProduct: currentProduct }} to={`/payment/${_id}`} type="button" className="px-6 py-2 border rounded-md bg-violet-600 text-gray-50 border-violet-600">
                            <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
                        </Link>
                    </div>
                </div>
            </section>
            {/* cart section end */}
        </div>
    );
};

export default BuyPage;