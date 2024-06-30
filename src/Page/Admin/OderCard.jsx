
const OderCard = ({ data }) => {
    console.log(data);
    const { userData, category, brandName, name, photo, price, email, description } = data
    console.log(userData);
    const { userName, userEmail, Address, phoneNumber, division, street } = userData;


    return (
        <div>
            <div className=" mt-4  ">
                <div className="card bg-base-100 max-h-[650px] w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={photo}

                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{price} BDT</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{category}</div>
                            <div className="badge badge-outline">{brandName}</div>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-xs">Pending</button>
                        </div>
                    </div>
                    {/* user info */}
                    <div className="card bg-neutral text-neutral-content w-96">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{userName}</h2>
                            <p>{userEmail}</p>
                            <p>Phone Number : {phoneNumber}</p>

                            <div className="">
                                <p className="flex  gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 h-10 fill-current text-gray-600">
                                        <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                                    </svg>
                                    <span>Address: {Address}</span>
                                    <span>Street: {street}</span>
                                    <span>Division: {division}</span>
                                </p>
                            </div>
                            {/* <div className="card-actions justify-end">
                                <button className="btn btn-primary">Accept</button>
                                <button className="btn btn-ghost">Deny</button>
                            </div> */}
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default OderCard;