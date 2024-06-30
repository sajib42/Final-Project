import { Link } from "react-router-dom";
import { FaCartPlus, FaStar } from 'react-icons/fa';


const PhoneCard = (e) => {
    const { category, brandName, description, name, photo, price, rating, seller, _id
    } = e.phon;
    console.log(e);




    return (
        <div>
            <div className="card mx-4 md:mx-2    bg-base-100 shadow-xl">
                <figure className=" p-10 pb-2 h-60">
                    <img src={photo} alt="Shoes" className="rounded-xl  h-72 w-fit object-cover " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-lg " >Brand: {category}</p>
                    <p className="h-48 overflow-auto">{description}</p>
                    <div className="card-actions flex items-center justify-center py-2">
                        <p className="text-xl text-green-500 font-bold ">{price} BDT</p>
                        <p className="text-base font-bold flex items-center gap-1 "><FaStar></FaStar>{rating}/5</p>
                    </div>
                    <div className="flex gap-2 flex-wrap ">
                        <Link to={`/getproduct/${_id}`}> <button className="btn btn-neutral mt-4  ">Details</button></Link>
                        {/* <Link className="btn  mt-4 " to={`/update/${_id}`}> Update</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;