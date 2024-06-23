import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from './../././img/Banner/air2.png'
import img2 from './../img/Banner/macbook2.png'
import img3 from './../img/Banner/macbook3.png'


const CarouselMain = () => {
    return (
        <div className="text-center bg-base-200 md:max-h-[600px] h-full overflow-hidden ">
            <Carousel
                autoPlay={'interval'}
                infiniteLoop='true'

                showThumbs={false}
                width={false}
                stopOnHover={false}
                interval={1000}
            // className="w-fit mx-auto  "

            >
                <div className="  ">
                    <img className=" object-cover w-full" src={img2} />

                    <div className=" w-full top-80 absolute text-white ">
                        <BannerTitle />
                    </div>
                </div>
                <div>
                    <img src={img3} />
                    <div className=" w-full top-80 absolute text-white ">
                        <BannerTitle />
                    </div>
                </div>
                <div>
                    <img src={img1} />
                    <div className="w-32 top-80 absolute text-black ">

                    </div>
                </div>
            </Carousel>
        </div>
    );
};

const BannerTitle = () => {
    return (
        <div className=" hidden lg:block text-2xl text-white absolute -translate-y-1/2 left-5 right-5 top-1/2 md:space-y-4" >
            <p className=" ">Welcome To </p>
            <p className="md:text-6xl font-semibold">Z-Gear Shop</p>
            <button className="btn btn-sm">Explore</button>
        </div>
    )

}

export default CarouselMain;