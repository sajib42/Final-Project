
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";


const ReviewPage = () => {

    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch('review.json').then(res => res.json()).then(data => setReview(data))
    }, [])
    console.log(reviews);
    return (
        <div className="max-w-6xl mx-auto mt-8">
            <h1 className="text-2xl text-center ">What our <span className="text-purple-600 font-medium">Customers</span> say About us</h1>
            <p className="divider"></p>
            <div className="grid grid-cols-3 gap-4">
                {
                    reviews.map((data, idx) => <ReviewCard data={data} key={idx} />)
                }
            </div>

        </div>
    );
};

export default ReviewPage;