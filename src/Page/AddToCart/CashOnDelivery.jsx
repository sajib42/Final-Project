import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import swal from "sweetalert";


const CashOnDelivery = () => {
    const location = useLocation();
    const { selectedProduct } = location.state;
    console.log(selectedProduct);



    const [userData, setUserData] = useState({});

    const handleOnChange = e => {
        const { name, value, type } = e.target
        setUserData((prev) => ({ ...prev, [name]: type == "number" ? Number(value) : value }))
    }
    console.log(userData);

    const handleSubmit = e => {
        // window.localStorage.setItem("userData", JSON.stringify(userData))

        // e.preventDefault();

        // Retrieve the existing array from local storage
        let existingData = JSON.parse(window.localStorage.getItem("userData")) || [];

        // Ensure existingData is an array
        if (!Array.isArray(existingData)) {
            existingData = [];
        }

        // Add the new user data to the array
        const updatedData = [...existingData, { ...selectedProduct, userData }];

        // Save the updated array back to local storage
        window.localStorage.setItem("userData", JSON.stringify(updatedData));

        console.log(updatedData);  // Log the updated data for debugging

        swal("successful!", "Payment information added", "success");

    }

    // const newData = window.localStorage.getItem('userData')
    // console.log(JSON.parse(newData));

    return (

        <div className="">
            <section className="flex items-center justify-between px-4">
                <img className="w-20" src='/src/assets/cash.jpg' alt='' />
                <p className="text-xl">Cash On Delivery</p>
            </section>
            <p className="divider"></p>
            <section>
                <div className="space-y-4   pr-20 max-w-5xl mx-auto card shadow-lg p-4 m-4">
                    <div className="text-lg font-semibold">Billing address</div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First name</span>
                        </label>
                        <input onChange={handleOnChange} type="text" name="userName" placeholder="Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input onChange={handleOnChange} type="email" name="userEmail" placeholder="example@mail.com" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone number</span>
                        </label>
                        <input onChange={handleOnChange} type="number" name="phoneNumber" placeholder="+880" className="input input-bordered w-full" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Divisions</span>
                            </label>
                            <input onChange={handleOnChange} type="text" name="division" placeholder="Dhaka" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input onChange={handleOnChange} type="text" name="Address" placeholder="Mirpur" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Street</span>
                            </label>
                            <input onChange={handleOnChange} type="text" name="street" placeholder="Road 01" className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>

                <div className="w-fit  mx-auto my-8">
                    <Link to={'/delivery'} onClick={handleSubmit} className="btn btn-wide text-white  btn-success">
                        Submit
                    </Link>
                </div>

            </section >
        </div >
    );
};

export default CashOnDelivery;