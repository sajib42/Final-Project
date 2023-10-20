
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';


const CartDataCard = ({ data }) => {
    console.log(data);
    const initUser = data
    const [product, setProduct] = useState(initUser)
    const { category, brandName, description, name, photo, price, rating, seller, _id
    } = data
    console.log(category);


    const handelDelete = (_id) => {
        // e.preventDefault()
        console.log(`delet`, _id);
        fetch(`http://localhost:5000/getcartdata/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                swal("Deleted!", "Deleted ", "success");
                const remaining = product.filter(user => user._id !== _id)
                setProduct(remaining)
            })
    }

    useEffect(() => {


    }, [])
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl flex flex-col ju">
                <figure className='  '><img className=' p-10 w-96 h-96 object-cover mx-auto' src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>

                    <div className="card-actions justify-end items-center ">
                        <p className='font-semibold text-red-600'>{price} BDT</p>
                        <button onClick={() => handelDelete(_id)} className="btn btn-warning">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDataCard;