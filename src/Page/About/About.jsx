import { useContext, useState } from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../Footer/Footer";
import { userContext } from "../../Firebase/LoginContext";
import swal from "sweetalert";


const About = () => {


    const { user } = useContext(userContext)
    const reviewName = user?.displayName;
    const reviewEmail = user?.email;
    const reviewInfo = { reviewName, reviewEmail }





    const [userReview, setUserReview] = useState({});

    const handleOnChange = e => {
        const { name, value, type } = e.target
        setUserReview((prev) => ({ ...prev, ...reviewInfo, [name]: type == "number" ? Number(value) : value }))
    }
    console.log(userReview);

    const handleSubmit = e => {
        // window.localStorage.setItem("userData", JSON.stringify(userData))

        e.preventDefault();

        // Retrieve the existing array from local storage
        // let existingData = JSON.parse(window.localStorage.getItem("userReview")) || [];


        // if (!Array.isArray(existingData)) {
        //     existingData = [];
        // }


        // const updatedData = [...existingData, userReview];

        // Save the updated array back to local storage
        window.localStorage.setItem("userReview", JSON.stringify(userReview));

        console.log(userReview);  // Log the updated data for debugging

        swal("successful!", " User Feedback added", "success");

    }

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <section className="text-gray-600 body-font relative min-h-screen">
                    <div className="absolute inset-0 bg-gray-300">
                        <iframe width="100%" height="100%" title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
                    </div>
                    <div className="container px-5 py-24 mx-auto flex flex-col i justify-center items-center">
                        <div className="z-10 border-2">

                        </div>
                        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                            <p className="leading-relaxed mb-5 text-gray-600">  I'm here to hear your thoughts, suggestions, and critiques. 🌟. Your feedback is the wind in my sails! 🚀 </p>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-3 text-sm text-gray-600">Message</label>
                                <textarea onChange={handleOnChange} id="message" name="userReviews" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button onClick={handleSubmit} className="text-white bg-[#111827] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                            <p className="text-xs text-gray-500 mt-3">Tell us About your experience  using this site</p>
                        </div>

                    </div>
                </section>
            </div >
            <div className="-mt-20">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default About;