import { Link } from "react-router-dom";


const DeliveryPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-purple-50 ">
                <div className="w-full max-w-7xl p-8 bg-white shadow-md rounded-lg flex justify-between ">
                    <div className="w-1/2 p-8">
                        <div className="mt-16">
                            <h1 className="text-5xl font-bold text-gray-900">
                                Your product is on the way. <br /> <span className="text-xl "> receive your product within 1-3 days. <br /></span> <span className="text-purple-600 ">Hassle free</span>
                            </h1>
                            <p className="mt-4 text-gray-600 text-lg">
                                Get your products delivered on time with ease. We allow you to schedule and manage your pickups and drops with a single tap.
                            </p>
                            {/* <Link
                                to={'/admin_dash_page'}
                                className="mt-8 inline-block text-lg text-purple-600 hover:underline"
                            >
                                See Delivery Progress &rarr;
                            </Link> */}
                        </div>
                        <p className="mt-4 text-gray-600 text-lg">
                            Thank you for shopping with us!
                        </p>
                        <Link className="btn btn-outline justify-end mt-4" to={'/'}>
                            Back to Shopping
                        </Link>


                    </div>

                    <div className="w-1/2 flex justify-center items-center">
                        <img
                            src={'/src/assets/undraw_On_the_way_re_swjt.png'}
                            alt="Delivery"
                            className="w-full max-w-sm"
                        />
                    </div>

                    <div className="p-4 space-y-2 bg-gray-100 text-gray-800 rounded-md">
                        <h3 className="text-base font-semibold">Step 1: packaging your product</h3>
                        <div className="flex max-w-xs space-x-3">
                            <span className="w-12 h-2 rounded-sm bg-violet-600"></span>
                            <span className="w-12 h-2 rounded-sm bg-gray-400"></span>
                            <span className="w-12 h-2 rounded-sm bg-gray-400"></span>
                            <span className="w-12 h-2 rounded-sm bg-gray-400"></span>
                            <span className="w-12 h-2 rounded-sm bg-gray-400"></span>
                        </div>
                        <div>
                            <div className="mt-8">
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    Steps for Delivering a Product
                                </h2>
                                <ol className="mt-4 list-decimal list-inside text-gray-600 text-lg space-y-2">
                                    <li>Step 1: Packaging your product</li>
                                    <li>Step 2: Labeling the package</li>
                                    <li>Step 3: Handing over to courier</li>
                                    <li>Step 4: Tracking the shipment</li>
                                    <li>Step 5: Out for delivery</li>
                                    <li>Step 6: Delivery confirmation</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default DeliveryPage;