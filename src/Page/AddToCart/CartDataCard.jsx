
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import url from '../../url';



const CartDataCard = ({ data }) => {
    console.log(data);
    const initUser = data
    const [product, setProduct] = useState(initUser)
    const [isDetele, setDelete] = useState(false)
    const { category, brandName, description, name, photo, price, rating, seller, _id
    } = data
    console.log(category);


    const handelDelete = (_id) => {
        // e.preventDefault()
        console.log(`delet`, _id);
        fetch(`${url}/getcartdata/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(async data => {
                console.log(data)
                swal("Deleted!", "Deleted ", "success");
                // const remaining = product.filter(user => user._id !== _id)
                // setProduct(remaining)

                await new Promise(() => {
                    setTimeout(() => {
                        window.location.reload()
                    }, 100);
                })
            })
    }

    useEffect(() => {


    }, [])
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl flex flex-col ju">
                <figure className='  '><img className=' p-10 w-96 h-96 object-cover mx-auto' src={photo} alt="Movie" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p className='h-48 overflow-auto'>{description}</p>

                    <div className="card-actions justify-end items-center ">
                        <p className='font-semibold text-red-600'>{price} BDT</p>
                        <div className=' w-full flex justify-between items-center gap-4  py-2'>
                            <Link state={{ currentProduct: data }} className='btn btn-success text-white w-1/2' to={`/buy_now/${_id}`}>
                                Buy Now
                            </Link>

                            <button onClick={() => handelDelete(_id)} className="btn btn-error text-white w-1/2">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDataCard;