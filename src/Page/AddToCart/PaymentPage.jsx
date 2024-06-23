import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";


const PaymentPage = () => {
    return (
        <div>



            {/* pay option */}
            <section className="mt-10">
                <h1 className="text-5xl font-medium text-center">Payment Option </h1>
                <div className="divider"></div>
                <div className="flex gap-4 w-fit mx-auto">
                    <Link to={'/bkash'}>
                        <img className="w-48  border rounded-md hover:bg-sky-300  p-2" src="/src/assets/pay/bikas.jpg" alt="" />
                    </Link>
                    <img className="w-48  border rounded-md hover:bg-sky-300  p-2" src="/src/assets/pay/nogod.jpg" alt="" />
                    <img className="w-48  border rounded-md hover:bg-sky-300  p-2" src="/src/assets/pay/master.jpg" alt="" />
                    <Link to={'/card_pay'}>
                        <img className="w-80 p-4  border rounded-md hover:bg-sky-300  " src="/src/assets/pay/visa.jpg" alt="" />
                    </Link>
                </div>

            </section>
            <Footer />
            {/* pay option end  */}
        </div>
    );
};

export default PaymentPage;