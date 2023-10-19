

const ProductInfoPage = ({ product }) => {
    const { category, brandName, description, name, photo, price, rating, seller, _id
    } = product

    return (
        <div className="flex justify-between w-ful border-4">
            <div className="w-1/2   border-4">
                <img className=" max-h-[500px] w-fit mx-auto  object-cover" src={photo} alt="" />
            </div>
            <div className="w-1/2 border-4">
                <div >
                    <p className="text-6xl font-semibold" >{name}</p>
                    <p className="text-4xl font-medium" >{brandName}</p>
                    <p className="" >{description}</p>
                </div>
                <div>
                    <p className="text-2xl font-bold">{price}</p>
                    <p>{rating}</p>
                </div>
                <div>
                    <button className="btn">Add to Cart</button>
                </div>

            </div>
        </div>
    );
};

export default ProductInfoPage;