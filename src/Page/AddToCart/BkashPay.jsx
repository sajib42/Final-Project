import { Link, useLocation } from "react-router-dom";
import swal from "sweetalert";


const BkashPay = () => {
    const nextPage = useLocation('/')
    const handelBkash = (e) => {
        // e.preventDefault()
        swal("successfull!", "Payment information added", "success");
        // setTimeout(
        //     nextPage
        //     , 1000);


    }
    return (
        <div>
            <section className="flex justify-between items-center px-4">
                <img className='w-44' src="/src/assets/pay/bikas.jpg" alt="" />
                <h1 className="text-2xl">Pay With Bkash</h1>
            </section>

            {/* user details */}
            <section>
                <section className="p-6 bg-gray-100 text-gray-900">
                    <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                            <div className="space-y-2 col-span-full lg:col-span-1">

                                <p className="font-medium">Personal Inormation</p>
                                <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="firstname" className="text-sm">First name</label>
                                    <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="lastname" className="text-sm">Last name</label>
                                    <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm">Email</label>
                                    <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="phone" className="text-sm">Phone Number</label>
                                    <input id="phone" type="number" placeholder="+88" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="address" className="text-sm">Address</label>
                                    <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="city" className="text-sm">City</label>
                                    <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="state" className="text-sm">State / Province</label>
                                    <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                    <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300" />
                                </div>
                            </div>
                        </fieldset>

                    </form>
                    <div className="mt-6 w-full flex items-center justify-center">
                        <Link to={'/delivery'} onClick={handelBkash} className="btn btn-wide bg-[#f18cb6] hover:bg-[#D12054] text-white">
                            Proceed Now
                        </Link>
                    </div>
                </section>
            </section>
            {/* user details end */}
        </div>
    );
};

export default BkashPay;