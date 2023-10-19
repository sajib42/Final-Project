
import Navbar from '../../../layout/Navbar';

import BannerIphone from '../Iphone/BannerIphone';
import { useLoaderData } from 'react-router-dom';
import PhoneCard from '../Iphone/PhoneCard';


const Airpod = () => {
    const airpod = useLoaderData()
    // console.log(watch.result);
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                {
                    airpod.result.map(e => <PhoneCard key={e._id} phon={e} ></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Airpod;