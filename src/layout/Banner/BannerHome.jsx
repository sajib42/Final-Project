import Navbar from "../Navbar";
import bannarImg from "./../../img/phone (2).jpg"
const BannerHome = () => {
    return (
        <div>
            <div>
                <div className="z-20 fixed w-full">
                    <Navbar></Navbar>
                </div>
                <div className=" max-w-screen-xl mx-auto   ">
                    <div className="carousel w-full">
                        <div id="item1" className="   carousel-item w-full relative ">
                            <img src={bannarImg} className="w-full mt-10 rounded-md h-40 object-cover   lg:h-[550px]" />
                            <div className="absolute -translate-y-1/2 left-5 right-5 top-1/2" >
                                <p>THis is discirsdasd kj</p>
                            </div>
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img src="https://i.ibb.co/2WQnjjb/laptop-4.jpg" className="w-full mt-10 rounded-md h-40 object-cover  lg:h-[550px]" />
                        </div>
                        <div id="item3" className="carousel-item w-full">
                            <img src="https://i.ibb.co/tqcc8H8/9139.jpg" className="w-full mt-10 rounded-md h-40 object-cover  lg:h-[550px]" />
                        </div>
                        <div id="item4" className="carousel-item w-full">
                            <img src="https://i.ibb.co/y4wx7CH/tom-clancys-ghost-recon-wildlands-season-pass-wallpaper-1920x1080.jpg" className="w-full mt-10 object-cover rounded-md h-40  lg:h-[550px]" />
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