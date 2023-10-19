

import BannerHome from '../../layout/Banner/BannerHome';
import Navbar from '../../layout/Navbar';
import Footer from '../Footer/Footer';
import Products from '../Product_Ctg/Products';

const Home = () => {

    return (
        <>
            <section>
                <section className="z-20 fixed w-full">
                    <Navbar></Navbar>
                </section>
                <section className='pt-10'>
                    <BannerHome></BannerHome>
                </section>

                <section className='mt-16'>

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