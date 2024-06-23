import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import DeliveryPage from "../Delivery/DeliveryPage";


const PaymentPage = () => {
    return (
        <div>



            {/* pay option */}
            <section className="mt-10">
                <h1 className="text-5xl font-medium text-center">Payment Option </h1>
                <div className="divider"></div>
                <div className="flex justify-center items-center mt-20 gap-4 w-fit mx-auto">
                    <Link to={'/bkash'}>
                        <img className="w-48  border rounded-md hover:bg-pink-500  p-2" src="/src/assets/pay/bikas.jpg" alt="" />
                    </Link>
                    <Link to={'/nagad'}> <img className="w-48  border rounded-md hover:bg-[#F69220]  p-2" src="/src/assets/pay/nogod.jpg" alt="" /></Link>
                    <Link to={'/card_pay'}>
                        <img className="w-48  border rounded-md hover:bg-sky-300  p-2" src="/src/assets/pay/master.jpg" alt="" />
                    </Link>

                </div>

            </section>

            <div className="min-h-[300px] bg-slate-200 mt-28">
                <Footer />
            </div>
            {/* pay option end  */}
        </div>
    );
};

export default PaymentPage;