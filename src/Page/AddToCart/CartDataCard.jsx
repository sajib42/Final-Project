import React from 'react';

const CartDataCard = ({ data }) => {
    console.log(data);
    const { category, brandName, description, name, photo, price, rating, seller, _id
    } = data
    console.log(category);
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl flex flex-col">
                <figure className='  '><img className=' p-10 w-96 h-96 object-cover mx-auto' src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning">Delet</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDataCard;