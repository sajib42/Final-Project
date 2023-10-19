

const PhoneCard = (e) => {
    const { category, brandName, description, name, photo, price, rating, seller, _id
    } = e.phon;
    console.log(e);


    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className=" p-10 pb-2 h-60">
                    <img src={photo} alt="Shoes" className="rounded-xl w-fit object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-lg font-bold" >{category}</p>
                    <p className="max-h-40 overflow-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates maxime eius distinctio vitae eos perspiciatis ducimus molestias, asperiores nostrum accusamus perferendis reiciendis eum quas porro dicta fugit minima quo dolorum.</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;