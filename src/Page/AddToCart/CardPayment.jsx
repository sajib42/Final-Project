
const CardPayment = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
                    <form>
                        <div className="space-y-4">
                            <div className="text-lg font-semibold">Payment info</div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First name</span>
                                </label>
                                <input type="text" placeholder="Jordan" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last name</span>
                                </label>
                                <input type="text" placeholder="Smith" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Card number</span>
                                </label>
                                <input type="text" placeholder="1234 **** **** ****" className="input input-bordered w-full" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Expiration date</span>
                                    </label>
                                    <input type="text" placeholder="12 / 25" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">CVV/CVC</span>
                                    </label>
                                    <input type="text" placeholder="123" className="input input-bordered w-full" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 mt-6">
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="456 Oak Avenue" className="input input-bordered w-full" />
                            </div>
                        </div>

                        <div className="flex justify-between mt-6">
                            <button type="button" className="btn btn-outline">Cancel</button>
                            <button type="submit" className="btn btn-primary">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CardPayment;