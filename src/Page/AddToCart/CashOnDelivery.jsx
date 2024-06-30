

const CashOnDelivery = () => {
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
                        <input type="text" placeholder="Jordan" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input type="email" placeholder="jordansmith@mail.com" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone number</span>
                        </label>
                        <input type="text" placeholder="+1 555-123-4567" className="input input-bordered w-full" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>
                            <select className="select select-bordered">
                                <option>United States</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">State/Province</span>
                            </label>
                            <input type="text" placeholder="Illinois" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Postal code</span>
                            </label>
                            <input type="text" placeholder="62701" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder="456 Oak Avenue" className="input input-bordered w-full" />
                                </div> */}
                </div>
                <div className="w-fit  mx-auto my-8">
                    <button className="btn btn-wide text-white  btn-success" >Submit</button>
                </div>

            </section>
        </div>
    );
};

export default CashOnDelivery;