import banner1 from "./../../../img/Banner/air.png"
import banner2 from "./../../../img/Banner/air2.png"
import banner3 from "./../../../img/Banner/air3.png"

const AirpodBanner = () => {
    return (

        <div className="w-full">
            <div className=" max-w-screen-xl mx-auto   ">
                <div className="carousel w-full">
                    <div id="item1" className="   carousel-item w-full relative ">
                        <img src={banner2} className="w-full mt-10 rounded-md h-40 object-cover   lg:h-[550px]" />
                        <div className="absolute -translate-y-1/2 left-5 right-5 top-1/2" >

                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={banner3} className="w-full mt-10 rounded-md h-40 object-cover  lg:h-[550px]" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={banner1} className="w-full mt-10 rounded-md h-40 object-cover  lg:h-[550px]" />
                    </div>

                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>

                </div>
            </div>
        </div>

    );
};

export default AirpodBanner;