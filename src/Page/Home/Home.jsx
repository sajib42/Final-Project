

import BannerHome from '../../layout/Banner/BannerHome';
import Navbar from '../../layout/Navbar';
import Footer from '../Footer/Footer';
import Products from '../Product_Ctg/Products';

const Home = () => {

    return (
        <>
            <section>

                <section>
                    <BannerHome></BannerHome>
                </section>

                <section>
                    <Products></Products>
                </section>
                <section>
                    <Footer></Footer>
                </section>
            </section>
        </>
    );
};

export default Home;