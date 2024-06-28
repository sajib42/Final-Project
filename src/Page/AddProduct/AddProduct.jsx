import { useState } from "react";
import { uploadPhoto } from "../../helper";
import axios from "axios";
import Navbar from "../../layout/Navbar";
import swal from 'sweetalert';
import Footer from "../Footer/Footer";
import url from "../../url";


const initialData = {
    seller: '',
    name: '',
    brandName: '',
    category: '',
    price: 0,
    description: '',
    rating: 0,
    photo: '',
}

const category = ["iphone", "Laptop", 'Smart watch', 'Android', 'EarPhon', 'Camera'];
const rating = [1, 2, 3, 4, 5];

const AddProduct = () => {
    const [form, setForm] = useState(initialData);
    function handleChange(e) {
        const { name, value, files, type } = e.target;
        //console.log(name, value);
        setForm({ ...form, [name]: type === "file" ? files[0] : value });


    }
    async function handleSubmit(e) {
        e.preventDefault()
        console.log();
        const result = await uploadPhoto(form.photo);
        console.log(result.data.secure_url, "reult");
        const product = {
            ...form, ["photo"]: result.data.secure_url,
            // ["seller"] : sessnion.email
        }
        const res = await axios.post(`${url}/addproduct`, product);
        swal("successfull!", "Add Product", "success");
        console.log(res.data.msg);
        console.log(product);
        // const form = e.target;
        // form.reset()



    }

    return (
        <div>
            <div>
                <Navbar></Navbar>

            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-5 w-fit mx-auto">
                        <label htmlFor="input">Product name</label>
                        <input onChange={handleChange} value={form.name} className="input input-bordered input-ghost w-full max-w-xs" type="text" name="name" placeholder="Name" />
                        <label htmlFor="">Brand Name</label>
                        <input onChange={handleChange} value={form.brandName} className="input input-bordered input-ghost w-full max-w-xs" type="text" name="brandName" placeholder="Brand Name" />
                        <label htmlFor="category">Category</label>
                        <select onChange={handleChange} name="category" className="select select-bordered w-full max-w-xs">
                            {
                                category.map(cat => <option key={cat} value={cat}>{cat}</option>)

                            }
                        </select>
                        <label htmlFor="">Rating</label>
                        <select name="rating" onChange={handleChange} className="select select-bordered w-full max-w-xs">
                            {
                                rating.map(r => <option key={r} value={r}>{r}</option>)
                            }
                        </select>
                        <label htmlFor="">Price in BDT</label>
                        <input onChange={handleChange} value={form.price} className="input input-bordered input-ghost w-full max-w-xs" type="number" name="price" placeholder="Price in BDT" />
                        <textarea onChange={handleChange} className="input input-bordered input-ghost w-full max-w-xs" name="description" id="" cols="30" rows="10" placeholder="Short Description" ></textarea>


                        <input onChange={handleChange} name="photo" type="file" />
                        <input className="btn btn-outline" type="submit" />

                    </div>
                </form>
            </div>
            <div><Footer></Footer></div>
        </div>
    );
};

export default AddProduct;