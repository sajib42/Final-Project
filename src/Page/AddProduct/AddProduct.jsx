import { useState } from "react";
import { uploadPhoto } from "../../helper";
import axios from "axios";
import Navbar from "../../layout/Navbar";
import swal from 'sweetalert';

const initialData = {
    seller: 'asif@gmail.com',
    name: '',
    brandName: '',
    category: '',
    price: 0,
    description: 'phone',
    rating: 0,
    photo: '',


}
const category = ["iphone", "macbook", 'watch', 'console', 'airpod', 'imac'];
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
        const res = await axios.post('http://localhost:5000/addproduct', product);
        swal("successfull!", "Your Login success", "success");
        console.log(res.data.msg);
        console.log(product);


    }

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <h1>this is product page</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-5 w-fit mx-auto">
                        <input onChange={handleChange} value={form.name} className="input input-bordered input-ghost w-full max-w-xs" type="text" name="name" placeholder="Name" />
                        <input onChange={handleChange} value={form.brandName} className="input input-bordered input-ghost w-full max-w-xs" type="text" name="brandName" placeholder="Brand Name" />

                        <select onChange={handleChange} name="category" className="select select-bordered w-full max-w-xs">
                            {
                                category.map(cat => <option key={cat} value={cat}>{cat}</option>)

                            }
                        </select>
                        <input onChange={handleChange} value={form.price} className="input input-bordered input-ghost w-full max-w-xs" type="number" name="price" placeholder="Price in BDT" />
                        <textarea onChange={handleChange} className="input input-bordered input-ghost w-full max-w-xs" name="description" id="" cols="30" rows="10" placeholder="Short Description" ></textarea>

                        <select name="rating" onChange={handleChange} className="select select-bordered w-full max-w-xs">
                            {
                                rating.map(r => <option key={r} value={r}>{r}</option>)
                            }
                        </select>
                        <input onChange={handleChange} name="photo" type="file" />
                        <input className="btn btn-outline" type="submit" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;