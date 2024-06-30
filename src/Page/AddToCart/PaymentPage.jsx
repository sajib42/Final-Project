import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import DeliveryPage from "../Delivery/DeliveryPage";


const PaymentPage = () => {
    return (
        <div>



            {/* pay option */}
            <section className="  ">
                <h1 className="text-4xl font-medium text-center py-10 bg-[#E2E8F0]">Payment Option </h1>

                <div className="flex justify-center items-center mt-10  gap-4 w-fit mx-auto">
                    <Link to={'/bkash'}>
                        <img className="w-48  border rounded-md hover:bg-pink-500  p-2" src="/src/assets/pay/bikas.jpg" alt="" />
                    </Link>
                    <Link to={'/nagad'}> <img className="w-48  border rounded-md hover:bg-[#F69220]  p-2" src="/src/assets/pay/nogod.jpg" alt="" /></Link>
                    <Link to={'/card_pay'}>
                        <img className="w-48  border rounded-md hover:bg-sky-300  p-2" src="/src/assets/pay/master.jpg" alt="" />
                    </Link>


                </div>
                <p className="divider"></p>
                <div className="w-fit mx-auto flex items-center justify-center flex-col gap-4">
                    <h1 className="text-xl font-medium text-center">Cash On Delivery</h1>
                    <Link className="w-fit m-auto" to={'/cash_pay'}>
                        <img className="w-52    border rounded-md hover:bg-yellow-500  p-2" src="/src/assets/cash.jpg" alt="" />
                    </Link>
                </div>

            </section>

            <div className="min-h-[300px] bg-slate-200 mt-10">
                <Footer />
            </div>
            {/* pay option end  */}
        </div>
    );
};

export default PaymentPage;