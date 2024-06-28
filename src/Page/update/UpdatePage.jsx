import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../Footer/Footer";
import swal from "sweetalert";
import url from "../../url";


const UpdatePage = () => {
    const nextPage = useNavigate();
    const productData = useLoaderData();
    const { category, brandName, description, name, photo, price, rating, seller, _id
    } = productData.result[0]
    console.log(productData.result[0]);
    const category1 = ["iphone", "macbook", 'watch', 'console', 'airpod', 'imac'];
    const rating1 = [1, 2, 3, 4, 5];

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.pName.value
        const price = parseInt(e.target.price.value)
        const newBrand = e.target.brandName.value
        const newCategory = e.target.category.value
        const newRating = e.target.rating.value
        const newDescription = e.target.description.value
        console.log(name, price);
        console.log(typeof (price));
        const newData = { name, price, newBrand, newCategory, newRating, newDescription }
        await axios.put(`${url}/update/${_id}`, newData)
        swal("Updated", " Product Updated ", "success");
        await new Promise(() => {
            setTimeout(() => {
                nextPage("/")
            }, 1000);
        })
        window.location.reload();
    }

    return (
        <div>
            <div><Navbar></Navbar></div>
            <form onSubmit={onSubmit} className="text-black flex flex-col w-96 mx-auto space-y-2 px-2 py-10 " >
                <label >Product Name</label>
                <input type="text" name="pName" defaultValue={name} className="input input-bordered input-ghost w-full max-w-xs" />
                <label htmlFor="">Price</label>
                <input type="number" name="price" defaultValue={price} className="input input-bordered input-ghost w-full max-w-xs"  ></input>
                <label >Brand Name</label>
                <input type="text" defaultValue={brandName} name="brandName" className="input input-bordered input-ghost w-full max-w-xs" />
                <label htmlFor="">Category</label>
                <select name="category" defaultValue={category} className="input input-bordered input-ghost w-full max-w-xs" id="">
                    {
                        category1.map(cat => <option key={cat} value={cat}>{cat}</option>)

                    }
                </select>
                <label htmlFor="">Rating</label>
                <select name="rating" className="select select-bordered w-full max-w-xs">
                    {
                        rating1.map(r => <option key={r} value={r}>{r}</option>)
                    }
                </select>
                <label htmlFor="">Description</label>
                <textarea className="input input-bordered input-ghost w-full max-w-xs " name="description" id="" cols="30" rows="10" placeholder="Short Description" ></textarea>
                <input className="btn w-fit  " type="submit" />
            </form>
            <div><Footer></Footer></div>
        </div>
    );
};

export default UpdatePage;