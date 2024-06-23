import { useState } from 'react';
import { useEffect } from 'react';

import BannerHome from '../../layout/Banner/BannerHome';
import Navbar from '../../layout/Navbar';
import Footer from '../Footer/Footer';
import Products from '../Product_Ctg/Products';
import CarouselMain from '../../Component/CarouselMain.';
import ReviewPage from '../../Component/ReviewPage';

const Home = () => {
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handelTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }


    return (
        <>
            <section className='bg-white dark:bg-black'>
                <section className="z-20 fixed w-full">
                    <Navbar handelTheme={handelTheme} ></Navbar>
                </section>

                <section className='pt-10'>
                    {/* <BannerHome></BannerHome> */}
                    <CarouselMain />
                </section>

                <section className='mt-16'>
                    <Products></Products>
                </section>
                <section>
                    <ReviewPage />
                </section>

                <section>
                    <Footer></Footer>
                </section>
            </section>
        </>
    );
};

export default Home;