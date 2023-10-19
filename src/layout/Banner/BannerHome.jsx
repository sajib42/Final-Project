


import banner1 from "./../../img/Banner/watch2.png"
import banner2 from "./../../img/Banner/air2.png"
import banner3 from "./../../img/Banner/macbook3.png"
import banner4 from "./../../img/Banner/xbox3.png"

const BannerHome = () => {
    return (
        <div>
            <div>

                <div className=" w-full   ">
                    <div className="carousel w-full">
                        <div id="item1" className="   carousel-item w-full relative ">
                            <img src={banner3} className="w-full mt-10  h-40  object-cover   lg:h-[600px]" />
                            {/* <div className=" text-2xl text-white absolute -translate-y-1/2 left-5 right-5 top-1/2 md:space-y-4" >
                                <p className="">Wellcome To </p>
                                <p className="md:text-6xl font-semibold">Z-Gear Shop</p>
                                <button className="btn btn-sm">Explore</button>
                            </div> */}
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img src={banner2} className="w-full mt-10  h-40 object-cover  lg:h-[600px]" />
                            <div className=" text-2xl text-white absolute -translate-y-1/2 left-14 right-5 top-1/2 space-y-4" >
                                <p> Experience of</p>
                                <p className="md:text-6xl font-semibold">True Gaming</p>
                                <button className="btn btn-sm">Explore</button>
                            </div>
                        </div>
                        <div id="item3" className="carousel-item w-full">
                            <img src={banner1} className="w-full mt-10  h-40 object-cover  lg:h-[600px]" />
                        </div>
                        <div id="item4" className="carousel-item w-full">
                            <img src={banner4} className="w-full mt-10 object-cover  h-40  lg:h-[600px]" />
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default BannerHome;