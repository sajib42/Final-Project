import { useLoaderData } from "react-router-dom";
import ProductInfoPage from "./ProductInfoPage";
import Navbar from "../../layout/Navbar";


const ProductInfo = () => {
    const product = useLoaderData()

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                {
                    product.result.map(product => <ProductInfoPage key={product._id} product={product} ></ProductInfoPage>)
                }
            </div>
        </div>
    );
};

export default ProductInfo;